import React, { useContext } from 'react'
import useIncompleteTasks from './hooks/useIncompleteTasks'
import { useHistory } from 'react-router-dom'
import { Context } from 'context'
import useUpdateTask from './hooks/useUpdateTask'
import IncompleteIcon from 'assets/incomplete.icon.jsx'
import ReminderIcon from 'assets/reminder.icon.jsx'
import { getReminderDate } from 'utils/dateHelpers/dateHelpers.js'
import styled from 'styled-components'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .task {
    display: flex;
    align-items: center;
    padding: 14px 20px;

    svg {
      width: 22px;
      height: 22px;
      margin-right: 20px;
    }

    .task-item {
      font-size: 18px;
      text-align: left;
      width: 100%;
      .details {
        margin-top: 8px;
        font-size: 16px;
        color: #8f9092;
      }
    }

    .reminder {
      margin-top: 8px;
      font-size: 16px;
      display: inline-block;
      border: 1px solid #cacaca;
      padding: 6px;
      border-radius: 4px;
      color: #8f9092;
      .reminder-calendar-icon {
        fill: rgb(33, 150, 243);
        width: 15px;
        height: 15px;
        margin-right: 10px;
      }
      .date {
        margin-right: 5px;
      }
    }

    border-bottom: 1px solid #dcdcdc;
  }
`

export default function InCompletedTasks() {
  const history = useHistory()
  const [{ task }, setGlobalContext] = useContext(Context)
  const { status, data: inCompletedTasks, error } = useIncompleteTasks()
  const { data, errors } = inCompletedTasks || {}
  const [updateTask, { updateStatus, updateResponse }] = useUpdateTask()

  const markCompleted = id => {
    setGlobalContext({
      task: {
        ...task,
        completed: true
      }
    })
    updateTask(id)
  }

  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <Styled>
      {data.map(({ _id, title, details, date, time }) => (
        <div className="task" key={_id}>
          <button onClick={() => markCompleted(_id)}>
            <IncompleteIcon />
          </button>

          <div
            className="task-item"
            onClick={() => history.push(`/tasks/${_id}`)}
          >
            <div>{title}</div>
            {details && <div className="details">{details}</div>}
            {date || time ? (
              <div className="reminder">
                <ReminderIcon className="reminder-calendar-icon" />
                {date && <span className="date">{getReminderDate(date)}</span>}
                {time && <span>{time}</span>}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </Styled>
  )
}

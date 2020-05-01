import React, { useState, useContext } from 'react'
import { StyledTasks } from './tasks.styles'
import AddTaskModal from './addTaskModal'
import MoreIcon from 'assets/more.icon.jsx'
import AddIcon from 'assets/add.icon.jsx'
import { Context } from 'context'
import Cookies from 'js-cookie'
import { useLocation, Link, useHistory } from 'react-router-dom'
import useIncompleteTasks from './hooks/useIncompleteTasks'
import IncompleteIcon from 'assets/incomplete.icon.jsx'
import { getReminderDate } from 'utils/dateHelpers/dateHelpers.js'
import ReminderIcon from 'assets/reminder.icon.jsx'
import useUpdateTask from './hooks/useUpdateTask'

const Tasks = () => {
  const location = useLocation()
  const [{ task }, setGlobalContext] = useContext(Context)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const { status, data, error } = useIncompleteTasks()
  const { data: incompleteTasks, errors } = data || {}
  const history = useHistory()
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

  if (status === 'error' || errors?.length)
    return <span>Sorry something went wrong</span>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <StyledTasks>
      <div className="page-title">Let’s get some things done today.</div>

      <div className="incomplete-tasks">
        {incompleteTasks.map(({ _id, title, details, date, time }) => (
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
                  {date && (
                    <span className="date">{getReminderDate(date)}</span>
                  )}
                  {time && <span>{time}</span>}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <AddTaskModal
        show={showAddTaskModal}
        onHide={() => {
          setGlobalContext({
            task: {}
          })
          Cookies.remove(`selectedDay-${location.pathname}`)
          setShowAddTaskModal(false)
        }}
      />

      {!showAddTaskModal && (
        <div className="footer">
          <button
            className="plus-button-wrapper"
            onClick={() => setShowAddTaskModal(true)}
          >
            <AddIcon />
          </button>
          <button>
            <MoreIcon />
          </button>
        </div>
      )}
    </StyledTasks>
  )
}

export default Tasks

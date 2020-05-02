import React, { useContext, useState } from 'react'
import TickIcon from 'assets/tick.icon.jsx'
import { useHistory } from 'react-router-dom'
import { Context } from 'context'
import useUpdateTask from './hooks/useUpdateTask'
import styled from 'styled-components'
import AngleIcon from 'assets/angle.icon.jsx'

const Styled = styled.div`
  .completed-count {
    margin: 20px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tick {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    fill: rgb(33, 150, 243);
  }

  .angle {
    transform: ${props =>
      props.showTasks ? 'rotate(0deg)' : 'rotate(-180deg)'};
  }

  .task {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    border-bottom: 1px solid #dcdcdc;

    .task-item {
      font-size: 18px;
      text-align: left;
      width: 100%;
    }
  }
`

export default function CompletedTasks({ data }) {
  const history = useHistory()
  const [{ task }, setGlobalContext] = useContext(Context)
  const [updateTask] = useUpdateTask()
  const [showTasks, seShowTasks] = useState(false)

  const markAsInCompleted = id => {
    setGlobalContext({
      task: {
        ...task,
        completed: false
      }
    })
    updateTask(id)
  }

  if (!data.length) return null

  return (
    <Styled showTasks={showTasks}>
      <div className="completed-count" onClick={() => seShowTasks(!showTasks)}>
        <span>Completed ({data.length})</span>
        <AngleIcon className="angle" />
      </div>

      {showTasks &&
        data.map(({ _id, title }) => (
          <div className="task" key={_id}>
            <button onClick={() => markAsInCompleted(_id)}>
              <TickIcon className="tick" />
            </button>

            <div
              className="task-item"
              onClick={() => history.push(`/tasks/${_id}`)}
            >
              <del>{title}</del>
            </div>
          </div>
        ))}
    </Styled>
  )
}

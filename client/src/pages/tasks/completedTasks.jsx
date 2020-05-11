import React, { useState } from 'react'
import TickIcon from 'assets/tick.icon.jsx'
import { useHistory } from 'react-router-dom'
import useUpdateTask from './hooks/useUpdateTask'
import AngleIcon from 'assets/angle.icon.jsx'

export default function CompletedTasks({ data }) {
  const history = useHistory()
  const [updateTask] = useUpdateTask()
  const [showTasks, seShowTasks] = useState(false)

  const markAsInCompleted = task => {
    updateTask({
      ...task,
      completed: false
    })
  }

  if (!data.length) return null

  return (
    <div className="completed-tasks">
      <div className="completed-count" onClick={() => seShowTasks(!showTasks)}>
        <span>Completed ({data.length})</span>
        <AngleIcon className={`${showTasks ? 'active-angle' : ''}`} />
      </div>

      {showTasks &&
        data.map(task => (
          <div className="task" key={task._id}>
            <button onClick={() => markAsInCompleted(task)}>
              <TickIcon className="tick" />
            </button>

            <div
              className="task-item"
              onClick={() => history.push(`/tasks/${task._id}`)}
            >
              <del>{task.title}</del>
            </div>
          </div>
        ))}
    </div>
  )
}

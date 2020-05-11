import React, { useState, Children } from 'react'
import { useHistory } from 'react-router-dom'
import useUpdateTask from './hooks/useUpdateTask'
import IncompleteIcon from 'assets/incomplete.icon.jsx'
import ReminderIcon from 'assets/reminder.icon.jsx'
import { getReminderDate } from 'utils/dateHelpers/dateHelpers.js'
import styled from 'styled-components'
import Loader from 'assets/loader.jsx'
import { IonSpinner, IonContent } from '@ionic/react'

export default function InCompletedTasks({ data }) {
  const history = useHistory()
  const [updateTask, { updateStatus }] = useUpdateTask()
  console.log(data)

  const markCompleted = task => {
    updateTask({
      ...task,
      completed: true
    })
  }

  return (
    <div className="incomplete-task">
      {data?.map(task => (
        <div className="task" key={task._id}>
          <button onClick={() => markCompleted(task)}>
            <IncompleteIcon />
          </button>

          <div
            className="task-item"
            onClick={() => history.push(`/tasks/${task._id}`)}
          >
            <div>{task.title}</div>
            {task.details && <div className="details">{task.details}</div>}
            {task.date || task.time ? (
              <div className="reminder">
                <ReminderIcon className="reminder-calendar-icon" />
                {task.date && (
                  <span className="date">{getReminderDate(task.date)}</span>
                )}
                {task.time && <span>{task.time}</span>}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}

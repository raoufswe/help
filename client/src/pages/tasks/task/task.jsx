import React, { useState, useEffect, useContext } from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import Reminder from '../reminder'
import useGetTask from '../hooks/useGetTask.jsx'
import useDeleteTask from '../hooks/useDeleteTask'
import { Context } from 'context'
import useUpdateTask from '../hooks/useUpdateTask'
import { getReminderDate } from 'utils/dateHelpers/dateHelpers.js'
import Cookies from 'js-cookie'
import Loader from 'assets/loader.jsx'
import ErrorUI from 'components/errorUI.jsx'
import ReminderIcon from 'assets/reminder.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import TrashIcon from 'assets/trash.icon'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import CorrectIcon from 'assets/correct.icon.jsx'
import Cross from 'assets/cross.icon.jsx'
import UndoIcon from 'assets/undo.icon.jsx'
import './task.scss'

export default function Task() {
  const history = useHistory()
  const { id } = useParams()
  const location = useLocation()
  const { status, data } = useGetTask(id)
  const { data: taskData } = data || {}
  const [deleteTask, { deleteStatus }] = useDeleteTask()
  const [updateTask, { updateStatus }] = useUpdateTask()
  const [showReminder, setShowReminder] = useState(false)
  const [task, setTask] = useState({})
  Cookies.set(`selectedDay-${location.pathname}`, task.date)

  useEffect(() => {
    if (!taskData) return
    setTask(taskData)
  }, [taskData])

  useEffect(() => {
    if (updateStatus === 'success' || deleteStatus === 'success')
      history.push('/tasks')
  }, [updateStatus, deleteStatus])

  const handleDelete = () => {
    try {
      deleteTask(task.id)
    } catch (e) {
      console.log('something went wrong')
    }
  }

  const handleUpdate = () => {
    try {
      updateTask(task)
    } catch (e) {
      console.log('something went wrong')
    }
  }

  const onChange = e => {
    const { value, name } = e.target
    setTask({
      ...task,
      [name]: value
    })
  }

  const toggleCompleted = () => {
    updateTask({
      ...task,
      completed: !task.completed
    })
  }

  const onReminderClear = e => {
    e.stopPropagation()
    setTask({
      ...task,
      time: '',
      date: ''
    })
    Cookies.remove(`selectedDay-${location.pathname}`)
  }

  return (
    <div className="task">
      <div className="task-header">
        <button className="back" onClick={handleUpdate}>
          <LeftArrow />
        </button>
        <button
          onClick={handleDelete}
          className="trashIcon"
          disabled={status !== 'success'}
        >
          <TrashIcon />
        </button>
      </div>

      {status === 'loading' ||
      deleteStatus === 'loading' ||
      updateStatus === 'loading' ? (
        <Loader />
      ) : status === 'error' ||
        deleteStatus === 'error' ||
        updateStatus === 'error' ? (
        <ErrorUI />
      ) : (
        <>
          <input
            name="title"
            className="task-title"
            placeholder="Enter title"
            value={task.title}
            onChange={onChange}
          />
          <div className="task-details">
            <AddMoreDetailsIcon />
            <TextareaAutosize
              name="details"
              placeholder="Add details"
              className="details-input"
              value={task.details}
              onChange={onChange}
            />
          </div>

          <div className="task-reminder" onClick={() => setShowReminder(true)}>
            <ReminderIcon />
            {task.date || task.time ? (
              <div className="reminder">
                <div className="reminder-details">
                  {task.date && (
                    <div className="reminder-date">
                      {getReminderDate(task.date)}
                    </div>
                  )}
                  {task.time && (
                    <div className="reminder-time">{task.time}</div>
                  )}
                </div>

                <button className="delete-reminder" onClick={onReminderClear}>
                  <Cross />
                </button>
              </div>
            ) : (
              <button className="add-date-time">Add date/time</button>
            )}
          </div>
          <button
            className="mark-completed"
            onClick={toggleCompleted}
            name="completed"
          >
            {taskData?.completed ? (
              <UndoIcon className="undo-icon" />
            ) : (
              <>
                <CorrectIcon />
                <span>Mark completed</span>
              </>
            )}
          </button>
        </>
      )}

      {showReminder && (
        <Reminder show={showReminder} onHide={() => setShowReminder(false)} />
      )}
    </div>
  )
}

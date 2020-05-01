import React, { useState, useEffect, useContext } from 'react'
import Styled from './task.styles'
import TextareaAutosize from 'react-autosize-textarea'
import LeftArrow from 'assets/left-arrow.icon'
import Trash from 'assets/trash.icon'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import Reminder from '../reminder'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import ReminderIcon from 'assets/reminder.icon.jsx'
import RepeatIcon from 'assets/repeat.icon.jsx'
import CorrectIcon from 'assets/correct.icom.jsx'
import Cross from 'assets/cross.icon.jsx'
import useGetTask from '../hooks/useGetTask.jsx'
import useDeleteTask from '../hooks/useDeleteTask'
import { Context } from 'context'
import useUpdateTask from '../hooks/useUpdateTask'
import { getReminderDate } from 'utils/dateHelpers/dateHelpers.js'
import Cookies from 'js-cookie'

export default function Task() {
  const [{ task }, setGlobalContext] = useContext(Context)
  const history = useHistory()
  const { id } = useParams()
  const location = useLocation()
  const { status, data, error } = useGetTask(id)
  const { data: taskData, errors } = data || {}
  const [deleteTask, { deleteStatus, deleteResponse }] = useDeleteTask(id)
  const [updateTask, { updateStatus, updateResponse }] = useUpdateTask()
  const [showReminder, setShowReminder] = useState(false)
  Cookies.set(`selectedDay-${location.pathname}`, task.date)

  useEffect(() => {
    if (!taskData) return
    setGlobalContext({
      task: {
        ...task,
        ...taskData
      }
    })
  }, [taskData])

  const handleDelete = () => {
    try {
      deleteTask(id)
      history.push('/tasks')
    } catch (e) {
      console.log('something went wrong')
    }
  }

  const handleUpdate = () => {
    try {
      updateTask(id)
      history.push('/tasks')
    } catch (e) {
      console.log('something went wrong')
    }
  }

  const onChange = e => {
    const { value, name } = e.target
    setGlobalContext({
      task: {
        ...task,
        [name]: value
      }
    })
  }

  const markCompleted = () => {
    setGlobalContext({
      task: {
        ...task,
        completed: true
      }
    })

    try {
      updateTask(id)
      history.push('/tasks')
    } catch (e) {
      console.log('something went wrong')
    }
  }

  const onReminderClear = e => {
    e.stopPropagation()
    setGlobalContext({
      task: {
        ...task,
        time: '',
        date: ''
      }
    })
    Cookies.remove(`selectedDay-${location.pathname}`)
  }

  if (status === 'error') return <span>Sorry something went wrong</span>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <Styled>
      <div className="task-header">
        <button className="back" onClick={handleUpdate}>
          <LeftArrow />
        </button>
        <button onClick={handleDelete} className="trashIcon">
          <Trash />
        </button>
      </div>

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
              {task.time && <div className="reminder-time">{task.time}</div>}
              {/* <div>Repeated weekly on Sun, Thu</div> */}
            </div>

            <button className="delete-reminder" onClick={onReminderClear}>
              <Cross />
            </button>
          </div>
        ) : (
          <button className="add-date-time">Add date/time</button>
        )}
      </div>

      {showReminder && (
        <Reminder show={showReminder} onHide={() => setShowReminder(false)} />
      )}

      <button
        className="mark-completed"
        onClick={markCompleted}
        name="completed"
      >
        <CorrectIcon />
        <span>Mark completed</span>
      </button>
    </Styled>
  )
}

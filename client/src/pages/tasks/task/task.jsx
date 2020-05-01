import React, { useState, useEffect, useContext } from 'react'
import Styled from './task.styles'
import TextareaAutosize from 'react-autosize-textarea'
import LeftArrow from 'assets/left-arrow.icon'
import Trash from 'assets/trash.icon'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import Reminder from '../reminder'
import { useHistory, useParams } from 'react-router-dom'
import ReminderIcon from 'assets/reminder.icon.jsx'
import RepeatIcon from 'assets/repeat.icon.jsx'
import CorrectIcon from 'assets/correct.icom.jsx'
import Cross from 'assets/cross.icon.jsx'
import useGetTask from '../hooks/useGetTask.jsx'
import useDeleteTask from '../hooks/useDeleteTask'
import { Context } from 'context'
import useUpdateTask from '../hooks/useUpdateTask'

export default function Task() {
  const [{ task }, setGlobalContext] = useContext(Context)
  const history = useHistory()
  const { id } = useParams()
  const { status, data, error } = useGetTask(id)
  const { data: taskData, errors } = data || {}
  const [deleteTask, { deleteStatus, deleteResponse }] = useDeleteTask(id)
  const [updateTask, { updateStatus, updateResponse }] = useUpdateTask(id)
  const [showReminder, setShowReminder] = useState(false)

  useEffect(() => {
    if (!taskData) return
    setGlobalContext({
      task: {
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

  const handleUpdate = async () => {
    try {
      await updateTask(id)
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

  const markCompleted = async () => {
    setGlobalContext({
      task: {
        ...task,
        completed: true
      }
    })

    try {
      await updateTask(id)
      history.push('/tasks')
    } catch (e) {
      console.log('something went wrong')
    }
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
              <div className="reminder-date">Thu, April 16</div>
              <div>14:34 AM</div>
              <div>Repeated weekly on Sun, Thu</div>
            </div>

            <button className="delete-reminder">
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

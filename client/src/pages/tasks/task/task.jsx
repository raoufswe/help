import React, { useState } from 'react'
import Styled from './task.styles'
import TextareaAutosize from 'react-autosize-textarea'
import LeftArrow from 'assets/left-arrow.icon'
import Trash from 'assets/trash.icon'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import Reminder from '../reminder'
import { useHistory } from 'react-router-dom'
import ReminderIcon from 'assets/reminder.icon.jsx'
import RepeatIcon from 'assets/repeat.icon.jsx'
import CorrectIcon from 'assets/correct.icom.jsx'
import Cross from 'assets/cross.icon.jsx'

export default function Task({ title, details, time, repeat }) {
  const history = useHistory()
  const [showReminder, setShowReminder] = useState(false)

  const handleDelete = () => {}

  const onChange = e => {
    const { value } = e.target
  }

  return (
    <Styled>
      <div className="task-header">
        <button className="back" onClick={() => history.push('/tasks')}>
          <LeftArrow />
        </button>
        <button onClick={handleDelete} className="trashIcon">
          <Trash />
        </button>
      </div>

      <input name="title" className="task-title" placeholder="Title" />
      <div className="task-details">
        <AddMoreDetailsIcon />
        <TextareaAutosize
          name="details"
          placeholder="Add details"
          className="details-input"
          onChange={onChange}
        />
      </div>

      <button className="task-reminder" onClick={() => setShowReminder(true)}>
        <ReminderIcon />
        {/* <span>Add date/time</span> */}
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
      </button>

      {showReminder && (
        <Reminder show={showReminder} onHide={() => setShowReminder(false)} />
      )}

      <button className="mark-completed">
        <CorrectIcon />
        <span>Mark completed</span>
      </button>
    </Styled>
  )
}

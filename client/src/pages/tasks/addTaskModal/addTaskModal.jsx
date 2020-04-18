import React, { useState } from 'react'
import Styled, { GlobalStyle } from './addTaskModal.styles'
import TextareaAutosize from 'react-autosize-textarea'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import ReminderIcon from 'assets/reminder.icon.jsx'
import Reminder from '../reminder'
import { Modal } from 'react-bootstrap'

export default function AddTaskModal(props) {
  const [addMoreDetails, setAddMoreDetails] = useState(false)
  const [showReminder, setShowReminder] = useState(false)

  const onChange = e => {
    const { value } = e.target
  }

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        dialogClassName="add-task-modal"
      >
        <Styled>
          <input
            type="text"
            className="task-input"
            onChange={onChange}
            name="task"
            placeholder="New task"
          />

          {addMoreDetails && (
            <TextareaAutosize
              name="title"
              placeholder="Add details"
              className="grateful-input"
              onChange={onChange}
            />
          )}

          {showReminder && (
            <Reminder
              show={showReminder}
              onHide={() => setShowReminder(false)}
            />
          )}

          <div className="actions">
            <div>
              <button onClick={() => setAddMoreDetails(true)}>
                <AddMoreDetailsIcon />
              </button>
              <button onClick={() => setShowReminder(true)}>
                <ReminderIcon />
              </button>
            </div>
            <button className="save-task">Save</button>
          </div>
        </Styled>
      </Modal>

      <GlobalStyle showReminder={showReminder} />
    </>
  )
}

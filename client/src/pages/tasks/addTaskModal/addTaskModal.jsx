import React, { useState, useContext, useEffect } from 'react'
import Styled, { GlobalStyle } from './addTaskModal.styles'
import TextareaAutosize from 'react-autosize-textarea'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import ReminderIcon from 'assets/reminder.icon.jsx'
import Reminder from '../reminder'
import { Modal } from 'react-bootstrap'
import { Context } from 'context'
import CrossIcon from 'assets/cross.icon.jsx'
import { getReminderDate } from 'utils/dateHelpers/dateHelpers.js'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function AddTaskModal(props) {
  const location = useLocation()
  const [{ task }, setGlobalContext] = useContext(Context)
  const { date, time } = task || {}
  const [addMoreDetails, setAddMoreDetails] = useState(false)
  const [showReminder, setShowReminder] = useState(false)

  useEffect(() => {
    if (props.savingStatus === 'success') {
      setAddMoreDetails(false)
      setGlobalContext({
        task: {}
      })
      props.onHide()
    }
  }, [props.savingStatus])

  const onChange = e => {
    const { value, name } = e.target
    setGlobalContext({
      task: {
        ...task,
        [name]: value
      }
    })
  }

  const onReminderClear = () => {
    setGlobalContext({
      task: {
        ...task,
        time: '',
        date: ''
      }
    })
    Cookies.remove(`selectedDay-${location.pathname}`)
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
          <div>
            <input
              type="text"
              className="task-input"
              onChange={onChange}
              name="title"
              placeholder="New task"
            />

            {addMoreDetails && (
              <TextareaAutosize
                name="details"
                placeholder="Add details"
                className="task-input"
                onChange={onChange}
              />
            )}

            {date || time ? (
              <div className="reminder-box">
                <button onClick={() => setShowReminder(true)}>
                  <ReminderIcon className="reminder-calendar-icon" />
                  {date && <span>{getReminderDate(date)}</span>}{' '}
                  {time && <span>{time}</span>}
                </button>
                <button
                  className="cross-calendar-icon"
                  onClick={onReminderClear}
                >
                  <CrossIcon />
                </button>
              </div>
            ) : null}
          </div>

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

            <button className="save-task" onClick={props.saveTask}>
              Save
            </button>
          </div>
        </Styled>
      </Modal>

      <GlobalStyle showReminder={showReminder} />
    </>
  )
}

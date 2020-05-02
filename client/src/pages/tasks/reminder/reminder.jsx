import React, { useState, useContext } from 'react'
import Styled, { GlobalStyle } from './reminder.styles'
import { Modal } from 'react-bootstrap'
import SetTime from './setTime'
import DatePicker from 'components/datePicker.jsx'
import ClockIcon from 'assets/clock.icon.jsx'
import { Context } from 'context'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function Reminder(props) {
  const location = useLocation()
  const [{ task }, setGlobalContext] = useContext(Context)
  const [showSetTime, setShowSetTime] = useState(false)
  const [date, setDate] = useState(task.date)
  const [time, setTime] = useState(task.time)

  const onReminderChange = () => {
    setGlobalContext({
      task: {
        ...task,
        date,
        time
      }
    })
    props.onHide()
  }

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
        dialogClassName="reminder-modal"
        backdropClassName="reminder-backdrop"
      >
        <Styled>
          <div className="date-picker">
            <DatePicker disableOutsideClick onChange={day => setDate(day)} />
            <div className="set-actions">
              <div className="action">
                <ClockIcon />
                <button className="timer" onClick={() => setShowSetTime(true)}>
                  {time ? time : task.time ? task.time : 'Set time'}
                </button>
                {showSetTime && (
                  <SetTime
                    time={time}
                    onChange={time => setTime(time)}
                    show={showSetTime}
                    onHide={() => setShowSetTime(false)}
                  />
                )}
              </div>
            </div>

            <div className="footer-section">
              <button
                onClick={() => {
                  props.onHide()
                  if (task.date) return
                  Cookies.remove(`selectedDay-${location.pathname}`)
                }}
              >
                Cancel
              </button>
              <button onClick={onReminderChange}>Done</button>
            </div>
          </div>
        </Styled>
      </Modal>
      <GlobalStyle />
    </>
  )
}

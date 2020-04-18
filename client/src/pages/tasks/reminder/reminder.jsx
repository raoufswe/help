import React, { useState, useRef } from 'react'
import Styled, { GlobalStyle } from './reminder.styles'
import { Modal } from 'react-bootstrap'
import SetTime from './setTime'
import Repeat from './repeat'
import DatePicker from 'components/datePicker.jsx'
import ClockIcon from 'assets/clock.icon.jsx'
import RepeatIcon from 'assets/repeat.icon.jsx'

export default function Reminder(props) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showSetTime, setShowSetTime] = useState(false)
  const [showSetRepeat, setShowSetRepeat] = useState(false)

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
            <DatePicker
              disableOutsideClick
              onDayChange={day => setSelectedDate(day)}
            />
            <div className="set-actions">
              <div className="action">
                <ClockIcon />
                <button className="timer" onClick={() => setShowSetTime(true)}>
                  Set time
                </button>
                {showSetTime && (
                  <SetTime
                    show={showSetTime}
                    onHide={() => setShowSetTime(false)}
                  />
                )}
              </div>

              <div className="action">
                <RepeatIcon />
                <button onClick={() => setShowSetRepeat(true)}>Repeat</button>
                {showSetRepeat && (
                  <Repeat
                    show={showSetRepeat}
                    onHide={() => setShowSetRepeat(false)}
                  />
                )}
              </div>
            </div>

            <div className="footer-section">
              <button onClick={props.onHide}>Cancel</button>
              <button onClick={() => {}}>Done</button>
            </div>
          </div>
        </Styled>
      </Modal>
      <GlobalStyle showSetRepeat={showSetRepeat} />
    </>
  )
}

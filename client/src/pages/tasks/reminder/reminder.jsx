import React, { useState, useRef, useContext } from 'react'
import Styled, { GlobalStyle } from './reminder.styles'
import { Modal } from 'react-bootstrap'
import SetTime from './setTime'
import Repeat from './repeat'
import DatePicker from 'components/datePicker.jsx'
import ClockIcon from 'assets/clock.icon.jsx'
import RepeatIcon from 'assets/repeat.icon.jsx'
import { Context } from 'context'

export default function Reminder(props) {
  const [globalContext, setGlobalContext] = useContext(Context)
  const [showSetTime, setShowSetTime] = useState(false)
  const [showSetRepeat, setShowSetRepeat] = useState(false)

  const onTimeChange = time => {
    setGlobalContext({
      addTask: {
        ...globalContext.addTask,
        time
      }
    })
  }

  const onDateChange = day => {
    setGlobalContext({
      addTask: {
        ...globalContext.addTask,
        date: day
      }
    })
  }

  console.log(globalContext)
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
              onChange={day => onDateChange(day)}
            />
            <div className="set-actions">
              <div className="action">
                <ClockIcon />
                <button className="timer" onClick={() => setShowSetTime(true)}>
                  Set time
                </button>
                {showSetTime && (
                  <SetTime
                    onChange={onTimeChange}
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

import React, { useState, useEffect } from 'react'
import Styled, { GlobalStyle } from './setTime.styles'
import { Modal } from 'react-bootstrap'
import TimeKeeper from 'react-timekeeper'

export default function SetTime(props) {
  const [time, setTime] = useState(
    props.time ||
      new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true,
        minute: 'numeric'
      })
  )

  const onTimeChange = () => {
    props.onChange(time)
    props.onHide()
  }

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        centered
        dialogClassName="set-time-modal"
        backdropClassName="reminder-backdrop"
      >
        <Styled>
          <TimeKeeper
            time={time}
            onChange={newTime => setTime(newTime.formatted12)}
            switchToMinuteOnHourSelect
          />
          <div className="timer-actions">
            <button onClick={props.onHide}>Cancel</button>
            <button onClick={onTimeChange}>Ok</button>
          </div>
        </Styled>
      </Modal>
      <GlobalStyle />
    </>
  )
}

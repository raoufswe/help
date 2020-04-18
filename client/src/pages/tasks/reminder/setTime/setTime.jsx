import React, { useState } from 'react'
import Styled, { GlobalStyle } from './setTime.styles'
import { Modal } from 'react-bootstrap'
import TimeKeeper from 'react-timekeeper'

export default function SetTime(props) {
  const [time, setTime] = useState('12:34pm')

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
            <button>Ok</button>
          </div>
        </Styled>
      </Modal>
      <GlobalStyle />
    </>
  )
}

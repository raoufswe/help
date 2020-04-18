import React, { useState } from 'react'
import Styled, { GlobalStyle } from './datePickerModal.styles'
import DatePicker from 'components/datePicker.jsx'
import { Modal } from 'react-bootstrap'

export default function DatePickerModal(props) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        centered
        dialogClassName="date-picker-modal"
        backdropClassName="reminder-backdrop"
      >
        <Styled>
          <DatePicker
            disableOutsideClick
            onDayChange={day => setSelectedDate(day)}
          />

          <div className="footer-section">
            <button onClick={props.onHide}>Cancel</button>
            <button>Done</button>
          </div>
        </Styled>
      </Modal>
      <GlobalStyle />
    </>
  )
}

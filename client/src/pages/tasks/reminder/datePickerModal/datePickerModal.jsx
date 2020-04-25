import React, { useState, useEffect } from 'react'
import Styled, { GlobalStyle } from './datePickerModal.styles'
import DatePicker from 'components/datePicker.jsx'
import { Modal } from 'react-bootstrap'

export default function DatePickerModal(props) {
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    props.onChange(selectedDate)
  }, [selectedDate])
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
            onChange={day => setSelectedDate(day)}
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

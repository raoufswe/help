import React, { useState } from 'react'
import Styled, { GlobalStyle, StyledDatePickerModal } from './repeat.styles'
import { Modal } from 'react-bootstrap'
import WeekDaysPicker from 'components/weekDaysPicker.jsx'
import SetTime from '../setTime'
import { getDaysMonth, getDayNumber } from 'utils/dateHelpers/dateHelpers.js'
import DatePickerModal from '../datePickerModal'
export default function Repeat(props) {
  const [showSetTime, setShowSetTime] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [repeatForm, setRepeatForm] = useState({
    numberOfTimes: '1',
    every: 'week',
    start: '1',
    everyDayOfMonth: getDayNumber()
  })
  const [selectedWeekDays, setSelectedWeekDays] = useState([])

  function handleRepeatFormChange(event) {
    let { value } = event.target
    setRepeatForm({
      ...repeatForm,
      [event.target.name]: value
    })
  }

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        centered
        dialogClassName="repeat-modal"
        backdropClassName="reminder-backdrop"
      >
        <Styled>
          <div className="every">
            <span>Every</span>
            <input
              type="text"
              name="numberOfTimes"
              value={repeatForm.numberOfTimes}
              onChange={handleRepeatFormChange}
              maxLength={2}
            />
            <select
              name="every"
              value={repeatForm.every}
              onChange={handleRepeatFormChange}
            >
              <option value="day">
                {`day${repeatForm.numberOfTimes !== '1' ? 's' : ''}`}
              </option>
              <option value="week">
                {`week${repeatForm.numberOfTimes !== '1' ? 's' : ''}`}
              </option>
              <option value="month">
                {`month${repeatForm.numberOfTimes !== '1' ? 's' : ''}`}
              </option>
              <option value="year">
                {`year${repeatForm.numberOfTimes !== '1' ? 's' : ''}`}
              </option>
            </select>
          </div>

          {repeatForm.every === 'week' && (
            <WeekDaysPicker
              onChange={selectedWeekDays =>
                setSelectedWeekDays(selectedWeekDays)
              }
            />
          )}

          {repeatForm.every === 'month' && (
            <select
              className="full-width-input"
              name="everyDayOfMonth"
              value={repeatForm.everyDayOfMonth}
              onChange={handleRepeatFormChange}
            >
              {getDaysMonth().map(day => (
                <option value={day.toString()}>Day {day}</option>
              ))}
            </select>
          )}

          <div className="start">
            <span>Start</span>
            {repeatForm.every === 'month' ? (
              <select
                name="start"
                defaultValue={repeatForm.start}
                onChange={handleRepeatFormChange}
              >
                <option value="1">Janaury</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            ) : (
              <button onClick={() => setShowDatePicker(true)}>April 12</button>
            )}
          </div>

          <button
            className="full-width-input"
            onClick={() => setShowSetTime(true)}
          >
            Set time
          </button>

          <div className="footer-section">
            <button onClick={props.onHide}>Cancel</button>
            <button>Done</button>
          </div>
        </Styled>
      </Modal>

      {showDatePicker && (
        <DatePickerModal
          show={showDatePicker}
          onHide={() => setShowDatePicker(false)}
        />
      )}

      {showSetTime && (
        <SetTime show={showSetTime} onHide={() => setShowSetTime(false)} />
      )}
      <GlobalStyle showSetTime={showSetTime} showDatePicker={showDatePicker} />
    </>
  )
}

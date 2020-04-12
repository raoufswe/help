import React, { useState, useRef, useEffect } from 'react'
import {
  StyledAddTaskModal,
  StyledCalendar,
  StyledTimer,
  StyledRepeat,
  StyledDatePicker,
  StyledReminderTimer
} from './tasks.styles'
import LeftArrow from 'assets/left-arrow.icon'
import ReminderIcon from 'assets/reminder.icon.jsx'
import AddMoreDetailsIcon from 'assets/addMoreDetails.icon'
import TextareaAutosize from 'react-autosize-textarea'
import DatePicker from 'components/datePicker.jsx'
import ClockIcon from 'assets/clock.icon.jsx'
import RepeatIcon from 'assets/repeat.icon.jsx'
import TimeKeeper from 'react-timekeeper'
import Overlay from 'components/overlay.jsx'
import WeekDaysPicker from 'components/weekDaysPicker.jsx'
import { getDaysMonth, getDayNumber } from 'utils/dataHelpers/dataHelpers.js'

export default function AddTask({ history, onClose, addTaskModal }) {
  const CalendarRef = useRef(null)
  const taskModalRef = useRef(null)
  const TimerRef = useRef(null)
  const repeatRef = useRef(null)
  const datePickerRef = useRef(null)
  const reminderTimerRef = useRef(null)
  const [task, setTask] = useState({})
  const [addMoreDetails, setAddMoreDetails] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const [showRepeat, setShowRepeat] = useState(false)
  const [showReminderTimer, setShowReminderTimer] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [time, setTime] = useState('12:34pm')
  const [repeatForm, setRepeatForm] = useState({
    numberOfTimes: '1',
    every: 'week',
    everyDayOfMonth: getDayNumber()
  })
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedWeekDays, setSelectedWeekDays] = useState([])

  function handleRepeatFormChange(event) {
    let { value } = event.target
    setRepeatForm({
      ...repeatForm,
      [event.target.name]: value
    })
  }

  const onChange = e => {
    const { value } = e.target
    setTask({
      [e.target.name]: value,
      done: false
    })
  }

  function handleClickOutside(event) {
    if (CalendarRef.current && !CalendarRef.current.contains(event.target)) {
      setShowCalendar(false)
    }

    if (TimerRef.current && !TimerRef.current.contains(event.target)) {
      setShowTime(false)
      setShowCalendar(true)
    }

    if (repeatRef.current && !repeatRef.current.contains(event.target)) {
      setShowRepeat(false)
      setShowCalendar(true)
    }

    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setShowDatePicker(false)
      setShowRepeat(true)
    }

    if (
      reminderTimerRef.current &&
      !reminderTimerRef.current.contains(event.target)
    ) {
      setShowReminderTimer(false)
      setShowRepeat(true)
    }

    if (
      taskModalRef.current &&
      !taskModalRef.current.contains(event.target) &&
      !showCalendar &&
      !showTime &&
      !showRepeat &&
      !showDatePicker &&
      !showReminderTimer
    ) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <div>
      <StyledAddTaskModal ref={taskModalRef}>
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
        <div className="actions">
          <div>
            <button onClick={() => setAddMoreDetails(true)}>
              <AddMoreDetailsIcon />
            </button>
            <button onClick={() => setShowCalendar(true)}>
              <ReminderIcon />
            </button>
          </div>
          <button className="save-task" onClick={onClose}>
            Save
          </button>
        </div>
      </StyledAddTaskModal>

      {showCalendar && (
        <Overlay>
          <StyledCalendar showCalendar={showCalendar} ref={CalendarRef}>
            <div className="date-picker">
              <DatePicker
                disableOutsideClick
                onDayChange={day => setSelectedDate(day)}
              />
              <div className="set-actions">
                <div className="action">
                  <ClockIcon />
                  <button
                    className="timer"
                    onClick={() => {
                      setShowCalendar(false)
                      setShowTime(true)
                    }}
                  >
                    Set time
                  </button>
                </div>
                <div className="action">
                  <RepeatIcon />
                  <button
                    onClick={() => {
                      setShowCalendar(false)
                      setShowRepeat(true)
                    }}
                  >
                    Repeat
                  </button>
                </div>
              </div>

              <div className="footer-section">
                <button onClick={() => setShowCalendar(false)}>Cancel</button>
                <button onClick={() => setShowCalendar(false)}>Done</button>
              </div>
            </div>
          </StyledCalendar>
        </Overlay>
      )}

      {showTime && (
        <Overlay>
          <StyledTimer showTime={showTime} ref={TimerRef}>
            <TimeKeeper
              time={time}
              onChange={newTime => setTime(newTime.formatted12)}
              switchToMinuteOnHourSelect
            />
            <div className="timer-actions">
              <button
                onClick={() => {
                  setShowTime(false)
                  setShowCalendar(true)
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowTime(false)
                  setShowCalendar(true)
                }}
              >
                Ok
              </button>
            </div>
          </StyledTimer>
        </Overlay>
      )}

      {showRepeat && (
        <Overlay>
          <StyledRepeat showRepeat={showRepeat} ref={repeatRef}>
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
                  name="every"
                  value={repeatForm.every}
                  onChange={handleRepeatFormChange}
                >
                  <option selected value="1">
                    Janaury
                  </option>
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
                <button
                  onClick={() => {
                    setShowRepeat(false)
                    setShowDatePicker(true)
                  }}
                >
                  April 12
                </button>
              )}
            </div>

            <button
              className="full-width-input"
              onClick={() => {
                setShowRepeat(false)
                setShowReminderTimer(true)
              }}
            >
              Set time
            </button>

            <div className="footer-section">
              <button
                onClick={() => {
                  setShowRepeat(false)
                  setShowCalendar(true)
                }}
              >
                Cancel
              </button>
              <button>Done</button>
            </div>
          </StyledRepeat>
        </Overlay>
      )}

      {showDatePicker && (
        <Overlay>
          <StyledDatePicker showDatePicker={showDatePicker} ref={datePickerRef}>
            <DatePicker
              disableOutsideClick
              onDayChange={day => setSelectedDate(day)}
            />

            <div className="footer-section">
              <button
                onClick={() => {
                  setShowDatePicker(false)
                  setShowRepeat(true)
                }}
              >
                Cancel
              </button>
              <button>Done</button>
            </div>
          </StyledDatePicker>
        </Overlay>
      )}

      {showReminderTimer && (
        <Overlay>
          <StyledTimer showTime={showReminderTimer} ref={reminderTimerRef}>
            <TimeKeeper
              time={time}
              onChange={newTime => setTime(newTime.formatted12)}
              switchToMinuteOnHourSelect
            />
            <div className="timer-actions">
              <button
                onClick={() => {
                  setShowReminderTimer(false)
                  setShowRepeat(true)
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowReminderTimer(false)
                  setShowRepeat(true)
                }}
              >
                Ok
              </button>
            </div>
          </StyledTimer>
        </Overlay>
      )}
    </div>
  )
}

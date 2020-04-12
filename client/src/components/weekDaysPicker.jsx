import React, { useCallback, useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledWeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
  button {
    background: #f2f3f5;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    padding: 0.5rem;
    border-radius: 50%;
    vertical-align: middle;
    text-align: center;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }

  .selectedDay {
    background: rgb(33, 150, 243);
    color: white;
  }

  button:last-of-type {
    margin-right: 0;
  }
`

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default function DaysPicker({ onChange }) {
  const [selectedDays, setSelectedDays] = useState(['Sunday'])
  const onDayClick = selectedDay => {
    !selectedDays.includes(selectedDay)
      ? setSelectedDays([...selectedDays, selectedDay])
      : setSelectedDays(() => selectedDays.filter(day => day !== selectedDay))
  }

  useEffect(() => {
    onChange(selectedDays)
  }, [selectedDays])

  return (
    <StyledWeekDay>
      {days.map((day, index) => (
        <button
          onClick={onDayClick.bind(null, day)}
          className={selectedDays.includes(day) ? 'selectedDay' : ''}
        >
          {day[0]}
        </button>
      ))}
    </StyledWeekDay>
  )
}

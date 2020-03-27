import React, { useState, useRef, useEffect } from 'react'
import DayPicker from 'react-day-picker'
import Cookies from 'js-cookie'

export default function DatePicker({ onOutsideClick, onDayChange }) {
  const ref = useRef(null)
  const [selectedDay, setSelectedDay] = useState(Cookies.get('selectedDay'))

  function handleClickOutsideOfCalendar(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick(false)
    }
  }

  const handleDayClick = (day, { selected, disabled }) => {
    if (disabled) return
    if (selected) {
      Cookies.set('selectedDay', undefined)
      setSelectedDay(undefined)
      onDayChange(undefined)
      return
    }
    Cookies.set('selectedDay', day)
    setSelectedDay(day)
    onDayChange(day)
    onOutsideClick(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideOfCalendar)
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideOfCalendar)
    }
  })

  return (
    <div className="calendar" ref={ref}>
      <DayPicker
        onDayClick={handleDayClick}
        selectedDays={new Date(selectedDay)}
        disabledDays={{ after: new Date() }}
      />
    </div>
  )
}

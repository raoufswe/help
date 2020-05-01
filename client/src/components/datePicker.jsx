import React, { useState, useRef, useEffect } from 'react'
import DayPicker from 'react-day-picker'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function DatePicker({
  disableOutsideClick,
  onOutsideClick,
  disabledDays,
  onChange
}) {
  const location = useLocation()
  const ref = useRef(null)
  const [selectedDay, setSelectedDay] = useState(
    Cookies.get(`selectedDay-${location.pathname}`)
  )

  function handleClickOutsideOfCalendar(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onOutsideClick(false)
    }
  }

  const handleDayClick = (day, { selected, disabled }) => {
    if (disabled) return
    if (selected) {
      Cookies.set(`selectedDay-${location.pathname}`, undefined)
      setSelectedDay(undefined)
      onChange(undefined)
      return
    }
    Cookies.set(`selectedDay-${location.pathname}`, day)
    setSelectedDay(day)
    onChange(day)
  }

  useEffect(() => {
    if (disableOutsideClick) return
    document.addEventListener('mousedown', handleClickOutsideOfCalendar)
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideOfCalendar)
    }
  })

  return (
    <div ref={ref}>
      <DayPicker
        onDayClick={handleDayClick}
        selectedDays={new Date(selectedDay)}
        disabledDays={disabledDays}
      />
    </div>
  )
}

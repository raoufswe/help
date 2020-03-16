import React from 'react'
import { StyledJournal } from './journaling.styles'

export default function Journal({ date, time, content }) {
  return (
    <StyledJournal>
      <div>
        <span className="date">{date}</span>
        <span className="time">{time}</span>
      </div>
      <span className="content">{content}</span>
    </StyledJournal>
  )
}

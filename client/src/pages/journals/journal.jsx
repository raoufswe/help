import React from 'react'
import { StyledJournal } from './journaling.styles'
import { getDate, getTime } from 'utils/dateHelpers/dateHelpers.js'

export default function Journal({ createdAt, content }) {
  return (
    <StyledJournal>
      <div>
        <span className="date">{getDate(createdAt)}</span>
        <span className="time">{getTime(createdAt)}</span>
      </div>
      <span className="content">{content}</span>
    </StyledJournal>
  )
}

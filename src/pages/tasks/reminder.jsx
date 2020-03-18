import React from 'react'
import { StyledReminder } from './tasks.styles'

export default function Reminder({ reminder }) {
  return (
    <StyledReminder>
      <span>{reminder}</span>
    </StyledReminder>
  )
}

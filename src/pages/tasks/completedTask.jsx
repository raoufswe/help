import React from 'react'
import { StyledTask } from './tasks.styles'
import CompletedIcon from 'assets/completed.icon.jsx'

export default function CompletedTask({ completedTasks }) {
  return (
    <StyledTask>
      {completedTasks.map(({ title }, key) => (
        <div className="task" key={key}>
          <CompletedIcon />
          <span>{title}</span>
        </div>
      ))}
    </StyledTask>
  )
}

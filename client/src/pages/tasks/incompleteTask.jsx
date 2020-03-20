import React from 'react'
import { StyledTask } from './tasks.styles'
import IncompleteIcon from 'assets/incomplete.icon.jsx'

export default function IncompleteTask({ inCompleteTasks }) {
  return (
    <StyledTask>
      {inCompleteTasks.map(({ title }, key) => (
        <div className="task" key={key}>
          <IncompleteIcon />
          <span>{title}</span>
        </div>
      ))}
    </StyledTask>
  )
}

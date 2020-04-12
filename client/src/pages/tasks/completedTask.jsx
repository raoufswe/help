import React from 'react'
import CompletedIcon from 'assets/completed.icon.jsx'

export default function CompletedTask({ completedTasks }) {
  return (
    <div>
      {completedTasks.map(({ title }, key) => (
        <div className="task" key={key}>
          <CompletedIcon />
          <span>{title}</span>
        </div>
      ))}
    </div>
  )
}

import React from 'react'
import IncompleteIcon from 'assets/incomplete.icon.jsx'

export default function IncompleteTask({ inCompleteTasks }) {
  return (
    <div>
      {inCompleteTasks.map(({ title }, key) => (
        <div className="task" key={key}>
          <IncompleteIcon />
          <span>{title}</span>
        </div>
      ))}
    </div>
  )
}

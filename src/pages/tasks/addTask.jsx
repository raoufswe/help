import React, { useState } from 'react'
import { StyledAddTask } from './tasks.styles'
import LeftArrow from 'assets/left-arrow.icon'

export default function AddTask({ history }) {
  const [task, setTask] = useState({})

  const onChange = e => {
    const { value } = e.target
    setTask({
      [e.target.name]: value,
      done: false
    })
  }

  return (
    <StyledAddTask>
      <div className="login-back" onClick={() => history.push('/tasks')}>
        <LeftArrow />
      </div>

      <span className="page-title">It’s good to get yourself busy.</span>

      <input
        type="text"
        className="task-input"
        onChange={onChange}
        name="task"
        placeholder="add your task"
      />
    </StyledAddTask>
  )
}

import React, { useState } from 'react'
import { StyledTasks } from './tasks.styles'
import { tasks, reminders } from '__mocks__/tasks.js'
import CompletedTasks from './completedTask'
import InCompleteTasks from './incompleteTask'
import Reminder from './reminder'
import Add from 'components/add.jsx'

const Tasks = ({ history }) => {
  const [completedTasks, setCompletedTasks] = useState(
    tasks.filter(task => !task.done)
  )

  const [inCompleteTasks, setInCompleteTasks] = useState(
    tasks.filter(task => task.done)
  )

  console.log({ completedTasks })
  console.log({ inCompleteTasks })

  return (
    <StyledTasks>
      <div className="page-title">Let’s get some things done today.</div>

      <CompletedTasks completedTasks={completedTasks} />
      <div className="border"></div>
      <InCompleteTasks inCompleteTasks={inCompleteTasks} />

      {reminders.map(({ reminder }) => (
        <Reminder reminder={reminder} />
      ))}

      <Add onClick={() => history.push('/addTask')} />
    </StyledTasks>
  )
}

export default Tasks

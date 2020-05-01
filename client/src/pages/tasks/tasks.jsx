import React, { useState, useContext } from 'react'
import { StyledTasks } from './tasks.styles'
import AddTaskModal from './addTaskModal'
import MoreIcon from 'assets/more.icon.jsx'
import AddIcon from 'assets/add.icon.jsx'
import { Context } from 'context'
import Cookies from 'js-cookie'
import CompletedTasks from './completedTasks.jsx'
import InCompleteTasks from './incompleteTasks.jsx'
import { useLocation } from 'react-router-dom'

const Tasks = () => {
  const [{ task }, setGlobalContext] = useContext(Context)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const location = useLocation()

  return (
    <StyledTasks>
      <div className="page-title">Let’s get some things done today.</div>
      <div style={{ overflow: 'scroll', maxHeight: 600 }}>
        <InCompleteTasks />
        <CompletedTasks />
      </div>

      <AddTaskModal
        show={showAddTaskModal}
        onHide={() => {
          setGlobalContext({
            task: {}
          })
          Cookies.remove(`selectedDay-${location.pathname}`)
          setShowAddTaskModal(false)
        }}
      />

      {!showAddTaskModal && (
        <div className="footer">
          <button
            className="plus-button-wrapper"
            onClick={() => setShowAddTaskModal(true)}
          >
            <AddIcon />
          </button>
          <button>
            <MoreIcon />
          </button>
        </div>
      )}
    </StyledTasks>
  )
}

export default Tasks

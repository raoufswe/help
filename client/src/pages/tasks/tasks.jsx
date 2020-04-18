import React, { useState } from 'react'
import { StyledTasks } from './tasks.styles'
import AddTaskModal from './addTaskModal'
import MoreIcon from 'assets/more.icon.jsx'
import AddIcon from 'assets/add.icon.jsx'

const Tasks = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)

  return (
    <StyledTasks>
      <div className="page-title">Let’s get some things done today.</div>

      <AddTaskModal
        show={showAddTaskModal}
        onHide={() => setShowAddTaskModal(false)}
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

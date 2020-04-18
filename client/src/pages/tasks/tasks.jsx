import React, { useState, useCallback } from 'react'
import { StyledTasks } from './tasks.styles'
import { tasks, reminders } from '__mocks__/tasks.js'
import CompletedTasks from './completedTask'
import InCompleteTasks from './incompleteTask'
import Add from 'components/add.jsx'
import AddTask from './addTask'
import BurgerIcon from 'assets/burger.icon.jsx'
import MoreIcon from 'assets/more.icon.jsx'
import AddIcon from 'assets/add.icon.jsx'
import { motion, AnimatePresence } from 'framer-motion'

const Tasks = ({ history }) => {
  const [addTaskModal, setAddTaskModal] = useState(false)
  const taskModal = useCallback(state => {
    setAddTaskModal(state)
  }, [])

  return (
    <StyledTasks>
      <AnimatePresence>
        <div className="page-title">Let’s get some things done today.</div>

        {addTaskModal && (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <AddTask
              onClose={taskModal.bind(null, false)}
              addTaskModal={addTaskModal}
            />
          </motion.div>
        )}

        {!addTaskModal && (
          <div className="footer">
            <div className="plus-button-wrapper">
              <button onClick={taskModal.bind(null, true)}>
                <AddIcon />
              </button>
            </div>
            <button>
              <MoreIcon />
            </button>
          </div>
        )}
      </AnimatePresence>
    </StyledTasks>
  )
}

export default Tasks

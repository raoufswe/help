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
import useIncompleteTasks from './hooks/useIncompleteTasks'
import useCompletedTasks from './hooks/useCompletedTasks'
import NoData from './noData'
import Loader from 'assets/loader.jsx'
import ErrorUI from 'components/errorUI.jsx'

const Tasks = () => {
  const location = useLocation()
  const [{ task }, setGlobalContext] = useContext(Context)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const {
    inCompletedTasksStatus,
    inCompletedTasks,
    inCompletedTasksErrors
  } = useIncompleteTasks()
  const {
    completedTasksStatus,
    completedTasks,
    completedTasksErrors
  } = useCompletedTasks()

  return (
    <StyledTasks>
      <div className="page-title">Let’s get some things done today.</div>
      {inCompletedTasksStatus && completedTasksStatus === 'loading' ? (
        <Loader />
      ) : inCompletedTasksStatus && completedTasksStatus === 'error' ? (
        <ErrorUI />
      ) : inCompletedTasks?.data?.length || completedTasks?.data?.length ? (
        <div style={{ overflow: 'scroll', maxHeight: 500 }}>
          <InCompleteTasks data={inCompletedTasks?.data} />
          <CompletedTasks data={completedTasks?.data} />
        </div>
      ) : (
        <NoData />
      )}
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

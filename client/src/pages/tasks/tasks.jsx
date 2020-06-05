import React, { useState, useContext } from 'react'
import './tasks.scss'
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
import useSaveTask from './hooks/useSaveTask'
import NoData from './noData'
import Loader from 'assets/loader.jsx'
import ErrorUI from 'components/errorUI.jsx'
import {
  IonContent,
  IonFooter,
  IonToolbar,
  IonRefresher,
  IonRefresherContent
} from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'
import { queryCache } from 'react-query'

const Tasks = () => {
  const location = useLocation()
  const [, setGlobalContext] = useContext(Context)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const { inCompletedTasksStatus, inCompletedTasks } = useIncompleteTasks()
  const { completedTasksStatus, completedTasks } = useCompletedTasks()
  const [saveTask, { savingStatus }] = useSaveTask()

  const doRefresh = event => {
    queryCache.refetchQueries('tasks')
    setTimeout(() => {
      event.detail.complete()
    }, 500)
  }

  return (
    <>
      <HeaderMenu />
      <IonContent fullscreen={true}>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div className="tasks-page-title" slot="fixed">
          Let’s get some things done today.
        </div>
        {inCompletedTasksStatus && completedTasksStatus === 'loading' ? (
          <Loader />
        ) : inCompletedTasksStatus && completedTasksStatus === 'error' ? (
          <ErrorUI />
        ) : inCompletedTasks?.data?.length || completedTasks?.data?.length ? (
          <div>
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
          savingStatus={savingStatus}
          saveTask={saveTask}
        />
      </IonContent>

      {savingStatus === 'loading' && <Loader />}

      {!showAddTaskModal && (
        <IonFooter className="ion-no-border">
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
        </IonFooter>
      )}
    </>
  )
}

export default Tasks

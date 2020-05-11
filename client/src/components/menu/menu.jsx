import React, { useRef, useEffect } from 'react'
import BurgerIcon from 'assets/burger.icon.jsx'
import CrossIcon from 'assets/cross.icon.jsx'
import { useHistory, useLocation, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'
import JournalIcon from 'assets/journals.icon.jsx'
import DashboardIcon from 'assets/dashboard.icon.jsx'
import GratefulIcon from 'assets/grateful.icon.jsx'
import TasksIcon from 'assets/tasks.icon.jsx'
import ExercisesIcon from 'assets/exercises.icon.jsx'
import FAQIcon from 'assets/FAQ.icon.jsx'
import HospitalsIcon from 'assets/hospitals.icon.jsx'
import LogoutIcon from 'assets/logout.icon.jsx'
import { Plugins } from '@capacitor/core'
import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterLink
} from '@ionic/react'
import './menu.css'

const routes = [
  { title: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { title: 'Journals', path: '/journals', icon: <JournalIcon /> },
  { title: 'Tasks', path: '/tasks', icon: <TasksIcon /> },
  { title: 'Grateful', path: '/gratefulThings', icon: <GratefulIcon /> },
  { title: 'Exercises', path: '/exercises', icon: <ExercisesIcon /> },
  { title: 'FAQ', path: '/faq', icon: <FAQIcon /> },
  { title: 'Hospitals info', path: '/hospitals', icon: <HospitalsIcon /> }
]

function Menu() {
  const location = useLocation()
  let history = useHistory()

  const onLogout = async () => {
    Cookies.remove('token')
    history.push('/')
  }

  return (
    <IonMenu side="start" contentId="main" id="menu">
      <IonContent forceOverscroll={false}>
        <div className="nav-items">
          {routes.map(({ path, title, icon }) => (
            <IonMenuToggle key={title} auto-hide="false">
              <IonRouterLink routerLink={path} routerDirection="forward">
                {icon}
                <IonLabel>{title}</IonLabel>
              </IonRouterLink>
            </IonMenuToggle>
          ))}
          <div className="logout" onClick={onLogout}>
            <LogoutIcon />
            Logout
          </div>
        </div>
      </IonContent>
    </IonMenu>
  )
}

export default withRouter(Menu)

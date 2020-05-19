import React, { useRef, useEffect } from 'react'
import BurgerIcon from 'assets/burger.icon.jsx'
import CrossIcon from 'assets/cross.icon.jsx'
import { useHistory, withRouter, useLocation } from 'react-router-dom'
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
import { verifyToken } from 'utils/verifyToken.js'
import Header from './header'
import { getUserDetails } from 'utils/verifyToken.js'
import MaleIcon from 'assets/male.icon.jsx'
import FemaleIcon from 'assets/female.icon.jsx'

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
  let history = useHistory()
  let location = useLocation()
  const { name, gender } = getUserDetails()

  const onLogout = async () => {
    Cookies.remove('token')
    history.push('/')
  }

  return (
    <IonMenu side="start" contentId="main" id="menu" disabled={!verifyToken()}>
      <IonContent forceOverscroll={false} scrollY={false}>
        <div className="menu-header"></div>
        <main className="menu-wrapper">
          <div className="user-details">
            <span className="avatar">
              {gender === 'male' ? (
                <MaleIcon active background="white" />
              ) : gender === 'female' ? (
                <FemaleIcon active background="white" />
              ) : null}
            </span>
            <span className="menu-user-name">{name}</span>
          </div>
          <div className="nav-items">
            {routes.map(({ path, title, icon }) => {
              return (
                <IonMenuToggle key={title} auto-hide="false">
                  <IonRouterLink
                    routerLink={path}
                    routerDirection="forward"
                    className={location.pathname === path ? 'active-link' : ''}
                  >
                    {icon}
                    <IonLabel>{title}</IonLabel>
                  </IonRouterLink>
                </IonMenuToggle>
              )
            })}
            <div className="logout" onClick={onLogout}>
              <IonMenuToggle key="logout" auto-hide="false">
                <LogoutIcon className="logout-icon" />
                Logout
              </IonMenuToggle>
            </div>
          </div>
        </main>
      </IonContent>
    </IonMenu>
  )
}

export default withRouter(Menu)

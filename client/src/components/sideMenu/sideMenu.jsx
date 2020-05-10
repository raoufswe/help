import React, { useRef, useEffect } from 'react'
import Styled from './sideMenu.styles'
import BurgerIcon from 'assets/burger.icon.jsx'
import CrossIcon from 'assets/cross.icon.jsx'
import { NavLink, useHistory } from 'react-router-dom'
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

function SideMenu({ isOpen, onClick, hide }) {
  let history = useHistory()
  const ref = useRef(null)
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      onClick()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const onLogout = async () => {
    await Plugins.FacebookLogin.logout()
    Cookies.remove('token')
    history.push('/')
  }

  return (
    <Styled isOpen={isOpen}>
      {!hide && (
        <div className="header">
          <button className="burger-icon" onClick={onClick}>
            <BurgerIcon />
          </button>
        </div>
      )}

      <div className="side-menu">
        {isOpen && (
          <div className="side-menu-content" ref={ref}>
            <button className="close-side-menu" onClick={onClick}>
              <CrossIcon />
            </button>

            <div className="dc-nav-items">
              <div className="nav-item" onClick={onClick}>
                <NavLink to="/dashboard" exact>
                  <DashboardIcon />
                  Dashboard
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/journals" exact>
                  <JournalIcon />
                  Journals
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/tasks" exact>
                  <TasksIcon />
                  Tasks
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/gratefulThings" exact>
                  <GratefulIcon />
                  Grateful
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/exercises" exact>
                  <ExercisesIcon />
                  Exercises
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/FAQ" exact>
                  <FAQIcon />
                  FAQ
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/hospitals" exact>
                  <HospitalsIcon />
                  Hospitals info
                </NavLink>
              </div>
            </div>

            <div className="logout" onClick={onLogout}>
              <LogoutIcon />
              Logout
            </div>
          </div>
        )}
      </div>
    </Styled>
  )
}

export default SideMenu

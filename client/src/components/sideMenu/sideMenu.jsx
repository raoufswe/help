import React, { useRef, useEffect } from 'react'
import Styled from './sideMenu.styles'
import BurgerIcon from 'assets/burger.icon.jsx'
import CrossIcon from 'assets/cross.icon.jsx'
import { NavLink } from 'react-router-dom'
import NavIcon from 'assets/nav.icon.jsx'

function SideMenu({ isOpen, onClick, hide }) {
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
                  <NavIcon />
                  Dashboard
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/journaling" exact>
                  <NavIcon />
                  Journaling
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/grateful" exact>
                  <NavIcon />
                  Things grateful for
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/tasks" exact>
                  <NavIcon />
                  My Tasks
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/FAQ" exact>
                  <NavIcon />
                  FAQ
                </NavLink>
              </div>

              <div className="nav-item" onClick={onClick}>
                <NavLink to="/hospitals" exact>
                  <NavIcon />
                  Hospitals info
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </Styled>
  )
}

export default SideMenu

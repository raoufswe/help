import React, { useRef, useEffect } from 'react'
import Styled from './sideMenu.styles'
import BurgerIcon from 'assets/burger.icon.jsx'
import CrossIcon from 'assets/cross.icon.jsx'
import { NavLink } from 'react-router-dom'
import NavIcon from 'assets/nav.icon.jsx'

function SideMenu({ isOpen, onClick, addPage }) {
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
      {!addPage && (
        <button className="burger-icon" onClick={onClick}>
          <BurgerIcon />
        </button>
      )}

      <div className="side-menu">
        {isOpen && (
          <div className="side-menu-content" ref={ref}>
            <button className="close-side-menu" onClick={onClick}>
              <CrossIcon />
            </button>

            <div className="dc-nav-items">
              <div className="nav-item">
                <NavIcon />
                <NavLink to="/dashboard" exact>
                  Dashboard
                </NavLink>
              </div>

              <div className="nav-item">
                <NavIcon />
                <NavLink to="/journaling" exact>
                  Journaling
                </NavLink>
              </div>

              <div className="nav-item">
                <NavIcon />
                <NavLink to="/grateful" exact>
                  Things grateful for
                </NavLink>
              </div>

              <div className="nav-item">
                <NavIcon />
                <NavLink to="/todo" exact>
                  My to-do list
                </NavLink>
              </div>

              <div className="nav-item">
                <NavIcon />
                <NavLink to="/exercises" exact>
                  Exercises
                </NavLink>
              </div>

              <div className="nav-item">
                <NavIcon />
                <NavLink to="/FAQ" exact>
                  FAQ
                </NavLink>
              </div>

              <div className="nav-item">
                <NavIcon />
                <NavLink to="/hospitals" exact>
                  Hospitals info
                </NavLink>
              </div>
            </div>
            {/* <Backdrop container={'body'} onClick={onClick} /> */}
          </div>
        )}
      </div>
    </Styled>
  )
}

export default SideMenu

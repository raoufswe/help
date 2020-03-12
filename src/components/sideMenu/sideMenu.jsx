import React from 'react'
import Styled from './sideMenu.styles'
import BurgerIcon from 'assets/burger.icon.jsx'
import CrossIcon from 'assets/cross.icon.jsx'
import { NavLink } from 'react-router-dom'
import NavIcon from 'assets/nav.icon.jsx'

export default function sideMenu({ isOpen, onClick }) {
  return (
    <Styled isOpen={isOpen}>
      <button className="burger-icon" onClick={onClick}>
        <BurgerIcon />
      </button>

      {isOpen && (
        <div className="side-menu">
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
              <NavLink to="/faq" exact>
                FAQ
              </NavLink>
            </div>

            <div className="nav-item">
              <NavIcon />
              <NavLink to="/hospitalsInfo" exact>
                Hospitals info
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </Styled>
  )
}

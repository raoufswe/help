import React from 'react'
import { Redirect } from 'react-router-dom'
import * as firebaseService from 'server/firebaseService'
import Styled from './landing.styles'
import Button from 'components/button.jsx'

const Landing = ({ history }) => {
  if (firebaseService.getCurrentUser()) {
    return <Redirect to="/home" />
  }

  return (
    <Styled>
      <div className="header-items">
        <span className="landing-title">Help</span>
        <span className="landing-subtitle">A tagline or something</span>
      </div>

      <div className="landing-illustrations">Illustrations</div>

      <div className="landing-footer">
        <Button
          color="#2676FF"
          text="Get Started"
          onClick={e => {
            e.preventDefault()
            history.push('/register')
          }}
        />
        <span className="landing-login-label">
          Already have an account? &nbsp;
          <span
            className="landing-login-sign-in-label"
            onClick={e => {
              e.preventDefault()
              history.push('/login')
            }}
          >
            Sign In
          </span>
        </span>
      </div>
    </Styled>
  )
}

export default Landing

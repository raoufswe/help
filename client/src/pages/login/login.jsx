import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import LeftArrow from 'assets/left-arrow.icon'
import Styled from './login.styles'
import GoogleAuth from 'components/googleAuth'
import FacebookAuth from 'components/facebookAuth'
import Button from 'components/button'
import EmailIcon from 'assets/email.icon.jsx'

const Login = ({ history }) => {
  const [user, setUser] = useState('')

  const onChange = e => {
    const { value } = e.target
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <Styled>
      <div className="back" onClick={() => history.push('/')}>
        <LeftArrow />
      </div>

      <main>
        <div className="login">
          <span className="colored-title">Login</span> {''}
          <span>to</span>
          <div>Your Account</div>
        </div>

        <GoogleAuth text="Login with Google" />
        <FacebookAuth text="Login with Facebook" />
        <Button
          text="Login with Email"
          Icon={EmailIcon}
          onClick={() => history.push('/emailLogin')}
        />

        <div className="no-account" onClick={() => history.push('/register')}>
          Don't have an account?
        </div>
      </main>
    </Styled>
  )
}

export default Login

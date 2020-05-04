import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import LeftArrow from 'assets/left-arrow.icon'
import Styled from './login.styles'
import SignInWithGoogle from 'components/SignInWithGoogle.jsx'
import SignInWithEmail from 'components/signInWithEmail'
import SignInWithFacebook from 'components/signInWithFacebook/signInWithFacebook'
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

        <SignInWithGoogle text="Login with Google" />
        <SignInWithFacebook text="Login with Facebook" />
        <Button
          text="Login with Email"
          Icon={EmailIcon}
          onClick={() => history.push('/loginWithEmail')}
        />

        <div className="no-account" onClick={() => history.push('/register')}>
          Don't have an account?
        </div>
      </main>
    </Styled>
  )
}

export default Login

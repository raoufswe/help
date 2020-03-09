import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import withFirebaseAuth, {
  WrappedComponentProps
} from 'react-with-firebase-auth'
import { providers, firebaseAppAuth } from 'server/firebaseService'
import { Redirect } from 'react-router-dom'
import * as firebaseService from 'server/firebaseService'
import LeftArrow from 'assets/left-arrow.icon'
import Styled from './login.styles'

const Login = (
  {
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithFacebook,
    error,
    history
  },
  WrappedComponentProps
) => {
  const [Error, setError] = useState({
    showErrorToast: false,
    message: null
  })

  useEffect(() => {
    if (typeof error !== 'undefined') {
      setError(() => ({ showErrorToast: true, message: error }))
    }
  }, [error])

  const [user, setUser] = useState({})

  const onChange = e => {
    const { value } = e.target
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  const currentUser = firebaseService.getCurrentUser()
  if (currentUser) {
    return <Redirect to="/home" />
  } else {
    return (
      <Styled>
        <div className="login-container">
          <div className="login-header">
            <span
              className="login-back"
              onClick={() => history.push('/landing')}
            >
              <LeftArrow />
            </span>
            <span className="login-title">Login</span>
          </div>
          <div className="login-inputs">
            <label className="login-label">Email Address</label>
            <input
              type="email"
              onChange={onChange}
              name="email"
              className="login-input"
            />

            <label className="login-label login-password-label">Password</label>
            <input
              type="password"
              className="login-input"
              onChange={onChange}
              name="password"
            />

            <button
              className="login-button"
              onClick={e => {
                if (!e.currentTarget) {
                  return
                }
                e.preventDefault()
                signInWithEmailAndPassword(user.email, user.password)
              }}
            >
              Login
            </button>

            <span className="login-or">Or</span>
          </div>

          <div className="login-methods">
            <button
              className="login-button login-google"
              onClick={signInWithGoogle}
            >
              Google
            </button>
            <button
              className="login-button login-facebook"
              onClick={signInWithFacebook}
            >
              Facebook
            </button>
          </div>

          <IonToast
            color="danger"
            isOpen={Error.showErrorToast}
            onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
            message={Error.message}
            duration={2000}
          />
        </div>
      </Styled>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login)

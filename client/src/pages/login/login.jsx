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
import Button from 'components/button.jsx'

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

  return (
    <Styled>
      
        <main>

        <div className="login-back" onClick={() => history.push('/')}>
          <LeftArrow />
        </div>

          <div className="login-top-text">Let’s sign you in. </div>
        </main>

        <div className="login-inputs">
        <input
            type="text"
            className="login-input"
            onChange={onChange}
            name="email"
            placeholder="Email"
          />
          <input
            type="text"
            className="login-input"
            onChange={onChange}
            name="password"
            placeholder="Password"
          />
        </div>


        <div className="login-methods">
        <Button
            className="login-button"
            onClick={e => {
              if (!e.currentTarget) {
                return
              }
              e.preventDefault()
              signInWithEmailAndPassword(user.email, user.password)
            }}
            color="#2676FF"
            text="Sign me in"
          />
        <div className="login-or">OR</div>

          <Button
            className="login-method"
            color="#EA4335"
            text="Google"
            onClick={signInWithGoogle}
          />
          <Button
            className="login-method"
            color="#2676FF"
            text="Facebook"
            onClick={signInWithFacebook}
          />
          <Button
            className="login-method"
            onClick={signInWithFacebook}
            color="#000000"
            text="Apple"
          />
        </div>

        <IonToast
          color="danger"
          isOpen={Error.showErrorToast}
          onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
          message={Error.message}
          duration={2000}
        />
    </Styled>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login)

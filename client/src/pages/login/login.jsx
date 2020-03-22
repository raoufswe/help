import React, { useState, useEffect, useContext } from 'react'
import { IonToast } from '@ionic/react'
import { Redirect } from 'react-router-dom'
import LeftArrow from 'assets/left-arrow.icon'
import Styled from './login.styles'
import Button from 'components/button.jsx'
import { Context } from 'context'

const Login = ({ history }) => {
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })

  const [globalContext, setGlobalContext] = useContext(Context)
  const [user, setUser] = useState({})

  const onChange = e => {
    const { value } = e.target
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

  const signInWithEmail = async e => {
    const { email, password } = user
    if (!email || !password) return
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    }
    const response = await fetch(
      'http://localhost:3000/user/auth',
      requestOptions
    )
    const data = await response.json()
    if (data.success === false) {
      setError({
        showErrorToast: true,
        message: data.errors
      })
    } else {
      setGlobalContext({ ...globalContext, currentUser: data })
      history.push('/dashboard')
    }
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
          type="password"
          className="login-input"
          onChange={onChange}
          name="password"
          placeholder="Password"
        />
      </div>

      <div className="login-methods">
        <Button
          className="login-button"
          onClick={signInWithEmail}
          color="#2676FF"
          text="Sign me in"
        />
        <div className="login-or">OR</div>

        <Button
          className="login-method"
          color="#EA4335"
          text="Google"
          // onClick={signInWithGoogle}
        />
        <Button
          className="login-method"
          color="#2676FF"
          text="Facebook"
          // onClick={signInWithFacebook}
        />
        <Button
          className="login-method"
          // onClick={signInWithFacebook}
          color="#000000"
          text="Apple"
        />
      </div>

      <IonToast
        color="danger"
        isOpen={error.showErrorToast}
        onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
        message={error.message}
        duration={2000}
      />
    </Styled>
  )
}

export default Login

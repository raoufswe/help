import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import LeftArrow from 'assets/left-arrow.icon'
import Styled from './login.styles'
import SignInWithGoogle from 'components/SignInWithGoogle.jsx'
import SignInWithEmail from 'components/signInWithEmail'

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
        <SignInWithEmail user={user} />
        <div className="login-or">OR</div>
        <SignInWithGoogle />
        {/* <Button
          className="login-method"
          color="#2676FF"
          text="Facebook"
          as="a"
          href=" user/facebook"
        /> */}
      </div>
    </Styled>
  )
}

export default Login

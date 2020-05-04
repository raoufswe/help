import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import Styled from './registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import SignInWithGoogle from 'components/SignInWithGoogle.jsx'

const Registration = ({ history }) => {
  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <Styled>
      <main>
        <div className="registration-back" onClick={() => history.push('/')}>
          <LeftArrow />
        </div>

        <div className="registration-top-text">
          Let’s get you started. How would you like to set up your account?
        </div>
      </main>

      <div className="register-methods">
        <Button
          color="#2676FF"
          className="register-method"
          text="Email"
          onClick={() => history.push('/registerName')}
        />

        <SignInWithGoogle />

        <Button
          color="rgba(38, 118, 255, 0.9)"
          className="register-method"
          text="Facebook"
          as="a"
          href=" user/facebook"
        />
      </div>
    </Styled>
  )
}

export default Registration

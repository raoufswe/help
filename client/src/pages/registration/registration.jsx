import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import Styled from './registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import CreateWithEmail from 'components/createWithEmail'
import SignInWithGoogle from 'components/SignInWithGoogle.jsx'
import SignInWithFacebook from 'components/signInWithFacebook'
import Button from 'components/button'
import EmailIcon from 'assets/email.icon.jsx'

const Registration = ({ history }) => {
  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <Styled>
      <div className="back" onClick={() => history.push('/')}>
        <LeftArrow />
      </div>

      <main>
        <div className="create-account">
          <div>Create</div>
          <div>an account</div>
        </div>

        <SignInWithGoogle text="Create with Google" />
        <SignInWithFacebook text="Create with Facebook" />
        <Button
          text="Create with Email"
          Icon={EmailIcon}
          onClick={() => history.push('/createWithEmail')}
        />

        <div
          className="already-have-account"
          onClick={() => history.push('/login')}
        >
          Already have an account?
        </div>
      </main>
    </Styled>
  )
}

export default Registration

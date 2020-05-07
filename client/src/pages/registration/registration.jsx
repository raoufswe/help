import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import Styled from './registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import GoogleAuth from 'components/googleAuth'
import FacebookAuth from 'components/facebookAuth'
import Button from 'components/button'
import EmailIcon from 'assets/email.icon.jsx'
import { IonPage } from '@ionic/react'

const Registration = ({ history }) => {
  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <IonPage id="register">
      <Styled>
        <div className="back" onClick={() => history.push('/')}>
          <LeftArrow />
        </div>

        <main>
          <div className="create-account">
            <div>Create</div>
            <div>an account</div>
          </div>

          <GoogleAuth text="Create with Google" />
          <FacebookAuth text="Create with Facebook" />
          <Button
            text="Create with Email"
            Icon={EmailIcon}
            onClick={() => history.push('/emailSignUp')}
          />

          <div
            className="already-have-account"
            onClick={() => history.push('/login')}
          >
            Already have an account?
          </div>
        </main>
      </Styled>
    </IonPage>
  )
}

export default Registration

import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import './registration.scss'
import GoogleAuth from 'components/googleAuth'
import FacebookAuth from 'components/facebookAuth'
import Button from 'components/button'
import EmailIcon from 'assets/email.icon.jsx'
import { IonContent, IonRouterLink } from '@ionic/react'
import LeftArrow from 'assets/left-arrow.icon'

const Registration = ({ history }) => {
  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <IonContent scrollY={false}>
      <div className="registration">
        <IonRouterLink routerLink="/" routerDirection="back">
          <LeftArrow />
        </IonRouterLink>

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

        <IonRouterLink
          className="already-have-account"
          routerLink="/login"
          routerDirection="forward"
        >
          Already have an account?
        </IonRouterLink>
      </div>
    </IonContent>
  )
}

export default Registration

import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import Styled from './registration.styles'
import GoogleAuth from 'components/googleAuth'
import FacebookAuth from 'components/facebookAuth'
import Button from 'components/button'
import EmailIcon from 'assets/email.icon.jsx'
import { IonPage, IonContent, IonRouterLink } from '@ionic/react'
import LeftArrow from 'assets/left-arrow.icon'

const Registration = ({ history }) => {
  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <IonPage id="register">
      <IonContent scrollY={false}>
        <Styled>
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

          <div
            className="already-have-account"
            onClick={() => history.push('/login')}
          >
            Already have an account?
          </div>
        </Styled>
      </IonContent>
    </IonPage>
  )
}

export default Registration

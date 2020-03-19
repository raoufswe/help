import React, { useState } from 'react'
import * as firebase from 'firebase'
import { IonToast } from '@ionic/react'
import withFirebaseAuth, {
  WrappedComponentProps
} from 'react-with-firebase-auth'
import { providers, firebaseAppAuth } from 'server/firebaseService'
import { Redirect } from 'react-router-dom'
import * as firebaseService from 'server/firebaseService'
import Styled from './registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'

const Registration = (
  { history, signInWithGoogle, signInWithFacebook },
  WrappedComponentProps
) => {
  const [Error, setError] = useState({ showErrorToast: false, message: null })
  const [user, setUser] = useState({})

  const currentUser = firebaseService.getCurrentUser()
  if (currentUser) {
    return <Redirect to="/home" />
  } else {
    return (
      <Styled>
        <div className="registration-container">
          <div className="registration-back" onClick={() => history.push('/')}>
            <LeftArrow />
          </div>

          <main>
            <div className="registration-top-text">
              Let’s get you started. How would you like to set up your account?
            </div>
            <div className="register-methods">
              <Button
                color="#2676FF"
                text="Email"
                onClick={() => history.push('/registerName')}
              />
              <Button
                color="#EA4335"
                text="Google"
                onClick={signInWithGoogle}
              />
              <Button
                color="rgba(38, 118, 255, 0.9)"
                text="Facebook"
                onClick={signInWithFacebook}
              />
              <Button
                color="#000000"
                text="Apple"
                onClick={() => console.log('Apple')}
              />
            </div>
          </main>

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
})(Registration)

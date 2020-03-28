import React, { useState } from 'react'
import { IonToast } from '@ionic/react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import Styled from './registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'

const Registration = ({ history }) => {
  const [Error, setError] = useState({ showErrorToast: false, message: null })

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
          text="Email"
          onClick={() => history.push('/registerName')}
        />
        <Button
          color="#EA4335"
          text="Google"
          onClick={() => console.log('Google')}
        />
        <Button
          color="rgba(38, 118, 255, 0.9)"
          text="Facebook"
          onClick={() => console.log('Facebook')}
        />
        <Button
          color="#000000"
          text="Apple"
          onClick={() => console.log('Apple')}
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

export default Registration

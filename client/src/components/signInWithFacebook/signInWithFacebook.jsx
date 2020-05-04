import React, { useState, useEffect } from 'react'
import Button from 'components/button'
import { IonToast } from '@ionic/react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import FacebookIcon from 'assets/facebook.icon.jsx'

export default function SignInWithFacebook({ text }) {
  const history = useHistory()
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })

  return (
    <>
      <Button text={text} Icon={FacebookIcon} />

      <IonToast
        color="danger"
        isOpen={error.showErrorToast}
        onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
        message={error.message}
        duration={2000}
      />
    </>
  )
}

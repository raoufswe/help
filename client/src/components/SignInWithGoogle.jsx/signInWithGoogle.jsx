import React, { useState, useEffect } from 'react'
import useGoogleLogin from './useGoogleLogin'
import Button from 'components/button.jsx'
import { IonToast } from '@ionic/react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import GoogleIcon from 'assets/google.icon.jsx'

export default function SignInWithGoogle({ text }) {
  const history = useHistory()
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })

  const [
    signInWithGoogle,
    { googleLoginStatus, googleToken }
  ] = useGoogleLogin()

  useEffect(() => {
    if (googleLoginStatus === 'success') {
      Cookies.set('token', googleToken)
      history.push('/dashboard')
    } else if (googleLoginStatus === 'error') {
      setError({
        showErrorToast: true,
        message: 'Something went wrong. Please try again'
      })
    }
  }, [googleLoginStatus])

  return (
    <>
      <Button text={text} onClick={signInWithGoogle} Icon={GoogleIcon} />

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

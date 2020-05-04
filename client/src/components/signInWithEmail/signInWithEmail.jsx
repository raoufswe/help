import React, { useState, useEffect } from 'react'
import useSignInWithEmail from './useSignInWithEmail'
import Cookies from 'js-cookie'
import { IonToast } from '@ionic/react'
import { useHistory } from 'react-router-dom'
import Button from 'components/button.jsx'

export default function SignInWithEmail({ user }) {
  const history = useHistory()
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })
  const [
    signInWithEmail,
    { signInWithEmailStatus, signInWithEmailRes }
  ] = useSignInWithEmail()

  useEffect(() => {
    if (signInWithEmailStatus === 'success' && signInWithEmailRes?.success) {
      Cookies.set('token', signInWithEmailRes.token)
      history.push('/dashboard')
    } else if (signInWithEmailStatus === 'error') {
      setError({
        showErrorToast: true,
        message: 'Something went wrong. Please try again'
      })
    } else if (
      !signInWithEmailRes?.success &&
      signInWithEmailStatus === 'success'
    ) {
      setError({
        showErrorToast: true,
        message: 'Invalid email or password. Please try again'
      })
    }
  }, [signInWithEmailStatus])
  return (
    <>
      <Button
        className="login-button"
        onClick={() => signInWithEmail(user)}
        color="#2676FF"
        text="Sign me in"
      />

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

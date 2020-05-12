import React, { useState, useEffect } from 'react'
import useGoogleAuth from './useGoogleAuth'
import Button from 'components/button'
import { IonToast } from '@ionic/react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import GoogleIcon from 'assets/google.icon.jsx'
import Loader from 'assets/loader.jsx'

export default function GoogleAuth({ text }) {
  const history = useHistory()
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })

  const [googleAuth, { status, token }] = useGoogleAuth()

  useEffect(() => {
    if (status === 'success') {
      Cookies.set('token', token)
      history.push('/dashboard')
    } else if (status === 'error') {
      setError({
        showErrorToast: true,
        message: 'Something went wrong. Please try again'
      })
    }
  }, [status])

  return (
    <>
      <Button text={text} onClick={googleAuth} Icon={GoogleIcon} />
      {status === 'loading' ? <Loader /> : null}
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

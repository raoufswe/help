import React, { useState, useEffect } from 'react'
import Button from 'components/button'
import { IonToast } from '@ionic/react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import FacebookIcon from 'assets/facebook.icon.jsx'
import useFacebookAuth from './useFacebookAuth'

export default function FacebookAuth({ text }) {
  const history = useHistory()
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })
  const [facebookAuth, { status, data }] = useFacebookAuth()

  useEffect(() => {
    if (status === 'success' && data.success) {
      Cookies.set('token', data.token)
      history.push('/dashboard')
    } else if (status === 'error' || data?.errors) {
      setError({
        showErrorToast: true,
        message: 'Something went wrong. Please try again'
      })
    }
  }, [status])

  return (
    <>
      <Button text={text} Icon={FacebookIcon} onClick={facebookAuth} />

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

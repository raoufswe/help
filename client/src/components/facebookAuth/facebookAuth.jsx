import React, { useState, useEffect } from 'react'
import Button from 'components/button'
import { IonToast } from '@ionic/react'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import FacebookIcon from 'assets/facebook.icon.jsx'
import useFacebookAuth from './useFacebookAuth'
import { registerWebPlugin, Plugins } from '@capacitor/core'
import { FacebookLogin } from '@rdlabo/capacitor-facebook-login'
import Loader from 'assets/loader.jsx'

export default function FacebookAuth({ text }) {
  const history = useHistory()
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })
  const [facebookAuth, { status, data }] = useFacebookAuth()

  const FacebookSignIn = async () => {
    const FACEBOOK_PERMISSIONS = ['public_profile', 'email', 'user_gender']
    const result = await Plugins.FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS
    })
    if (result?.accessToken) {
      const fetchUserData = await fetch(
        `https://graph.facebook.com/me?fields=id,name,gender&access_token=${result.accessToken.token}`
      )
      const userData = await fetchUserData.json()
      if (userData?.id) {
        facebookAuth(userData)
      }
    }
  }

  useEffect(() => {
    registerWebPlugin(FacebookLogin)
  }, [])

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
      {status === 'loading' && <Loader />}
      <Button text={text} Icon={FacebookIcon} onClick={FacebookSignIn} />
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

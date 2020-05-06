import { useEffect } from 'react'
import { useMutation, queryCache } from 'react-query'
import { registerWebPlugin, Plugins } from '@capacitor/core'
import { FacebookLogin } from '@rdlabo/capacitor-facebook-login'

export default function useFacebookAuth() {
  registerWebPlugin(FacebookLogin)

  const handleFacebookAuth = async ({ userData }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        facebookId: userData.id,
        name: userData.name
      })
    }
    const data = await fetch(
      `http://localhost:3000/user/facebook`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleFacebookAuth)

  const facebookAuth = async () => {
    const FACEBOOK_PERMISSIONS = ['public_profile']
    const result = await FacebookLogin.login({
      permissions: FACEBOOK_PERMISSIONS
    })
    const fetchUserData = await fetch(
      `https://graph.facebook.com/me?fields=id,name&access_token=${result.accessToken.token}`
    )
    const userData = await fetchUserData.json()

    try {
      await mutate({ userData })
    } catch (error) {
      console.log(error)
    }
  }

  return [facebookAuth, { status, data }]
}

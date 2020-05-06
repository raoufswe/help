import { useMutation, queryCache } from 'react-query'
import '@codetrix-studio/capacitor-google-auth'
import { Plugins } from '@capacitor/core'

export default function useGoogleAuth() {
  const handleGoogleAuth = async ({ result }) => {
    console.log(result)
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        googleId: result.id,
        name: result.name,
        email: result.email
      })
    }
    const data = await fetch(
      `https://help-mv.herokuapp.com/user/google`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleGoogleAuth)

  const googleAuth = async () => {
    const result = await Plugins.GoogleAuth.signIn()
    if (result) {
      try {
        await mutate({ result })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return [googleAuth, { status, token: data?.token }]
}

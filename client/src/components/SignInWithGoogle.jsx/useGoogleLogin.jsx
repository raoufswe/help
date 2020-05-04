import { useMutation, queryCache } from 'react-query'
import '@codetrix-studio/capacitor-google-auth'
import { Plugins } from '@capacitor/core'

export default function useGoogleLogin() {
  const handleGoogleLogin = async ({ result }) => {
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
      `http://localhost:3000/user/google`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleGoogleLogin)

  console.log({ data })

  const signInWithGoogle = async () => {
    const result = await Plugins.GoogleAuth.signIn()
    if (result) {
      try {
        await mutate({ result })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return [
    signInWithGoogle,
    { googleLoginStatus: status, googleToken: data?.token }
  ]
}

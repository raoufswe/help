import { useMutation } from 'react-query'

export default function useSignInWithEmail() {
  const handleSignInWithEmail = async ({ user }) => {
    const { email, password } = user
    if (!email || !password) return
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    }
    const response = await fetch(
      'https://help-mv.herokuapp.com/user/auth',
      requestOptions
    )
    const data = await response.json()
  }

  const [mutate, { status, data }] = useMutation(handleSignInWithEmail)

  const signInWithEmail = async user => {
    try {
      await mutate({ user })
    } catch (error) {
      console.log(error)
    }
  }

  return [
    signInWithEmail,
    { signInWithEmailStatus: status, signInWithEmailRes: data }
  ]
}

import { useMutation, queryCache } from 'react-query'

export default function useGoogleAuth() {
  const handleGoogleAuth = async ({ result }) => {
    console.log(result)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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

  const googleAuth = async result => {
    try {
      await mutate({ result })
    } catch (error) {
      console.log(error)
    }
  }

  return [googleAuth, { status, token: data?.token }]
}

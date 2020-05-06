import { useMutation, queryCache } from 'react-query'

export default function useEmailLogin() {
  const handleEmailLogin = async ({ userDetails }) => {
    const { email, password } = userDetails

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
    return await response.json()
  }

  const [mutate, { status, data }] = useMutation(handleEmailLogin)

  const emailLogin = async userDetails => {
    try {
      await mutate({ userDetails })
    } catch (error) {
      console.log(error)
    }
  }

  return [emailLogin, { status, data }]
}

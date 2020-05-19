import { useMutation, queryCache } from 'react-query'
import Cookies from 'js-cookie'

export default function useEmailSignUp() {
  const handleEmailSignUp = async ({ userDetails }) => {
    const { name, email, password, gender } = userDetails

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password,
        gender
      })
    }
    const response = await fetch(
      'https://help-mv.herokuapp.com/user/register',
      requestOptions
    )
    return await response.json()
  }

  const [mutate, { status, data }] = useMutation(handleEmailSignUp)

  const emailSignUp = async userDetails => {
    try {
      await mutate({ userDetails })
    } catch (error) {
      console.log(error)
    }
  }

  return [emailSignUp, { status, data }]
}

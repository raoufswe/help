import { useMutation, queryCache } from 'react-query'
import Cookies from 'js-cookie'

export default function useCreateWithEmail() {
  const handleCreateEmail = async ({ userDetails }) => {
    const { name, email, password } = userDetails

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    const response = await fetch(
      'https://help-mv.herokuapp.com/user/register',
      requestOptions
    )
    return await response.json()
  }

  const [mutate, { status, data }] = useMutation(handleCreateEmail)

  const createEmail = async userDetails => {
    try {
      await mutate({ userDetails })
    } catch (error) {
      console.log(error)
    }
  }

  return [createEmail, { status, data }]
}

import { useEffect } from 'react'
import { useMutation, queryCache } from 'react-query'

export default function useFacebookAuth() {
  const handleFacebookAuth = async ({ userData }) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        facebookId: userData.id,
        name: userData.name,
        gender: userData.gender
      })
    }
    const data = await fetch(
      `https://help-mv.herokuapp.com/user/facebook`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleFacebookAuth)

  const facebookAuth = async userData => {
    try {
      await mutate({ userData })
    } catch (error) {
      console.log(error)
    }
  }

  return [facebookAuth, { status, data }]
}

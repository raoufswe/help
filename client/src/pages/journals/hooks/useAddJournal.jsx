import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useAddJournal() {
  const { id: userID } = getUserDetails()

  const handleSaveJournal = async ({ content }) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        content,
        userID
      })
    }
    const data = await fetch(
      `https://help-mv.herokuapp.com/journals`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status }] = useMutation(handleSaveJournal, {
    onSuccess: () => queryCache.refetchQueries('journals')
  })

  const saveJournal = async content => {
    try {
      await mutate({ content })
    } catch (error) {
      console.log(error)
    }
  }

  return [saveJournal, { status }]
}

import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useAddGratefulThing() {
  const { id: userID } = getUserDetails()

  const handleSaveGratefulThing = async ({ content }) => {
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
      `https://help-mv.herokuapp.com/grateful`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status }] = useMutation(handleSaveGratefulThing, {
    onSuccess: () => queryCache.refetchQueries('gratefulThings')
  })

  const saveGrateful = async content => {
    try {
      await mutate({ content })
    } catch (error) {
      console.log(error)
    }
  }

  return [saveGrateful, { status }]
}

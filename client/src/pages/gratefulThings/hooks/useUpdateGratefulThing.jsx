import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useUpdateGratefulThing() {
  const { id: userID } = getUserDetails()

  const handleUpdateGratefulThing = async ({ content, id }) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        content
      })
    }
    const data = await fetch(
      `https://help-mv.herokuapp.com/grateful/${userID}/${id}`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status }] = useMutation(handleUpdateGratefulThing, {
    onSuccess: () => queryCache.refetchQueries('gratefulThings')
  })

  const updateGrateful = async ({ content, id }) => {
    try {
      await mutate({ content, id })
    } catch (error) {
      console.log(error)
    }
  }

  return [updateGrateful, { updateStatus: status }]
}

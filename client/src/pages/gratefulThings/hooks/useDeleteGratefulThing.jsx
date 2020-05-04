import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useDeleteGratefulThing() {
  const handleDeleteGratefulThing = async ({ id }) => {
    const { id: userID } = getUserDetails()
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }
    const response = await fetch(
      `https://help-mv.herokuapp.com/grateful/${userID}/${id}`,
      requestOptions
    )
    return await response.json()
  }

  const [mutate, { status }] = useMutation(handleDeleteGratefulThing, {
    onSuccess: () => queryCache.refetchQueries('gratefulThings')
  })

  const deleteGratefulThing = async id => {
    try {
      await mutate({ id })
    } catch (error) {
      console.log(error)
    }
  }

  return [deleteGratefulThing, { deleteStatus: status }]
}

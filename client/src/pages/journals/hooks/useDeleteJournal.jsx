import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useDeleteJournal() {
  const handleDeleteJournal = async ({ id }) => {
    const { id: userID } = getUserDetails()
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }
    const response = await fetch(
      `https://help-mv.herokuapp.com/journals/${userID}/${id}`,
      requestOptions
    )

    return await response.json()
  }

  const [mutate, { status }] = useMutation(handleDeleteJournal, {
    onSuccess: () => queryCache.refetchQueries('journals')
  })

  const deleteJournal = async id => {
    try {
      await mutate({ id })
      console.log('done')
    } catch (error) {
      console.log(error)
    }
  }

  return [deleteJournal, { deleteStatus: status }]
}

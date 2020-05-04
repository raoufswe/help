import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useUpdateJournal() {
  const { id: userID } = getUserDetails()

  const handleUpdateJournal = async ({ content, id }) => {
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
      `https://help-mv.herokuapp.com/journals/${userID}/${id}`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status }] = useMutation(handleUpdateJournal, {
    onSuccess: () => queryCache.refetchQueries('journals')
  })

  const updateJournal = async ({ content, id }) => {
    try {
      await mutate({ content, id })
    } catch (error) {
      console.log(error)
    }
  }

  return [updateJournal, { updateStatus: status }]
}

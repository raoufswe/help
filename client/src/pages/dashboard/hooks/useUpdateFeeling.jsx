import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import { getDay } from 'utils/dateHelpers/dateHelpers.js'

export default function useUpdateFeeling() {
  const { id: userID } = getUserDetails()
  const currentDay = getDay()

  const handleUpdateFeeling = async ({ feeling }) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        feeling
      })
    }
    const data = await fetch(
      `https://help-mv.herokuapp.com/feeling/${userID}`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status }] = useMutation(handleUpdateFeeling, {
    onSuccess: () => queryCache.refetchQueries('feeling')
  })

  const updateFeeling = async feeling => {
    try {
      await mutate({ feeling })
    } catch (error) {
      console.log(error)
    }
  }

  return [updateFeeling, { updateStatus: status }]
}

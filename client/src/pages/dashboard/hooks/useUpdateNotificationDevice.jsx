import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

export default function useUpdateFeeling() {
  const { id: userID } = getUserDetails()

  const handleUpdateNotificationDevice = async ({ deviceToken }) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({})
    }
    const data = await fetch(
      `http://localhost:3000/notifications/${userID}/${deviceToken}`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status }] = useMutation(handleUpdateNotificationDevice, {
    onSuccess: () => queryCache.refetchQueries('notifications')
  })

  const UpdateNotificationDevice = async deviceToken => {
    try {
      await mutate({ deviceToken })
    } catch (error) {
      console.log(error)
    }
  }

  return [UpdateNotificationDevice, { updateStatus: status }]
}

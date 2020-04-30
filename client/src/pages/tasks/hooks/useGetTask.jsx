import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'

const getTask = async (_, taskID) => {
  const { id: userID } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }
  const response = await fetch(
    `http://localhost:3000/tasks/${userID}/${taskID}`,
    requestOptions
  )

  return await response.json()
}

export default function useGetTask(taskID) {
  const { status, data, error } = useQuery(['task', taskID], getTask)

  return {
    status,
    data,
    error
  }
}

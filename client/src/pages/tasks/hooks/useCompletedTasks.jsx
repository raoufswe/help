import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getCompleteTasks = async () => {
  const { id } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `http://localhost:3000/tasks/${id}/completed`,
    requestOptions
  )
  return data
}

export default function useCompletedTasks() {
  return useQuery(['tasks', { type: 'completed' }], getCompleteTasks, {
    refetchOnWindowFocus: false
  })
}

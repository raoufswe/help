import { useQuery } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import axios from 'axios'

const getIncompleteTasks = async () => {
  const { id } = getUserDetails()
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get('token')}`
    }
  }

  const { data } = await axios.get(
    `https://help-mv.herokuapp.com/tasks/${id}/incomplete`,
    requestOptions
  )
  return data
}

export default function useIncompleteTasks() {
  const { status, data, error } = useQuery(
    ['tasks', { type: 'incomplete' }],
    getIncompleteTasks,
    {
      refetchOnWindowFocus: false
    }
  )

  return {
    inCompletedTasksStatus: status,
    inCompletedTasks: data,
    inCompletedTasksErrors: error
  }
}

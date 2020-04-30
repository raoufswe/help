import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function useDeleteTask(taskID) {
  const location = useLocation()
  const handleDeleteTask = async () => {
    const { id: userID } = getUserDetails()
    const requestOptions = {
      method: 'DELETE',
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

  const [mutate, { status, data }] = useMutation(handleDeleteTask, {
    onSuccess: () => queryCache.refetchQueries('tasks')
  })

  const deleteTask = async () => {
    try {
      await mutate()
      console.log('done')
      Cookies.remove(`selectedDay-${location.pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  return [deleteTask, { deleteStatus: status, response: data }]
}

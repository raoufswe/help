import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function useDeleteTask() {
  const location = useLocation()
  const handleDeleteTask = async ({ id: taskID }) => {
    const { id: userID } = getUserDetails()
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }
    const response = await fetch(
      `https://help-mv.herokuapp.com/tasks/${userID}/${taskID}`,
      requestOptions
    )

    return await response.json()
  }

  const [mutate, { status, data }] = useMutation(handleDeleteTask, {
    onSuccess: () => queryCache.refetchQueries('tasks')
  })

  const deleteTask = async id => {
    try {
      await mutate({ id })
      console.log('done')
      Cookies.remove(`selectedDay-${location.pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  return [deleteTask, { deleteStatus: status, deleteResponse: data }]
}

import { useContext } from 'react'
import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import { Context } from 'context'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function useSaveTask() {
  const location = useLocation()
  const [{ task }] = useContext(Context)
  const { title, details, date, time } = task || {}
  const { id: userID } = getUserDetails()

  const handleSaveTask = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        title,
        details,
        date,
        time,
        userID
      })
    }
    const data = await fetch(
      `https://help-mv.herokuapp.com/tasks`,
      requestOptions
    )
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleSaveTask, {
    onSuccess: () => queryCache.refetchQueries('tasks')
  })

  const saveTask = async () => {
    try {
      await mutate()
      Cookies.remove(`selectedDay-${location.pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  return [saveTask, { savingStatus: status, response: data }]
}

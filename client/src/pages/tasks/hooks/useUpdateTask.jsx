import React, { useContext } from 'react'
import { useMutation, queryCache } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import { Context } from 'context'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function useUpdateTask() {
  const location = useLocation()
  const [{ task }] = useContext(Context)
  const { title, details, completed, date, time } = task || {}
  const { id: userID } = getUserDetails()

  const handleUpdateTask = async ({ id: taskID }) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        title,
        details,
        date,
        time,
        completed,
        userID
      })
    }
    const data = await fetch(`tasks/${userID}/${taskID}`, requestOptions)
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleUpdateTask, {
    onSuccess: () => queryCache.refetchQueries('tasks')
  })

  const updateTask = async id => {
    try {
      await mutate({ id })
      Cookies.remove(`selectedDay-${location.pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  return [updateTask, { updateStatus: status, updateResponse: data }]
}

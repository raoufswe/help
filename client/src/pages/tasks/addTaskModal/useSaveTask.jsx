import React, { useContext } from 'react'
import { useMutation } from 'react-query'
import { getUserDetails } from 'utils/verifyToken.js'
import { Context } from 'context'
import Cookies from 'js-cookie'
import { useLocation } from 'react-router'

export default function useSaveTask() {
  const location = useLocation()
  const [{ addTask }] = useContext(Context)
  const { title, details, completed, date, time } = addTask || {}
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
        completed,
        date,
        time,
        userID
      })
    }
    const data = await fetch(`http://localhost:3000/tasks`, requestOptions)
    return data.json()
  }

  const [mutate, { status, data }] = useMutation(handleSaveTask)

  const saveTask = async () => {
    try {
      await mutate()
      console.log('done')
      Cookies.remove(`selectedDay-${location.pathname}`)
    } catch (error) {
      console.log(error)
    }
  }

  return [saveTask, { status, response: data }]
}

import React, { useState, createContext } from 'react'
import { getDayNumber } from 'utils/dateHelpers/dateHelpers.js'

export const Context = createContext()

export const Provider = props => {
  const [globalContext, setGlobalContext] = useState({
    registerUser: {},
    currentUser: {},
    task: {
      title: '',
      details: '',
      date: '',
      time: '',
      completed: false,
      repeat: {
        numberOfTimes: '1',
        every: 'week',
        start: '1',
        everyDayOfMonth: getDayNumber()
      }
    }
  })

  return (
    <Context.Provider value={[globalContext, setGlobalContext]}>
      {props.children}
    </Context.Provider>
  )
}

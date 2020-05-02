import React, { useState, createContext } from 'react'

export const Context = createContext()

export const Provider = props => {
  const [globalContext, setGlobalContext] = useState({
    registerUser: {},
    currentUser: {},
    task: {
      title: '',
      details: '',
      date: '',
      time: ''
    }
  })

  return (
    <Context.Provider value={[globalContext, setGlobalContext]}>
      {props.children}
    </Context.Provider>
  )
}

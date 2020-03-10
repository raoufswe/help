import React, { useState, createContext } from 'react'

export const Context = createContext()

export const Provider = props => {
  const [globalContext, setGlobalContext] = useState({
    registerAccountDetails: {
      fullName: '',
      email: '',
      password: ''
    },
    data: []
  })

  return (
    <Context.Provider value={[globalContext, setGlobalContext]}>
      {props.children}
    </Context.Provider>
  )
}

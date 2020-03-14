import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SideMenu from 'components/sideMenu/sideMenu.jsx'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  let active = true
  return (
    <Route
      {...rest}
      render={props =>
        active ? (
          <>
            <SideMenu isOpen={isOpen} onClick={onClick} />
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{ pathname: '/landing', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute

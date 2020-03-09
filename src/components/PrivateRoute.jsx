import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  let active = true
  return (
    <Route
      {...rest}
      render={props =>
        active ? (
          <Component {...props} />
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

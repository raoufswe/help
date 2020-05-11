import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        verifyToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute

import React, { useState } from 'react'
import { Route, Redirect, useRouteMatch } from 'react-router-dom'
import SideMenu from 'components/sideMenu/sideMenu.jsx'
import Cookies from 'js-cookie'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const addGratefulThingPage = useRouteMatch('/addGratefulThing')
  const JournalingPage = useRouteMatch('/journaling')
  const addJournalPage = useRouteMatch('/addJournal')
  const addTaskPage = useRouteMatch('/addTask')
  const [isOpen, setOpen] = useState(false)
  const token = Cookies.get('token')

  const onClick = () => {
    setOpen(!isOpen)
  }

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <div style={{ height: '100%', ...rest.style }}>
            <SideMenu
              isOpen={isOpen}
              onClick={onClick}
              hide={
                addGratefulThingPage ||
                JournalingPage ||
                addJournalPage ||
                addTaskPage
              }
            />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute

import React, { useState } from 'react'
import { Route, Redirect, useRouteMatch } from 'react-router-dom'
import SideMenu from 'components/sideMenu/sideMenu.jsx'
import { verifyToken } from 'utils/verifyToken.js'
import { IonPage } from '@ionic/react'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const addGratefulThingPage = useRouteMatch('/addGratefulThing')
  const updateGratefulThingPage = useRouteMatch('/gratefulThing')
  const journalsPage = useRouteMatch('/journals')
  const addJournalPage = useRouteMatch('/addJournal')
  const updateJournal = useRouteMatch('/updateJournal')
  const taskPage = useRouteMatch('/tasks/:id')
  const PLayerPage = useRouteMatch('/player')

  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  const isValidToken = verifyToken()

  return (
    <Route
      {...rest}
      render={props =>
        isValidToken ? (
          <IonPage id="private-route">
            <div style={{ height: '100%', ...rest.style }}>
              <SideMenu
                isOpen={isOpen}
                onClick={onClick}
                hide={
                  addGratefulThingPage ??
                  updateGratefulThingPage ??
                  journalsPage ??
                  addJournalPage ??
                  updateJournal ??
                  taskPage ??
                  PLayerPage
                }
              />
              <Component {...props} />
            </div>
          </IonPage>
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute

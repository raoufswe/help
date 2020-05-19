import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import PrivateRoute from 'components/PrivateRoute'
import Dashboard from 'pages/dashboard'
import Login from 'pages/login'
import EmailLogin from 'components/emailLogin'
import Registration from 'pages/registration'
import Landing from 'pages/landing'
import EmailSignUp from 'components/emailSignUp'
import FAQ from 'pages/FAQ'
import Hospitals from 'pages/hospitals'
import GratefulThings from 'pages/gratefulThings'
import AddGratefulThing from 'pages/gratefulThings/addGratefulThing'
import GratefulThing from 'pages/gratefulThings/gratefulThing.jsx'
import journals from 'pages/journals'
import AddJournal from 'pages/journals/addJournal'
import UpdateJournal from 'pages/journals/updateJournal'
import Tasks from 'pages/tasks'
import Task from 'pages/tasks/task'
import Player from 'pages/player'
import Exercises from 'pages/exercises'
import { IonReactRouter } from '@ionic/react-router'
import { IonApp, IonButtons, IonPage, IonSplitPane } from '@ionic/react'
import Menu from 'components/menu'
import { verifyToken } from 'utils/verifyToken.js'

const App = () => {
  return (
    <Provider>
      <IonReactRouter>
        <IonApp>
          <IonSplitPane contentId="main" disabled={verifyToken()}>
            <Menu />
            <IonPage id="main">
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/register" exact component={Registration} />
                <Route path="/emailSignUp" exact component={EmailSignUp} />
                <Route path="/login" exact component={Login} />
                <Route path="/EmailLogin" exact component={EmailLogin} />
                <PrivateRoute
                  style={{ background: '#F5F5FA' }}
                  name="dashboard"
                  path="/dashboard"
                  component={Dashboard}
                  exact
                />
                <PrivateRoute
                  name="Hospitals"
                  path="/hospitals"
                  component={Hospitals}
                  exact
                />
                <PrivateRoute
                  name="Journals"
                  path="/journals"
                  component={journals}
                  exact
                />
                <PrivateRoute
                  name="AddJournal"
                  path="/addJournal"
                  component={AddJournal}
                  exact
                />
                <PrivateRoute
                  name="UpdateJournal"
                  path="/updateJournal/:id"
                  component={UpdateJournal}
                  exact
                />
                <PrivateRoute
                  name="GratefulThings"
                  path="/gratefulThings"
                  component={GratefulThings}
                  exact
                />
                <PrivateRoute
                  name="AddGratefulThing"
                  path="/addGratefulThing"
                  component={AddGratefulThing}
                  exact
                />
                <PrivateRoute
                  name="GratefulThing"
                  path="/gratefulThing/:id"
                  component={GratefulThing}
                  exact
                />
                <PrivateRoute
                  name="Tasks"
                  path="/tasks"
                  component={Tasks}
                  exact
                />
                <PrivateRoute
                  name="Tasks"
                  path="/tasks/:id"
                  component={Task}
                  exact
                />
                <PrivateRoute name="FAQ" path="/FAQ" component={FAQ} exact />
                <PrivateRoute
                  name="Player"
                  path="/player"
                  component={Player}
                  exact
                />
                <PrivateRoute
                  name="Exercises"
                  path="/exercises"
                  component={Exercises}
                  exact
                />
              </Switch>
            </IonPage>
          </IonSplitPane>
        </IonApp>
      </IonReactRouter>
    </Provider>
  )
}

export default App

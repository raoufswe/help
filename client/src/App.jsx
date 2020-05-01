import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { IonApp } from '@ionic/react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Provider } from './context'
import PrivateRoute from 'components/PrivateRoute'
import Dashboard from 'pages/dashboard'
import Login from 'pages/login'
import Registration from 'pages/registration'
import Landing from 'pages/landing'
import NameRegistration from 'pages/registration/customRegistration/name'
import EmailRegistration from 'pages/registration/customRegistration/email'
import PasswordRegistration from 'pages/registration/customRegistration/password'
import Hooray from 'pages/registration/customRegistration/hooray'
import FAQ from 'pages/FAQ'
import Hospitals from 'pages/hospitals'
import Grateful from 'pages/grateful'
import AddGratefulThing from 'pages/grateful/addGratefulThing'
import UpdateGratefulThing from 'pages/grateful/updateGratefulThing.jsx'
import Journaling from 'pages/journaling'
import AddJournal from 'pages/journaling/addJournal'
import UpdateJournal from 'pages/journaling/updateJournal'
import Tasks from 'pages/tasks'
import Task from 'pages/tasks/task'
import Player from 'pages/player'
import Exercises from 'pages/exercises'
import { IonReactRouter } from '@ionic/react-router'
import { IonRouterOutlet } from '@ionic/react'

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Provider>
            {/* <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={350}
                   classNames="fade"
                > */}
            <Route path="/" exact component={Landing} />
            <Route path="/register" exact component={Registration} />
            <Route path="/registerName" exact component={NameRegistration} />
            <Route path="/registerEmail" exact component={EmailRegistration} />
            <Route
              path="/registerPassword"
              exact
              component={PasswordRegistration}
            />
            <Route path="/hooray" exact component={Hooray} />
            <Route path="/login" exact component={Login} />
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
              name="Journaling"
              path="/journaling"
              component={Journaling}
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
              name="Grateful"
              path="/grateful"
              component={Grateful}
              exact
            />
            <PrivateRoute
              name="AddGratefulThing"
              path="/addGratefulThing"
              component={AddGratefulThing}
              exact
            />
            <PrivateRoute
              name="UpdateGratefulThing"
              path="/updateGratefulThing/:id"
              component={UpdateGratefulThing}
              exact
            />
            <PrivateRoute name="Tasks" path="/tasks" component={Tasks} exact />
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
            {/* </CSSTransition>
              </TransitionGroup>
            )} */}
            />
          </Provider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

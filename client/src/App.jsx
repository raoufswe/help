import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { IonApp, IonButtons } from '@ionic/react'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Provider } from './context'
import PrivateRoute from 'components/PrivateRoute'
import Dashboard from 'pages/dashboard'
import Login from 'pages/login'
import EmailLogin from 'components/emailLogin'
import Registration from 'pages/registration'
import Landing from 'pages/landing'
import EmailSignUp from 'components/emailSignUp'
import Hooray from 'pages/registration/customRegistration/hooray'
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
import { IonRouterOutlet } from '@ionic/react'

const App = () => {
  return (
    <IonApp id="main">
      <IonReactRouter>
        <IonRouterOutlet>
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
          <Route path="/emailSignUp" exact component={EmailSignUp} />

          <Route path="/hooray" exact component={Hooray} />
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
          <PrivateRoute name="Tasks" path="/tasks" component={Tasks} exact />
          <PrivateRoute name="Tasks" path="/tasks/:id" component={Task} exact />
          <PrivateRoute name="FAQ" path="/FAQ" component={FAQ} exact />
          <PrivateRoute name="Player" path="/player" component={Player} exact />
          <PrivateRoute
            name="Exercises"
            path="/exercises"
            component={Exercises}
            exact
          />
          {/* </CSSTransition>
              </TransitionGroup>
            )} */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

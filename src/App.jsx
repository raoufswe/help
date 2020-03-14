import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonApp, IonRouterOutlet, IonReactRouter } from '@ionic/react'
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

const App = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Provider>
          <IonRouterOutlet>
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
              name="dashboard"
              path="/dashboard"
              component={Dashboard}
              exact
            />
            <PrivateRoute name="FAQ" path="/FAQ" component={FAQ} exact />
          </IonRouterOutlet>
        </Provider>
      </IonReactRouter>
    </IonApp>
  )
}

export default App

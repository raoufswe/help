import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  IonApp,
  IonRouterOutlet,
  IonSpinner,
  IonReactRouter
} from '@ionic/react'
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
  return false ? (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <IonSpinner name="circles" />
    </div>
  ) : (
    <IonApp>
      <IonReactRouter>
        <Provider>
          <IonRouterOutlet>
            <Route path="/landing" component={Landing} />
            <Route path="/register" component={Registration} />
            <Route path="/registerName" component={NameRegistration} />
            <Route path="/registerEmail" component={EmailRegistration} />
            <Route path="/registerPassword" component={PasswordRegistration} />
            <Route path="/hooray" component={Hooray} />
            <Route path="/login" component={Login} />
            <PrivateRoute
              name="dashboard"
              path="/dashboard"
              component={Dashboard}
            />
            <PrivateRoute name="FAQ" path="/FAQ" component={FAQ} />
          </IonRouterOutlet>
        </Provider>

        <Redirect exact from="/" to="landing" />
      </IonReactRouter>
    </IonApp>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import './emailLogin.scss'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import Back from 'components/back.jsx'
import ClosedEyeIcon from 'assets/closedEye.icon.jsx'
import OpenEyeIcon from 'assets/openEye.icon.jsx'
import useEmailLogin from './useEmailLogin'
import Loader from 'assets/loader.jsx'
import { IonContent } from '@ionic/react'

export default function EmailLogin() {
  const history = useHistory()
  const [emailLogin, { status, data }] = useEmailLogin()
  const [showPassword, setShowPassword] = useState(false)
  const [state, setState] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    showErrorToast: false,
    message: []
  })

  const onChange = e => {
    const { value, name } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  useEffect(() => {
    if (!data) return
    if (data?.success && status === 'success') {
      Cookies.set('token', data?.token)
      history.push('/dashboard')
    } else if (!data?.success || status === 'error') {
      setError({
        showErrorToast: true,
        message: !data?.success
          ? 'Wrong credentials, Please try again'
          : 'Something went wrong. Please try again'
      })
    }
  }, [status])

  const onEmailLogin = () => {
    const { password, email } = state
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    )

    if (!password || !email) {
      setError({
        showErrorToast: true,
        message: 'Please fill up all fields'
      })
    } else if (!validEmail) {
      setError({
        showErrorToast: true,
        message: 'Please enter a valid email address'
      })
    } else {
      emailLogin(state)
    }
  }

  return (
    <IonContent scrollY={false}>
      <div className="email-login">
        <div className="header">
          <Back />
          <span>Let's log you in</span>
        </div>

        <main>
          <input
            type="text"
            onChange={onChange}
            name="email"
            placeholder="Email"
          />
          <div className="password">
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={onChange}
              name="password"
              placeholder="Password"
            />
            <button
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <OpenEyeIcon /> : <ClosedEyeIcon />}
            </button>
          </div>

          <button className="login" onClick={onEmailLogin}>
            Sign in
          </button>
        </main>

        {status === 'loading' ? <Loader /> : null}

        <IonToast
          color="danger"
          isOpen={error.showErrorToast}
          onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
          message={error.message}
          duration={2000}
        />
      </div>
    </IonContent>
  )
}

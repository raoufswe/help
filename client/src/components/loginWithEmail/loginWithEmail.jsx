import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import Styled from './loginWithEmail.styles'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import Button from 'components/button'
import ValidPassword from 'assets/validPassword.icon.jsx'
import InvalidPassword from 'assets/invalidPassword.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import ClosedEyeIcon from 'assets/closedEye.icon.jsx'
import OpenEyeIcon from 'assets/openEye.icon.jsx'
import useLoginWithEmail from './useLoginWithEmail'

export default function LoginWithEmail() {
  const history = useHistory()
  const [loginWithEmail, { status, data }] = useLoginWithEmail()
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

  console.log(data)

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

  const onLogin = () => {
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
      loginWithEmail(state)
    }
  }

  return (
    <Styled>
      <div className="header" onClick={() => history.push('/login')}>
        <LeftArrow />
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

        <button className="login" onClick={onLogin}>
          Sign in
        </button>
      </main>

      <IonToast
        color="danger"
        isOpen={error.showErrorToast}
        onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
        message={error.message}
        duration={2000}
      />
    </Styled>
  )
}

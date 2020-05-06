import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import Styled from './emailSignUp.styles'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import LeftArrow from 'assets/left-arrow.icon'
import ClosedEyeIcon from 'assets/closedEye.icon.jsx'
import OpenEyeIcon from 'assets/openEye.icon.jsx'
import useEmailSignUp from './useEmailSignUp'
import Loader from 'assets/loader.jsx'

export default function EmailSignUp() {
  const history = useHistory()
  const [emailSignUp, { status, data }] = useEmailSignUp()
  const [showPassword, setShowPassword] = useState(false)
  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState({
    showErrorToast: false,
    message: ''
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
        message:
          data?.errors.code === 11000
            ? 'The used email address exists'
            : 'Something went wrong. Please try again'
      })
    }
  }, [status])

  const onEmailSignUp = () => {
    const { name, password, email } = state
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    )

    if (!name || !password || !email) {
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
      emailSignUp(state)
    }
  }

  return (
    <Styled>
      <div className="header" onClick={() => history.push('/register')}>
        <LeftArrow />
        <span>Account Details</span>
      </div>

      <main>
        <input type="text" onChange={onChange} name="name" placeholder="Name" />
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

        <button className="sign-up" onClick={onEmailSignUp}>
          Sign up
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
    </Styled>
  )
}

import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import './emailSignUp.scss'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import Back from 'components/back.jsx'
import ClosedEyeIcon from 'assets/closedEye.icon.jsx'
import OpenEyeIcon from 'assets/openEye.icon.jsx'
import useEmailSignUp from './useEmailSignUp'
import Loader from 'assets/loader.jsx'
import { IonContent } from '@ionic/react'
import MaleIcon from 'assets/male.icon.jsx'
import FemaleIcon from 'assets/female.icon.jsx'

export default function EmailSignUp() {
  const history = useHistory()
  const [emailSignUp, { status, data }] = useEmailSignUp()
  const [showPassword, setShowPassword] = useState(false)
  const [activeGender, setActiveGender] = useState(null)
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
    } else if (!activeGender) {
      setError({
        showErrorToast: true,
        message: 'Please select your gender'
      })
    } else if (!validEmail) {
      setError({
        showErrorToast: true,
        message: 'Please enter a valid email address'
      })
    } else {
      emailSignUp({ ...state, gender: activeGender })
    }
  }

  return (
    <IonContent scrollY={false}>
      <div className="sign-up-email">
        <div className="header">
          <Back />
          <span>Account Details</span>
        </div>

        <main>
          <input
            type="text"
            onChange={onChange}
            name="name"
            placeholder="Name"
          />
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

          <div className="gender">
            <div>
              <MaleIcon
                active={activeGender === 'male'}
                onClick={() => setActiveGender('male')}
              />
            </div>
            <div>
              <FemaleIcon
                active={activeGender === 'male'}
                onClick={() => setActiveGender('male')}
              />
            </div>
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
      </div>
    </IonContent>
  )
}

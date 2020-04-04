import React, { useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { IonToast } from '@ionic/react'
import { Context } from 'context'
import ValidPassword from 'assets/validPassword.icon.jsx'
import InvalidPassword from 'assets/invalidPassword.icon.jsx'

const CustomRegistration = ({ history }) => {
  const [globalContext, setGlobalContext] = useContext(Context)
  const [password, setPassword] = useState('')

  const [error, setError] = useState({
    showErrorToast: false,
    message: null
  })

  const onChange = e => {
    const { value } = e.target
    setPassword(value)
  }

  const longEnough = password.length > 8
  const hasNumber = /\d/.test(password)

  const onPasswordSubmit = async () => {
    const { name, email } = globalContext.registerUser
    if (!longEnough || !hasNumber || !name || !email) {
      setError({
        showErrorToast: true,
        message: 'make sure to fulfil our password policy :D'
      })
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password
        })
      }
      const response = await fetch(
        'http://localhost:3000/user/register',
        requestOptions
      )
      const data = await response.json()
      if (data.success === false) {
        console.log(data.errors)
        setError({
          showErrorToast: true,
          message:
            data.errors[0].code === 11000
              ? 'the used email address exists'
              : 'Something went wrong!'
        })
      } else {
        const { result } = data
        const [userData] = result
        const { _id, email, name } = userData
        setGlobalContext({
          currentUser: {
            ...globalContext.currentUser,
            _id,
            name,
            email
          }
        })
        history.push('/hooray')
      }
    }
  }

  return (
    <Styled>
      <main>
        <div
          className="registration-back"
          onClick={() => history.push('/registerEmail')}
        >
          <LeftArrow />
        </div>

        <div className="registration-top-text">
          Let’s protect you with a secure password.
        </div>
      </main>

      <div>
        <input
          type="password"
          className="register-input"
          onChange={onChange}
          name="password"
          placeholder="*******"
        />

        <div className="password-rules">
          <div className="password-rule">
            {longEnough ? <ValidPassword /> : <InvalidPassword />}
            Use at least eight characters
          </div>
          <div className="password-rule">
            {hasNumber ? <ValidPassword /> : <InvalidPassword />}
            Use at least one number
          </div>
        </div>
      </div>

      <Button
        color="#2676FF"
        text="Let’s keep it secure"
        className="register-button"
        onClick={onPasswordSubmit}
      />

      <IonToast
        isOpen={error.showErrorToast}
        onDidDismiss={() => setError(() => ({ showErrorToast: false }))}
        message={error.message}
        color="danger"
        duration={5000}
      />
    </Styled>
  )
}

export default CustomRegistration

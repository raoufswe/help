import React, { useState, useContext } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { IonToast } from '@ionic/react'
import { Context } from '../../../context'

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

  const onPasswordSubmit = async () => {
    const { name, email } = globalContext.registerUser
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) ||
      !name ||
      !email
    ) {
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
        setError({
          showErrorToast: true,
          message:
            data.errors[0].code === '11000'
              ? 'the used email address exists'
              : 'Something went wrong!'
        })
      } else {
        setGlobalContext({ ...globalContext, currentUser: data })
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
          <div>
            <span className="dot"></span>Use at least eight characters
          </div>
          <div>
            <span className="dot"></span>Use at least one uppercase
          </div>
          <div>
            <span className="dot"></span>Use at least one lowercase
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
        duration={1000}
      />
    </Styled>
  )
}

export default CustomRegistration

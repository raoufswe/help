import React, { useState, useContext } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { Redirect } from 'react-router-dom'
import { IonToast } from '@ionic/react'
import { Context } from '../../../context'

const CustomRegistration = ({ history }) => {
  const [globalContext, setGlobalContext] = useContext(Context)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  console.log({ globalContext })

  const onChange = e => {
    const { value } = e.target
    setPassword(value)
  }

  const onPasswordSubmit = () => {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      setGlobalContext(prevContext => {
        return {
          ...prevContext,
          registerAccountDetails: {
            ...prevContext.registerAccountDetails,
            password
          }
        }
      })
      history.push('/hooray')
    } else {
      setError(true)
    }
  }

  return (
    <Styled>
      <div className="registration-container">
        <div
          className="registration-back"
          onClick={() => history.push('/registerEmail')}
        >
          <LeftArrow />
        </div>

        <main>
          <div className="registration-top-text">
            Let’s protect you with a secure password.
          </div>
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
        </main>

        <Button
          color="#2676FF"
          text="Let’s keep it secure"
          className="register-button"
          onClick={onPasswordSubmit}
        />

        <IonToast
          isOpen={error}
          onDidDismiss={() => setError(false)}
          message="make sure to fulfil our password policy :D"
          color="danger"
          duration={1000}
        />
      </div>
    </Styled>
  )
}

export default CustomRegistration

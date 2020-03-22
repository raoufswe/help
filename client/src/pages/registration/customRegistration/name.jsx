import React, { useState, useContext } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { IonToast } from '@ionic/react'
import { Context } from '../../../context'

const CustomRegistration = ({ history }) => {
  const [, setGlobalContext] = useContext(Context)
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState(false)

  const onChange = e => {
    const { value } = e.target
    setFullName(value)
  }

  const onNameSubmit = () => {
    if (fullName?.length >= 6) {
      setGlobalContext(prevContext => {
        return {
          ...prevContext,
          registerAccountDetails: {
            ...prevContext.registerAccountDetails,
            fullName
          }
        }
      })
      history.push('/registerEmail')
    } else {
      setError(true)
    }
  }

  return (
    <Styled>

        <main>
          
        <div
          className="registration-back"
          onClick={() => history.push('/register')}
        >
          <LeftArrow />
        </div>
        
          <div className="registration-top-text">
            Hi, We're Help. What can we call you?
          </div>
          
        </main>

        <input
            type="text"
            className="register-input"
            onChange={onChange}
            name="name"
            placeholder="Your Name"
          />

        <Button
          color="#2676FF"
          text="Yes, that's me"
          className="register-button"
          onClick={onNameSubmit}
        />

      <IonToast
        isOpen={error}
        onDidDismiss={() => setError(false)}
        message="Name must not be empty and have at least 6 letters"
        color="danger"
        duration={1000}
      />
    </Styled>
  )
}

export default CustomRegistration

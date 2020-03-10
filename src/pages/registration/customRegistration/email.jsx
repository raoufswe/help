import React, { useState } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { Redirect } from 'react-router-dom'
import { IonToast } from '@ionic/react'

const CustomRegistration = ({ history }) => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)

  /// this should come from context
  let name = 'Raouf Fathi'

  const onChange = e => {
    const { value } = e.target
    setEmail(value)
  }

  const onEmailSubmit = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      history.push('/registerPassword')
    } else {
      setError(true)
    }
  }

  return (
    <Styled>
      <div className="registration-container">
        <div
          className="registration-back"
          onClick={() => history.push('/registerName')}
        >
          <LeftArrow />
        </div>

        <main>
          <div className="registration-top-text">
            That’s a nice name,
            <span className="registration-name">{name}</span>. Let’s set up your
            email.
          </div>
          <input
            type="text"
            className="register-input"
            onChange={onChange}
            name="email"
            placeholder="you@email.com"
          />
        </main>

        <Button
          color="#2676FF"
          text="Let’s set this up"
          className="register-button"
          onClick={onEmailSubmit}
        />

        <IonToast
          isOpen={error}
          onDidDismiss={() => setError(false)}
          message="this does not look like a valid email!"
          color="danger"
          duration={1000}
        />
      </div>
    </Styled>
  )
}

export default CustomRegistration

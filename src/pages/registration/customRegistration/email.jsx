import React, { useState } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { Redirect } from 'react-router-dom'

const CustomRegistration = ({ history }) => {
  const [email, setEmail] = useState({})
  let name = 'Raouf Fathi'

  const onChange = e => {
    const { value } = e.target
    setEmail({
      [e.target.name]: value
    })
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
          onClick={() => history.push('/registerPassword')}
        />
      </div>
    </Styled>
  )
}

export default CustomRegistration

import React, { useState } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { Redirect } from 'react-router-dom'

const CustomRegistration = ({ history }) => {
  return (
    <Styled>
      <div className="registration-container">
        <div
          className="registration-back"
          onClick={() => history.push('/landing')}
        >
          <LeftArrow />
        </div>

        <main>
          <div className="registration-top-text">
            Hi, We're Help. What can we call you?
          </div>
          <input
            type="text"
            className="register-name-input"
            // onChange={onChange}
            name="name"
            placeholder="Your Name"
          />
        </main>

        <Button
          color="#2676FF"
          text="Yes, that's me"
          className="register-name-button"
        />
      </div>
    </Styled>
  )
}

export default CustomRegistration

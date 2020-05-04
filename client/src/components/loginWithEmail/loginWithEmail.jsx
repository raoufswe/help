import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import Styled from './loginWithEmail.styles'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import Button from 'components/button'
import ValidPassword from 'assets/validPassword.icon.jsx'
import InvalidPassword from 'assets/invalidPassword.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'

export default function LoginWithEmail() {
  const history = useHistory()
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
          name="name"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={onChange}
          name="password"
          placeholder="Password"
        />

        <button className="login">Login</button>
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

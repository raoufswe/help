import React, { useState, useEffect } from 'react'
import { IonToast } from '@ionic/react'
import Styled from './createWithEmail.styles'
import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'
import Button from 'components/button'
import ValidPassword from 'assets/validPassword.icon.jsx'
import InvalidPassword from 'assets/invalidPassword.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'

export default function CreateWithEmail() {
  const history = useHistory()
  const [state, setState] = useState({
    name: '',
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

  const longEnough = state.password.length > 8
  const hasNumber = /\d/.test(state.password)
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    state.email
  )

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
          name="name"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={onChange}
          name="password"
          placeholder="Password"
        />

        <button className="sign-up">Sign up</button>
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

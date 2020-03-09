import React, { useState } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { Redirect } from 'react-router-dom'

const CustomRegistration = ({ history }) => {
  const [password, setPassword] = useState({})

  //   const registerUser = userInfo => {
  //     console.log('in registerUser')
  //     try {
  //       return firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
  //         .then(newUser => {
  //           const { email, firstName, lastName } = userInfo

  //           return firebase
  //             .firestore()
  //             .collection('users')
  //             .doc(newUser.user.uid)
  //             .set({
  //               email,
  //               firstName,
  //               lastName
  //             })
  //             .then(() => {
  //               return { ...newUser, firstName, lastName }
  //             })
  //         })
  //         .catch(error => {
  //           setError(() => ({ showErrorToast: true, message: error.message }))
  //         })
  //     } catch (error) {
  //       console.log(error)
  //       setError(() => ({ showErrorToast: true, message: error.message }))
  //     }
  //   }

  const onChange = e => {
    const { value } = e.target
    setPassword({
      [e.target.name]: value
    })
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
              <span className="dot"></span>Use at least 8 characters
            </div>
            <div>
              <span className="dot"></span>Use at least 8 characters
            </div>
            <div>
              <span className="dot"></span>Use at least 8 characters
            </div>
          </div>
        </main>

        <Button
          color="#2676FF"
          text="Let’s keep it secure"
          className="register-button"
          onClick={() => history.push('/hooray')}
        />
      </div>
    </Styled>
  )
}

export default CustomRegistration

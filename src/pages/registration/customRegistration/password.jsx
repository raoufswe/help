import React, { useState } from 'react'
import Styled from '../registration.styles'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button.jsx'
import { Redirect } from 'react-router-dom'
import { IonToast } from '@ionic/react'

const CustomRegistration = ({ history }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

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
    setPassword(value)
  }

  const onPasswordSubmit = () => {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
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
          Must contain at least one number and one uppercase and lowercase
          letter, and at least 8 or more characters
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

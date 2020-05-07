import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import Styled from './landing.styles'
import Button from 'components/button.jsx'
import Lottie from 'react-lottie'
import LightBulb from 'assets/lotties/15193-como-funciona-01.json'
import { IonPage } from '@ionic/react'

const Landing = ({ history, validToken }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LightBulb,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  if (verifyToken()) return <Redirect to="/dashboard" />

  return (
    <IonPage id="landing">
      <Styled>
        <div className="header-items">
          <span className="landing-title">Help</span>
          <span className="landing-subtitle">A tagline or something</span>
        </div>

        <div className="landing-illustrations">
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </div>

        <div className="landing-footer">
          <Button
            text="Get Started"
            onClick={e => {
              e.preventDefault()
              history.push('/register')
            }}
          />

          <Button
            text=" I already have an account"
            onClick={e => {
              e.preventDefault()
              history.push('/login')
            }}
          />
        </div>
      </Styled>
    </IonPage>
  )
}

export default Landing

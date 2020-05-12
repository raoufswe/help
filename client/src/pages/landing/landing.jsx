import React from 'react'
import { Redirect } from 'react-router-dom'
import { verifyToken } from 'utils/verifyToken.js'
import './landing.scss'
import Button from 'components/button'
import Lottie from 'react-lottie'
import LightBulb from 'assets/lotties/15193-como-funciona-01.json'
import { IonContent } from '@ionic/react'

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
    <IonContent scrollY={false}>
      <div className="landing">
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
      </div>
    </IonContent>
  )
}

export default Landing

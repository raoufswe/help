import React from 'react'
import { Redirect } from 'react-router-dom'
import * as firebaseService from 'server/firebaseService'
import Styled from './landing.styles'
import Button from 'components/button.jsx'
import Lottie from 'react-lottie'
import LightBulb from "assets/lotties/3520-light-bulb.json"


const Landing = ({ history }) => {
  if (firebaseService.getCurrentUser()) {
    return <Redirect to="/home" />
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LightBulb,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Styled>
      <div className="header-items">
        <span className="landing-title">Help</span>
        <span className="landing-subtitle">A tagline or something</span>
      </div>

      <div className="landing-illustrations">   
       <Lottie options={defaultOptions}
        
        />
        </div>

      <div className="landing-footer">
        <Button
         className="sign-up"
          color="#2676FF"
          text="Get Started"
          onClick={e => {
            e.preventDefault()
            history.push('/register')
          }}
        />

          <Button
          className="sign-in"
          color="white"
          text=" I already have an account"
          onClick={e => {
            e.preventDefault()
            history.push('/login')
          }}
        />
     
      </div>
    </Styled>
  )
}

export default Landing

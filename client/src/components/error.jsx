import React from 'react'
import Lottie from 'react-lottie'
import ErrorICon from 'assets/lotties/13539-sign-for-error-or-explanation-alert.json'

export default function Error(props) {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: ErrorICon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div {...props}>
      <Lottie options={defaultOptions} />
    </div>
  )
}

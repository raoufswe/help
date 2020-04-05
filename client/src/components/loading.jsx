import React from 'react'
import Lottie from 'react-lottie'
import NoData from 'assets/lotties/5066-meeting-and-stuff.json'

export default function Loading(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NoData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div {...props}>
      <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
    </div>
  )
}

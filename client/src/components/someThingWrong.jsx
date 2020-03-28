import React from 'react'
import Lottie from 'react-lottie'
import SomeThingWrongIcon from 'assets/lotties/9531-oops-something-went-wrong.json'

export default function SomeThingWrong(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SomeThingWrongIcon,
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

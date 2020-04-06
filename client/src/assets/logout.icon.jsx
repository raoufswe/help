import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg height="30px" viewBox="0 0 54 54" width="30px" {...props}>
      <path
        fill="none"
        stroke="#dc691d"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M41 35.5l12-12M41 11.5l12 12M53 23.5H34"
      />
      <path fill="#38454f" d="M22 46.5h12V.5H0v46"/>
      <path fill="#e7eced" d="M22 7.5L0 .5v46l22 7z"/>
      <path
        fill="none"
        stroke="#839594"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M14 29.5l5 2"
      />
    </svg>
  )
}

export default SvgComponent

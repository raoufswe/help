import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg height="30px" viewBox="0 0 59 59" width="30px" {...props}>
      <path
        d="M39.503 52H1.5V.003h38.003A2.997 2.997 0 0142.5 3v46.003A2.997 2.997 0 0139.503 52z"
        fill="#556080"
      />
      <path fill="#d75a4a" d="M31.5.003h5V52h-5z" />
      <g fill="#424a60">
        <path d="M1.5 17.01h30v18h-30zM36.5 17.01h6v18h-6z" />
      </g>
      <path fill="#ebba16" d="M11.5 57l-3-2-3 2v-5h6z" />
      <path fill="#e0e1e2" d="M49.5 7h4v4h-4z" />
      <path
        d="M53.5 0h-2.015a1.99 1.99 0 00-1.11.339 1.984 1.984 0 00-.875 1.646V7h4V0zM55.515 0z"
        fill="#d75a4a"
      />
      <path fill="#db7b1b" d="M53.5 11h4v38h-4z" />
      <path fill="#c4c4c4" d="M53.5 7h4v4h-4z" />
      <path d="M57.5 1.985z" fill="#d75a4a" />
      <path
        d="M57.5 7V1.985A1.984 1.984 0 0055.515 0H53.5v7h4z"
        fill="#b74c44"
      />
      <path fill="#ebd6bd" d="M57.5 49h-8l4 7z" />
      <path d="M52.5 58a1 1 0 102 0v-4h-2v4z" fill="#4c4c4c" />
      <path fill="#ed8a19" d="M49.5 11h4v38h-4z" />
    </svg>
  )
}

export default SvgComponent

import * as React from 'react'

function SvgComponent({ active, onClick, background = '#2196f3' }) {
  return (
    <svg viewBox="0 0 48 48" onClick={onClick}>
      <circle fill={active ? background : '#CFCFCF'} cx={24} cy={24} r={20} />
      <path
        fill={active ? '#673AB7' : '#5D5857'}
        d="M24 44c4.5 0 8.6-1.5 11.9-4-.6-7.6-8.2-9-8.2-9l-3.7.8-3.7-.8s-7.6 1.4-8.2 9c3.3 2.5 7.4 4 11.9 4z"
      />
      <path
        fill={active ? '#311B92' : '#2d2d2d'}
        d="M24 37c3.1 0 5.6-2.3 5.9-5.3-.9-.4-1.6-.6-2-.7 0 2.2-1.8 3.9-4 3.9s-4-1.8-4-3.9c-.4.1-1.1.3-2 .7.5 3 3 5.3 6.1 5.3z"
      />
      <path
        fill={active ? '#FFA726' : '#a6a6a6'}
        d="M32 22.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5m-13 0c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5"
      />
      <path
        fill={active ? '#FF9800' : '#a7a7a7'}
        d="M24 35c-4 0-4-4-4-4v-4h8v4s0 4-4 4z"
      />
      <path
        fill={active ? '#FFB74D' : '#cfcfcf'}
        d="M31 18.7c0-5.9-14-3.8-14 0v4.4c0 3.8 3.1 6.9 7 6.9s7-3.1 7-6.9v-4.4z"
      />
      <path
        fill="#424242"
        d="M24 11c-4.9 0-8 4.3-8 8.2V21l2 2v-4l9.2-3 2.8 3v4l2-2v-.8c0-3.2-.8-6.8-4.8-7.6l-.8-1.6H24z"
      />
      <path
        fill={active ? '#784719' : '#5D5857'}
        d="M26 22c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1m-6 0c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1"
      />
    </svg>
  )
}

export default SvgComponent

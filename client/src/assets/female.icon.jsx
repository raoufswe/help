import * as React from 'react'

export default function SvgComponent({
  active,
  onClick,
  background = '#ede8f7'
}) {
  return (
    <svg viewBox="0 0 48 48" onClick={onClick}>
      <circle fill={active ? background : '#CFCFCF'} cx={24} cy={24} r={20} />
      <path fill={active ? '#3E2723' : '#3E2723'} d="M18 18.3h12v13.5H18z" />
      <path
        fill={active ? '#FF1744' : '#5D5857'}
        d="M24 44c4.5 0 8.6-1.5 11.9-4-.6-7.4-7.9-9-7.9-9h-8s-7.3 1.6-7.9 9c3.3 2.5 7.4 4 11.9 4z"
      />
      <path
        fill={active ? '#FF9800' : '#a7a7a7'}
        d="M24 34.8c-1.4 0-3.5-3.8-3.5-3.8v-5h7v5s-2.1 3.8-3.5 3.8"
      />
      <path
        fill={active ? '#FFB74D' : '#CFCFCF'}
        d="M31 23c0 3.7-3.3 7-7 7s-7-3.3-7-7v-6c0-3.7 14-5.7 14 0v6zm-7 13c2.9 0 3.5-5 3.5-5s-1.9 3-3.5 3-3.5-3-3.5-3 .6 5 3.5 5"
      />
      <path
        fill={active ? '#784719' : '#5D5857'}
        d="M26 22c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1m-6 0c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1"
      />
      <path
        fill={active ? '#795548' : '#5D5857'}
        d="M24 11c-4.6 0-11 2.1-11 17l5 3.8V21l9-5 3 4v12l5-5c0-3-.3-14.5-8-14.5L26 11h-2z"
      />
    </svg>
  )
}

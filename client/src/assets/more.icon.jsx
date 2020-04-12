import * as React from 'react'

function SvgComponent(props) {
  return (
    <svg height="512pt" viewBox="-192 0 512 512" width="512pt" {...props}>
      <path d="M128 256c0 35.348-28.652 64-64 64S0 291.348 0 256s28.652-64 64-64 64 28.652 64 64zm0 0M128 64c0 35.348-28.652 64-64 64S0 99.348 0 64 28.652 0 64 0s64 28.652 64 64zm0 0M128 448c0 35.348-28.652 64-64 64S0 483.348 0 448s28.652-64 64-64 64 28.652 64 64zm0 0" />
    </svg>
  )
}

export default SvgComponent

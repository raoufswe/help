import React from 'react'
import { StyledBar, StyledFiller } from './overviewBars.styles'

export default function Bar({ value }) {
  return (
    <StyledBar>
      <Filler value={value} />
    </StyledBar>
  )
}

const Filler = ({ value }) => {
  return <StyledFiller value={value} />
}

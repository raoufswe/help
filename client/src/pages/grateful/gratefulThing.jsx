import React from 'react'
import { StyledGratefulThing } from './grateful.styles'

export default function GratefulThing({ title, content }) {
  return (
    <StyledGratefulThing>
      <h3 className="title">{title}</h3>
      <p className="content">{content}</p>
    </StyledGratefulThing>
  )
}

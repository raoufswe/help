import React from 'react'
import { StyledGratefulThing } from './grateful.styles'
import PencilIcon from 'assets/pencil.icon.jsx'
import { useHistory } from 'react-router-dom'

export default function GratefulThing({ content, id }) {
  let history = useHistory()

  const onPencilClick = () => {
    history.push(`/updateGratefulThing/${id}`)
  }

  return (
    <StyledGratefulThing>
      <h3 className="title">{content}</h3>
      <button onClick={onPencilClick}>
        <PencilIcon />
      </button>
    </StyledGratefulThing>
  )
}

import React from 'react'
import { StyledGratefulThing } from './grateful.styles'
import PencilIcon from 'assets/pencil.icon.jsx'
import { useHistory } from 'react-router-dom'

export default function GratefulThing({ title, id }) {
  let history = useHistory()

  const onPencilClick = () => {
    history.push(`/updateGratefulThing/${id}/${title}`)
  }

  return (
    <StyledGratefulThing>
      <h3 className="title">{title}</h3>
      <button onClick={onPencilClick}>
        <PencilIcon />
      </button>
    </StyledGratefulThing>
  )
}

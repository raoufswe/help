import React, { useState } from 'react'
import { StyledAddGratefulThing } from './grateful.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'

export default function AddGratefulThing({ history }) {
  const [gratefulThing, setGratefulThing] = useState({})
  console.log(gratefulThing)

  const onChange = e => {
    const { value } = e.target
    setGratefulThing({
      [e.target.name]: value
    })
  }

  return (
    <StyledAddGratefulThing>
      <div className="login-back" onClick={() => history.push('/grateful')}>
        <LeftArrow />
      </div>

      <span className="page-title">
        It’s good to be grateful for something.
      </span>

      <input
        type="text"
        className="grateful-input"
        onChange={onChange}
        name="Title"
        placeholder="title"
      />

      <TextareaAutosize
        rows={2}
        name="content"
        placeholder="Something important to you"
        className="grateful-input"
        onChange={onChange}
      />
    </StyledAddGratefulThing>
  )
}

import React, { useState } from 'react'
import { StyledAddGratefulThing } from './grateful.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'

export default function AddGratefulThing({ history }) {
  const [gratefulThing, setGratefulThing] = useState({})

  const onChange = e => {
    const { value } = e.target
    setGratefulThing({
      [e.target.name]: value
    })
  }

  const handleSave = () => {
    console.log('saving...', gratefulThing)
  }

  return (
    <StyledAddGratefulThing>
      <div className="login-back" onClick={() => history.push('/grateful')}>
        <LeftArrow />
      </div>

      <span className="page-title">
        It’s good to be grateful for something.
      </span>

      <TextareaAutosize
        name="title"
        placeholder="Something important to you"
        className="grateful-input"
        onChange={onChange}
      />

      <Button
        color="#2676FF"
        text="Save"
        onClick={handleSave}
        className="update-button"
      />
    </StyledAddGratefulThing>
  )
}

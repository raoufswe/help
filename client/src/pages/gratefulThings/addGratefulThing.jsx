import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { StyledAddGratefulThing } from './grateful.styles'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import useAddGratefulThing from './hooks/useAddGratefulThing'
import LeftArrow from 'assets/left-arrow.icon'

export default function AddGratefulThing({ history }) {
  const [saveGrateful, { status }] = useAddGratefulThing()
  const [content, setContent] = useState('')

  useEffect(() => {
    if (status === 'success') history.push('/gratefulThings')
  }, [status])

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  return (
    <StyledAddGratefulThing>
      <div className="login-back" onClick={() => saveGrateful(content)}>
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
    </StyledAddGratefulThing>
  )
}

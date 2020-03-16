import React, { useState } from 'react'
import { StyledAddJournal } from './journaling.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import { getDate, getTime } from './utils'

export default function AddJournal({ history }) {
  const [journal, setJournal] = useState({})
  const onChange = e => {
    const { value } = e.target
    setJournal({
      date: getDate,
      time: getTime,
      [e.target.name]: value
    })
  }

  return (
    <StyledAddJournal>
      <div className="login-back" onClick={() => history.push('/journaling')}>
        <LeftArrow />
      </div>

      <span className="page-title">Let’s add a journal for {getDate}</span>

      <TextareaAutosize
        name="content"
        placeholder="Start writing your story"
        className="journal-input"
        onChange={onChange}
      />
    </StyledAddJournal>
  )
}

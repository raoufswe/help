import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { StyledJournalDetails } from './journaling.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import { getDate } from 'utils/dateHelpers/dateHelpers.js'
import useAddJournal from './hooks/useAddJournal'

export default function AddJournal({ history }) {
  const [content, setContent] = useState('')
  const [saveJournal, { status }] = useAddJournal()

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  useEffect(() => {
    if (status === 'success') history.push('/journals')
  }, [status])

  return (
    <StyledJournalDetails>
      <div className="page-header">
        <button className="back-arrow" onClick={() => saveJournal(content)}>
          <LeftArrow />
        </button>
        <span className="journal-date">{getDate(new Date())}</span>
      </div>

      <TextareaAutosize
        name="content"
        placeholder="Dear Journal..."
        className="journal-input"
        onChange={onChange}
      />
    </StyledJournalDetails>
  )
}

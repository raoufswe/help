import React, { useState } from 'react'
import { StyledAddJournal } from './journaling.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import { getDate, getTime } from 'utils/dataHelpers/dataHelpers.js'
import Button from 'components/button'

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

  const handleSave = () => {
    console.log('saving...', journal)
  }

  return (
    <StyledAddJournal>
      <div className="page-header">
        <button
          className="back-arrow"
          onClick={() => history.push('/journaling')}
        >
          <LeftArrow />
        </button>
        <span className="journal-date">{getDate}</span>
      </div>

      <TextareaAutosize
        name="content"
        placeholder="Dear Journal..."
        className="journal-input"
        onChange={onChange}
      />

      <Button
        color="#2676FF"
        text="Save"
        onClick={handleSave}
        className="update-button"
      />
    </StyledAddJournal>
  )
}

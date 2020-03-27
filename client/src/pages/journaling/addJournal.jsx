import React, { useState } from 'react'
import { StyledAddJournal } from './journaling.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import { getDate, getTime } from 'utils/dataHelpers/dataHelpers.js'
import Button from 'components/button'
import axios from 'axios'

export default function AddJournal({ history }) {
  const [journal, setJournal] = useState({})
  const onChange = e => {
    const { value } = e.target
    setJournal({
      content: value
    })
  }

  const handleSave = () => {
    axios
      .post(`http://localhost:3000/journals/`, {
        content: journal.content
      })
      .then(function(response) {
        console.log(response)
        history.push('/journaling')
      })
      .catch(function(error) {
        console.log(error)
      })
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

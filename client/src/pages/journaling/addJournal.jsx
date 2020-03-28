import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { StyledAddJournal } from './journaling.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import { getDate } from 'utils/dataHelpers/dataHelpers.js'
import Button from 'components/button'
import ErrorIcon from 'components/error.jsx'

export default function AddJournal({ history }) {
  const [content, setContent] = useState('')
  const [savingError, setSavingError] = useState(false)

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  useEffect(() => {
    if (savingError)
      setTimeout(() => {
        setSavingError(false)
      }, 2000)
    return () => {
      clearTimeout()
    }
  }, [savingError])

  const handleSave = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        content
      })
    }
    try {
      const response = await fetch(
        `http://localhost:3000/journals`,
        requestOptions
      )
      if (!response.status === 200) {
        setSavingError(true)
      } else {
        history.push('/journaling')
      }
    } catch (error) {
      setSavingError(true)
      console.log(error)
    }
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

      {savingError && (
        <ErrorIcon
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}

      <Button
        color="#2676FF"
        text="Save"
        onClick={handleSave}
        className="update-button"
      />
    </StyledAddJournal>
  )
}

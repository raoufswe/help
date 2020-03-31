import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { StyledAddGratefulThing } from './grateful.styles'
import LeftArrow from 'assets/left-arrow.icon'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import { getUserDetails } from 'utils/verifyToken.js'

export default function AddGratefulThing({ history }) {
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
    const { id: userID } = getUserDetails()
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        content,
        userID
      })
    }
    try {
      const response = await fetch(
        `http://localhost:3000/grateful`,
        requestOptions
      )
      if (!response.status === 200) {
        setSavingError(true)
      } else {
        history.push('/grateful')
      }
    } catch (error) {
      setSavingError(true)
      console.log(error)
    }
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

import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import TextareaAutosize from 'react-autosize-textarea'
import { StyledUpdateGratefulThing } from './grateful.styles.js'
import DeleteIcon from 'assets/delete.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button'

export default function UpdateGratefulThing() {
  let history = useHistory()
  let { id, title } = useParams()

  const [updatedGratefulThing, setUpdatedGratefulThing] = useState(title)

  const onChange = e => {
    const { value } = e.target
    setUpdatedGratefulThing(value)
  }

  const handleUpdate = () => {
    console.log(title, 'updating')
    console.log(updatedGratefulThing, 'updated value')
  }

  const handleDelete = () => {
    console.log(id, 'deleting')
  }
  return (
    <StyledUpdateGratefulThing>
      <div className="login-back" onClick={() => history.push('/grateful')}>
        <LeftArrow />
      </div>

      <TextareaAutosize
        name="title"
        value={updatedGratefulThing}
        placeholder="Something important to you"
        className="grateful-input"
        onChange={onChange}
      />

      <footer>
        <button className="delete-button">
          <DeleteIcon onClick={handleDelete} />
        </button>
        <Button
          color="#2676FF"
          text="Update"
          onClick={handleUpdate}
          className="update-button"
        />
      </footer>
    </StyledUpdateGratefulThing>
  )
}

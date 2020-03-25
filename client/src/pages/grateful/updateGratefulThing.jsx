import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import TextareaAutosize from 'react-autosize-textarea'
import { StyledUpdateGratefulThing } from './grateful.styles.js'
import DeleteIcon from 'assets/delete.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button'
import DeleteModal from 'components/deleteModal.jsx'

export default function UpdateGratefulThing() {
  let history = useHistory()
  let { id, title } = useParams()
  const [updatedGratefulThing, setUpdatedGratefulThing] = useState(title)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const onChange = e => {
    const { value } = e.target
    setUpdatedGratefulThing(value)
  }

  const handleUpdate = () => {
    console.log(title, 'updating')
    console.log(updatedGratefulThing, 'updated value')
  }

  const handleDelete = () => {
    console.log('deleting...')
    setOpenDeleteModal(false)
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

      {openDeleteModal && (
        <DeleteModal
          title="Do you want to delete the journal entry?"
          onDiscard={() => setOpenDeleteModal(false)}
          onDelete={handleDelete}
        />
      )}

      <footer>
        <button className="delete-button">
          <DeleteIcon onClick={() => setOpenDeleteModal(true)} />
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

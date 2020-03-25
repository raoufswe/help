import React, { useState, useContext } from 'react'
import { StyledUpdateJournal } from './journaling.styles'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import DeleteModal from 'components/deleteModal.jsx'
import { Context } from 'context'
import LeftArrow from 'assets/left-arrow.icon'
import DeleteIcon from 'assets/delete.icon.jsx'

export default function UpdateJournal({ history }) {
  const [globalContext, setGlobalContext] = useContext(Context)
  const { date, time, content, id } = globalContext.journal
  const [updatedJournal, setUpdatedJournal] = useState(content)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const onChange = e => {
    const { value } = e.target
    setUpdatedJournal(value)
  }

  const handleUpdate = () => {
    console.log(content, 'updating')
    console.log(updatedJournal, 'updated value')
  }

  const handleDelete = () => {
    console.log('deleting...')
    setOpenDeleteModal(false)
  }

  return (
    <StyledUpdateJournal>
      <div className="page-header">
        <button
          className="back-arrow"
          onClick={() => history.push('/journaling')}
        >
          <LeftArrow />
        </button>
        <span className="journal-date">{date}</span>
      </div>

      <TextareaAutosize
        name="content"
        value={updatedJournal}
        placeholder="Dear Journal..."
        className="journal-input"
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
    </StyledUpdateJournal>
  )
}

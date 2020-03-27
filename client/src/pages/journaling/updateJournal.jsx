import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StyledUpdateJournal } from './journaling.styles'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import DeleteModal from 'components/deleteModal.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import DeleteIcon from 'assets/delete.icon.jsx'
import { getDate } from 'utils/dataHelpers/dataHelpers.js'

export default function UpdateJournal({ history }) {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [content, setContent] = useState('')
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const fetchJournal = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(
      `http://localhost:3000/journals/${id}`,
      requestOptions
    )
    const data = await response.json()
    setData(data.data)
    setContent(data.data.content)
  }

  useEffect(() => {
    fetchJournal()
  }, [])

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  const handleUpdate = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content
      })
    }
    const response = await fetch(
      `http://localhost:3000/journals/${id}`,
      requestOptions
    )
    const data = await response.json()
    console.log(data)
  }

  const handleDelete = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    const response = await fetch(
      `http://localhost:3000/journals/${id}`,
      requestOptions
    )
    const data = await response.json()
    console.log(data)
    history.push('/journaling')
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
        <span className="journal-date">{getDate(data?.createdAt)}</span>
      </div>

      <TextareaAutosize
        name="content"
        value={content}
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

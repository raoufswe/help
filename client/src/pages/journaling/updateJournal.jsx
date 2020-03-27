import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import { StyledUpdateJournal } from './journaling.styles'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import DeleteModal from 'components/deleteModal.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import DeleteIcon from 'assets/delete.icon.jsx'
import { getDate } from 'utils/dataHelpers/dataHelpers.js'

export default function UpdateJournal({ history }) {
  const getJournal = async () => {
    const { data } = await axios.get(`http://localhost:3000/journals/${id}`)
    return data.data
  }
  const { status, data, error, isFetching } = useQuery('journals', getJournal)
  const [updatedJournal, setUpdatedJournal] = useState(data)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setUpdatedJournal(data)
  }, [data])

  const onChange = e => {
    const { value } = e.target
    setUpdatedJournal({
      ...updatedJournal,
      content: value
    })
  }

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/journals/${id}`, {
        content: updatedJournal.content
      })
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/journals/${id}`, {
        content: updatedJournal.content
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
    <StyledUpdateJournal>
      {status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <div className="page-header">
            <button
              className="back-arrow"
              onClick={() => history.push('/journaling')}
            >
              <LeftArrow />
            </button>
            <span className="journal-date">
              {getDate(updatedJournal?.createdAt)}
            </span>
          </div>

          <TextareaAutosize
            name="content"
            value={updatedJournal?.content}
            placeholder="Dear Journal..."
            className="journal-input"
            onChange={onChange}
          />
        </>
      )}

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

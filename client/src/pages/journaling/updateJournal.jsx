import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { StyledUpdateJournal } from './journaling.styles'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import DeleteModal from 'components/deleteModal.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import DeleteIcon from 'assets/delete.icon.jsx'
import { getDate } from 'utils/dataHelpers/dataHelpers.js'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'
import ErrorIcon from 'components/error.jsx'

export default function UpdateJournal({ history }) {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [content, setContent] = useState('')
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [savingError, setSavingError] = useState(false)

  useEffect(() => {
    if (savingError)
      setTimeout(() => {
        setSavingError(false)
      }, 2000)
    return () => {
      clearTimeout()
    }
  }, [savingError])

  const fetchJournal = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }

    try {
      const response = await fetch(
        `http://localhost:3000/journals/${id}`,
        requestOptions
      )
      if (response.status === 200) {
        const data = await response.json()
        setData(data.data)
        setContent(data.data.content)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log(error)
    }
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
        `http://localhost:3000/journals/${id}`,
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

  const handleDelete = async () => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }

    try {
      const response = await fetch(
        `http://localhost:3000/journals/${id}`,
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
    <StyledUpdateJournal>
      {loading ? (
        <LoadingUI style={{ margin: 'auto' }} />
      ) : error ? (
        <>
          <div className="page-header">
            <button
              className="back-arrow"
              onClick={() => history.push('/journaling')}
            >
              <LeftArrow />
            </button>
          </div>
          <SomethingWrong style={{ margin: 'auto  0' }} />
        </>
      ) : (
        <>
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
        </>
      )}
    </StyledUpdateJournal>
  )
}

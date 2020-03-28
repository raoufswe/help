import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useHistory, useParams } from 'react-router-dom'
import TextareaAutosize from 'react-autosize-textarea'
import { StyledUpdateGratefulThing } from './grateful.styles.js'
import DeleteIcon from 'assets/delete.icon.jsx'
import LeftArrow from 'assets/left-arrow.icon'
import Button from 'components/button'
import DeleteModal from 'components/deleteModal.jsx'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'
import ErrorIcon from 'components/error.jsx'

export default function UpdateGratefulThing() {
  let history = useHistory()
  let { id } = useParams()
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

  const fetchGrateful = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }

    try {
      const response = await fetch(
        `http://localhost:3000/grateful/${id}`,
        requestOptions
      )
      if (response.status === 200) {
        const data = await response.json()
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
        `http://localhost:3000/grateful/${id}`,
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
        `http://localhost:3000/grateful/${id}`,
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

  useEffect(() => {
    fetchGrateful()
  }, [])

  return (
    <StyledUpdateGratefulThing>
      {loading ? (
        <LoadingUI style={{ margin: 'auto' }} />
      ) : error ? (
        <>
          <div className="page-header">
            <button
              className="back-arrow"
              onClick={() => history.push('/grateful')}
            >
              <LeftArrow />
            </button>
          </div>
          <SomethingWrong style={{ margin: 'auto  0' }} />
        </>
      ) : (
        <>
          <div className="login-back" onClick={() => history.push('/grateful')}>
            <LeftArrow />
          </div>

          <TextareaAutosize
            name="title"
            value={content}
            placeholder="Something important to you"
            className="grateful-input"
            onChange={onChange}
          />

          {openDeleteModal && (
            <DeleteModal
              title="Do you want to delete the grateful entry?"
              onDiscard={() => setOpenDeleteModal(false)}
              onDelete={handleDelete}
            />
          )}

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
    </StyledUpdateGratefulThing>
  )
}

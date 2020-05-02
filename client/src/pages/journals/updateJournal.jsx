import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import { StyledJournalDetails } from './journaling.styles'
import TextareaAutosize from 'react-autosize-textarea'
import LeftArrow from 'assets/left-arrow.icon'
import { getDate } from 'utils/dateHelpers/dateHelpers.js'
import useJournal from './hooks/useJournal'
import useDeleteJournal from './hooks/useDeleteJournal'
import useUpdateJournal from './hooks/useUpdateJournal'
import Loader from 'assets/loader.jsx'
import ErrorUI from 'components/errorUI.jsx'
import TrashIcon from 'assets/trash.icon'

export default function UpdateJournal({ history }) {
  const { id } = useParams()
  const [content, setContent] = useState('')
  const { status, data } = useJournal(id)
  const [deleteJournal, { deleteStatus }] = useDeleteJournal()
  const [updateJournal, { updateStatus }] = useUpdateJournal()

  useEffect(() => {
    if (data) setContent(data.content)
  }, [data])

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  useEffect(() => {
    if (updateStatus === 'success' || deleteStatus === 'success')
      history.push('/journals')
  }, [updateStatus, deleteStatus])

  return (
    <StyledJournalDetails>
      <div className="page-header">
        <button onClick={() => updateJournal({ content, id })}>
          <LeftArrow />
        </button>
        <span className="journal-date">{getDate(data?.createdAt)}</span>
        <button
          onClick={() => deleteJournal(id)}
          className="trashIcon"
          disabled={status !== 'success'}
        >
          <TrashIcon />
        </button>
      </div>

      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <ErrorUI />
      ) : (
        <>
          <TextareaAutosize
            name="content"
            value={content}
            placeholder="Dear Journal..."
            className="journal-input"
            onChange={onChange}
          />
        </>
      )}
    </StyledJournalDetails>
  )
}

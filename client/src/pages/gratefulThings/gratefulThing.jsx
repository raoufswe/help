import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useParams } from 'react-router-dom'
import TextareaAutosize from 'react-autosize-textarea'
import './grateful.scss'
import LeftArrow from 'assets/left-arrow.icon'
import useGratefulThing from './hooks/useGratefulThing'
import useUpdateGratefulThing from './hooks/useUpdateGratefulThing'
import useDeleteGratefulThing from './hooks/useDeleteGratefulThing'
import Loader from 'assets/loader.jsx'
import ErrorUI from 'components/errorUI.jsx'
import TrashIcon from 'assets/trash.icon'
import { IonContent } from '@ionic/react'

export default function GratefulThing({ history }) {
  const { id } = useParams()
  const { status, data } = useGratefulThing(id)
  const [updateGrateful, { updateStatus }] = useUpdateGratefulThing(id)
  const [deleteGratefulThing, { deleteStatus }] = useDeleteGratefulThing(id)
  const [content, setContent] = useState('')

  useEffect(() => {
    if (data) setContent(data.content)
  }, [data])

  useEffect(() => {
    if (updateStatus === 'success' || deleteStatus === 'success')
      history.push('/gratefulThings')
  }, [updateStatus, deleteStatus])

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  return (
    <IonContent>
      <div className="update-grateful-thing">
        <div className="grateful-header">
          <button onClick={() => updateGrateful({ content, id })}>
            <LeftArrow />
          </button>
          <button
            onClick={() => deleteGratefulThing(id)}
            className="trashIcon"
            disabled={status !== 'success'}
          >
            <TrashIcon />
          </button>
        </div>

        {status === 'loading' ||
        updateStatus === 'loading' ||
        deleteStatus === 'loading' ? (
          <Loader />
        ) : status === 'error' ||
          updateStatus === 'error' ||
          deleteStatus === 'error' ? (
          <ErrorUI />
        ) : (
          <>
            <TextareaAutosize
              name="title"
              value={content}
              placeholder="Something important to you"
              className="grateful-input"
              onChange={onChange}
            />
          </>
        )}
      </div>
    </IonContent>
  )
}

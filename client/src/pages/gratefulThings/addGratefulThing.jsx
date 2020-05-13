import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import './grateful.scss'
import TextareaAutosize from 'react-autosize-textarea'
import Button from 'components/button'
import useAddGratefulThing from './hooks/useAddGratefulThing'
import LeftArrow from 'assets/left-arrow.icon'
import { IonContent } from '@ionic/react'
import Loader from 'assets/loader.jsx'
import ErrorUI from 'components/errorUI.jsx'

export default function AddGratefulThing({ history }) {
  const [saveGrateful, { status }] = useAddGratefulThing()
  const [content, setContent] = useState('')

  useEffect(() => {
    if (status === 'success') history.push('/gratefulThings')
  }, [status])

  const onChange = e => {
    const { value } = e.target
    setContent(value)
  }

  return (
    <IonContent>
      <div className="grateful-thing">
        <div onClick={() => saveGrateful(content)}>
          <LeftArrow />
        </div>

        <span className="grateful-thing-page-title">
          It’s good to be grateful for something.
        </span>

        {status === 'loading' ? (
          <Loader />
        ) : status === 'error' ? (
          <ErrorUI />
        ) : (
          <>
            <TextareaAutosize
              name="title"
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

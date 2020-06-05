import React, { useState } from 'react'
import './FAQ.scss'
import Question from './question'
import { Questions } from '__mocks__/FAQ.js'
import { IonContent } from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'

const FAQ = ({ history }) => {
  const [openQuestion, setOpenQuestion] = useState({})
  const onClick = id => {
    const isOpen = !!openQuestion[id]
    setOpenQuestion({
      ...openQuestion,
      [id]: !isOpen
    })
  }

  return (
    <>
      <HeaderMenu />
      <IonContent>
        <div className="faq">
          <h3 className="faq-page-title">FAQ</h3>
          {Questions.map(({ id, title, subtitle, content }, key) => (
            <Question
              key={key}
              id={id}
              title={title}
              subtitle={subtitle}
              content={content}
              isOpen={!!openQuestion[id]}
              onClick={onClick}
            />
          ))}
        </div>
      </IonContent>
    </>
  )
}

export default FAQ

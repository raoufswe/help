import React, { useState } from 'react'
import { StyledFAQ } from './FAQ.styles'
import Question from './question'
import { Questions } from './utils'

const Home = ({ history }) => {
  const [openQuestion, setOpenQuestion] = useState({})

  const onClick = id => {
    const isOpen = !!openQuestion[id]
    setOpenQuestion({
      [id]: !isOpen
    })
  }
  console.log(openQuestion)
  return (
    <StyledFAQ>
      <h3 className="page-title">FAQ</h3>
      {Questions.map(({ id, title, subtitle, content }) => (
        <Question
          id={id}
          title={title}
          subtitle={subtitle}
          content={content}
          isOpen={!!openQuestion[id]}
          onClick={onClick}
        />
      ))}
    </StyledFAQ>
  )
}

export default Home

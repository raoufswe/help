import React from 'react'
import { StyledQuestion } from './FAQ.styles'

export default function Question({
  id,
  title,
  subtitle,
  content,
  isOpen,
  onClick
}) {
  return (
    <StyledQuestion>
      <button onClick={() => onClick(id)}>
        <span className="question-title">{title}</span>
        <span className="question-subtitle">{subtitle}</span>
        <p className={isOpen ? 'question-content' : ''}>{content}</p>
      </button>
    </StyledQuestion>
  )
}

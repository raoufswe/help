import React from 'react'
import './FAQ.scss'

export default function Question({
  id,
  title,
  subtitle,
  content,
  isOpen,
  onClick
}) {
  return (
    <div className="question" onClick={() => onClick(id)}>
      <span className="question-title">{title}</span>
      <span className="question-subtitle">{subtitle}</span>
      <p className={isOpen ? 'question-content' : ''}>{content}</p>
    </div>
  )
}

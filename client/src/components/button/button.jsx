import React from 'react'
import './button.scss'
import AngleIcon from 'assets/angle.icon'

const Button = ({ text, onClick, Icon }) => {
  return (
    <button className="button-link" onClick={onClick}>
      {Icon && <Icon className="icon" />}
      <span>{text}</span>
      <AngleIcon className="angle" />
    </button>
  )
}

export default Button

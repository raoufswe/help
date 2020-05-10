import React from 'react'
import LeftArrowIcon from 'assets/left-arrow.icon'
import { useHistory } from 'react-router-dom'

export default function Back() {
  let history = useHistory()

  return (
    <button style={{ textAlign: 'left' }} onClick={() => history.goBack()}>
      <LeftArrowIcon />
    </button>
  )
}

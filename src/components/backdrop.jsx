import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Styled = styled.div`
  background: transparent;
  position: fixed;
  top: 0%;
  left: 0;
  bottom: 0;
  right: 0;
  cursor: pointer;
  display: block;
`

function Backdrop({ container, title, ...props }) {
  return createPortal(
    <Styled label={title} {...props} />,
    document.querySelector(container)
  )
}

export default Backdrop

import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  /* z-index: 2; */
  cursor: pointer;
`

export const StyledCard = styled.div`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  background: white;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.6);
  z-index: 1;
  padding: 20px;
`

export default function Overlay({ children }) {
  return createPortal(
    <StyledOverlay>
      <StyledCard>{children}</StyledCard>
    </StyledOverlay>,
    document.querySelector('body')
  )
}

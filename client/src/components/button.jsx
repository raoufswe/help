import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.color};
  border-radius: 40px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  min-height: 60px;
  color: ${props => props.textColor};
  padding: 10px;
  width: 100%;
  outline: none;
`

const Button = ({ color, text, textColor = '#ffff', onClick, ...props }) => {
  return (
    <StyledButton
      color={color}
      onClick={onClick}
      textColor={textColor}
      {...props}
    >
      {text}
    </StyledButton>
  )
}

export default Button

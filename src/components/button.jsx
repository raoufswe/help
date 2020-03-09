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
  color: #ffffff;
  padding: 10px;
  width: 100%;
`

const Button = ({ color, text, onClick, ...props }) => {
  return (
    <StyledButton color={color} onClick={onClick} {...props}>
      {text}
    </StyledButton>
  )
}

export default Button

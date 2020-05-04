import React from 'react'
import styled from 'styled-components'
import AngleIcon from 'assets/angle.icon'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border: 1px solid #dadada;
  border-radius: 0.5rem;
  width: 100%;
  font-size: medium;
  font-weight: 600;
  margin: 1.3rem 0;

  .icon {
    margin-right: 1rem;
    height: 1.3rem;
    width: 1.3rem;
  }
  .angle {
    margin-left: auto;
    transform: rotate(-90deg);
    height: 1rem;
    width: 1rem;
  }
`

const Button = ({ text, onClick, Icon }) => {
  return (
    <StyledButton onClick={onClick}>
      {Icon && <Icon className="icon" />}
      <span>{text}</span>
      <AngleIcon className="angle" />
    </StyledButton>
  )
}

export default Button

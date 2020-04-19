import React from 'react'
import AddIcon from 'assets/add.icon.jsx'
import styled from 'styled-components'

export const Styled = styled.div`
  button {
    position: absolute;
    right: 30px;
    bottom: 20px;
    width: 50px;
    padding: 0;
  }
`

export default function add({ onClick }) {
  return (
    <Styled>
      <button onClick={onClick}>
        <AddIcon />
      </button>
    </Styled>
  )
}

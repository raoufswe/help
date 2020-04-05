import React from 'react'
import AddIcon from 'assets/add.icon.jsx'
import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

export const Styled = styled.div`
  button {
    position: absolute;
    right: 30px;
    bottom: 20px;
    border-radius: 50px;
    background: #2676ff;
    padding: ${maxmin(15, 10)};
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

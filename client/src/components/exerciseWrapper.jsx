import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  width: 191px;
  height: 145px;
  background: #c4c4c4;
  border-radius: 20px;
`

export default function exerciseWrapper(props) {
  return <Styled {...props}></Styled>
}

import React from 'react'
import styled from 'styled-components'
import { IonSpinner } from '@ionic/react'

const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 50% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Loader() {
  return (
    <Styled>
      <IonSpinner name="crescent" />
    </Styled>
  )
}

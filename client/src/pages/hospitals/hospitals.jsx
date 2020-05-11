import React from 'react'
import { StyledHospitals } from './hospitals.styles'
import { HospitalsInfo } from '__mocks__/hospitals.js'
import Hospital from './hospital'
import { IonContent } from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'

const Hospitals = ({ history }) => {
  return (
    <>
      <HeaderMenu />
      <IonContent>
        <StyledHospitals>
          <h3 className="page-title">Are you constantly having a hard time?</h3>
          <span className="page-subtitle">
            Seek help in the following centres:
          </span>

          {HospitalsInfo.map(({ name, tel }, key) => (
            <Hospital key={key} name={name} tel={tel} />
          ))}
        </StyledHospitals>
      </IonContent>
    </>
  )
}

export default Hospitals

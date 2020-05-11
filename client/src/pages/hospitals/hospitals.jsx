import React from 'react'
import { HospitalsInfo } from '__mocks__/hospitals.js'
import Hospital from './hospital'
import { IonContent } from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'
import './hospitals.scss'

const Hospitals = ({ history }) => {
  return (
    <>
      <HeaderMenu />
      <IonContent>
        <div className="hospitals">
          <h3 className="hospitals-page-title">
            Are you constantly having a hard time?
          </h3>
          <span className="hospitals-page-subtitle">
            Seek help in the following centres:
          </span>

          {HospitalsInfo.map(({ name, tel }, key) => (
            <Hospital key={key} name={name} tel={tel} />
          ))}
        </div>
      </IonContent>
    </>
  )
}

export default Hospitals

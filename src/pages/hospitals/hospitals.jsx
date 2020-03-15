import React from 'react'
import { StyledHospitals } from './hospitals.styles'
import { HospitalsInfo } from './utils'
import Hospital from './hospital'

const Hospitals = ({ history }) => {
  return (
    <StyledHospitals>
      <h3 className="page-title">Are you constantly having a hard time?</h3>
      <span className="page-subtitle">Seek help in the following centres:</span>

      {HospitalsInfo.map(({ name, tel }, key) => (
        <Hospital key={key} name={name} tel={tel} />
      ))}
    </StyledHospitals>
  )
}

export default Hospitals

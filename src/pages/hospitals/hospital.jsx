import React from 'react'
import { StyledHospital } from './hospitals.styles'
import MedicalCross from 'assets/medial-cross.jsx'
import HospitalLocation from 'assets/hospital-location.jsx'

export default function hospital({ name, tel }) {
  return (
    <StyledHospital>
      <span>
        <MedicalCross />
      </span>
      <div className="hospital-details">
        <span className="hospital-name">{name}</span>
        <span className="hospital-tel">tel: {tel}</span>
      </div>
      <div className="hospital-location">
        <button className="location-icon">
          <HospitalLocation />
        </button>
      </div>
    </StyledHospital>
  )
}

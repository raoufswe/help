import React from 'react'
import './hospitals.scss'
import MedicalCross from 'assets/medial-cross.icon.jsx'
import HospitalLocation from 'assets/hospital-location.icon.jsx'

export default function hospital({ name, tel }) {
  return (
    <div className="hospital">
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
    </div>
  )
}

import React from 'react'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import useUpdateFeeling from './hooks/useUpdateFeeling'
import './dashboard.scss'

export default function Feeling({ onChange }) {
  const [updateFeeling, { updateStatus }] = useUpdateFeeling()

  return (
    <div className="feeling">
      <span>How are you feeling today?</span>
      <div className="feelings-icons">
        <button onClick={() => updateFeeling('superHappy')}>
          <SuperHappyIcon />
        </button>
        <button onClick={() => updateFeeling('happy')}>
          <Happy />
        </button>
        <button onClick={() => updateFeeling('confused')}>
          <Confused />
        </button>
        <button onClick={() => updateFeeling('unhappy')}>
          <Unhappy />
        </button>
        <button onClick={() => updateFeeling('mad')}>
          <Mad />
        </button>
      </div>
    </div>
  )
}

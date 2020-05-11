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
        <button onClick={() => updateFeeling({ emoji: '😬', weight: 100 })}>
          <SuperHappyIcon />
        </button>
        <button onClick={() => updateFeeling({ emoji: '🙂', weight: 75 })}>
          <Happy />
        </button>
        <button onClick={() => updateFeeling({ emoji: '😐', weight: 50 })}>
          <Confused />
        </button>
        <button onClick={() => updateFeeling({ emoji: '😢', weight: 25 })}>
          <Unhappy />
        </button>
        <button onClick={() => updateFeeling({ emoji: '😠', weight: 0 })}>
          <Mad />
        </button>
      </div>
    </div>
  )
}

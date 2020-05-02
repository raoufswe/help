import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import useUpdateFeeling from './hooks/useUpdateFeeling'

const Styled = styled.div`
  background: white;
  padding: 15px 51px 0 20px;
  /* border-bottom: 1px solid #edecec; */

  span {
    display: block;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
    padding-bottom: 10px;
  }

  button {
    padding: 8px;
  }
  .feelings-icons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
    svg {
      height: 30px;
      width: 30px;
    }
  }
`

export default function Feeling({ onChange }) {
  const [updateFeeling, { updateStatus }] = useUpdateFeeling()

  return (
    <Styled>
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
    </Styled>
  )
}

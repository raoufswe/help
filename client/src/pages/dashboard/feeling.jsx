import React from 'react'
import styled from 'styled-components'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import useUpdateFeeling from './hooks/useUpdateFeeling'

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #fff;
  padding: 1.3rem;

  span {
    display: block;
    font-weight: normal;
    font-size: large;
    color: #000000;
    padding-bottom: 0.8rem;
  }

  button {
    padding: 0.5rem;
  }

  .feelings-icons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    svg {
      height: 2rem;
      width: 2rem;
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

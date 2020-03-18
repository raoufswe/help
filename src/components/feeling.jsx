import React, { useState } from 'react'
import styled from 'styled-components'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'

const Styled = styled.div`
  background: white;
  font-family: Fira Sans;
  padding: 15px 51px 10px 30px;
  border-bottom: 1px solid #edecec;

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
    padding: 15px 0;
    svg {
      height: 30px;
      width: 35px;
    }
  }
`

export default function Feeling() {
  const [feeling, setFeeling] = useState('50%')

  return (
    <Styled>
      <span>How are you feeling today?</span>
      <div className="feelings-icons">
        <button onClick={() => setFeeling('100%')}>
          <SuperHappyIcon />
        </button>

        <button onClick={() => setFeeling('75%')}>
          <Happy />
        </button>

        <button onClick={() => setFeeling('50%')}>
          <Confused />
        </button>

        <button onClick={() => setFeeling('25%')}>
          <Unhappy />
        </button>

        <button onClick={() => setFeeling('0')}>
          <Mad />
        </button>
      </div>
    </Styled>
  )
}

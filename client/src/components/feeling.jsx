import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import { getDay } from 'utils/dataHelpers/dataHelpers.js'
import { getUserDetails } from 'utils/verifyToken.js'
import moment from 'moment'

const Styled = styled.div`
  background: white;
  padding: 15px 51px 0 20px;
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
    padding: 10px 0;
    svg {
      height: 30px;
      width: 30px;
    }
  }
`

export default function Feeling({ onChange }) {
  const [feeling, setFeeling] = useState(null)
  const [response, setResponse] = useState({ errors: { code: null } })
  const [savingError, setSavingError] = useState(false)
  const currentWeek = moment()
    .startOf('week')
    .format('YYYY-MM-DD')
  const currentDay = getDay()
  const { id: userID } = getUserDetails()

  const addFeeling = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        week: currentWeek,
        [currentDay]: feeling,
        userID
      })
    }
    try {
      const response = await fetch(
        'http://localhost:3000/feeling',
        requestOptions
      )
      if (!response.status === 200) {
        setSavingError(true)
      } else {
        const data = await response.json()
        setResponse(data)
      }
    } catch (error) {
      setSavingError(true)
      console.log(error)
    }
  }

  const updateFeeling = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        [currentDay]: feeling
      })
    }

    try {
      const response = await fetch(
        `http://localhost:3000/feeling/${userID}/${currentWeek}`,
        requestOptions
      )
      if (!response.status === 200) {
        setSavingError(true)
      }
    } catch (error) {
      setSavingError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    if (feeling !== null) addFeeling()
    onChange(feeling)
  }, [feeling])

  useEffect(() => {
    if (response?.errors?.code === 11000) {
      updateFeeling()
    }
    onChange(feeling)
  }, [response, feeling])

  return (
    <Styled>
      <span>How are you feeling today?</span>
      <div className="feelings-icons">
        <button onClick={() => setFeeling({ emoji: '😬', weight: 100 })}>
          <SuperHappyIcon />
        </button>
        <button onClick={() => setFeeling({ emoji: '🙂', weight: 75 })}>
          <Happy />
        </button>
        <button onClick={() => setFeeling({ emoji: '😐', weight: 50 })}>
          <Confused />
        </button>
        <button onClick={() => setFeeling({ emoji: '😢', weight: 25 })}>
          <Unhappy />
        </button>
        <button onClick={() => setFeeling({ emoji: '😠', weight: 0 })}>
          <Mad />
        </button>
      </div>
    </Styled>
  )
}

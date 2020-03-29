import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import moment from 'moment'

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
  const [feeling, setFeeling] = useState(null)
  const [response, setResponse] = useState(null)
  const [savingError, setSavingError] = useState(false)
  const currentDate = moment().format('YYYY-MM-DD')

  const addFeeling = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify({
        _id: currentDate,
        feeling
      })
    }
    try {
      const response = await fetch(
        `http://localhost:3000/feeling`,
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
        _id: currentDate,
        feeling
      })
    }

    try {
      const response = await fetch(
        `http://localhost:3000/feeling/${currentDate}`,
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
  }, [feeling])

  useEffect(() => {
    if (response?.errors?.code === 11000) updateFeeling()
  }, [response])

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

        <button onClick={() => setFeeling('0%')}>
          <Mad />
        </button>
      </div>
    </Styled>
  )
}

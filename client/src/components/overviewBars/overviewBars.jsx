import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import moment from 'moment'
import { StyledOverviewBars } from './overviewBars.styles'
import Bar from './bar'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'
import { getRange, evaluateRange } from './date.helper'
import { getUserDetails } from 'utils/verifyToken.js'

export default function OverviewBars({ feeling }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const currentDate = moment().format('YYYY-MM-DD')
  console.log(feeling, 'from the overview bar')

  const fetchFeeling = async () => {
    const { id } = getUserDetails()
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${Cookies.get('token')}`
      }
    }

    try {
      const response = await fetch(
        `http://localhost:3000/feeling/${id}`,
        requestOptions
      )
      if (response.status === 200) {
        const data = await response.json()
        setData(data.data)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFeeling()
  }, [feeling])

  let weekFeelings
  let lastSevenDates = data.slice(-7)
  const [lastDate] = lastSevenDates.slice(-1)

  const sameWeek = moment(lastDate?._id).isSame(currentDate, 'week')
  if (sameWeek) {
    const range = getRange(lastDate?._id, currentDate, 'days')
    weekFeelings = evaluateRange(range, lastSevenDates)
  } else {
    const range = getRange(moment().startOf('week'), currentDate, 'days')
    weekFeelings = evaluateRange(range, [])
  }

  return (
    <StyledOverviewBars>
      <span>
        Here’s an overview of how your week has been so far. You’re doing great!
      </span>
      {loading ? (
        <LoadingUI style={{ position: 'absolute', top: '50%' }} />
      ) : error ? (
        <SomethingWrong />
      ) : (
        <div className="bars">
          {weekFeelings.map(({ feeling }, key) => {
            return key <= 7 ? <Bar key={key} value={feeling} /> : null
          })}
        </div>
      )}
    </StyledOverviewBars>
  )
}

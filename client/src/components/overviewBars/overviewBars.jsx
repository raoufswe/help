import React, { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'
import moment from 'moment'
import { StyledOverviewBars } from './overviewBars.styles'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'
import { getRange } from './date.helper'
import { getUserDetails } from 'utils/verifyToken.js'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const feelings = [{}]

const data = [
  { name: 'Sat', uv: 100 },
  { name: 'Sun', uv: 50 },
  { name: 'Mon', uv: 100 },
  { name: 'Tue', uv: 75 },
  { name: 'Wed', uv: 25 },
  { name: 'Thu', uv: 0 },
  { name: 'Fri', uv: 100 }
]

const DataFormater = number => {
  if (number === 100) {
    return '😬'
  } else if (number === 75) {
    return '🙂'
  } else if (number === 50) {
    return '😐'
  } else if (number === 25) {
    return '😢'
  } else if (number === 0) {
    return '😠'
  } else {
    return '🙄'
  }
}

export default function OverviewBars({ feeling, onFeelingChange }) {
  // const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const currentDate = moment().format('YYYY-MM-DD')

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
        // setData(data.data)
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
  return (
    <>
      {loading ? (
        <LoadingUI style={{ position: 'absolute', top: '50%' }} />
      ) : error ? (
        <SomethingWrong />
      ) : (
        <StyledOverviewBars>
          <span>
            Here’s an overview of how your week has been so far. You’re doing
            great!
          </span>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: -10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={DataFormater} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#2676FF"
                fill="#2676FF"
              />
            </LineChart>
          </ResponsiveContainer>
        </StyledOverviewBars>
      )}
    </>
  )
}

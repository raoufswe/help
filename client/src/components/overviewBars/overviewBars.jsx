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

export default function OverviewBars({ feeling, onFeelingChange }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const currentWeek = moment()
    .startOf('week')
    .format('YYYY-MM-DD')

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
        `http://localhost:3000/feeling/${id}/${currentWeek}`,
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

  const { _id, __v, userID, ...feelings } = data
  const LinChartData = Object.entries(feelings).map(e => ({
    name: e[0],
    uv: e[1].emoji,
    weight: e[1].weight
  }))
  // .sort((a, b) => a.weight - b.weight)

  const DataFormater = emoji => {
    if (emoji === '😬') {
      return '😬'
    } else if (emoji === '🙂') {
      return '🙂'
    } else if (emoji === '😐') {
      return '😐'
    } else if (emoji === '😢') {
      return '😢'
    } else if (emoji === '😠') {
      return '😠'
    }
  }

  console.log({ LinChartData })
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
              data={LinChartData}
              margin={{ top: 10, right: 30, left: -10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={0} type="category" />
              <YAxis type="category" tickFormatter={DataFormater} />
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

import React, { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'
import moment from 'moment'
import { StyledOverviewBars } from './overviewBars.styles'
import Bar from './bar'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'
import { getRange } from './date.helper'
import { getUserDetails } from 'utils/verifyToken.js'

export default function OverviewBars({ feeling, onFeelingChange }) {
  const [data, setData] = useState([])
  const [weekFeelings, setWeekFeelings] = useState([])
  const [loading, setLoading] = useState(true)
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
        setData(data.data)
        setWeekFeelings(data.data.slice(-7))
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

  let lastDate = weekFeelings.slice(-1)[0]

  const evaluatedDates = useMemo(() => getRange(lastDate?._id, weekFeelings), [
    weekFeelings
  ])

  useEffect(() => {
    fetchFeeling()
  }, [feeling])

  console.log({ evaluatedDates })

  return (
    <>
      {loading ? (
        <LoadingUI style={{ position: 'absolute', top: '50%' }} />
      ) : error ? (
        <SomethingWrong />
      ) : data.length ? (
        <StyledOverviewBars>
          <span>
            Here’s an overview of how your week has been so far. You’re doing
            great!
          </span>
          <div className="bars">
            {evaluatedDates?.map(({ feeling }, key) => {
              return key <= 7 ? <Bar key={key} value={feeling} /> : null
            })}
          </div>
        </StyledOverviewBars>
      ) : null}
    </>
  )
}

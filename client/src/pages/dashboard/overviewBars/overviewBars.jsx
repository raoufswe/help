import React, { useState, useEffect, useMemo } from 'react'
import Cookies from 'js-cookie'
import moment from 'moment'
import './overviewBars.scss'
import LoadingUI from 'components/loading.jsx'
import { getRange } from './date.helper'
import { getUserDetails } from 'utils/verifyToken.js'
import ErrorUI from 'components/errorUI.jsx'
import Loader from 'assets/loader.jsx'
import useGetFeelings from '../hooks/useGetFeelings'
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
import NoData from './noData'

export default function OverviewBars({ feeling, onFeelingChange }) {
  const { status, data } = useGetFeelings()
  const { _id, __v, userID, week, ...feelings } = data || {}
  const LinChartData = Object.entries(feelings).map(e => ({
    name: e[0],
    uv: e[1].emoji,
    weight: e[1].weight
  }))

  const DataFormatter = weight => {
    if (weight === 100) {
      return '😬'
    } else if (weight === 75) {
      return '🙂'
    } else if (weight === 50) {
      return '😐'
    } else if (weight === 25) {
      return '😢'
    } else if (weight === 0) {
      return '😠'
    }
  }

  return (
    <div className="overview-bars">
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <ErrorUI />
      ) : LinChartData.length ? (
        <div>
          <span>Here’s an overview of how your week has been so far.</span>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={LinChartData}
              margin={{ top: 15, right: 30, left: -10, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" type="category" />
              <YAxis
                type="number"
                dataKey="weight"
                tickFormatter={DataFormatter}
                domain={[dataMin => 0, dataMax => 100]}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#2676FF"
                fill="#2676FF"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <NoData />
      )}
    </div>
  )
}

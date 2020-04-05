import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Styled from './dashboard.styles'
import Greeting from 'components/greeting.jsx'
import Feeling from 'components/feeling.jsx'
import OverviewBars from 'components/overviewBars'
import { bars } from '__mocks__/bars.js'
import { getUserDetails } from 'utils/verifyToken.js'

const Dashboard = ({ history }) => {
  const [feeling, setFeeling] = useState(null)
  const { name } = getUserDetails()

  const onFeelingChange = feeling => {
    return setFeeling(feeling)
  }

  return (
    <Styled>
      <div className="title">
        <Greeting name={name} />
        <span className="sub-title">
          Remember to breathe and think positive thoughts.
        </span>
      </div>

      <div className="feeling">
        <Feeling onChange={onFeelingChange} />
      </div>

      <OverviewBars feeling={feeling} />

      <div className="relax"></div>
    </Styled>
  )
}

export default Dashboard

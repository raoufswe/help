import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import Styled from './dashboard.styles'
import Greeting from 'components/greeting.jsx'
import Feeling from './feeling.jsx'
import OverviewBars from './overviewBars'
import { getUserDetails } from 'utils/verifyToken.js'

const Dashboard = ({ history }) => {
  const [feeling, setFeeling] = useState(null)
  const { name } = getUserDetails()
  console.log(name)

  return (
    <Styled>
      <div className="title">
        <Greeting name={name} />
        <span className="sub-title">
          Remember to breathe and think positive thoughts.
        </span>
      </div>

      <div className="feeling">
        <Feeling />
      </div>

      <OverviewBars />

      <div className="relax"></div>
    </Styled>
  )
}

export default Dashboard

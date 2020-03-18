import React from 'react'
import Styled from './dashboard.styles'
import Greeting from 'components/greeting.jsx'
import Feeling from 'components/feeling.jsx'
import OverviewBars from 'components/overviewBars'
import { bars } from '__mocks__/bars.js'

const Dashboard = ({ history }) => {
  const name = 'Raouf'

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

      <OverviewBars bars={bars} />

      <div className="relax"></div>
    </Styled>
  )
}

export default Dashboard

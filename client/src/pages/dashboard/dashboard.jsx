import React, { useContext } from 'react'
import Cookies from 'js-cookie'
import Styled from './dashboard.styles'
import Greeting from 'components/greeting.jsx'
import Feeling from 'components/feeling.jsx'
import OverviewBars from 'components/overviewBars'
import { bars } from '__mocks__/bars.js'
import { Context } from 'context'

const Dashboard = ({ history }) => {
  const [globalContext, setGlobalContext] = useContext(Context)
  
  return (
    <Styled>
      <div className="title">
        <Greeting
          name={globalContext.currentUser?.name ?? Cookies.get('userName')}
        />
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

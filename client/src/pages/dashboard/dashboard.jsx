import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import './dashboard.scss'
import Greeting from 'components/greeting.jsx'
import Feeling from './feeling.jsx'
import OverviewBars from './overviewBars'
import { getUserDetails } from 'utils/verifyToken.js'
import { IonContent } from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'

const Dashboard = ({ history }) => {
  const [feeling, setFeeling] = useState(null)
  const { name } = getUserDetails()

  return (
    <div className="dashboard">
      <HeaderMenu />
      <IonContent forceOverscroll={false}>
        <div className="title">
          <Greeting name={name} />
          <span className="sub-title">
            Remember to breathe and think positive thoughts.
          </span>
        </div>
        <Feeling />
        <OverviewBars />
        <div className="relax"></div>
      </IonContent>
    </div>
  )
}

export default Dashboard

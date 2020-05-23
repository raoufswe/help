import React from 'react'
import { StyledBar, StyledFiller } from './overviewBars.styles'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import Thinking from 'assets/thinking.icon.jsx'

export default function Bar({ feeling, count }) {
  const renderFeeling = feeling => {
    switch (feeling) {
      case 'superHappy':
        return <SuperHappyIcon />
      case 'happy':
        return <Happy />
      case 'confused':
        return <Confused />
      case 'unhappy':
        return <Unhappy />
      case 'mad':
        return <Mad />
    }
  }

  return (
    <StyledBar>
      <span className="count">{count}</span>
      <div className="bar">
        <Filler count={count} />
      </div>
      {renderFeeling(feeling)}
    </StyledBar>
  )
}

const Filler = ({ count }) => {
  console.log(count)
  return <StyledFiller count={count} />
}

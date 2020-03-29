import React from 'react'
import { StyledBar, StyledFiller } from './overviewBars.styles'
import SuperHappyIcon from 'assets/super-happy.icon.jsx'
import Happy from 'assets/happy.icon.jsx'
import Confused from 'assets/confused.icon.jsx'
import Unhappy from 'assets/unhappy.icon.jsx'
import Mad from 'assets/mad.icon.jsx'
import Thinking from 'assets/thinking.icon.jsx'

export default function Bar({ value }) {
  const renderFeeling = feeling => {
    switch (feeling) {
      case '100%':
        return <SuperHappyIcon />
      case '75%':
        return <Happy />
      case '50%':
        return <Confused />
      case '25%':
        return <Unhappy />
      case '0%':
        return <Mad />
      default:
        return <Thinking />
    }
  }

  return (
    <StyledBar>
      <div className="bar">
        <Filler value={value} />
      </div>
      {renderFeeling(value)}
    </StyledBar>
  )
}

const Filler = ({ value }) => {
  return <StyledFiller value={value} />
}

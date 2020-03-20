import React from 'react'
import Bar from './bar'
import { StyledOverviewBars } from './overviewBars.styles'

export default function OverviewBars({ bars }) {
  return (
    <StyledOverviewBars>
      <span>
        Here’s an overview of how your week has been so far. You’re doing great!
      </span>
      <div className="bars">
        {bars.map(({ value }, key) => (
          <Bar key={key} value={value} />
        ))}
      </div>
    </StyledOverviewBars>
  )
}

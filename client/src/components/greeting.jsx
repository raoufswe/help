import React from 'react'
import styled from 'styled-components'
import maxmin from 'utils/maxmin.js'

const Styled = styled.div`
  span {
    display: block;
    font-weight: 600;
    font-size: x-large;
    color: #000000;
    padding-bottom: 0.8rem;
    letter-spacing: 0.2px;
    line-height: 1.2;
  }
`
export default function Greeting({ name = 'Awesome soul' }) {
  const currentHour = new Date().getHours()
  let greet

  if (currentHour < 12) greet = 'Good Morning'
  else if (currentHour >= 12 && currentHour <= 17) greet = 'Good Afternoon'
  else if (currentHour >= 17 && currentHour <= 24) greet = 'Good Evening'
  return (
    <Styled>
      <span>
        {greet}, {name}
      </span>
    </Styled>
  )
}

import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  font-family: Fira Sans;
  span {
    display: block;
    font-weight: 600;
    font-size: 36px;
    color: #000000;
    padding-bottom: 10px;
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

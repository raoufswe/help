import React, { useState, useCallback } from 'react'
import Styled from './home.styles'
import SideMenu from 'components/sideMenu/sideMenu.jsx'

const Home = ({ history }) => {
  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  return (
    <Styled>
      <SideMenu isOpen={isOpen} onClick={onClick} />
    </Styled>
  )
}

export default Home

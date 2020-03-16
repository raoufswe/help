import React, { useState } from 'react'
import { StyledJournaling } from './journaling.styles'
import SideMenu from 'components/sideMenu'
import Journal from './journal'
import { Journals } from './utils'
import Add from 'components/add.jsx'

const Journaling = ({ history }) => {
  const name = 'Raouf'
  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  return (
    <StyledJournaling>
      <div className="top-page">
        <SideMenu isOpen={isOpen} onClick={onClick} />
        <span className="page-header">Great Journaling, {name} </span>
        <span className="page-subheader">
          Journals help you reflect and improve ourselves.
        </span>
      </div>

      <div className="journaling-streak">
        <span className="streak-message">
          🔥 great work, keep the streak going!
        </span>
      </div>

      <main>
        {Journals.map(({ date, time, content }, key) => (
          <Journal key={key} date={date} time={time} content={content} />
        ))}
      </main>

      <Add onClick={() => history.push('/addJournal')} />
    </StyledJournaling>
  )
}

export default Journaling

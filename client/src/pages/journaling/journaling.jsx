import React, { useState, useContext } from 'react'
import { StyledJournaling } from './journaling.styles'
import SideMenu from 'components/sideMenu'
import Journal from './journal'
import { Journals } from '__mocks__/journals.js'
import Add from 'components/add.jsx'
import Cookies from 'js-cookie'
import PencilIcon from 'assets/pencil.icon.jsx'
import { Context } from 'context'

const Journaling = ({ history }) => {
  const [globalContext, setGlobalContext] = useContext(Context)
  const name = Cookies.get('userName')
  const [isOpen, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  const onPencilClick = journal => {
    setGlobalContext({
      ...globalContext,
      journal
    })
    history.push(`/updateJournal/${journal.id}`)
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
        {Journals.map((journal, key) => (
          <div className="journal-entry" key={key}>
            <Journal
              date={journal.date}
              time={journal.time}
              content={journal.content}
            />
            <button onClick={() => onPencilClick(journal)}>
              <PencilIcon />
            </button>
          </div>
        ))}
      </main>

      <Add onClick={() => history.push('/addJournal')} />
    </StyledJournaling>
  )
}

export default Journaling

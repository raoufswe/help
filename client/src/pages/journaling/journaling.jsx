import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useQuery } from 'react-query'
import axios from 'axios'
import 'react-day-picker/lib/style.css'
import { StyledJournaling } from './journaling.styles'
import SideMenu from 'components/sideMenu'
import Journal from './journal'
import Add from 'components/add.jsx'
import PencilIcon from 'assets/pencil.icon.jsx'
import Calendar from 'assets/calendar.icon.jsx'
import DatePicker from 'components/datePicker.jsx'

const Journaling = ({ history }) => {
  const name = Cookies.get('userName')
  const [isOpen, setOpen] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const onClick = () => {
    setOpen(!isOpen)
  }

  const onPencilClick = id => {
    history.push(`/updateJournal/${id}`)
  }

  const getJournals = async () => {
    const { data } = await axios.get('http://localhost:3000/journals')
    return data.data
  }

  const { status, data, error, isFetching } = useQuery('journals', getJournals)

  return (
    <StyledJournaling>
      <div className="top-page">
        <SideMenu isOpen={isOpen} onClick={onClick} />
        <span className="page-header">Great Journaling, {name} </span>
        <span className="page-subheader">
          Journals help you reflect and improve ourselves.
        </span>
      </div>

      <div className="journaling-cta">
        <div className="journaling-streak">
          <span className="streak-message">
            🔥 great work, keep the streak going!
          </span>
        </div>

        <button
          onClick={() => setShowCalendar(true)}
          className="journaling-calendar"
        >
          <Calendar />
        </button>
      </div>

      {showCalendar && (
        <DatePicker
          onOutsideClick={() => setShowCalendar(false)}
          onDayChange={day => console.log(day)}
        />
      )}

      <main>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            {data?.map(({ _id, content, createdAt }, key) => (
              <div className="journal-entry" key={key}>
                <Journal createdAt={createdAt} content={content} />
                <button onClick={() => onPencilClick(_id)}>
                  <PencilIcon />
                </button>
              </div>
            ))}
          </>
        )}
      </main>

      <Add onClick={() => history.push('/addJournal')} />
    </StyledJournaling>
  )
}

export default Journaling

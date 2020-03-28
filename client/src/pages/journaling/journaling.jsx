import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import 'react-day-picker/lib/style.css'
import { StyledJournaling } from './journaling.styles'
import SideMenu from 'components/sideMenu'
import Journal from './journal'
import Add from 'components/add.jsx'
import PencilIcon from 'assets/pencil.icon.jsx'
import Calendar from 'assets/calendar.icon.jsx'
import DatePicker from 'components/datePicker.jsx'
import { getDate } from 'utils/dataHelpers/dataHelpers.js'
import LoadingUI from 'components/loading.jsx'
import SomethingWrong from 'components/someThingWrong.jsx'

const Journaling = ({ history }) => {
  const name = Cookies.get('userName')
  const [showSideMenu, setSideMenu] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchJournals = async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      const response = await fetch(
        'http://localhost:3000/journals',
        requestOptions
      )
      if (response.status === 200) {
        const data = await response.json()
        setData(data.data)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchJournals()
  }, [])

  const todayJournals = data?.map(journal =>
    getDate(journal?.createdAt) === getDate(selectedDate) ? journal : null
  )
  const recentJournals = data?.slice(0, 3)

  return (
    <StyledJournaling>
      <div className="top-page">
        <SideMenu
          isOpen={showSideMenu}
          onClick={() => setSideMenu(!showSideMenu)}
        />
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
          onDayChange={day => setSelectedDate(day)}
        />
      )}

      {loading ? (
        <LoadingUI style={{ position: 'absolute', top: '50%' }} />
      ) : error ? (
        <SomethingWrong />
      ) : (
        <main>
          {
            <>
              {todayJournals[0] ? (
                todayJournals?.map(({ _id, content, createdAt }, key) => (
                  <div className="journal-entry" key={key}>
                    <Journal createdAt={createdAt} content={content} />
                    <button
                      onClick={() => history.push(`/updateJournal/${_id}`)}
                    >
                      <PencilIcon />
                    </button>
                  </div>
                ))
              ) : recentJournals.length ? (
                <>
                  <div className="no-data">
                    <LoadingUI />
                    it looks you don't have data at this date. here is your
                    recent ones
                  </div>

                  {recentJournals?.map(({ _id, content, createdAt }, key) => (
                    <div className="journal-entry" key={key}>
                      <Journal createdAt={createdAt} content={content} />
                      <button
                        onClick={() => history.push(`/updateJournal/${_id}`)}
                      >
                        <PencilIcon />
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <div className="no-data">
                  <LoadingUI />
                  Journals helps you to understand yourself better. start your
                  first!
                </div>
              )}
            </>
          }
        </main>
      )}

      <Add onClick={() => history.push('/addJournal')} />
    </StyledJournaling>
  )
}

export default Journaling

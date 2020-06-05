import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import 'react-day-picker/lib/style.css'
import { StyledJournals } from './journaling.styles'
import Journal from './journal'
import Add from 'components/add.jsx'
import PencilIcon from 'assets/pencil.icon.jsx'
import Calendar from 'assets/calendar.icon.jsx'
import DatePicker from 'components/datePicker.jsx'
import { getDate } from 'utils/dateHelpers/dateHelpers.js'
import useJournals from './hooks/useJournals'
import ErrorUI from 'components/errorUI.jsx'
import Loader from 'assets/loader.jsx'
import NoRecentData from './noRecentData'
import NoData from './noData'
import { getUserDetails } from 'utils/verifyToken.js'
import AngleIcon from 'assets/angle.icon.jsx'
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'
import { queryCache } from 'react-query'

const Journals = ({ history }) => {
  const { name } = getUserDetails()
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { status, data } = useJournals()
  const [showAll, setShowAll] = useState(false)

  const todayJournals = data?.filter(
    journal => getDate(journal?.createdAt) === getDate(selectedDate)
  )

  const doRefresh = event => {
    queryCache.refetchQueries('tasks')
    setTimeout(() => {
      event.detail.complete()
    }, 500)
  }

  return (
    <>
      <HeaderMenu />
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <StyledJournals showAll={showAll}>
          <div className="top-page">
            <span className="page-header">
              Let's record some ideas, {name}{' '}
            </span>
          </div>

          <div className="journaling-cta">
            <div className="journaling-streak">
              <span className="streak-message">
                🔥 Keep your thoughts organized
              </span>
            </div>

            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="journaling-calendar"
            >
              <Calendar />
            </button>
          </div>

          {showCalendar && (
            <div className="calendar">
              <DatePicker
                disabledDate={{ after: new Date() }}
                onOutsideClick={() => setShowCalendar(false)}
                onChange={day => setSelectedDate(day)}
              />
            </div>
          )}

          <main>
            {
              <>
                {status === 'loading' ? (
                  <Loader />
                ) : status === 'error' ? (
                  <ErrorUI />
                ) : data.length ? (
                  <>
                    {todayJournals.length ? (
                      todayJournals?.map(({ _id, content, createdAt }, key) => (
                        <div className="journal-entry" key={key}>
                          <Journal createdAt={createdAt} content={content} />
                          <button
                            onClick={() =>
                              history.push(`/updateJournal/${_id}`)
                            }
                          >
                            <PencilIcon />
                          </button>
                        </div>
                      ))
                    ) : (
                      <NoRecentData />
                    )}
                    {data.length !== 1 && !todayJournals.length ? (
                      <>
                        <div
                          className="completed-count"
                          onClick={() => setShowAll(!showAll)}
                        >
                          <span>All journals ({data.length})</span>
                          <AngleIcon className="angle" />
                        </div>
                        {showAll &&
                          data?.map(({ _id, content, createdAt }, key) => (
                            <div className="journal-entry" key={key}>
                              <Journal
                                createdAt={createdAt}
                                content={content}
                              />
                              <button
                                onClick={() =>
                                  history.push(`/updateJournal/${_id}`)
                                }
                              >
                                <PencilIcon />
                              </button>
                            </div>
                          ))}
                      </>
                    ) : null}
                  </>
                ) : (
                  <NoData />
                )}
              </>
            }
          </main>

          <Add onClick={() => history.push('/addJournal')} />
        </StyledJournals>
      </IonContent>{' '}
    </>
  )
}

export default Journals

import React from 'react'
import Cookies from 'js-cookie'
import { StyledGratefulThings } from './grateful.styles'
import Add from 'components/add.jsx'
import useGratefulThings from './hooks/useGratefulThings'
import ErrorUI from 'components/errorUI.jsx'
import Loader from 'assets/loader.jsx'
import NoData from './noData'
import PencilIcon from 'assets/pencil.icon.jsx'

export default function GratefulThings({ history }) {
  const { status, data } = useGratefulThings()

  return (
    <StyledGratefulThings>
      <h3 className="page-title">Things I am grateful for.</h3>

      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <ErrorUI />
      ) : data?.length ? (
        <main>
          {data?.map(({ content, _id }, key) => (
            <div className="gratefulThing" key={key}>
              <div className="title">{content}</div>
              <button onClick={() => history.push(`/gratefulThing/${_id}`)}>
                <PencilIcon className="pencilIcon" />
              </button>
            </div>
          ))}
        </main>
      ) : (
        <NoData />
      )}

      <Add onClick={() => history.push('/addGratefulThing')} />
    </StyledGratefulThings>
  )
}

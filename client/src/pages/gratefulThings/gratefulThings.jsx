import React from 'react'
import Cookies from 'js-cookie'
import './grateful.scss'
import Add from 'components/add.jsx'
import useGratefulThings from './hooks/useGratefulThings'
import ErrorUI from 'components/errorUI.jsx'
import Loader from 'assets/loader.jsx'
import NoData from './noData'
import PencilIcon from 'assets/pencil.icon.jsx'
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRefresher,
  IonRefresherContent
} from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'
import { queryCache } from 'react-query'

export default function GratefulThings({ history }) {
  const { status, data } = useGratefulThings()

  const doRefresh = event => {
    queryCache.refetchQueries('gratefulThings')
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

        <div className="grateful-things">
          <h3 className="grateful-things-page-title">
            Things I am grateful for.
          </h3>
          {status === 'loading' ? (
            <Loader />
          ) : status === 'error' ? (
            <ErrorUI />
          ) : data?.length ? (
            <IonGrid>
              {data?.map(({ content, _id }, key) => (
                <IonRow>
                  <IonCol className="grateful-thing-item" key={key}>
                    <div className="grateful-thing-title">{content}</div>
                    <button
                      onClick={() => history.push(`/gratefulThing/${_id}`)}
                    >
                      <PencilIcon className="pencil-icon" />
                    </button>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          ) : (
            <NoData />
          )}
          <Add onClick={() => history.push('/addGratefulThing')} />
        </div>
      </IonContent>
    </>
  )
}

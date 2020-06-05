import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import './dashboard.scss'
import Greeting from 'components/greeting.jsx'
import Feeling from './feeling.jsx'
import OverviewBars from './overviewBars'
import { getUserDetails } from 'utils/verifyToken.js'
import useUpdateNotificationDevice from './hooks/useUpdateNotificationDevice'
import {
  IonContent,
  IonButton,
  IonListHeader,
  IonLabel,
  IonText,
  IonItem,
  IonList
} from '@ionic/react'
import HeaderMenu from 'components/menu/headerMenu'
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed
} from '@capacitor/core'
const { PushNotifications } = Plugins

const Dashboard = ({ history }) => {
  const [feeling, setFeeling] = useState(null)
  const { name } = getUserDetails()
  const [
    UpdateNotificationDevice,
    { updateStatus }
  ] = useUpdateNotificationDevice()

  const [receivedNoti, setReceivedNoti] = useState([])

  const push = () => {
    PushNotifications.register()
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        UpdateNotificationDevice(token.value)
        alert('Push registration success, token: ' + token.value)
      }
    )
    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error))
    })

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotification) => {
        alert(notification)

        setReceivedNoti([
          ...receivedNoti,
          {
            id: notification.id,
            title: notification.title,
            body: notification.body
          }
        ])
      }
    )

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        setReceivedNoti([
          ...receivedNoti,
          {
            id: notification.notification.data.id,
            title: notification.notification.data.title,
            body: notification.notification.data.body
          }
        ])
      }
    )
  }

  return (
    <div className="dashboard">
      <HeaderMenu />
      <IonContent forceOverscroll={false}>
        <div className="title">
          <Greeting name={name} />
          <span className="sub-title">
            Remember to breathe and think positive thoughts.
          </span>
        </div>
        {/* <IonList>
          <IonListHeader>
            <IonLabel>Notifications</IonLabel>
          </IonListHeader>
          {JSON.stringify(receivedNoti)}
          {receivedNoti &&
            receivedNoti.map((notif: any) => (
              <IonItem key={notif.id}>
                <IonLabel>
                  <IonText>
                    <h3>{notif.title}</h3>
                  </IonText>
                  <p>{notif.body}</p>
                </IonLabel>
              </IonItem>
            ))}
        </IonList> */}
        <Feeling />
        <OverviewBars />
        <div className="relax"></div>
        {/* <IonButton expand="full" onClick={() => push()}>
          Register for Push
        </IonButton> */}
      </IonContent>
    </div>
  )
}

export default Dashboard

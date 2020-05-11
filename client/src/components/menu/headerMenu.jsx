import React from 'react'
import { IonHeader, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react'
import './menu.css'

export default function HeaderMenu() {
  return (
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton color="dark"></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

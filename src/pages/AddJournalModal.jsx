import React, { useState } from 'react'
import {
  IonModal,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter
} from '@ionic/react'

const AddJournalModal = ({ showModal, onDidDismiss }) => {
  const [journal, setJournal] = useState({})

  const onChange = e => {
    const { value } = e.target
    setJournal({
      ...journal,
      [e.target.name]: value
    })
  }

  return (
    <IonModal isOpen={showModal} onDidDismiss={() => onDidDismiss()}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Add Journal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent padding>
        <p>Express your feelings</p>
        <IonItem>
          <IonLabel position="stacked">Journal Title</IonLabel>
          <IonInput
            type="text"
            onIonChange={onChange}
            name="title"
            value={journal.title}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Summary</IonLabel>
          <IonTextarea
            rows={6}
            onIonChange={onChange}
            name="summary"
            value={journal.summary}
          />
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    onDidDismiss({ result: journal })
                  }}
                >
                  Save
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  expand="full"
                  onClick={() => {
                    setJournal({
                      title: null,
                      summary: null
                    })
                    onDidDismiss()
                  }}
                >
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonFooter>
    </IonModal>
  )
}

export default AddJournalModal

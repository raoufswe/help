import * as firebase from 'firebase'

require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyDecBUBtabi0vLkhv54_qZF3EXAjv_jEsc',
  authDomain: 'mental-health-1160b.firebaseapp.com',
  databaseURL: 'https://mental-health-1160b.firebaseio.com',
  projectId: 'mental-health-1160b',
  storageBucket: 'mental-health-1160b.appspot.com',
  messagingSenderId: '187204633537',
  appId: '1:187204633537:web:99269beafa4293c59ea540',
  measurementId: 'G-M66YJ2FHZ4'
}

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : null

export const firebaseAppAuth = firebaseApp.auth()
export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider()
}

/**
 * so this function is called when the authentication state changes
 * in the application, a side effect of that is that we need to get
 * the rest of the user data from the user collection, that is
 * done with the _handleAuthedUser callback
 */
export const authCheck = async _handleAuthedUser => {
  return new Promise(resolve => {
    // Listen for authentication state to change.
    firebase.auth().onAuthStateChanged(async user => {
      if (user != null) {
        console.log('We are authenticated now!')

        return resolve(await _handleAuthedUser(user))
      }
      console.log('We did not authenticate.')
      _handleAuthedUser(null)
      return resolve(null)
    })
  })
}

export const getCurrentUser = () => {
  return firebase.auth().currentUser
}

export const logOut = () => {
  return firebase.auth().signOut()
}

export const getUserProfile = () => {
  const user = firebase.auth().currentUser
  console.log(user)

  const userRef = firebase
    .firestore()
    .collection('users')
    .doc(user.uid)

  return userRef
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log('Document data:', doc.data())
        return {
          ...doc.data(),
          id: user.uid
        }
      }
      console.log('No such document!', user.uid)
      return null
    })
    .catch(error => {
      console.log('Error getting document:', error)
    })
}

export const queryObjectCollection = ({ collection }) => {
  const currentUserId = firebase.auth().currentUser.uid
  const collectionRef = firebase.firestore().collection(collection)
  const results = []

  return collectionRef
    .where('owner', '==', currentUserId)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        results.push({
          id: doc.id,
          ...doc.data()
        })
      })
      return results
    })
    .catch(error => {
      console.log('Error getting documents: ', error)
      return error
    })
}

/**
 *
 * @param {*} _collection - name of collection to add object to
 * @param {*} _objectData - data to add to the collection
 */
export const addObjectToCollection = ({ collection, objectData }) => {
  const currentUserId = firebase.auth().currentUser.uid
  const collectionRef = firebase.firestore().collection(collection)

  return collectionRef
    .add({
      owner: currentUserId,
      content: { ...objectData },
      created: new Date().getTime(),
      updated: new Date().getTime()
    })
    .then(
      async doc => {
        console.log(`addObjectToCollection ${collection} ${doc}`)

        const docData = await getByRef(doc)
        return docData
      },
      error => {
        console.log(`ERROR: addObjectToCollection ${collection} ${error}`)
        return error
      }
    )
    .catch(e => {
      console.log(`ERROR: addObjectToCollection ${collection} ${e}`)
      return e
    })
}

/**
 *
 * @param {*} collection - name of collection
 * @param {*} objectId - id of data to remove from the collection
 */
export const removeObjectFromCollection = ({ collection, objectId }) => {
  const currentUserId = firebase.auth().currentUser.uid
  const collectionRef = firebase.firestore().collection(collection)

  return collectionRef
    .doc(objectId)
    .delete()
    .then(
      async doc => {
        console.log(`removeObjectFromCollection ${collection} ${objectId}`)
        return true
      },
      error => {
        console.log(`ERROR: removeObjectFromCollection ${collection} ${error}`)
        return error
      }
    )
    .catch(e => {
      console.log(`ERROR: removeObjectFromCollection ${collection} ${e}`)
      return e
    })
}

export const getByRef = _documentRef => {
  return _documentRef
    .get()
    .then(doc => {
      if (doc.exists) {
        return { ...doc.data(), id: _documentRef.id }
      }
      // doc.data() will be undefined in this case
      console.log('No such document!')
      return null
    })
    .catch(error => {
      console.log('Error getting document:', error)
      return error
    })
}

/**
 *
 * @param {*} blob
 */
// export const uploadImage = blob => {
//   return new Promise((resolve, reject) => {
//     const currentUserId = firebase.auth().currentUser.uid;
//     const ref = firebase
//       .storage()
//       .ref(currentUserId)
//       .child(`${new Date().getTime()}-${currentUserId}.jpeg`);

//     const task = ref.put(blob);

//     task.on(
//       firebase.storage.TaskEvent.STATE_CHANGED,
//       snapshot => console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
//       error => {
//         console.log("error", error);
//         return reject(error);
//       },
//       result => {
//         return resolve({
//           url: task.snapshot.downloadURL,
//           contentType: task.snapshot.metadata.contentType,
//           name: task.snapshot.metadata.name,
//           size: task.snapshot.metadata.size
//         });
//       }
//     );
//   });
// };

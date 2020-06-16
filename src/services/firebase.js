// based on https://invertase.io/blog/firebase-with-gatsby
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

let instance = null

const getFirebase = () => {
  if (typeof window !== 'undefined') {
    if (instance) return instance
    instance = firebase.initializeApp(firebaseConfig)
    return instance
  }

  return null
}

export default getFirebase

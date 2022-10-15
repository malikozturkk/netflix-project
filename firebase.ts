// not: Firebase ilk kurduktan sonra verdiği dosyaların düzenlenmiş hali (entegrasyon için)
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7oVeOUirv7rKB-GEByfXRT9iLZUDMIHo",
  authDomain: "netflix-clone-a1a96.firebaseapp.com",
  databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
  projectId: "netflix-clone-a1a96",
  storageBucket: "netflix-clone-a1a96.appspot.com",
  messagingSenderId: "154909164580",
  appId: "1:154909164580:web:5b3e6dc29f5ffad74804b1",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, 
  // databaseUrl: process.env.REACT_APP_FIREBASE_DATABASE_URL, 
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID, 
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, 
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, 
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
  apiKey: "AIzaSyAsBfd6r80N7ZosXdIPmiDFV_4qUG4T8G4",
  authDomain: "riifucord-ref-lib-v2.firebaseapp.com",
  databaseURL: "https://riifucord-ref-lib-v2-default-rtdb.firebaseio.com",
  projectId: "riifucord-ref-lib-v2",
  storageBucket: "riifucord-ref-lib-v2.firebasestorage.app",
  messagingSenderId: "773880570443",
  appId: "1:773880570443:web:a4f6f27c8d2139b7e0a3ce",
  measurementId: "G-6PGKELN7QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app)

export { database, auth };
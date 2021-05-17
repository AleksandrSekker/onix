import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyCDjlDo4U_89PKGVj51vGGcPx6phd8McmE',
  authDomain: 'myproject-21d64.firebaseapp.com',
  databaseURL: 'https://myproject-21d64-default-rtdb.firebaseio.com',
  projectId: 'myproject-21d64',
  storageBucket: 'myproject-21d64.appspot.com',
  messagingSenderId: '124788208408',
  appId: '1:124788208408:web:fbe44a8de8806bc02da46d',
  measurementId: 'G-CYC839BXYZ'
});
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {
  auth, firestore, storage, timestamp 
};

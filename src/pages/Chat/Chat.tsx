import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import styles from './scss/chat.module.scss';

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

const Chat = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="container">
      <SignOut auth={auth} />
      <section className={styles.section}>
        {user ? <ChatRoom firestore={firestore} auth={auth} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
};
export default Chat;

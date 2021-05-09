import firebase from 'firebase/app';
import React, { useRef, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';
import styles from '../scss/chat.module.scss';

interface Props {
  firestore: any;
  auth: any;
}

const ChatRoom = ({ firestore, auth }: Props) => {
  const dummy: any = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className={styles.main}>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} auth={auth} />)}
        <span ref={dummy} />
      </main>

      <form className={styles.form} onSubmit={sendMessage}>
        <input
          className={styles.input}
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button className={styles.button} type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
};
export default ChatRoom;

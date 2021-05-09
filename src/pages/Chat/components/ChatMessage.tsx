import React from 'react';
import styles from '../scss/chat.module.scss';

interface Props {
  message: any;
  auth: any;
  key: any;
}

const ChatMessage = ({ message, auth }: Props) => {
  const { text, uid, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? styles.sent : styles.received;
  return (
    <>
      <div className={`${styles.message} ${messageClass}`}>
        <img
          className={styles.avatar}
          alt="img"
          src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
        />
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};
export default ChatMessage;

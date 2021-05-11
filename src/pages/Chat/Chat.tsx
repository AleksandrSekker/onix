import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from './components/ChatRoom';
import styles from './scss/chat.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import { auth, firestore } from '../../firebase';
import NotAutorize from '../../components/Error/NotAutorize';

const Chat = () => {
  const [user] = useAuthState(auth);
  const { darkTheme } = useDarkThemeContext(styles);
  return (
    <div className={darkTheme}>
      <div className="container">
        <section className={styles.section}>
          {user ? <ChatRoom firestore={firestore} auth={auth} /> : <NotAutorize />}
        </section>
      </div>
    </div>
  );
};
export default Chat;

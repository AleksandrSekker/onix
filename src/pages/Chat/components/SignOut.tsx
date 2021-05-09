import React from 'react';
import styles from '../scss/chat.module.scss';

interface Props {
  auth: any;
}

const SignOut = ({ auth }: Props) => {
  return (
    auth.currentUser && (
      <button type="button" className={styles.sign__out} onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};
export default SignOut;

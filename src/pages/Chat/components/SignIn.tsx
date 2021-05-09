import firebase from 'firebase/app';
import React from 'react';
import styles from '../scss/chat.module.scss';

interface Props {
  auth: any;
}
const SignIn = ({ auth }: Props) => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button type="button" className={styles.sign__in} onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
};
export default SignIn;

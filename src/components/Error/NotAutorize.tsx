import React from 'react';
import styles from './scss/Error.module.scss';
import svg from '../../assets/images/error.svg';
import SignInButton from '../LoginButton/SignInButton';

const NotAutorize = () => {
  return (
    <div className={styles.error}>
      <img alt="error" className={styles.error__image} src={svg} />
      <h4 className={styles.error__title}>You are not authorized to view this page</h4>
      <SignInButton />
    </div>
  );
};
export default NotAutorize;

import React from 'react';
import styles from './scss/Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader} />
    </div>
  );
};
export default Loader;

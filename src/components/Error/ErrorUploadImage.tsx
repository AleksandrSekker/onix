import React from 'react';
import svg from '../../assets/images/error.svg';
import styles from './scss/Error.module.scss';

const ErrorUploadImage = () => (
  <div className={styles.error}>
    <img alt="error" className={styles.error__image} src={svg} />
    <h4 className={styles.error__title}>Please select an image file (png, jpeg)</h4>
  </div>
);

export default ErrorUploadImage;

import React from 'react';
import styles from './Header.module.css';
interface Props {}

export const Header = (props: Props) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>Logo</h1>
        <div className={styles.navigationContent}>
          <p>Version Control</p>
          <p>Git</p>
          <p>Node</p>
          <p>Npm</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>
      </div>
      <hr />
    </>
  );
};

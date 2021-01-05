import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
interface Props {}

export const Header = (props: Props) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p className={styles.logo}>Home</p>
        </Link>

        <div className={styles.navigationContent}>
          <Link to="/vcs" style={{ textDecoration: 'none' }}>
            <p>Version Control</p>
          </Link>
          <Link to="/git" style={{ textDecoration: 'none' }}>
            <p>Git</p>
          </Link>
          <Link to="/node" style={{ textDecoration: 'none' }}>
            <p>Node</p>
          </Link>
          <Link to="/nam" style={{ textDecoration: 'none' }}>
            <p>Npm</p>
          </Link>
          <Link to="/html" style={{ textDecoration: 'none' }}>
            <p>HTML</p>
          </Link>
          <Link to="/css" style={{ textDecoration: 'none' }}>
            <p>CSS</p>
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

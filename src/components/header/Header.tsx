import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
interface Props {}

export const Header = (props: Props) => {
  const [isActive, setisActive] = useState(false);
  const [navfalse, setnavfalse] = useState(true);
  const hamburgerHandler = () => {
    isActive ? setisActive(false) : setisActive(true);
    navfalse ? setnavfalse(false) : setnavfalse(true);
  };
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <Link to="/onix" style={{ textDecoration: 'none' }}>
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
            <Link to="/npm" style={{ textDecoration: 'none' }}>
              <p>Npm</p>
            </Link>
            <Link to="/html" style={{ textDecoration: 'none' }}>
              <p>HTML</p>
            </Link>
            <Link to="/css" style={{ textDecoration: 'none' }}>
              <p>CSS</p>
            </Link>
          </div>
          <div
            className={`${styles.hamburger}
           ${isActive ? styles.open : null}
           `}
            onClick={hamburgerHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <hr />
        <div
          className={`${styles.navcontentVertical} ${
            navfalse ? styles.navFalse : null
          }`}
        >
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
      </header>
    </>
  );
};

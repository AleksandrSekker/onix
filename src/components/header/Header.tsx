import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switching, selectCheck } from '../../redux/checked/checkedSlice';
import styles from '../../scss/Header.module.scss';
import { Link } from 'react-router-dom';
interface Props {}

export const Header = (props: Props) => {
  const [isActive, setisActive] = useState(false);
  const [navfalse, setnavfalse] = useState(false);
  const checked = useSelector(selectCheck);
  const dispatch = useDispatch();
  const hamburgerHandler = () => {
    isActive ? setisActive(false) : setisActive(true);
    navfalse ? setnavfalse(false) : setnavfalse(true);
  };

  return (
    <>
      <header className={checked ? styles.dark : ''}>
        <div className={styles.headerContainer}>
          <div className={styles.containerForLogoAndSwitch}>
            <Link to="/onix" style={{ textDecoration: 'none' }}>
              <p className={styles.logo}>Home</p>
            </Link>
            <div>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => dispatch(switching())}
                />
                <span className={`${styles.slider} ${styles.round}`}></span>
              </label>
            </div>
          </div>
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
           ${isActive ? styles.open : ''}
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
            navfalse ? styles.navFalse : ''
          } ${checked ? styles.dark : ''}`}
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
      </header>
    </>
  );
};

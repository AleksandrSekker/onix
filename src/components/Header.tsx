import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../scss/Header.module.scss';
import { Link } from 'react-router-dom';
import { switching, selectCheck } from '../redux/checked/checkedSlice';

export const Header = () => {
  const [isActive, setisActive] = useState(false);
  const [navfalse, setnavfalse] = useState(false);
  const checked = useSelector(selectCheck);
  const dispatch = useDispatch();
  const hamburgerHandler = () => {
    isActive ? setisActive(false) : setisActive(true);
    navfalse ? setnavfalse(false) : setnavfalse(true);
  };
  const home: String = 'Home';
  const versionControl: String = 'Version Control';
  const git: String = 'Git';
  const node: String = 'Node';
  const npm: String = 'Npm';
  const html: String = 'HTML';
  const css: String = 'CSS';
  return (
    <>
      <header className={checked ? styles.dark : ''}>
        <div className={styles.header__container}>
          <div className={styles.container__for__logo__and__switch}>
            <Link to="/onix" className={styles.link__decoration}>
              <p className={styles.logo}>{home}</p>
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
          <div className={styles.navigation__content}>
            <Link to="/vcs" className={styles.link__decoration}>
              <p>{versionControl}</p>
            </Link>
            <Link to="/git" className={styles.link__decoration}>
              <p>{git}</p>
            </Link>
            <Link to="/node" className={styles.link__decoration}>
              <p>{node}</p>
            </Link>
            <Link to="/npm" className={styles.link__decoration}>
              <p>{npm}</p>
            </Link>
            <Link to="/html" className={styles.link__decoration}>
              <p>{html}</p>
            </Link>
            <Link to="/css" className={styles.link__decoration}>
              <p>{css}</p>
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
          className={`${styles.navcontent__vertical} ${
            navfalse ? styles.nav__false : ''
          } ${checked ? styles.dark : ''}`}
        >
          <Link to="/vcs" className={styles.link__decoration}>
            <p>{versionControl}</p>
          </Link>
          <Link to="/git" className={styles.link__decoration}>
            <p>{git}</p>
          </Link>
          <Link to="/node" className={styles.link__decoration}>
            <p>{node}</p>
          </Link>
          <Link to="/npm" className={styles.link__decoration}>
            <p>{npm}</p>
          </Link>
          <Link to="/html" className={styles.link__decoration}>
            <p>{html}</p>
          </Link>
          <Link to="/css" className={styles.link__decoration}>
            <p>{css}</p>
          </Link>
        </div>
      </header>
    </>
  );
};

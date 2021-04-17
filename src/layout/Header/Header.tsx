import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './scss/Header.module.scss';
import { switching, selectCheck } from '../../redux/checkedSlice.ts';
import withLink from '../../hoc/withLink/withLink.tsx';
import useDarkTheme from '../../hooks/useDarkTheme.ts';
import useLanguages from '../../hooks/useLanguages.ts';
import uk from '../../assets/images/ukraine.svg';
import en from '../../assets/images/unitedstates.svg';
import ru from '../../assets/images/russia.svg';
import {
  arrayBiographyEng,
  arrayBiographyRu,
  arrayBiographyUa,
  countriesEng,
  countriesRu,
  countriesUa,
  homeEng,
  homeRu,
  homeUa,
  lessonSevenEng,
  lessonSevenRu,
  lessonSevenUa,
  pomodoroAppEng,
  pomodoroAppRu,
  pomodoroAppUa,
  technologyEng,
  technologyRu,
  technologyUa,
} from '../../constants/Text.ts';
import {
  selectLanguage,
  russian,
  ukrainian,
  english,
} from '../../redux/languagesSlice.ts';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navFalse, setNavFalse] = useState(false);
  const [isHover, toggleHover] = React.useState(false);
  const language = useSelector(selectLanguage);
  const AppLink = withLink(Link);
  const { darkTheme } = useDarkTheme(styles);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  const checked = useSelector(selectCheck);
  const dispatch = useDispatch();
  const hamburgerHandler = () => {
    isActive ? setIsActive(false) : setIsActive(true);
    navFalse ? setNavFalse(false) : setNavFalse(true);
  };

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const versionControl: String = 'Version Control';
  const git: String = 'Git';
  const node: String = 'Node';
  const npm: String = 'Npm';
  const html: String = 'HTML';
  const css: String = 'CSS';

  const { currentLanguage: home } = useLanguages(homeEng, homeRu, homeUa);
  const { currentLanguage: technologies } = useLanguages(
    technologyEng,
    technologyRu,
    technologyUa
  );
  const { currentLanguage: arrayBiography } = useLanguages(
    arrayBiographyEng,
    arrayBiographyRu,
    arrayBiographyUa
  );
  const { currentLanguage: pomodoro } = useLanguages(
    pomodoroAppEng,
    pomodoroAppRu,
    pomodoroAppUa
  );
  const { currentLanguage: countries } = useLanguages(
    countriesEng,
    countriesRu,
    countriesUa
  );
  const { currentLanguage: lessonSeven } = useLanguages(
    lessonSevenEng,
    lessonSevenRu,
    lessonSevenUa
  );

  return (
    <>
      <header className={darkTheme}>
        <div className={styles.header__container}>
          <div className={styles.container__for__logo__and__switch}>
            <Link to="/onix" className={styles.link__decoration}>
              <p className={styles.logo}>{home}</p>
            </Link>

            <div>
              <label className={styles.switch} htmlFor="check">
                <input
                  type="checkbox"
                  id="check"
                  checked={checked}
                  onChange={() => dispatch(switching())}
                />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
            </div>
            <button type="button" onClick={() => dispatch(english())}>
              <img className={styles.language__image} alt={language} src={en} />
            </button>
            <button type="button" onClick={() => dispatch(russian())}>
              <img className={styles.language__image} alt={language} src={ru} />
            </button>
            <button type="button" onClick={() => dispatch(ukrainian())}>
              <img className={styles.language__image} alt={language} src={uk} />
            </button>
          </div>
          <div className={styles.navigation__content}>
            <motion.div
              className="menu-item"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <p>
                {technologies}
                <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <motion.div
                initial="exit"
                animate={isHover ? 'enter' : 'exit'}
                variants={subMenuAnimate}
              >
                <div>
                  <AppLink to="/vcs">{versionControl}</AppLink>
                  <AppLink to="/git">{git}</AppLink>
                  <AppLink to="/node">{node}</AppLink>
                  <AppLink to="/npm">{npm}</AppLink>
                  <AppLink to="/html">{html}</AppLink>
                  <AppLink to="/css">{css}</AppLink>
                </div>
              </motion.div>
            </motion.div>
            <AppLink to="/array">{arrayBiography}</AppLink>
            <AppLink to="/pomodoro">{pomodoro}</AppLink>
            <AppLink to="/counries">{countries}</AppLink>
            <AppLink to="/lessonseven">{lessonSeven}</AppLink>
          </div>

          <button
            type="button"
            className={`${styles.hamburger}
           ${isActive ? styles.open : ''}
           `}
            onClick={hamburgerHandler}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div
          className={`${styles.navcontent__vertical} ${
            navFalse ? styles.nav__false : ''
          } ${darkTheme}`}
        >
          <AppLink to="/vcs">{versionControl}</AppLink>
          <AppLink to="/git">{git}</AppLink>
          <AppLink to="/node">{node}</AppLink>
          <AppLink to="/npm">{npm}</AppLink>
          <AppLink to="/html">{html}</AppLink>
          <AppLink to="/css">{css}</AppLink>
          <AppLink to="/array">{arrayBiography}</AppLink>
          <AppLink to="/pomodoro">{pomodoro}</AppLink>
          <AppLink to="/counries">{countries}</AppLink>
          <AppLink to="/lessonseven">{lessonSeven}</AppLink>
        </div>
      </header>
    </>
  );
};
export default Header;

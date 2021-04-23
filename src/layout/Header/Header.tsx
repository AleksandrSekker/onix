import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './scss/Header.module.scss';
import withLink from '../../hoc/withLink/withLink';
import useLanguages from '../../hooks/useLanguages';
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
  classEng,
  classRu,
  classUa,
  functionEng,
  functionRu,
  functionUa,
} from '../../constants/Text';
import { russian, ukrainian, english } from '../../redux/languagesSlice';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const Header = ({ setdarkTheme }: any) => {
  const [isActive, setIsActive] = useState(false);
  const [navFalse, setNavFalse] = useState(false);
  const [isHover, toggleHover] = React.useState(false);
  const AppLink = withLink(Link);
  const { darkTheme, checked } = useDarkThemeContext(styles);
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
  const dispatch = useDispatch();
  const hamburgerHandler = () => {
    if (isActive && navFalse) {
      setIsActive(false);
      setNavFalse(false);
    } else {
      setIsActive(true);
      setNavFalse(true);
    }
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
  const { currentLanguage: arrayBiography } = useLanguages(
    arrayBiographyEng,
    arrayBiographyRu,
    arrayBiographyUa,
  );
  const { currentLanguage: pomodoro } = useLanguages(
    pomodoroAppEng,
    pomodoroAppRu,
    pomodoroAppUa,
  );
  const { currentLanguage: countries } = useLanguages(
    countriesEng,
    countriesRu,
    countriesUa,
  );
  const { currentLanguage: lessonSeven } = useLanguages(
    lessonSevenEng,
    lessonSevenRu,
    lessonSevenUa,
  );
  const { currentLanguage: classLanguage } = useLanguages(
    classEng,
    classRu,
    classUa
  );
  const { currentLanguage: functionLanguage } = useLanguages(
    functionEng,
    functionRu,
    functionUa
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
                  onChange={() => setdarkTheme(!darkTheme)}
                />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
            </div>
            <button
              type="button"
              className={styles.button}
              onClick={() => dispatch(english())}
            >
              <img className={styles.language__image} alt="language" src={en} />
            </button>

            <button
              type="button"
              className={styles.button}
              onClick={() => dispatch(russian())}
            >
              <img className={styles.language__image} alt="language" src={ru} />
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={() => dispatch(ukrainian())}
            >
              <img className={styles.language__image} alt="language" src={uk} />
            </button>
          </div>
          <div className={styles.navigation__content}>
            <motion.div
              className="menu-item"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <p>
                {countries}
                <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <motion.div
                initial="exit"
                animate={isHover ? 'enter' : 'exit'}
                variants={subMenuAnimate}
              >
                <div>
                  <AppLink to="/counries">{classLanguage}</AppLink>
                  <AppLink to="/lessonseven">{functionLanguage}</AppLink>
                </div>
              </motion.div>
            </motion.div>
            <AppLink to="/array">{arrayBiography}</AppLink>
            <AppLink to="/pomodoro">{pomodoro}</AppLink>
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

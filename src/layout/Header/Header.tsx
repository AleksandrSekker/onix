import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
} from '../../constants/Text';
import { russian, ukrainian, english } from '../../redux/languagesSlice';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const Header = ({ setdarkTheme }: any) => {
  const [isActive, setIsActive] = useState(false);
  const [navFalse, setNavFalse] = useState(false);
  const AppLink = withLink(Link);
  const { darkTheme, checked } = useDarkThemeContext(styles);
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
            <AppLink to="/lessonseven">{countries}</AppLink>
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
          <AppLink to="/lessonseven">{lessonSeven}</AppLink>
        </div>
      </header>
    </>
  );
};
export default Header;

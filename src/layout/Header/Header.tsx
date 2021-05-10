import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './scss/Header.module.scss';
import withLink from '../../hoc/withLink/withLink';
import uk from '../../assets/images/ukraine.svg';
import en from '../../assets/images/unitedstates.svg';
import ru from '../../assets/images/russia.svg';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import ErrorAlert from '../../components/Alert/ErrorAlert/ErrorAlert';

const Header = ({ setdarkTheme }: any) => {
  const [isActive, setIsActive] = useState(false);
  const [navFalse, setNavFalse] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const AppLink = withLink(Link);
  const { darkTheme, checked } = useDarkThemeContext(styles);
  const hamburgerHandler = () => {
    if (isActive && navFalse) {
      setIsActive(false);
      setNavFalse(false);
    } else {
      setIsActive(true);
      setNavFalse(true);
    }
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    if (i18n.languages.includes(language)) {
      i18n.changeLanguage(language);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      i18n.changeLanguage('en');
    }
  };

  return (
    <>
      <header className={darkTheme}>
        <div className={styles.header__container}>
          <div className={styles.container__for__logo__and__switch}>
            <Link to="/onix" className={styles.link__decoration}>
              <p className={styles.logo}>{t('home')}</p>
            </Link>

            <div>
              <label className={styles.switch} htmlFor="check">
                <input type="checkbox" id="check" checked={checked} onChange={() => setdarkTheme(!darkTheme)} />
                <span className={`${styles.slider} ${styles.round}`} />
              </label>
            </div>
            <button type="button" className={styles.button} onClick={() => changeLanguage('en')}>
              <img className={styles.language__image} alt="language" src={en} />
            </button>

            <button type="button" className={styles.button} onClick={() => changeLanguage('ru')}>
              <img className={styles.language__image} alt="language" src={ru} />
            </button>
            <button type="button" className={styles.button} onClick={() => changeLanguage('ua')}>
              <img className={styles.language__image} alt="language" src={uk} />
            </button>
          </div>
          <div className={styles.navigation__content}>
            <AppLink to="/lessonseven">{t('countries')}</AppLink>
            <AppLink to="/array">{t('arrayBiography')}</AppLink>
            <AppLink to="/pomodoro">{t('pomodoroApp')}</AppLink>
            <AppLink to="/chat">{t('chat')}</AppLink>
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
        <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} />
        {/* <AnimatePresence>
          {showAlert && (
            <div className={styles.alert__container}>
              <motion.div
                variants={containerVariant}
                initial="alertInitial"
                animate="alertAnimate"
                exit="exitAlert"
                className={styles.alert__container}
              >
                <p>
                  <FontAwesomeIcon icon={faExclamationTriangle} />
                </p>
                <p>Error</p>
                <FontAwesomeIcon icon={faTimes} onClick={closeAlert} />
              </motion.div>
            </div>
          )}
        </AnimatePresence> */}
        <div className={`${styles.navcontent__vertical} ${navFalse ? styles.nav__false : ''} ${darkTheme}`}>
          <AppLink to="/array">{t('arrayBiography')}</AppLink>
          <AppLink to="/pomodoro">{t('pomodoroApp')}</AppLink>
          <AppLink to="/lessonseven">{t('countries')}</AppLink>
          <AppLink to="/chat">{t('chat')}</AppLink>
        </div>
      </header>
    </>
  );
};
export default Header;

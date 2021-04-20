import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import styles from './scss/Footer.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import useLanguages from '../../hooks/useLanguages';
import {
  buttonTextEng,
  buttonTextRu,
  buttonTextUa,
  creatorNameEng,
  creatorNameRu,
  creatorNameUa,
  placeholderTextEng,
  placeholderTextRu,
  placeholderTextUa,
} from '../../constants/Text';

const Footer = () => {
  const { darkTheme } = useDarkThemeContext(styles);
  const currentYear = new Date().getFullYear();
  const { currentLanguage: button } = useLanguages(
    buttonTextEng,
    buttonTextRu,
    buttonTextUa,
  );
  const { currentLanguage: creator } = useLanguages(
    creatorNameEng,
    creatorNameRu,
    creatorNameUa,
  );
  const { currentLanguage: placeholderText } = useLanguages(
    placeholderTextEng,
    placeholderTextRu,
    placeholderTextUa,
  );
  return (
    <>
      <footer className={darkTheme}>
        <div className={styles.footer}>
          <div className={styles.cont1}>
            <input
              type="text"
              placeholder={placeholderText}
              className={styles.input__field}
            />
            <button className={styles.input__btn} type="button">
              {button}
            </button>
          </div>
          <div className={styles.cont2}>
            <div>
              <a href="https://github.com/AleksandrSekker">
                <FontAwesomeIcon icon={faGithub} className={styles.icons} />
              </a>
              <a href="https://t.me/sekk_er">
                <FontAwesomeIcon icon={faTelegram} className={styles.icons} />
              </a>
              <a href="https://www.linkedin.com/in/aleksandr-sekker-521352161/">
                <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.created__by}>
          <div className={styles.created__by__child}>
            <h4>
              &copy;
              {currentYear}
              {creator}
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

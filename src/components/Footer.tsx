import React from 'react';
import styles from '../scss/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { selectCheck } from '../redux/checked/checkedSlice';
interface Props {}

export const Footer = (props: Props) => {
  const checked = useSelector(selectCheck);
  const buttonText = 'Button';
  const creatorName = 'Created by Aleksandr Sekker';
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={checked ? styles.dark : ''}>
        <hr />
        <div className={styles.footer}>
          <div className={styles.cont1}>
            <input
              type="text"
              placeholder="Placeholder"
              className={styles.input__field}
            />
            <button className={styles.input__btn}>{buttonText}</button>
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
              {currentYear} {creatorName}
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
};

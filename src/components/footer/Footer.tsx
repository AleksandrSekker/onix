import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTelegram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
interface Props {}

export const Footer = (props: Props) => {
  return (
    <>
      <footer>
        <hr />
        <div className={styles.footer}>
          <div className={styles.cont1}>
            <input
              type="text"
              placeholder="Placeholder"
              className={styles.inputField}
            />
            <button className={styles.inputBtn}>Button</button>
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
        <div className={styles.createdby}>
          <div className={styles.createdbyChild}>
            <h4>
              &copy; {new Date().getFullYear()} Created by Aleksandr Sekker
            </h4>
            {/* <a href="https://codepen.io/knyttneve/pen/ZEbQepZ">
              <h4>Original Design</h4>
            </a> */}
          </div>
        </div>
      </footer>
    </>
  );
};

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faGitAlt, faNodeJs, faNpm 
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from './scss/Home.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import Button from '../../components/Button/Button';

const Home = () => {
  AOS.init();
  const { darkTheme } = useDarkThemeContext(style);
  const { t } = useTranslation();
  return (
    <div className={darkTheme}>
      <div className={style.flex}>
        <div className={style.flex__column}>
          <div className={style.first__container} data-aos="fade-right" data-aos-duration="1500">
            <FontAwesomeIcon icon={faHtml5} className={style.html} />
            <p>{t('htmlShort')}</p>
            <Link to="/html" className={style.link}>
              <Button text={t('detailPage')} color="btn__sorted__use__bubble" />
            </Link>
          </div>
          <div className={style.first__container} data-aos="fade-right" data-aos-duration="1500">
            <FontAwesomeIcon icon={faNodeJs} className={style.node} />
            <p>{t('nodeShort')}</p>
            <Link to="/node" className={style.link}>
              <Button text={t('detailPage')} color="btn__sorted__use__bubble" />
            </Link>
          </div>
          <div className={style.first__container} data-aos="fade-right" data-aos-duration="1500">
            <FontAwesomeIcon icon={faGitAlt} className={style.git} />
            <p>{t('gitShort')}</p>
            <Link to="/git" className={style.link}>
              <Button text={t('detailPage')} color="btn__sorted__use__bubble" />
            </Link>
          </div>
        </div>
        <div className={style.vertical__line}>
          <div className={`${style.dot} ${style.dot__one}`} />
          <div className={`${style.dot} ${style.dot__two}`} />
          <div className={`${style.dot} ${style.dot__three}`} />
          <div className={`${style.dot} ${style.dot__four}`} />
          <div className={`${style.dot} ${style.dot__five}`} />
        </div>
        <div className={style.flex__column__two}>
          <div className={style.second__container} data-aos="fade-left" data-aos-duration="1500">
            <FontAwesomeIcon icon={faCss3Alt} className={style.css} />
            <p>{t('cssShort')}</p>
            <Link to="/css" className={style.link}>
              <Button text={t('detailPage')} color="btn__sorted__use__bubble" />
            </Link>
          </div>
          <div className={style.second__container} data-aos="fade-left" data-aos-duration="1500">
            <FontAwesomeIcon icon={faNpm} className={style.npm} />
            <p>{t('npmShort')}</p>
            <Link to="/npm" className={style.link}>
              <Button text="detailPage" color="btn__sorted__use__bubble" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

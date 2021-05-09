import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const NpmPage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const npm = 'Package manager, npm';
  const { t } = useTranslation();
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{npm}</h1>
        <p className={styled.content}>{t('npm')}</p>
      </div>
    </section>
  );
};

export default NpmPage;

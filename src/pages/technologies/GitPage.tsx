import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const GitPage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const git = 'Git';
  const { t } = useTranslation();
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{git}</h1>
        <p className={styled.content}>{t('git')}</p>
      </div>
    </section>
  );
};
export default GitPage;

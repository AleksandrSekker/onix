import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const VcsPage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const vcs = 'VCS';
  const { t } = useTranslation();
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{vcs}</h1>
        <p className={styled.content}>{t('vcs')}</p>
      </div>
    </section>
  );
};
export default VcsPage;

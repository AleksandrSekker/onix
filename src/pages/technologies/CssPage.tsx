import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const CssPage = () => {
  const css = 'CSS';
  const { darkTheme } = useDarkThemeContext(styled);
  const { t } = useTranslation();
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{css}</h1>
        <p className={styled.content}>{t('css')}</p>
      </div>
    </section>
  );
};
export default CssPage;

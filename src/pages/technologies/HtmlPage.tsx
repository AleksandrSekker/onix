import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const HtmlPage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const html = 'HTML';
  const { t } = useTranslation();
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{html}</h1>
        <p className={styled.content}>{t('html')}</p>
      </div>
    </section>
  );
};
export default HtmlPage;

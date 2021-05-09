import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const NodePage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const node = 'Node.js';
  const { t } = useTranslation();
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{node}</h1>
        <p className={styled.content}>{t('node')}</p>
      </div>
    </section>
  );
};
export default NodePage;

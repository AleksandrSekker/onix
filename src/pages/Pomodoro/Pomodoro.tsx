import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import styles from './scss/Pomodoro.module.scss';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import PomodoroView from './PomodoroView';

const Pomodoro = () => {
  const { t } = useTranslation();
  const { darkTheme } = useDarkThemeContext(styles);
  const [ismodal, setIsmodal] = useState(false);
  return (
    <PomodoroView darkTheme={darkTheme} PomodoroLang={t('pomodoroApp')} ismodal={ismodal} setIsmodal={setIsmodal} />
  );
};
export default Pomodoro;

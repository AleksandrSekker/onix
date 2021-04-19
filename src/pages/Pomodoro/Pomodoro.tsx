import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  pomodoroAppEng,
  pomodoroAppRu,
  pomodoroAppUa,
  // @ts-ignore
} from '../../constants/Text.ts';
// @ts-ignore
import useLanguages from '../../hooks/useLanguages.ts';
// @ts-ignore
import { ArrayDB } from './components/ArrayDB.tsx';
// @ts-ignore
import Counter from './components/Counter.tsx';
import styles from './scss/Pomodoro.module.scss';

const Pomodoro = () => {
  const { currentLanguage: PomodoroLang } = useLanguages(
    pomodoroAppEng,
    pomodoroAppRu,
    pomodoroAppUa,
  );
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.logo} />
            {PomodoroLang}
          </p>
        </div>
        <Counter />
        <ArrayDB />
      </div>
    </div>
  );
};
export default Pomodoro;

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/Counter.module.scss';
import useDarkThemeContext from '../../../hooks/useDarkThemeContext';

interface Props {
  minutesPomodoro: number;
  minutesLong: number;
  minutesShort: number;
}
const Counter = ({ minutesPomodoro, minutesLong, minutesShort }: Props) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    if (start === true) {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else if (minutes > 0 && seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }
  }, [minutes, seconds, start]);
  const pomodoroHandler = () => {
    setMinutes(minutesPomodoro);
    setSeconds(0);
  };
  const longBreakHandler = () => {
    setMinutes(minutesLong);
    setSeconds(0);
  };
  const shortBreakHandler = () => {
    setMinutes(minutesShort);
    setSeconds(0);
  };
  const { darkTheme } = useDarkThemeContext(styles);
  return (
    <div className={darkTheme}>
      <div className={styles.main}>
        <button type="button" className={styles.button__time} onClick={pomodoroHandler}>
          Pomodoro
        </button>
        <button type="button" className={styles.button__time} onClick={shortBreakHandler}>
          Short Break
        </button>
        <button type="button" className={styles.button__time} onClick={longBreakHandler}>
          Long Break
        </button>
        {minutes === 0 && seconds === 0 ? (
          <h1>Time End</h1>
        ) : (
          <h1>
            {minutes < 10 ? `0${minutes}` : minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
        <button
          type="button"
          className={styles.start}
          onClick={() => {
            setStart(!start);
          }}
        >
          {start ? t('finish') : t('start')}
        </button>
      </div>
    </div>
  );
};
export default Counter;

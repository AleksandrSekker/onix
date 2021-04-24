import React, { useEffect, useState } from 'react';
import {
  startEng,
  startRu,
  startUa,
  finishEng,
  finishRu,
  finishUa,
} from '../../../constants/Text';
import useLanguages from '../../../hooks/useLanguages';
import styles from '../scss/Counter.module.scss';
import useDarkThemeContext from '../../../hooks/useDarkThemeContext';

const Counter = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const { currentLanguage: Start } = useLanguages(startEng, startRu, startUa);
  const { currentLanguage: Finish } = useLanguages(
    finishEng,
    finishRu,
    finishUa,
  );
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
    setMinutes(25);
    setSeconds(0);
  };
  const longBreakHandler = () => {
    setMinutes(15);
    setSeconds(0);
  };
  const shortBreakHandler = () => {
    setMinutes(5);
    setSeconds(0);
  };
  const { darkTheme } = useDarkThemeContext(styles);
  return (
    <div className={darkTheme}>
      <div className={styles.main}>
        <button type="button" onClick={pomodoroHandler}>Pomodoro</button>
        <button type="button" onClick={shortBreakHandler}>Short Break</button>
        <button type="button" onClick={longBreakHandler}>Long Break</button>
        {minutes === 0 && seconds === 0 ? (
          <h1>Time End</h1>
        ) 
          : (
            <h1>
              {minutes < 10 ? `0${minutes}` 
                : minutes}
              :
              {seconds < 10 ? `0${seconds}` 
                : seconds}
            </h1>
          )}
        <button
          type="button"
          className={styles.start}
          onClick={() => {
            setStart(!start);
          }}
        >
          {start ? Finish : Start}
        </button>
      </div>
    </div>
  );
};
export default Counter;

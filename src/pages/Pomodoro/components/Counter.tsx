import React, { useEffect, useState } from 'react';
import {
  startEng,
  startRu,
  startUa,
  finishEng,
  finishRu,
  finishUa,
  // @ts-ignore
} from '../../../constants/Text.ts';
// @ts-ignore
import useLanguages from '../../../hooks/useLanguages.ts';
import styles from '../scss/Counter.module.scss';

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
  return (
    <div className={styles.main}>
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
        onClick={() => {
          setStart(!start);
        }}
      >
        {start ? Finish : Start}
      </button>
    </div>
  );
};
export default Counter;
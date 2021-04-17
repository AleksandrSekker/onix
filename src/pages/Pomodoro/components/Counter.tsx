import React, { useEffect, useState } from "react";
import {
  startEng,
  startRu,
  startUa,
  finishEng,
  finishRu,
  finishUa,
} from "../../../constants/Text";
import useLanguages from "../../../hooks/useLanguages";
import styles from "../scss/Counter.module.scss";
export const Counter = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const { currentLanguage: Start } = useLanguages(startEng, startRu, startUa);
  const { currentLanguage: Finish } = useLanguages(
    finishEng,
    finishRu,
    finishUa
  );
  useEffect(() => {
    if (start === true) {
      seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
      if (minutes > 0 && seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }
  }, [minutes, seconds, start]);
  return (
    <div className={styles.main}>
      {minutes === 0 && seconds === 0 ? (
        <h1>Time End</h1>
      ) : (
        <h1>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
      <button
        onClick={() => {
          setStart(!start);
        }}>
        {start ? Finish : Start}
      </button>
    </div>
  );
};

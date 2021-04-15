import React, { useEffect, useState } from "react";
import styles from "../scss/Counter.module.scss";
export const Counter = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

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
        {start ? "Stop" : "Start"}
      </button>
    </div>
  );
};

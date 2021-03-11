import React, { useEffect, useState } from "react";
import styles from "./Counter.module.scss";
export const Counter = () => {
  const [minutes, setminutes] = useState(25);
  const [seconds, setseconds] = useState(0);
  const [start, setstart] = useState(false);

  useEffect(() => {
    if (start === true) {
      seconds > 0 && setTimeout(() => setseconds(seconds - 1), 1000);
      if (minutes > 0 && seconds === 0) {
        setminutes(minutes - 1);
        setseconds(59);
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
          setstart(!start);
        }}>
        {start ? "Stop" : "Start"}
      </button>
    </div>
  );
};

import { faCheckCircle, faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ArrayDB } from "./ArrayDB";
import { Counter } from "./Counter";
import styles from "./Pomodoro.module.scss";
interface Props {}

export const Pomodoro = (props: Props) => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.logo} />
            Pomodoro app
          </p>
          <button>
            <FontAwesomeIcon icon={faCogs} /> Setting
          </button>
        </div>
        <Counter />
        <ArrayDB />
      </div>
    </div>
  );
};

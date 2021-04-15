import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ArrayDB } from "./components/ArrayDB";
import { Counter } from "./components/Counter";
import styles from "./scss/Pomodoro.module.scss";
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
        </div>
        <Counter />
        <ArrayDB />
      </div>
    </div>
  );
};

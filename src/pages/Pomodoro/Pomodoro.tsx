import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  pomodoroAppEng,
  pomodoroAppRu,
  pomodoroAppUa,
} from "../../constants/Text";
import useLanguages from "../../hooks/useLanguages";
import { ArrayDB } from "./components/ArrayDB";
import { Counter } from "./components/Counter";
import styles from "./scss/Pomodoro.module.scss";

export const Pomodoro = () => {
  const { currentLanguage: Pomodoro } = useLanguages(
    pomodoroAppEng,
    pomodoroAppRu,
    pomodoroAppUa
  );
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.logo} />
            {Pomodoro}
          </p>
        </div>
        <Counter />
        <ArrayDB />
      </div>
    </div>
  );
};

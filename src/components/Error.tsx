import React from "react";
import svg from "./images/error.svg";
import styles from "../scss/Error.module.scss";

interface Props {}

export const Error = (props: Props) => {
  return (
    <div className={styles.error}>
      <img alt='error' className={styles.error__image} src={svg} />

      <h4 className={styles.error__title}>
        We seem to have run into some issues.
      </h4>

      <button
        className={styles.styled__button}
        onClick={() => window.location.reload()}>
        Try again
      </button>
    </div>
  );
};

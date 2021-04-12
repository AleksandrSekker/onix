import React from "react";
import styles from "./scss/Loader.module.scss";
interface Props {}

export const Loader = (props: Props) => {
  return (
    <div className={styles.loader__container}>
      <div className={styles.loader}></div>
    </div>
  );
};

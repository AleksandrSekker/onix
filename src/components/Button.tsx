import React from 'react';
import styles from '../scss/Buttons.module.scss';

interface Props {
  text: string;
  color: any;
}

export const Button = (props: Props) => {
  return (
    <button
      className={`${styles.input__btn} ${styles.btn_array} ${
        styles[props.color]
      }`}
    >
      {props.text}
    </button>
  );
};

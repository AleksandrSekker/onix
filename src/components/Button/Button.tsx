import React from 'react';
import styles from './scss/Buttons.module.scss';

interface Props {
  text: string;
  color: any;
}

const Button = ({ text, color }: Props) => (
  <button
    type="button"
    className={`${styles.input__btn} ${styles.btn_array} ${styles[color]}`}
  >
    {text}
  </button>
);

export default Button;

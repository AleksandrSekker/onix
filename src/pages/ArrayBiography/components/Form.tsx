import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styles from '../scss/Array.module.scss';
import stylei from '../scss/Input.module.scss';

interface Props {
  showAlert: boolean;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmitPushToArray: () => void;
  register: any;
  errors: any;
  handleSubmit: any;
  alertVariant: {
    alertInitial: {
      x: number;
      opacity: number;
    };
    alertAnimate: {
      x: number;
      opacity: number;
      transition: {
        duration: number;
      };
    };
    exitAlert: {
      x: number;
      transition: {
        duration: number;
      };
    };
  };
  buttonVariant: {
    buttonAnimation: {
      scale: number[];
      transition: {
        duration: number;
        repeat: number;
      };
    };
  };
  placeholderText: string;
  placeholderTextError: string;
  placeholderYear: string;
  placeholderYearError: string;
  alertMessage: string;
  pushValue: string;
}

const Form = ({
  alertVariant,
  showAlert,
  buttonVariant,
  number,
  setNumber,
  text,
  setText,
  register,
  errors,
  handleSubmit,
  onSubmitPushToArray,
  placeholderText,
  placeholderTextError,
  placeholderYear,
  placeholderYearError,
  alertMessage,
  pushValue,
}: Props) => (
  <div className={styles.flex}>
    <form
      onSubmit={handleSubmit(onSubmitPushToArray)}
      className={stylei.formflex}
    >
      <div className={stylei.valid__flex}>
        <input
          name="number"
          ref={register({ required: true })}
          type="number"
          value={number}
          className={stylei.input__field}
          placeholder={placeholderYear}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNumber(parseInt(e.target.value));
          }}
        />
        <h5 className={stylei.valid__text}>
          {errors.number && placeholderYearError}
        </h5>
      </div>
      <div className={stylei.valid__flex}>
        <input
          name="text"
          ref={register({ required: true })}
          type="text"
          value={text}
          className={stylei.input__field}
          placeholder={placeholderText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <h5 className={stylei.valid__text}>
          {errors.text && placeholderTextError}
        </h5>
      </div>
      <motion.input
        variants={buttonVariant}
        whileHover="buttonAnimation"
        type="submit"
        value={pushValue}
        className={stylei.input__submit}
      />
      <AnimatePresence>
        {showAlert && (
          <motion.p
            variants={alertVariant}
            initial="alertInitial"
            animate="alertAnimate"
            exit="exitAlert"
          >
            {alertMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  </div>
);

export default Form;

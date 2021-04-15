import {
  faChevronDown,
  faChevronUp,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "../scss/Array.module.scss";
interface Props {
  isModal: boolean;
  setTitle: any;
  year: number;
  setYear: any;
  linkAdd: boolean;
  setSubTitle: any;
  setLinkAdd: any;
  modalToggler: () => void;
  pushHandler: () => void;
}

export const AddModal = ({
  isModal,
  setTitle,
  year,
  setYear,
  linkAdd,
  setSubTitle,
  setLinkAdd,
  modalToggler,
  pushHandler,
}: Props) => {
  const modalVariant = {
    modalInitial: { opacity: 0, scale: 0.3 },
    modalAnimate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
    modalExit: { opacity: 0, scale: 0, transition: { duration: 1 } },
  };
  return (
    <AnimatePresence>
      {isModal ? (
        <motion.div
          className={styles.modal}
          variants={modalVariant}
          initial='modalInitial'
          animate='modalAnimate'
          exit='modalExit'>
          <input
            type='text'
            className={styles.title__input}
            placeholder='What are you working on?'
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
          <p>Est Pomodoros</p>
          <div className={styles.flex}>
            <input
              type='number'
              className={styles.numberInput}
              value={year}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setYear(parseInt(e.target.value))
              }
            />
            <button
              className={styles.chevron}
              onClick={() => {
                setYear(year + 1);
              }}>
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button
              className={styles.chevron}
              onClick={() => {
                setYear(year - 1);
              }}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
          {linkAdd ? (
            <input
              type='text'
              className={styles.subtitle__input}
              placeholder='Some notes...'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubTitle(e.target.value)
              }
            />
          ) : (
            <p
              className={styles.link__add}
              onClick={() => {
                setLinkAdd(!linkAdd);
              }}>
              + Add notes
            </p>
          )}
          <div className={styles.modal__footer__background}>
            <div className={styles.modal__footer}>
              <button onClick={modalToggler} className={styles.cancel}>
                Cancel
              </button>
              <button onClick={pushHandler} className={styles.save}>
                Save
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button className={styles.add} onClick={modalToggler}>
          <FontAwesomeIcon icon={faPlusCircle} /> Add Task
        </motion.button>
      )}
    </AnimatePresence>
  );
};

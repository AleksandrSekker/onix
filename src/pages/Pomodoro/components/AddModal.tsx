import {
  faChevronDown,
  faChevronUp,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styles from '../scss/Array.module.scss';
import useDarkThemeContext from '../../../hooks/useDarkThemeContext';

interface Props {
  placeholderLanguage: string;
  amountLanguage: string;
  addNotesLanguage: string;
  notesPlaceholderLanguage: string;
  cancelLanguage: string;
  saveLanguage: string;
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

const AddModal = ({
  isModal,
  setTitle,
  year,
  setYear,
  linkAdd,
  setSubTitle,
  setLinkAdd,
  modalToggler,
  pushHandler,
  placeholderLanguage,
  amountLanguage,
  addNotesLanguage,
  notesPlaceholderLanguage,
  cancelLanguage,
  saveLanguage,
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
  const { darkTheme } = useDarkThemeContext(styles);
  return (
    <AnimatePresence>
      {isModal ? (
        <motion.div
          className={styles.modal}
          variants={modalVariant}
          initial="modalInitial"
          animate="modalAnimate"
          exit="modalExit"
        >
          <input
            type="text"
            className={styles.title__input}
            placeholder={placeholderLanguage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <p>{amountLanguage}</p>
          <div className={styles.flex}>
            <input
              type="number"
              className={styles.numberInput}
              value={year}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setYear(e.target.value);
              }}
            />
            <button
              type="button"
              className={styles.chevron}
              onClick={() => {
                setYear(year + 1);
              }}
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button
              type="button"
              className={styles.chevron}
              onClick={() => {
                setYear(year - 1);
              }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
          {linkAdd ? (
            <input
              type="text"
              className={styles.subtitle__input}
              placeholder={notesPlaceholderLanguage}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSubTitle(e.target.value);
              }}
            />
          ) : (
            <button
              type="button"
              className={styles.link__add}
              onClick={() => {
                setLinkAdd(!linkAdd);
              }}
            >
              {addNotesLanguage}
            </button>
          )}
          <div className={styles.modal__footer__background}>
            <div className={styles.modal__footer}>
              <button
                type="button"
                onClick={modalToggler}
                className={styles.cancel}
              >
                {cancelLanguage}
              </button>
              <button
                type="button"
                onClick={pushHandler}
                className={styles.save}
              >
                {saveLanguage}
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className={darkTheme}>
          <motion.button className={styles.add} onClick={modalToggler}>
            <FontAwesomeIcon icon={faPlusCircle} />
            Add Task
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};
export default AddModal;

import React from 'react';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../scss/Array.module.scss';
import stylei from '../scss/Input.module.scss';
import style from '../scss/ComonentDetail.module.scss';
import Modal from '../../../components/Modal/Modal';

interface Props {
  state: {
    [x: string]: {
      year: number;
      title: string;
      id: string;
      ismodal: boolean;
    };
  };
  numberModal: number;
  setNumberModal: React.Dispatch<React.SetStateAction<number>>;
  textModal: string;
  setTextModal: React.Dispatch<React.SetStateAction<string>>;
  deleteHandler: any;
  apdateHandler: any;
  modalHandler: any;
  textVariant: {
    textHoverTitle: {
      scale: number;
      originX: number;
      color: string;
    };
    textHoverYear: {
      scale: number;
      color: string;
    };
  };
  modalVariant: {
    modalinitial: {
      opacity: number;
      scale: number;
    };
    modalanimate: {
      opacity: number;
      scale: number;
    };
    modalexit: {
      opacity: number;
      scale: number;
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
}

const Table = ({
  state,
  apdateHandler,
  deleteHandler,
  modalHandler,
  textVariant,
  numberModal,
  setNumberModal,
  textModal,
  setTextModal,
  buttonVariant
}: Props) => (
  <AnimatePresence>
    {Object.entries(state).map(([key, value]) => (
      <div key={key}>
        <motion.div
          key={value.id}
          className={styles.flex}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <motion.p variants={textVariant} whileHover="textHoverTitle">
            {value.title}
          </motion.p>
          <motion.div className={styles.flexAround}>
            <motion.p variants={textVariant} whileHover="textHoverYear">
              {value.year}
            </motion.p>

            <button
              className={styles.transparent__button}
              type="button"
              onClick={() => {
                modalHandler(key);
              }}
            >
              <FontAwesomeIcon icon={faPen} className={style.icon} />
            </button>
            <button type="button" className={styles.transparent__button} onClick={() => deleteHandler(key)}>
              <FontAwesomeIcon icon={faTrash} className={style.icon} />
            </button>
          </motion.div>
        </motion.div>
        <Modal ismodal={value.ismodal}>
          <div className={styles.modal}>
            <form className={stylei.formflex}>
              <div className={stylei.valid__flex}>
                <input
                  name="number"
                  type="number"
                  value={numberModal}
                  className={stylei.input__field}
                  placeholder="Please type year"
                  onChange={(e: any) => {
                    setNumberModal(e.target.value);
                  }}
                />
              </div>
              <div className={stylei.valid__flex}>
                <input
                  name="text"
                  type="text"
                  value={textModal}
                  className={stylei.input__field}
                  placeholder="Please type text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTextModal(e.target.value);
                  }}
                />
              </div>

              <motion.div onClick={() => apdateHandler(key)} variants={buttonVariant} whileHover="buttonAnimation">
                <input type="button" className={stylei.input__submit} value="Update" />
              </motion.div>
              <motion.div onClick={() => deleteHandler(key)} variants={buttonVariant} whileHover="buttonAnimation">
                <input type="button" className={stylei.input__delete} value="Remove" />
              </motion.div>
            </form>
          </div>
        </Modal>
      </div>
    ))}
  </AnimatePresence>
);

export default Table;

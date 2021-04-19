import React, { useState } from 'react';
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import styles from '../scss/Array.module.scss';

interface Props {
  result: any;
  titleForUpdate: string;
  settitleForUpdate: React.Dispatch<React.SetStateAction<string>>;
  subtitleForUpdate: string;
  setsubtitleForUpdate: React.Dispatch<React.SetStateAction<string>>;
  yearForUpdate: number;
  setyearForUpdate: React.Dispatch<React.SetStateAction<number>>;
  updateHandlerAll: any;
  handleDragStart: any;
  handleDragEnter: any;
  deleteHandler: any;
  updateHandlerModal: any;
  modalVariant: {
    modalInitial: {
      opacity: number;
      scale: number;
    };
    modalAnimate: {
      opacity: number;
      scale: number;
      transition: {
        duration: number;
      };
    };
    modalExit: {
      opacity: number;
      scale: number;
      transition: {
        duration: number;
      };
    };
  };
  placeholderLanguage: string;
  amountLanguage: string;
  addNotesLanguage: string;
  notesPlaceholderLanguage: string;
  cancelLanguage: string;
  saveLanguage: string;
}
// 
const TableData = ({
  result,
  handleDragStart,
  handleDragEnter,
  deleteHandler,
  updateHandlerModal,
  modalVariant,
  titleForUpdate,
  settitleForUpdate,
  subtitleForUpdate,
  setsubtitleForUpdate,
  yearForUpdate,
  setyearForUpdate,
  updateHandlerAll,
  placeholderLanguage,
  amountLanguage,
  addNotesLanguage,
  notesPlaceholderLanguage,
  cancelLanguage,
  saveLanguage,
}: Props) => {
  const [linkAdd, setLinkAdd] = useState(false);

  return (
    <div>
      {result.map(
        (
          { 
            title, _id, year, subtitle, ismodal, 
          }: any, index: any
        ) => (
          <div
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => handleDragEnter(e, index)}
            key={_id}
            draggable
          >
            {!ismodal ? (
              <div className={styles.array}>
                <div className={styles.flex__container}>
                  <div className={styles.title__container}>
                    <p>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </p>
                    <p>{title}</p>
                  </div>
                  <div className={styles.edit__container}>
                    <p>{year}</p>
                    <p>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => updateHandlerModal(_id, index)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => deleteHandler(_id)}
                      />
                    </p>
                  </div>
                </div>
                <p>{subtitle}</p>
              </div>
            ) : (
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
                  defaultValue={titleForUpdate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    settitleForUpdate(e.target.value);
                  }}
                />
                <p>{amountLanguage}</p>
                <div className={styles.flex}>
                  <input
                    type="number"
                    className={styles.numberInput}
                    value={yearForUpdate}
                    onChange={(e: any) => {
                      setyearForUpdate(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className={styles.chevron}
                    onClick={() => {
                      setyearForUpdate(yearForUpdate + 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </button>
                  <button
                    type="button"
                    className={styles.chevron}
                    onClick={() => {
                      setyearForUpdate(yearForUpdate - 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
                {linkAdd ? (
                  <input
                    type="text"
                    className={styles.subtitle__input}
                    defaultValue={subtitleForUpdate}
                    placeholder={notesPlaceholderLanguage}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setsubtitleForUpdate(e.target.value);
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
                      onClick={() => updateHandlerModal(_id, index)}
                      className={styles.cancel}
                    >
                      {cancelLanguage}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        updateHandlerAll(
                          _id,
                          titleForUpdate,
                          subtitleForUpdate,
                          yearForUpdate,
                        );
                      }}
                      className={styles.save}
                    >
                      {saveLanguage}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ),
      )}
    </div>
  );
};
export default TableData;

import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Array.module.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  result: any;
  titleForUpdate: string;
  settitleForUpdate: React.Dispatch<React.SetStateAction<string>>;
  subtitleForUpdate: string;
  setsubtitleForUpdate: React.Dispatch<React.SetStateAction<string>>;
  yearForUpdate: number;
  setyearForUpdate: React.Dispatch<React.SetStateAction<number>>;
  updateHandlerAll: (
    id: string,
    titleUpdate: string,
    subtitleUpdate: string,
    yearUpdate: number
  ) => Promise<void>;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => void;
  handleDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => void;
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
}
interface State {
  title: string;
  _id: string;
  year: number;
  subtitle: string;
  ismodal: boolean;
}

export const TableData = ({
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
}: Props) => {
  const [linkAdd, setLinkAdd] = useState(false);

  return (
    <div>
      {result.map(
        ({ title, _id, year, subtitle, ismodal }: State, index: number) => {
          return (
            <div
              onDragStart={e => handleDragStart(e, index)}
              onDragOver={e => e.preventDefault()}
              onDragEnter={e => handleDragEnter(e, index)}
              key={index}
              draggable>
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
                  initial='modalInitial'
                  animate='modalAnimate'
                  exit='modalExit'>
                  <input
                    type='text'
                    className={styles.title__input}
                    placeholder='What are you working on?'
                    autoFocus
                    defaultValue={titleForUpdate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      settitleForUpdate(e.target.value)
                    }
                  />
                  <p>Est Pomodoros</p>
                  <div className={styles.flex}>
                    <input
                      type='number'
                      className={styles.numberInput}
                      value={yearForUpdate}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setyearForUpdate(parseInt(e.target.value))
                      }
                    />
                    <button
                      className={styles.chevron}
                      onClick={() => {
                        setyearForUpdate(yearForUpdate + 1);
                      }}>
                      <FontAwesomeIcon icon={faChevronUp} />
                    </button>
                    <button
                      className={styles.chevron}
                      onClick={() => {
                        setyearForUpdate(yearForUpdate - 1);
                      }}>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  </div>
                  {linkAdd ? (
                    <input
                      type='text'
                      className={styles.subtitle__input}
                      defaultValue={subtitleForUpdate}
                      placeholder='Some notes...'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setsubtitleForUpdate(e.target.value)
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
                      <button
                        onClick={() => updateHandlerModal(_id, index)}
                        className={styles.cancel}>
                        Cancel
                      </button>
                      <button
                        onClick={() =>
                          updateHandlerAll(
                            _id,
                            titleForUpdate,
                            subtitleForUpdate,
                            yearForUpdate
                          )
                        }
                        className={styles.save}>
                        Save
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

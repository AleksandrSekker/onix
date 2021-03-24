import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Array.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
interface Props {}

export const ArrayDB = (props: Props) => {
  const [state, setState] = useState([]);
  const [title, setTitle] = useState(String);
  const [subTitle, setSubTitle] = useState(String);
  const [year, setYear] = useState(1);
  const [isChange, setIsChange] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [linkAdd, setLinkAdd] = useState(false);
  useEffect(() => {
    let isCancelled = false;
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://guarded-brook-68937.herokuapp.com/api/todo"
        );
        if (!isCancelled) {
          setState(result.data);
          console.log(result.data);
        }
      } catch (error) {
        if (!isCancelled) {
          console.log({ error: error.message });
        }
      } finally {
        isCancelled = true;
      }
    };
    fetchData();
  }, [isChange]);
  const pushHandler = () => {
    axios({
      method: "post",
      url: "https://guarded-brook-68937.herokuapp.com/api/todo",
      data: {
        title: title,
        subtitle: subTitle,
        year: year,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response: any) {
        if (response.status >= 200 && response.status < 300) {
          console.log("success");
          setIsChange(!isChange);
        }
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  const deleteHandler = (id: string) => {
    axios
      .delete(`https://guarded-brook-68937.herokuapp.com/api/todo/${id}`)
      .then(function (response: any) {
        if (response.status >= 200 && response.status < 300) {
          console.log("success");
          setIsChange(!isChange);
        }
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  const modalToggler = () => {
    setIsModal(!isModal);
  };

  const result = state;
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
    <div>
      {result.map((results: any) => {
        return (
          <div key={results._id} className={styles.array}>
            <div className={styles.flex__container}>
              <div className={styles.title__container}>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p>{results.title}</p>
              </div>
              <div className={styles.edit__container}>
                <p>{results.year}</p>
                <p>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => deleteHandler(results._id)}
                  />
                </p>
              </div>
            </div>
            <p>{results.subtitle}</p>
          </div>
        );
      })}
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
    </div>
  );
};
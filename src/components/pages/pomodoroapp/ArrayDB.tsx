import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Array.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faEdit,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
interface Props {}

export const ArrayDB = (props: Props) => {
  const [state, setstate] = useState([]);
  const [title, settitle] = useState(String);
  const [subtitle, setsubtitle] = useState(String);
  const [year, setyear] = useState(1);
  const [isChange, setisChange] = useState(true);
  const [isModal, setisModal] = useState(false);
  const [linkAdd, setlinkAdd] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://guarded-brook-68937.herokuapp.com/api/todo"
      );
      setstate(result.data);
    };
    fetchData();
  }, [isChange]);
  const pushHandler = () => {
    axios({
      method: "post",
      url: "https://guarded-brook-68937.herokuapp.com/api/todo",
      data: {
        title: title,
        subtitle: subtitle,
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
          setisChange(!isChange);
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
          setisChange(!isChange);
        }
      })
      .catch((error: string) => {
        console.log(error);
      });
  };
  const modalToggler = () => {
    setisModal(!isModal);
  };
  const result = state;
  const modalVariant = {
    modalinitial: { opacity: 0, scale: 0.3 },
    modalanimate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
    modalexit: { opacity: 0, scale: 0, transition: { duration: 1 } },
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
                  <FontAwesomeIcon icon={faEdit} />
                </p>
              </div>
            </div>
            <p>{results.subtitle}</p>

            {/* <button onClick={() => deleteHandler(results._id)}>delete</button> */}
          </div>
        );
      })}
      <AnimatePresence>
        {isModal ? (
          <motion.div
            className={styles.modal}
            variants={modalVariant}
            initial='modalinitial'
            animate='modalanimate'
            exit='modalexit'>
            <input
              type='text'
              className={styles.title__input}
              placeholder='What are you working on?'
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                settitle(e.target.value)
              }
            />
            <p>Est Pomodoros</p>
            <div className={styles.flex}>
              <input
                type='number'
                className={styles.numberInput}
                value={year}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setyear(parseInt(e.target.value))
                }
              />
              <button
                className={styles.chevron}
                onClick={() => {
                  setyear(year + 1);
                }}>
                <FontAwesomeIcon icon={faChevronUp} />
              </button>
              <button
                className={styles.chevron}
                onClick={() => {
                  setyear(year - 1);
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
                  setsubtitle(e.target.value)
                }
              />
            ) : (
              <p
                className={styles.link__add}
                onClick={() => {
                  setlinkAdd(!linkAdd);
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

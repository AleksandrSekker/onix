import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCheck } from '../../redux/checkedSlice';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import styled from '../../scss/ComonentDetail.module.scss';
import styles from '../../scss/Array.module.scss';
import stylei from '../../scss/Input.module.scss';
import { v4 as uuid } from 'uuid';
import data from '../Data';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IFormInputs {
  number: number;
  text: string;
}
export const ArrayBiography = () => {
  const checked = useSelector(selectCheck);
  const [number, setnumber] = useState(1);
  const [numbermodal, setnumbermodal] = useState(1);
  const [text, settext] = useState(String);
  const [textmodal, settextmodal] = useState(String);
  const [filtering, setfiltering] = useState('');
  const [state, setstate] = useState(data);
  const [showAlert, setshowAlert] = useState(false);
  const arrayTitle = 'Array Biography';
  const { register, errors, handleSubmit } = useForm<IFormInputs>();

  const onSubmitPushToArray = () => {
    setstate([
      ...state,
      {
        text: { year: number, title: text, id: uuid(), ismodal: false },
      },
    ]);
    console.log(state);
    setnumber(1);
    settext('');
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };

  const filterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const sortedUseSort = () => {
    let arr = [...state].sort((a, b) => a.text.year - b.text.year);
    setstate(arr);
    console.log(state);
  };

  const sortedUseBabel = () => {
    const A = [...state];
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1 - i; j++) {
        if (A[j + 1]['text']['year'] < A[j]['text']['year']) {
          var t = A[j + 1]['text']['year'];
          A[j + 1]['text']['year'] = A[j]['text']['year'];
          A[j]['text']['year'] = t;
        }
      }
    }
    setstate(A);
    console.log(A);
  };

  const results = !filtering
    ? state
    : state.filter((x) =>
        x.text.title.toLowerCase().includes(filtering.toLocaleLowerCase())
      );
  const deleteHandler = (a: string) => {
    setstate(state.filter((el) => el.text.id !== a));
  };
  const apdateHandler = (a: string) => {
    const objindex = state.findIndex((obj) => obj.text.id === a);
    state[objindex] = {
      text: { year: numbermodal, title: textmodal, id: uuid(), ismodal: false },
    };

    setstate([...state]);
  };
  const modalHandler = (a: string) => {
    const objindex = state.findIndex((obj) => obj.text.id === a);

    state[objindex].text.ismodal = !state[objindex].text.ismodal;
    setstate([...state]);
  };
  const containerVariant = {
    textHoverTitle: {
      scale: 1.1,
      originX: 0,
      color: 'rgb(182, 2, 0)',
    },
    textHoverYear: { scale: 1.5, color: 'rgb(1, 172, 0)' },
    buttonAnimation: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.7, repeat: Infinity },
    },
    alertInitial: { x: -100, opacity: 0 },
    alertAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exitAlert: { x: -1000, transition: { duration: 1 } },

    modalinitial: { opacity: 0, scale: 0.75 },
    modalanimate: { opacity: 1, scale: 1 },
    modalexit: { opacity: 0, scale: 0 },
  };

  return (
    <section className={checked ? styled.dark : ''}>
      <div className="container">
        <h1 className={styled.title}>{arrayTitle}</h1>
        <form onSubmit={filterHandler}>
          <input
            type="text"
            value={filtering}
            placeholder="Search by text"
            className={styles.filter__input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setfiltering(e.target.value)
            }
          />
        </form>
        <AnimatePresence>
          {results.map((a) => {
            return (
              <div key={a.text.id}>
                <motion.div
                  key={a.text.id}
                  className={styles.flex}
                  initial={{ x: -1000, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  exit={{ x: -1000, opacity: 0 }}
                >
                  <motion.p
                    variants={containerVariant}
                    whileHover="textHoverTitle"
                  >
                    {a.text.title}
                  </motion.p>
                  <motion.div className={styles.flexAround}>
                    <motion.p
                      variants={containerVariant}
                      whileHover="textHoverYear"
                    >
                      {a.text.year}
                    </motion.p>

                    <div
                      onClick={() => {
                        modalHandler(a.text.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faCogs} />
                    </div>
                  </motion.div>
                </motion.div>
                <AnimatePresence>
                  {a.text.ismodal && (
                    <motion.div
                      className={styles.modal}
                      variants={containerVariant}
                      initial="modalinitial"
                      animate="modalanimate"
                      exit="modalexit"
                    >
                      <form className={stylei.formflex}>
                        <div className={stylei.valid__flex}>
                          <input
                            name="number"
                            type="number"
                            value={numbermodal}
                            className={stylei.input__field}
                            placeholder="Please type year"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => setnumbermodal(parseInt(e.target.value))}
                          />
                        </div>
                        <div className={stylei.valid__flex}>
                          <input
                            name="text"
                            type="text"
                            value={textmodal}
                            className={stylei.input__field}
                            placeholder="Please type text"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => settextmodal(e.target.value)}
                          />
                        </div>

                        <motion.div
                          onClick={() => apdateHandler(a.text.id)}
                          variants={containerVariant}
                          whileHover="buttonAnimation"
                        >
                          <input
                            type="button"
                            className={stylei.input__submit}
                            value="Update"
                          />
                        </motion.div>
                      </form>
                      <motion.div
                        onClick={() => deleteHandler(a.text.id)}
                        variants={containerVariant}
                        whileHover="buttonAnimation"
                      >
                        <input
                          type="button"
                          className={stylei.input__delete}
                          value="Remove"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatePresence>

        <div className={styles.flex}>
          <motion.div
            onClick={sortedUseSort}
            variants={containerVariant}
            whileHover="buttonAnimation"
          >
            <Button text="Sorted by sort" color="btn__sorted__by__sort" />
          </motion.div>
          <motion.div
            onClick={sortedUseBabel}
            variants={containerVariant}
            whileHover="buttonAnimation"
          >
            <Button text="bubble sort" color="btn__sorted__use__bubble" />
          </motion.div>
        </div>
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
                placeholder="Please type year"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setnumber(parseInt(e.target.value))
                }
              />
              <h5 className={stylei.valid__text}>
                {errors.number && 'Year is required'}
              </h5>
            </div>
            <div className={stylei.valid__flex}>
              <input
                name="text"
                ref={register({ required: true })}
                type="text"
                value={text}
                className={stylei.input__field}
                placeholder="Please type text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  settext(e.target.value)
                }
              />
              <h5 className={stylei.valid__text}>
                {errors.text && 'text is required'}
              </h5>
            </div>
            <motion.input
              variants={containerVariant}
              whileHover="buttonAnimation"
              type="submit"
              value="Push value"
              className={stylei.input__submit}
            />
            <AnimatePresence>
              {showAlert && (
                <motion.h2
                  variants={containerVariant}
                  initial="alertInitial"
                  animate="alertAnimate"
                  exit="exitAlert"
                >
                  Item added successfully
                </motion.h2>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

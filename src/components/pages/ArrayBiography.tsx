import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCheck } from '../../redux/checkedSlice';
import styled from '../../scss/ComonentDetail.module.scss';
import styles from '../../scss/Array.module.scss';
import stylei from '../../scss/Input.module.scss';
import { v4 as uuid } from 'uuid';
import data from '../Data';
import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
interface IFormInputs {
  number: number;
  text: string;
  palindrom: string;
}
export const ArrayBiography = () => {
  const checked = useSelector(selectCheck);
  const [number, setnumber] = useState(1);
  const [text, settext] = useState(String);
  const [palindromvalue, setpalindromvalue] = useState(String);
  const [palindromText, setpalindromText] = useState('');
  const [filtering, setfiltering] = useState('');
  const [state, setstate] = useState(data);
  const [showAlert, setshowAlert] = useState(false);

  const arrayTitle = 'Array Biography';
  const { register, errors, handleSubmit } = useForm<IFormInputs>();
  const addOneStatic = () => {
    setstate([...state, { year: 1910, title: 'Mark Twain Dies' }]);
    console.log(state);
  };
  const removeLastItem = () => {
    state.pop();
    setstate([...state]);
    console.log(state);
  };
  const onSubmitPusToArray = () => {
    setstate([...state, { year: number, title: text }]);
    console.log(state);
    setnumber(1);
    settext('');
    setshowAlert(true);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };
  const palindromHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (palindromvalue !== '') {
      if (palindromvalue === palindromvalue.split('').reverse().join('')) {
        setpalindromText('it is true');
      } else {
        setpalindromText('it is false');
      }
    }
  };
  const filterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const sortedUseSort = () => {
    let arr = [...state].sort((a, b) => a.year - b.year);
    setstate(arr);
    console.log(state);
  };

  const sortedUseBabel = () => {
    const A = [...state];
    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1 - i; j++) {
        if (A[j + 1]['year'] < A[j]['year']) {
          var t = A[j + 1]['year'];
          A[j + 1]['year'] = A[j]['year'];
          A[j]['year'] = t;
        }
      }
    }
    setstate(A);
    console.log(A);
  };

  const results = !filtering
    ? state
    : state.filter((x) =>
        x.title.toLowerCase().includes(filtering.toLocaleLowerCase())
      );
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
        {results.map((a) => {
          return (
            <React.Fragment key={uuid()}>
              <motion.div
                drag="y"
                dragConstraints={{ top: -100, bottom: 100 }}
                className={styles.flex}
              >
                <motion.p
                  variants={containerVariant}
                  whileHover="textHoverTitle"
                >
                  {a.title}
                </motion.p>
                <motion.p
                  variants={containerVariant}
                  whileHover="textHoverYear"
                >
                  {a.year}
                </motion.p>
              </motion.div>
            </React.Fragment>
          );
        })}
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
          <motion.div
            onClick={addOneStatic}
            variants={containerVariant}
            whileHover="buttonAnimation"
          >
            <Button text="Add" color="btn__add" />
          </motion.div>

          <motion.div
            onClick={removeLastItem}
            variants={containerVariant}
            whileHover="buttonAnimation"
          >
            <Button text="Remove" color="btn__remove" />
          </motion.div>
        </div>
        <div className={styles.flex}>
          <form
            onSubmit={handleSubmit(onSubmitPusToArray)}
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
          <form onSubmit={palindromHandler} className={stylei.formflex}>
            <input
              type="text"
              value={palindromvalue}
              className={`${stylei.input__field} ${stylei.input__palindrom}`}
              placeholder="Please type text and prees enter to check if text is palindrom"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setpalindromvalue(e.target.value)
              }
            />
            <p>{palindromText}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCheck } from '../../redux/checkedSlice';
import styled from '../../scss/ComonentDetail.module.scss';
import styles from '../../scss/Array.module.scss';
import { v4 as uuid } from 'uuid';
import data from '../Data';
export const ArrayBiography = () => {
  const checked = useSelector(selectCheck);
  const [number, setnumber] = useState(Number);
  const [text, settext] = useState(String);
  const [palindromvalue, setpalindromvalue] = useState(String);
  const [palindromText, setpalindromText] = useState('');
  const [filtering, setfiltering] = useState('');
  const [state, setstate] = useState(data);
  const arrayTitle = 'Array Biography';

  const addOneStatic = () => {
    setstate([...state, { year: 1910, title: 'Mark Twain Dies' }]);
    console.log(state);
  };
  const removeLastItem = () => {
    state.pop();
    setstate([...state]);
    console.log(state);
  };
  const onSubmitPusToArray = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setstate([...state, { year: number, title: text }]);
    console.log(state);
    setnumber(0);
    settext('');
  };
  const palindromHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (palindromvalue === palindromvalue.split('').reverse().join('')) {
      setpalindromText('it is true');
    } else {
      setpalindromText('it is false');
    }
  };
  const filterHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const results = !filtering
    ? state
    : state.filter((x) =>
        x.title.toLowerCase().includes(filtering.toLocaleLowerCase())
      );

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
              <div className={styles.flex}>
                <p>{a.title}</p>
                <p>{a.year}</p>
              </div>
            </React.Fragment>
          );
        })}

        <button className={styles.input__btn} onClick={addOneStatic}>
          Add
        </button>
        <button className={styles.input__btn} onClick={removeLastItem}>
          Remove
        </button>

        <form onSubmit={onSubmitPusToArray}>
          <input
            type="number"
            value={number}
            onChange={(e: React.ChangeEvent<any>) => setnumber(e.target.value)}
          />
          <input
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              settext(e.target.value)
            }
          />
          <input type="submit" value="Push value" />
        </form>
        <form onSubmit={palindromHandler}>
          <input
            type="text"
            value={palindromvalue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setpalindromvalue(e.target.value)
            }
          />
          <p>{palindromText}</p>
          <input type="submit" value="Is palindrom?" />
        </form>
      </div>
    </section>
  );
};

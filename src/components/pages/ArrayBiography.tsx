import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCheck } from '../../redux/checkedSlice';
import styled from '../../scss/ComonentDetail.module.scss';
import styles from '../../scss/Array.module.scss';
import stylei from '../../scss/Input.module.scss';
import { v4 as uuid } from 'uuid';
import data from '../Data';
import { Button } from '../Button';

export const ArrayBiography = () => {
  const checked = useSelector(selectCheck);
  const [number, setnumber] = useState(1);
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
    setnumber(1);
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
        <div className={styles.flex}>
          <div onClick={sortedUseSort}>
            <Button text="Sorted by sort" color="btn__sorted__by__sort" />
          </div>
          <div onClick={sortedUseBabel}>
            <Button text="bubble sort" color="btn__sorted__use__bubble" />
          </div>
          <div onClick={addOneStatic}>
            <Button text="Add" color="btn__add" />
          </div>

          <div onClick={removeLastItem}>
            <Button text="Remove" color="btn__remove" />
          </div>
        </div>
        <div className={styles.flex}>
          <form onSubmit={onSubmitPusToArray} className={stylei.formflex}>
            <input
              type="number"
              value={number}
              className={stylei.input__field}
              placeholder="Please type year"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setnumber(parseInt(e.target.value))
              }
            />
            <input
              type="text"
              value={text}
              className={stylei.input__field}
              placeholder="Please type text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                settext(e.target.value)
              }
            />
            <input
              type="submit"
              value="Push value"
              className={stylei.input__submit}
            />
          </form>
          <form onSubmit={palindromHandler}>
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

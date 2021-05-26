import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { cloneDeep } from 'lodash';
import { useTranslation } from 'react-i18next';
import styled from './scss/ComonentDetail.module.scss';
import data from '../../data/Data';
import Table from './components/Table';
import SortButton from './components/SortButton';
import Form from './components/Form';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

interface DataInterface {
  [x: string]: {
    year: number;
    title: string;
    id: string;
    ismodal: boolean;
};
}
interface IFormInputs {
  number: number;
  text: string;
}

const ArrayBiography = () => {
  const [number, setNumber] = useState(1);
  const [numberModal, setNumberModal] = useState(1);
  const [text, setText] = useState(String);
  const [textModal, setTextModal] = useState(String);
  const [state, setState] = useState(data);
  const [showAlert, setShowAlert] = useState(false);

  const { register, errors, handleSubmit } = useForm<IFormInputs>();
  const { darkTheme } = useDarkThemeContext(styled);
  const { t } = useTranslation();
  const onSubmitPushToArray = () => {
    const newstate = cloneDeep(state);
    const somenew: DataInterface = {
      ...newstate,
      [uuid()]: {
        year: number,
        title: text,
        id: uuid(),
        ismodal: false
      }
    };
    setState(somenew);
    setNumber(1);
    setText('');
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const sortedUseSort = () => {
    const sortable = cloneDeep(Object.keys(state))
      .sort((a, b) => state[a].year - state[b].year)
      // eslint-disable-next-line
      .reduce((r: any, k: string) => ((r[k] = state[k]), r), {});
    setState(sortable);
  };

  const sortedUseBabel = () => {
    const array: any = cloneDeep(Object.values({ ...state }));
    const n = array.length;
    for (let i = 0; i < n - 1; i += 1) {
      for (let j = 0; j < n - 1 - i; j += 1) {
        if (array[j + 1].year < array[j].year) {
          const t = array[j + 1].year;
          array[j + 1].year = array[j].year;
          array[j].year = t;
        }
      }
    }

    setState(array);
  };

  const deleteHandler = (a: string) => {
    const newState = cloneDeep(state);
    delete newState[a];
    setState(newState);
  };
  const apdateHandler = (a: string) => {
    const newState = cloneDeep(state);

    newState[a] = {
      year: numberModal,
      title: textModal,
      id: uuid(),
      ismodal: false
    };
    setState({ ...newState });
  };
  const modalHandler = (a: string) => {
    const newState = cloneDeep(state);
    newState[a].ismodal = !newState[a].ismodal;
    setState(newState);
  };
  const textVariant = {
    textHoverTitle: {
      scale: 1.1,
      originX: 0,
      color: 'rgb(182, 2, 0)'
    },
    textHoverYear: { scale: 1.5, color: 'rgb(1, 172, 0)' }
  };
  const buttonVariant = {
    buttonAnimation: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.7, repeat: Infinity }
    }
  };

  const alertVariant = {
    alertInitial: { x: -100, opacity: 0 },
    alertAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exitAlert: { x: -1000, transition: { duration: 1 } }
  };
  const modalVariant = {
    modalinitial: { opacity: 0, scale: 0.75 },
    modalanimate: { opacity: 1, scale: 1 },
    modalexit: { opacity: 0, scale: 0 }
  };

  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{t('arrayBiography')}</h1>
        <Table
          state={state}
          deleteHandler={deleteHandler}
          apdateHandler={apdateHandler}
          modalHandler={modalHandler}
          textVariant={textVariant}
          modalVariant={modalVariant}
          buttonVariant={buttonVariant}
          numberModal={numberModal}
          setNumberModal={setNumberModal}
          textModal={textModal}
          setTextModal={setTextModal}
        />

        <SortButton
          buttonVariant={buttonVariant}
          sortedUseSort={sortedUseSort}
          sortedUseBabel={sortedUseBabel}
          sort={t('buttonSort')}
          sortByBubble={t('buttonSortByBubble')}
        />
        <Form
          alertVariant={alertVariant}
          showAlert={showAlert}
          buttonVariant={buttonVariant}
          number={number}
          setNumber={setNumber}
          text={text}
          setText={setText}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmitPushToArray={onSubmitPushToArray}
          placeholderText={t('placeholderText')}
          placeholderTextError={t('placeholderTextError')}
          placeholderYear={t('placeholderYear')}
          placeholderYearError={t('placeholderYearError')}
          alertMessage={t('alertMessage')}
          pushValue={t('pushValue')}
        />
      </div>
    </section>
  );
};
export default ArrayBiography;

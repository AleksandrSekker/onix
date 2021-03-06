import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/Error/Error';
import TableData from './TableData';
import AddModal from './AddModal';
import useFetch from '../../../hooks/useFetch';

export const ArrayDB = () => {
  const [title, setTitle] = useState(String);
  const [titleForUpdate, settitleForUpdate] = useState(String);
  const [subTitle, setSubTitle] = useState(String);
  const [subtitleForUpdate, setsubtitleForUpdate] = useState(String);
  const [year, setYear] = useState(1);
  const [yearForUpdate, setyearForUpdate] = useState(Number);
  const [isChange, setIsChange] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [linkAdd, setLinkAdd] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const { loaded, state, isError } = useFetch('https://guarded-brook-68937.herokuapp.com/api/todo', isChange);
  const { t } = useTranslation();
  const result = state;
  const pushHandler = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://guarded-brook-68937.herokuapp.com/api/todo',
        data: {
          title,
          subTitle,
          year,
          ismodal: false,
          isactive: false
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      if (response.status >= 200 && response.status < 300) {
        setIsChange(!isChange);
      }
    } catch (error) {
      setErrorState(error);
    }
  };
  const deleteHandler = async (id: string) => {
    const response = await axios.delete(`https://guarded-brook-68937.herokuapp.com/api/todo/${id}`);
    try {
      if (response.status >= 200 && response.status < 300) {
        setIsChange(!isChange);
      }
    } catch (error) {
      setErrorState(error);
    }
  };
  const updateHandlerModal = async (id: string, index: number) => {
    try {
      const response = await axios({
        method: 'put',
        url: `https://guarded-brook-68937.herokuapp.com/api/todo/${id}`,
        data: {
          title: result[index].title,
          subtitle: result[index].subtitle,
          year: result[index].year,
          ismodal: !result[index].ismodal,
          isactive: false
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      if (response.status >= 200 && response.status < 300) {
        setIsChange(!isChange);
      }
    } catch (error) {
      setErrorState(error);
    }
  };
  const updateHandlerAll = async (id: string, titleUpdate: string, subtitleUpdate: string, yearUpdate: number) => {
    try {
      const response = await axios({
        method: 'put',
        url: `https://guarded-brook-68937.herokuapp.com/api/todo/${id}`,
        data: {
          title: titleUpdate,
          subtitle: subtitleUpdate,
          year: yearUpdate,
          ismodal: false,
          isactive: false
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      if (response.status >= 200 && response.status < 300) {
        setIsChange(!isChange);
      }
    } catch (error) {
      setErrorState(error);
    }
  };
  const modalToggler = () => {
    setIsModal(!isModal);
  };

  // dragging

  const modalVariant = {
    modalInitial: { opacity: 0, scale: 0.3 },
    modalAnimate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    },
    modalExit: { opacity: 0, scale: 0, transition: { duration: 1 } }
  };
  // languages

  return (
    <div>
      <h1>{errorState}</h1>
      {isError && <Error />}
      {!loaded ? (
        <Loader />
      ) : (
        <TableData
          result={state}
          deleteHandler={deleteHandler}
          updateHandlerModal={updateHandlerModal}
          modalVariant={modalVariant}
          titleForUpdate={titleForUpdate}
          settitleForUpdate={settitleForUpdate}
          subtitleForUpdate={subtitleForUpdate}
          setsubtitleForUpdate={setsubtitleForUpdate}
          yearForUpdate={yearForUpdate}
          setyearForUpdate={setyearForUpdate}
          updateHandlerAll={updateHandlerAll}
          placeholderLanguage={t('placeholderLanguage')}
          amountLanguage={t('amountLanguage')}
          addNotesLanguage={t('addNotesLanguage')}
          notesPlaceholderLanguage={t('notesPlaceholderLanguage')}
          cancelLanguage={t('cancelLanguage')}
          saveLanguage={t('saveLanguage')}
        />
      )}
      <AddModal
        isModal={isModal}
        setTitle={setTitle}
        year={year}
        setYear={setYear}
        linkAdd={linkAdd}
        setSubTitle={setSubTitle}
        setLinkAdd={setLinkAdd}
        modalToggler={modalToggler}
        pushHandler={pushHandler}
        placeholderLanguage={t('placeholderLanguage')}
        amountLanguage={t('amountLanguage')}
        addNotesLanguage={t('addNotesLanguage')}
        notesPlaceholderLanguage={t('notesPlaceholderLanguage')}
        cancelLanguage={t('cancelLanguage')}
        saveLanguage={t('saveLanguage')}
      />
    </div>
  );
};
export default ArrayDB;

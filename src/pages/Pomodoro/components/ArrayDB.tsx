import axios from 'axios';
import React, { useState, useRef } from 'react';
import Loader from '../../../components/Loader/Loader';
import Error from '../../../components/Error/Error';
import { TableData } from './TableData';
import { AddModal } from './AddModal';
import useFetch from '../../../hooks/useFetch';
import useLanguages from '../../../hooks/useLanguages';
import {
  addNotesLanguageEng,
  addNotesLanguageRu,
  addNotesLanguageUa,
  amountLanguageEng,
  amountLanguageRu,
  amountLanguageUa,
  cancelLanguageEng,
  cancelLanguageRu,
  cancelLanguageUa,
  notesPlaceholderLanguageEng,
  notesPlaceholderLanguageRu,
  notesPlaceholderLanguageUa,
  placeholderLanguageEng,
  placeholderLanguageRu,
  placeholderLanguageUa,
  saveLanguageEng,
  saveLanguageRu,
  saveLanguageUa,
} from '../../../constants/Text';
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
  const { loaded, state, setState, isError } = useFetch(
    'https://guarded-brook-68937.herokuapp.com/api/todo',
    isChange
  );
  const pushHandler = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://guarded-brook-68937.herokuapp.com/api/todo',
        data: {
          title: title,
          subtitle: subTitle,
          year: year,
          ismodal: false,
          isactive: false,
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (response.status >= 200 && response.status < 300) {
        console.log('success');
        setIsChange(!isChange);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const deleteHandler = async (id: string) => {
    const response = await axios.delete(
      `https://guarded-brook-68937.herokuapp.com/api/todo/${id}`
    );
    try {
      if (response.status >= 200 && response.status < 300) {
        console.log('success');
        setIsChange(!isChange);
      }
    } catch (error) {
      console.log(error);
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
          isactive: false,
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (response.status >= 200 && response.status < 300) {
        console.log('success');
        setIsChange(!isChange);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const updateHandlerAll = async (
    id: string,
    titleUpdate: string,
    subtitleUpdate: string,
    yearUpdate: number
  ) => {
    try {
      const response = await axios({
        method: 'put',
        url: `https://guarded-brook-68937.herokuapp.com/api/todo/${id}`,
        data: {
          title: titleUpdate,
          subtitle: subtitleUpdate,
          year: yearUpdate,
          ismodal: false,
          isactive: false,
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      if (response.status >= 200 && response.status < 300) {
        console.log('success');
        setIsChange(!isChange);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const modalToggler = () => {
    setIsModal(!isModal);
  };

  // dragging
  const draggingItem: any = useRef();
  const dragOverItem: any = useRef();
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragOverItem.current = position;
    const listCopy = [...state];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setState(listCopy);
  };
  const modalVariant = {
    modalInitial: { opacity: 0, scale: 0.3 },
    modalAnimate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
    modalExit: { opacity: 0, scale: 0, transition: { duration: 1 } },
  };
  // languages
  const { currentLanguage: placeholderLanguage } = useLanguages(
    placeholderLanguageEng,
    placeholderLanguageRu,
    placeholderLanguageUa
  );
  const { currentLanguage: amountLanguage } = useLanguages(
    amountLanguageEng,
    amountLanguageRu,
    amountLanguageUa
  );
  const { currentLanguage: addNotesLanguage } = useLanguages(
    addNotesLanguageEng,
    addNotesLanguageRu,
    addNotesLanguageUa
  );
  const { currentLanguage: notesPlaceholderLanguage } = useLanguages(
    notesPlaceholderLanguageEng,
    notesPlaceholderLanguageRu,
    notesPlaceholderLanguageUa
  );
  const { currentLanguage: cancelLanguage } = useLanguages(
    cancelLanguageEng,
    cancelLanguageRu,
    cancelLanguageUa
  );
  const { currentLanguage: saveLanguage } = useLanguages(
    saveLanguageEng,
    saveLanguageRu,
    saveLanguageUa
  );
  const result = state;
  return (
    <div>
      {isError && <Error />}
      {!loaded ? (
        <Loader />
      ) : (
        <TableData
          result={result}
          handleDragEnter={handleDragEnter}
          handleDragStart={handleDragStart}
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
          placeholderLanguage={placeholderLanguage}
          amountLanguage={amountLanguage}
          addNotesLanguage={addNotesLanguage}
          notesPlaceholderLanguage={notesPlaceholderLanguage}
          cancelLanguage={cancelLanguage}
          saveLanguage={saveLanguage}
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
        placeholderLanguage={placeholderLanguage}
        amountLanguage={amountLanguage}
        addNotesLanguage={addNotesLanguage}
        notesPlaceholderLanguage={notesPlaceholderLanguage}
        cancelLanguage={cancelLanguage}
        saveLanguage={saveLanguage}
      />
    </div>
  );
};

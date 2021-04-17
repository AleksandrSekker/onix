import React, { useEffect, useRef, useState } from 'react';
import styles from './scss/LessonSeven.module.scss';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { Cards } from './Cards';

import useDarkTheme from '../../hooks/useDarkTheme';
import useFetch from '../../hooks/useFetch';
import useLanguages from '../../hooks/useLanguages';
import {
  capitalEng,
  capitalRu,
  capitalUa,
  detailPageEng,
  detailPageRu,
  detailPageUa,
  populationEng,
  populationRu,
  populationUa,
  regionEng,
  regionRu,
  regionUa,
} from '../../constants/Text';

const LessonSeven = () => {
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const [isChange] = useState(true);
  const { darkTheme } = useDarkTheme(styles);
  const { loaded, state, setState, isError } = useFetch(
    'https://restcountries.eu/rest/v2/all',
    isChange
  );
  // onclick events

  const ternary = (x: boolean, y: any) => (x === true ? y(false) : y(true));
  const ternaryStyles = (x: boolean) => (x ? styles.active : '');

  const nameHanler = () => {
    ternary(isNameActive, setIsNameActive);
  };

  const populationHandler = () => {
    ternary(isPopulationActive, setIsPopulationActive);
  };

  const regionHandler = () => {
    ternary(isRegionActive, setIsRegionActive);
  };

  const capitalHandler = () => {
    ternary(isCapitalActive, setIsCapitalActive);
  };
  // keyboard events
  const keyboardEvents = (event: KeyboardEvent) => {
    switch (event.key) {
      case '1':
        ternary(isNameActive, setIsNameActive);
        break;
      case '2':
        ternary(isPopulationActive, setIsPopulationActive);
        break;
      case '3':
        ternary(isRegionActive, setIsRegionActive);
        break;
      case '4':
        ternary(isCapitalActive, setIsCapitalActive);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keyboardEvents);

    return () => window.removeEventListener('keydown', keyboardEvents);
  });

  // Drag events
  const draggingItem: React.MutableRefObject<any> = useRef();
  const dragOverItem: React.MutableRefObject<
    number | undefined | null
  > = useRef();
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
  // language
  const { currentLanguage: population } = useLanguages(
    populationEng,
    populationRu,
    populationUa
  );
  const { currentLanguage: region } = useLanguages(
    regionEng,
    regionRu,
    regionUa
  );
  const { currentLanguage: capital } = useLanguages(
    capitalEng,
    capitalRu,
    capitalUa
  );
  const { currentLanguage: detailPage } = useLanguages(
    detailPageEng,
    detailPageRu,
    detailPageUa
  );
  return (
    <div className={darkTheme}>
      <div className="container">
        {!loaded ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          <>
            <Cards
              state={state}
              handleDragEnter={handleDragEnter}
              handleDragStart={handleDragStart}
              nameHanler={nameHanler}
              ternaryStyles={ternaryStyles}
              isNameActive={isNameActive}
              populationHandler={populationHandler}
              isPopulationActive={isPopulationActive}
              regionHandler={regionHandler}
              isRegionActive={isRegionActive}
              capitalHandler={capitalHandler}
              isCapitalActive={isCapitalActive}
              populationLanguage={population}
              regionLanguage={region}
              capitalLanguage={capital}
              detailPageLanguage={detailPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default LessonSeven;

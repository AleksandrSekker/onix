import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './scss/LessonSeven.module.scss';
import Loader from '../../components/Loader/Loader';
import Cards from './Cards';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { selectError, selectPagination } from '../../redux/pagination/actions';
import Error from '../../components/Error/Error';

const LessonSeven = () => {
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const { darkTheme } = useDarkThemeContext(styles);
  // Infinite Scrolling

  const { isFetching } = useInfiniteScroll();
  // translation
  const { t } = useTranslation();
  // onclick events
  const ternaryStyles = (x: boolean) => (x ? styles.active : '');
  const nameHandler = () => {
    setIsNameActive((isNameActive) => !isNameActive);
  };
  const populationHandler = () => {
    setIsPopulationActive((isPopulationActive) => !isPopulationActive);
  };
  const regionHandler = () => {
    setIsRegionActive((isRegionActive) => !isRegionActive);
  };
  const capitalHandler = () => {
    setIsCapitalActive((isCapitalActive) => !isCapitalActive);
  };
  // keyboard events
  const keyboardEvents = (event: KeyboardEvent) => {
    switch (event.key) {
      case '1':
        setIsNameActive((isNameActive) => !isNameActive);
        break;
      case '2':
        setIsPopulationActive((isPopulationActive) => !isPopulationActive);
        break;
      case '3':
        setIsRegionActive((isRegionActive) => !isRegionActive);
        break;
      case '4':
        setIsCapitalActive((isCapitalActive) => !isCapitalActive);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', keyboardEvents);

    return () => window.removeEventListener('keydown', keyboardEvents);
  });

  // redux
  const current = useSelector(selectPagination);
  // Drag events
  const { handleDragEnter, handleDragStart } = useDragAndDrop();
  const error = useSelector(selectError);
  return (
    <div className={darkTheme}>
      <div className="container">
        {error && <Error />}
        <Cards
          state={current}
          handleDragEnter={handleDragEnter}
          handleDragStart={handleDragStart}
          nameHanler={nameHandler}
          ternaryStyles={ternaryStyles}
          isNameActive={isNameActive}
          populationHandler={populationHandler}
          isPopulationActive={isPopulationActive}
          regionHandler={regionHandler}
          isRegionActive={isRegionActive}
          capitalHandler={capitalHandler}
          isCapitalActive={isCapitalActive}
          populationLanguage={t('population')}
          regionLanguage={t('region')}
          capitalLanguage={t('capital')}
          detailPageLanguage={t('detailPage')}
        />
        {isFetching && <Loader />}
      </div>
    </div>
  );
};
export default LessonSeven;

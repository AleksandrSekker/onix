import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styles from './scss/LessonSeven.module.scss';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import Cards from './Cards';
import useFetch from '../../hooks/useFetch';

import useDarkThemeContext from '../../hooks/useDarkThemeContext';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import Pagination from './Pagination';
import { selectPagination, currentPosts } from '../../redux/pagination/actions';

const LessonSeven = () => {
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const [isChange] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const { darkTheme } = useDarkThemeContext(styles);
  const {
    loaded, state, setState, isError 
  } = useFetch('https://restcountries.eu/rest/v2/all', isChange);
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

  // Drag events
  const { handleDragEnter, handleDragStart } = useDragAndDrop(state, setState);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const current = useSelector(selectPagination);
  const dispatch = useDispatch();
  dispatch(currentPosts(state));
  const currentPost = current.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={darkTheme}>
      <div className="container">
        {isError && <Error />}
        {!loaded ? (
          <Loader />
        ) : (
          <>
            <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={state.length} />
            <Cards
              state={currentPost}
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
          </>
        )}
      </div>
    </div>
  );
};
export default LessonSeven;

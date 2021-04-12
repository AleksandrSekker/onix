import React, { useEffect, useRef, useState } from "react";
import styles from "./scss/LessonSeven.module.scss";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { Cards } from "./Cards";
import { Pagination } from "../../components/Pagination/Pagination";

import useFetchWithPagination from "../../hooks/useFetchWithPagination";

export const LessonSeven = () => {
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);

  const {
    loaded,
    state,
    isError,
    current,
    setCurrent,
  } = useFetchWithPagination(
    "https://restcountries.eu/rest/v2/all",
    postsPerPage
  );
  // onclick events

  const ternary = (x: boolean, y: any) => (x === true ? y(false) : y(true));
  const ternaryStyles = (x: boolean) => (x ? styles.active : "");

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
      case "1":
        ternary(isNameActive, setIsNameActive);
        break;
      case "2":
        ternary(isPopulationActive, setIsPopulationActive);
        break;
      case "3":
        ternary(isRegionActive, setIsRegionActive);
        break;
      case "4":
        ternary(isCapitalActive, setIsCapitalActive);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keyboardEvents);

    return () => window.removeEventListener("keydown", keyboardEvents);
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrent(state.slice(indexOfFirstPost, indexOfLastPost));
  };
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
    const listCopy = [...current];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);
    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setCurrent(listCopy);
  };
  return (
    <div className='container'>
      {!loaded ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={state.length}
          />
          <Cards
            state={current}
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
          />
        </>
      )}
    </div>
  );
};

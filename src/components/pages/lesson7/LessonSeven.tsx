import React, { useEffect, useRef, useState } from "react";
import styles from "./LessonSeven.module.scss";
import { Loader } from "../../Loader";
import dataCall from "../../DataCall";
import { Error } from "../../Error";
import { Cards } from "./Cards";
import { Pagination } from "../../Pagination";
export const LessonSeven = () => {
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const [isError, setisError] = useState(false);
  const [currentPage, setCurrentPage]: any = useState(1);
  const [postsPerPage] = useState(10);

  const url = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    dataCall(url, setIsLoaded, setState, setisError);
    return () => setIsLoaded(false);
  }, []);

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
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = setState(state.slice(indexOfFirstPost, indexOfLastPost));

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className='container'>
      {isError && <Error />}
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={state.length}
          />
          <Cards
            state={currentPosts}
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

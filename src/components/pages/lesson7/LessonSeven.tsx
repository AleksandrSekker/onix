import React, { useEffect, useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from "./LessonSeven.module.scss";
import { v4 as uuid } from "uuid";
import { Loader } from "../../Loader";
import { Link } from "react-router-dom";
import { Button } from "../../Button";

interface Props {}

export const LessonSeven = (props: Props) => {
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const dataCall = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/all`);
      const json = await response.json();
      const newArr = json.map((x: object) => ({
        ...x,
        id: uuid(),
      }));
      setIsLoaded(true);
      setState(newArr);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    dataCall();

    return () => {
      setIsLoaded(false);
    };
  }, []);
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(state);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setState(items);
  };
  const nameTernary = () => {
    isNameActive === true ? setIsNameActive(false) : setIsNameActive(true);
  };
  const regionTernary = () => {
    isRegionActive === true
      ? setIsRegionActive(false)
      : setIsRegionActive(true);
  };
  const populationTernary = () => {
    isPopulationActive === true
      ? setIsPopulationActive(false)
      : setIsPopulationActive(true);
  };
  const capitalTernary = () => {
    isCapitalActive === true
      ? setIsCapitalActive(false)
      : setIsCapitalActive(true);
  };
  const nameHanler = (event: any) => {
    nameTernary();
  };
  const populationHandler = () => {
    populationTernary();
  };
  const regionHandler = () => {
    regionTernary();
  };
  const capitalHandler = () => {
    capitalTernary();
  };
  const keyboardEvents = (event: any) => {
    switch (event.key) {
      case "1":
        nameTernary();
        break;
      case "2":
        populationTernary();
        break;
      case "3":
        regionTernary();
        break;
      case "4":
        capitalTernary();
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", keyboardEvents);

    return () => {
      window.removeEventListener("keydown", keyboardEvents);
    };
  });
  return (
    <div className='container'>
      <p className={styles.hot__keys__text}>
        Горячиt клавиши для подсвечивания активных элементов 1, 2, 3, 4
      </p>
      {!isLoaded ? (
        <Loader />
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId={styles.card}>
            {provided => (
              <div
                className={styles.card}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {state.map(
                  ({ id, name, flag, population, region, capital }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {provided => (
                          <div
                            className={styles.cards}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <img src={flag} alt='flag' />

                            <p
                              onClick={nameHanler}
                              className={isNameActive ? styles.active : ""}>
                              {name}
                            </p>
                            <p
                              onClick={populationHandler}
                              className={
                                isPopulationActive ? styles.active : ""
                              }>
                              Population: {population}
                            </p>
                            <p
                              onClick={regionHandler}
                              className={isRegionActive ? styles.active : ""}>
                              Region: {region}
                            </p>
                            <p
                              onClick={capitalHandler}
                              className={isCapitalActive ? styles.active : ""}>
                              Capital: {capital}
                            </p>
                            <Link to={`/${name}`} className={styles.link}>
                              <Button
                                text='Detail page'
                                color='btn__sorted__use__bubble'
                              />
                            </Link>
                          </div>
                        )}
                      </Draggable>
                    );
                  }
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

import React, { useEffect, useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styles from "./LessonSeven.module.scss";
import { v4 as uuid } from "uuid";
import { Loader } from "../../Loader";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { Error } from "../../Error";

interface Props {
  id: string;
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}

export const LessonSeven = (props: Props) => {
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const [isError, setisError] = useState(false);
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
      console.log(response.statusText);
    } catch (error) {
      console.error(error);
      setisError(true);
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
  const ternary = (x: boolean, y: any) => {
    x === true ? y(false) : y(true);
  };
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

    return () => {
      window.removeEventListener("keydown", keyboardEvents);
    };
  });

  return (
    <div className='container'>
      <p className={styles.hot__keys__text}>
        Горячиt клавиши для подсвечивания активных элементов 1, 2, 3, 4
      </p>
      {isError && <Error />}
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
                  (
                    { id, name, flag, population, region, capital }: Props,
                    index
                  ) => {
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

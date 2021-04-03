import React, { useEffect, useRef, useState } from "react";
import styles from "./LessonSeven.module.scss";
import { v4 as uuid } from "uuid";
import { Loader } from "../../Loader";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { Error } from "../../Error";
import { AnimatePresence, motion } from "framer-motion";

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
  const [nameRightClick, setNameRightClick] = useState(false);
  const [isPopulationActive, setIsPopulationActive] = useState(false);
  const [populationRightClick, setpopulationRightClick] = useState(false);
  const [isRegionActive, setIsRegionActive] = useState(false);
  const [regionRightClick, setRegionRightClick] = useState(false);
  const [isCapitalActive, setIsCapitalActive] = useState(false);
  const [capitalRightClick, setCapitalRightClick] = useState(false);
  const [isError, setisError] = useState(false);

  const [cardColor, setcardColor] = useState("lightgrey");
  const [showAlert, setshowAlert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const draggingItem: any = useRef();
  const dragOverItem: any = useRef();
  const dataCall = async () => {
    try {
      const response = await fetch(`https://restcountries.eu/rest/v2/all`);
      const json = await response.json();

      const newArr = json.map((x: object) => ({
        ...x,
        id: uuid(),
      }));
      setIsLoaded(true);
      setState(newArr.slice(1, 10));
    } catch (error) {
      console.error(error);
      setisError(true);
    }
  };
  useEffect(() => {
    dataCall();
    return () => setIsLoaded(false);
  }, []);

  const ternary = (x: boolean, y: any) => (x === true ? y(false) : y(true));
  const ternaryStyles = (x: boolean) => (x ? styles.active : "");
  const ternaryStylesRightClick = (x: boolean) =>
    x ? styles.right__click : "";
  const nameHanler = () => {
    ternary(isNameActive, setIsNameActive);
    setNameRightClick(false);
  };
  const nameRightClickHandler = () => {
    ternary(nameRightClick, setNameRightClick);
    setIsNameActive(false);
  };
  const populationHandler = () => {
    ternary(isPopulationActive, setIsPopulationActive);
    setpopulationRightClick(false);
  };
  const populationRightClickHandler = () => {
    ternary(populationRightClick, setpopulationRightClick);
    setIsPopulationActive(false);
  };
  const regionHandler = () => {
    ternary(isRegionActive, setIsRegionActive);
    setRegionRightClick(false);
  };
  const regionRightClickHandler = () => {
    ternary(regionRightClick, setRegionRightClick);
    setIsRegionActive(false);
  };
  const capitalHandler = () => {
    ternary(isCapitalActive, setIsCapitalActive);
    setCapitalRightClick(false);
  };
  const capitalRightClickHandler = () => {
    ternary(capitalRightClick, setCapitalRightClick);
    setIsCapitalActive(false);
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

    return () => window.removeEventListener("keydown", keyboardEvents);
  });
  const cardBackgroundVariant = {
    animate: {
      background: `${cardColor}`,
      borderBottomLeftRadius: "1rem",
      borderBottomRightRadius: "1rem",
      transition: { duration: 2 },
    },
  };
  const alertVariant = {
    alertInitial: { x: -100, opacity: 0 },
    alertAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exitAlert: { x: -1000, transition: { duration: 1 } },
  };
  const alert = (message: string) => {
    setshowAlert(true);
    setalertMessage(message);
    setTimeout(() => {
      setshowAlert(false);
    }, 2000);
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    alert(`color ${cardColor} submited`);
  };
  const focused = () => {
    alert("focused");
  };
  const unfocused = () => {
    alert("unfocused");
  };
  const mouseOverHandler = () => {
    alert("Mouse over to button");
  };
  const mouseOutHandler = () => {
    alert("Mouse out from button");
  };
  const handleDragStart = (e: any, position: any) => {
    draggingItem.current = position;
    console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
    const listCopy = [...state];
    console.log(draggingItem.current, dragOverItem.current);
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setState(listCopy);
  };
  return (
    <div className='container'>
      <p className={styles.text__review}>
        Испльзовал keydown, onClick, onContextMenu, onBlur, onFocus, onChange,
        onSubmit, onMouseOut, onMouseOver
      </p>
      {isError && <Error />}
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          onChange={e => setcardColor(e.target.value)}
          onFocus={focused}
          onBlur={unfocused}
        />
        <input
          type='submit'
          value='Submit'
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        />
      </form>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            variants={alertVariant}
            initial='alertInitial'
            animate='alertAnimate'
            exit='exitAlert'
            className={styles.alert__container}>
            <p>{alertMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoaded ? (
        <Loader />
      ) : (
        <div className={styles.card}>
          {state &&
            state.map(
              (
                { id, name, flag, population, region, capital },
                index: number
              ) => (
                <div
                  onDragStart={e => handleDragStart(e, index)}
                  onDragOver={e => e.preventDefault()}
                  onDragEnter={e => handleDragEnter(e, index)}
                  key={index}
                  draggable
                  className={styles.cards}>
                  <img src={flag} alt='flag' />
                  <motion.div
                    variants={cardBackgroundVariant}
                    animate='animate'>
                    <p
                      onClick={nameHanler}
                      onContextMenu={nameRightClickHandler}
                      className={`${ternaryStyles(
                        isNameActive
                      )} ${ternaryStylesRightClick(nameRightClick)}`}>
                      {name}
                    </p>
                    <p
                      onClick={populationHandler}
                      onContextMenu={populationRightClickHandler}
                      className={`${ternaryStyles(
                        isPopulationActive
                      )} ${ternaryStylesRightClick(populationRightClick)}`}>
                      Population: {population}
                    </p>
                    <p
                      onClick={regionHandler}
                      onContextMenu={regionRightClickHandler}
                      className={`${ternaryStyles(
                        isRegionActive
                      )} ${ternaryStylesRightClick(regionRightClick)}`}>
                      Region: {region}
                    </p>
                    <p
                      onClick={capitalHandler}
                      onContextMenu={capitalRightClickHandler}
                      className={`${ternaryStyles(
                        isCapitalActive
                      )} ${ternaryStylesRightClick(capitalRightClick)}`}>
                      Capital: {capital}
                    </p>
                    <Link to={`/${name}`} className={styles.link}>
                      <Button
                        text='Detail page'
                        color='btn__sorted__use__bubble'
                      />
                    </Link>
                  </motion.div>
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};

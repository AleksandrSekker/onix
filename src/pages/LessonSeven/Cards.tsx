import React from "react";
import styles from "./scss/LessonSeven.module.scss";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

interface Props {
  state: any;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => void;
  handleDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => void;
  nameHanler: () => void;
  ternaryStyles: (x: boolean) => string;
  isNameActive: boolean;
  isPopulationActive: boolean;
  populationHandler: () => void;
  regionHandler: () => void;
  isRegionActive: boolean;
  capitalHandler: () => void;
  isCapitalActive: boolean;
  populationLanguage: string;
  regionLanguage: string;
  capitalLanguage: string;
  detailPageLanguage: string;
}
interface State {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}

export const Cards = ({
  state,
  handleDragStart,
  handleDragEnter,
  nameHanler,
  ternaryStyles,
  isNameActive,
  populationHandler,
  isPopulationActive,
  regionHandler,
  isRegionActive,
  capitalHandler,
  isCapitalActive,
  populationLanguage,
  regionLanguage,
  capitalLanguage,
  detailPageLanguage,
}: Props) => {
  return (
    <div className={styles.card}>
      {state &&
        state.map(
          (
            { name, flag, population, region, capital }: State,
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
              <div>
                <p onClick={nameHanler} className={ternaryStyles(isNameActive)}>
                  {name}
                </p>
                <p
                  onClick={populationHandler}
                  className={ternaryStyles(isPopulationActive)}>
                  {populationLanguage}: {population}
                </p>
                <p
                  onClick={regionHandler}
                  className={ternaryStyles(isRegionActive)}>
                  {regionLanguage}: {region}
                </p>
                <p
                  onClick={capitalHandler}
                  className={ternaryStyles(isCapitalActive)}>
                  {capitalLanguage}: {capital}
                </p>
                <Link to={`/${name}`} className={styles.link}>
                  <Button
                    text={detailPageLanguage}
                    color='btn__sorted__use__bubble'
                  />
                </Link>
              </div>
            </div>
          )
        )}
    </div>
  );
};

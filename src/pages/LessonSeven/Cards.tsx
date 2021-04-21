import React from 'react';
import { Link } from 'react-router-dom';
import styles from './scss/LessonSeven.module.scss';
import Button from '../../components/Button/Button';

interface Props {
  state: any;
  handleDragStart: any;
  handleDragEnter: any;
  nameHanler: () => void;
  ternaryStyles: any;
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
  name: string, 
  flag: string, 
  population: string, 
  region: string, 
  capital: string, 
  id: string
}
const Cards = ({
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
}: Props) => (
  <div className={styles.card}>
    {state 
    && state.slice(0, 20).map(
      (
        { 
          name, flag, population, region, capital, id
        }: State, index: any
      ) => (
        <div
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => handleDragEnter(e, index)}
          key={id}
          draggable
          className={styles.cards}
        >
          <img src={flag} alt="flag" />
          <div className={styles.button__container}>
            <button
              type="button"
              onClick={nameHanler}
              className={`${ternaryStyles(isNameActive)} ${styles.button}`}
            >
              {name}
            </button>
            <button
              type="button"
              onClick={populationHandler}
              className={`${ternaryStyles(isPopulationActive)}  ${styles.button}`}
            >
              {populationLanguage}
              :
              {population}
            </button>
            <button
              type="button"
              onClick={regionHandler}
              className={`${ternaryStyles(isRegionActive)}  ${styles.button}`}
            >
              {regionLanguage}
              :
              {region}
            </button>
            <button
              type="button"
              onClick={capitalHandler}
              className={`${ternaryStyles(isCapitalActive)}  ${styles.button}`}
            >
              {capitalLanguage}
              :
              {capital}
            </button>
            <Link to={`/${name}`} className={styles.link}>
              <Button
                text={detailPageLanguage}
                color="btn__sorted__use__bubble"
              />
            </Link>
          </div>
        </div>
      ),
    )}
  </div>
);
export default Cards;

import React from "react";
import styles from "./RestCountries.module.scss";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
interface Props {
  items: [];
}
interface State {
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
}
export const CardCountry = ({ items }: Props) => {
  const variantCard = {
    cardHover: {
      scale: 0.8,
      rotate: 360,
      transition: { duration: 1 },
    },
  };
  return (
    <div className={styles.card}>
      {items.map(({ name, population, region, capital, flag }: State) => (
        <Link to={`/${name}`} className={styles.link} key={uuid()}>
          <AnimatePresence>
            <motion.div
              className={styles.cards}
              variants={variantCard}
              whileHover='cardHover'
              whileTap={{ scale: 1.1 }}>
              <img src={flag} alt='flag' />
              <p>{name}</p>
              <p>Population: {population}</p>
              <p>Region: {region}</p>
              <p>Capital: {capital}</p>
            </motion.div>
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
};

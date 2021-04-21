import React from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './scss/RestCountries.module.scss';

export const CardCountry = ({ items, variantCard }: any) => (
  <div className={styles.card}>
    {items.slice(0, 20).map(
      (
        {
          name, population, region, capital, flag 
        }: any
      ) => (
        <Link to={`/${name}`} className={styles.link} key={uuid()}>
          <AnimatePresence>
            <motion.div
              className={styles.cards}
              variants={variantCard}
              whileHover="cardHover"
              whileTap={{ scale: 1.1 }}
            >
              <img src={flag} alt="flag" />
              <p>{name}</p>
              <p>
                Population
                : 
                {population}
              </p>
              <p>
                Region
                :
                {region}
              </p>
              <p>
                Capital
                :
                {capital}
              </p>
            </motion.div>
          </AnimatePresence>
        </Link>
      ),
    )}
  </div>
);
export default CardCountry;

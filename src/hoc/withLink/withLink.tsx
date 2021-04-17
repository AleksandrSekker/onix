import React from 'react';
import { motion } from 'framer-motion';
import styles from './scss/withLink.module.scss';

const itemMenuAnimate = {
  hover: { scale: 1.2, originX: 0, transition: { duration: 1 } },
};
const withLink = (Component: any) => ({ to, children }: any) => (
  <Component to={to} className={styles.link__decoration}>
    <motion.p variants={itemMenuAnimate} whileHover="hover">
      {children}
    </motion.p>
  </Component>
);
export default withLink;

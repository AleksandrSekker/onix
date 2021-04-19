import { motion } from 'framer-motion';
import React from 'react';
// @ts-ignore
import Button from '../../../components/Button/Button.tsx';
import styles from '../scss/Array.module.scss';

interface Props {
  sortedUseSort: () => void;
  sortedUseBabel: () => void;
  sortByBubble: string;
  sort: string;
  buttonVariant: {
    buttonAnimation: {
      scale: number[];
      transition: {
        duration: number;
        repeat: number;
      };
    };
  };
}

const SortButton = ({
  sortedUseSort,
  sortedUseBabel,
  buttonVariant,
  sortByBubble,
  sort,
}: Props) => (
  <div className={styles.flex}>
    <motion.div
      onClick={sortedUseSort}
      variants={buttonVariant}
      whileHover="buttonAnimation"
    >
      <Button text={sort} color="btn__sorted__by__sort" />
    </motion.div>
    <motion.div
      onClick={sortedUseBabel}
      variants={buttonVariant}
      whileHover="buttonAnimation"
    >
      <Button text={sortByBubble} color="btn__sorted__use__bubble" />
    </motion.div>
  </div>
);

export default SortButton;

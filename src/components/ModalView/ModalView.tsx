import React from 'react';
import styles from './scss/ModalView.module.scss';

interface Props {
  children: any;
}

const ModalView = ({ children }: Props) => {
  return <div className={styles.modal}>{children}</div>;
};
export default ModalView;

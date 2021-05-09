import React from 'react';
import styles from './scss/ModalView.module.scss';

interface Props {
  children: any;
}

const ModalFooter = ({ children }: Props) => {
  return (
    <div className={styles.modal__footer__background}>
      <div className={styles.modal__footer}>{children}</div>
    </div>
  );
};
export default ModalFooter;

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: any;
  ismodal: any;
}

const Modal = ({ children, ismodal }: Props) => {
  const modalVariant = {
    modalinitial: { opacity: 0, scale: 0.75 },
    modalanimate: { opacity: 1, scale: 1 },
    modalexit: { opacity: 0, scale: 0 }
  };

  return (
    <AnimatePresence>
      {ismodal && (
        <motion.div variants={modalVariant} initial="modalinitial" animate="modalanimate" exit="modalexit">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;

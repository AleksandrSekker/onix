import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/Buttons.module.scss';

interface Props {
  onClick: () => void;
}

export const ButtonSave = ({ onClick }: Props) => {
  const { t } = useTranslation();
  return (
    <button type="button" className={styles.btn__save} onClick={onClick}>
      {t('saveLanguage')}
    </button>
  );
};
export default ButtonSave;

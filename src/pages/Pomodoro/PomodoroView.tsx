import React, { useState } from 'react';
import { faCheckCircle, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrayDB } from './components/ArrayDB';
import Counter from './components/Counter';
import styles from './scss/Pomodoro.module.scss';
import Modal from '../../components/Modal/Modal';
import ModalView from '../../components/ModalView/ModalView';
import ModalFooter from '../../components/ModalView/ModalFooter';
import { ButtonSave } from '../../components/Button/ButtonSave';

interface Props {
  darkTheme: any;
  PomodoroLang: string;
  ismodal: boolean;
  setIsmodal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PomodoroView = ({
  darkTheme, PomodoroLang, ismodal, setIsmodal 
}: Props) => {
  const [minutesPomodoro, setMinutesPomodoro] = useState(25);
  const [minutesLong, setMinutesLong] = useState(15);
  const [minutesShort, setMinutesShort] = useState(5);
  return (
    <div className={darkTheme}>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.header}>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.logo} />
              {PomodoroLang}
            </p>
            <FontAwesomeIcon
              onClick={() => {
                setIsmodal(!ismodal);
              }}
              icon={faCog}
              className={styles.settings}
            />
          </div>
          <Modal ismodal={ismodal}>
            <ModalView>
              <div className={styles.flexContainer}>
                <div className={styles.child__container}>
                  <p>Pomodoro:</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    defaultValue={minutesPomodoro}
                    className={styles.numberInput}
                    onChange={(e: any) => setMinutesPomodoro(e.target.value)}
                  />
                </div>
                <div className={styles.child__container}>
                  <p>Long Break:</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    defaultValue={minutesLong}
                    className={styles.numberInput}
                    onChange={(e: any) => setMinutesLong(e.target.value)}
                  />
                </div>
                <div className={styles.child__container}>
                  <p>Short Break:</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    defaultValue={minutesShort}
                    className={styles.numberInput}
                    onChange={(e: any) => setMinutesShort(e.target.value)}
                  />
                </div>
              </div>
              <ModalFooter>
                <ButtonSave
                  onClick={() => {
                    setIsmodal(false);
                  }}
                />
              </ModalFooter>
            </ModalView>
          </Modal>
          <Counter minutesPomodoro={minutesPomodoro} minutesLong={minutesLong} minutesShort={minutesShort} />
          <ArrayDB />
        </div>
      </div>
    </div>
  );
};
export default PomodoroView;

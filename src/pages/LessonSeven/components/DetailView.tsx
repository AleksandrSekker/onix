import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import styles from '../scss/DetailCountry.module.scss';
import Error from '../../../components/Error/Error';
import Loader from '../../../components/Loader/Loader';

interface Props {
  darkTheme: string;
  state: never[];
  isError: boolean;
  isLoaded: boolean;
  showAlert: boolean;
  containerVariant: {
    alertInitial: {
      x: number;
      opacity: number;
    };
    alertAnimate: {
      x: number;
      opacity: number;
      transition: {
        duration: number;
      };
    };
    exitAlert: {
      x: number;
      transition: {
        duration: number;
      };
    };
  };
  alertMessage: string;
  closeAlert: () => void;
  onLoad: () => void;
  nativeNameLanguage: string;
  onErrorHandler: () => void;
  populationLanguage: string;
  regionLanguage: string;
  subRegion: string;
  capitalLanguage: string;
  topLevelDomainLanguage: string;
  Currencies: string;
  Languages: string;
  borderCountries: string;
}
interface State {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: [];
  languages: [];
  borders: [];
}

const DetailView = ({
  darkTheme,
  state,
  isError,
  isLoaded,
  showAlert,
  containerVariant,
  alertMessage,
  closeAlert,
  onLoad,
  nativeNameLanguage,
  onErrorHandler,
  populationLanguage,
  regionLanguage,
  subRegion,
  capitalLanguage,
  topLevelDomainLanguage,
  Currencies,
  Languages,
  borderCountries
}: Props) => {
  return (
    <div className={darkTheme}>
      <div className="container">
        {state.map(
          ({
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders
          }: State) => {
            return (
              <div key={uuid()}>
                {isError && <Error />}
                {!isLoaded ? (
                  <Loader />
                ) : (
                  <div key={uuid()} className={styles.display}>
                    <div>
                      <AnimatePresence>
                        {showAlert && (
                          <motion.div
                            variants={containerVariant}
                            initial="alertInitial"
                            animate="alertAnimate"
                            exit="exitAlert"
                            className={styles.alert__container}
                          >
                            <p>{alertMessage}</p>
                            <FontAwesomeIcon icon={faTimes} onClick={closeAlert} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <img src={flag} alt="flag" className={styles.image} onLoad={onLoad} onError={onErrorHandler} />
                    </div>

                    <div className={styles.text__block}>
                      <p className={styles.country__name}>{name}</p>
                      <div className={styles.detail__container}>
                        <div>
                          <p>
                            {nativeNameLanguage}
                            :
                            {nativeName}
                          </p>
                          <p>
                            {populationLanguage}
                            :
                            {population}
                          </p>
                          <p>
                            {regionLanguage}
                            :
                            {region}
                          </p>
                          <p>
                            {subRegion}
                            :
                            {subregion}
                          </p>
                          <p>
                            {capitalLanguage}
                            :
                            {capital}
                          </p>
                        </div>
                        <div>
                          <p>
                            {topLevelDomainLanguage}
                            :
                            {topLevelDomain}
                          </p>
                          <div className={styles.text__flex}>
                            <p>
                              {Currencies}
                              :
                            </p>
                            {currencies.map((currenci: { name: string }) => {
                              return (
                                <p className={styles.text__flex__child} key={uuid()}>
                                  {currenci.name}
                                  ,
                                </p>
                              );
                            })}
                          </div>
                          <div className={styles.text__flex}>
                            <p>
                              {Languages}
                              :
                            </p>
                            {languages.map((language: { name: string }) => {
                              return (
                                <p className={styles.text__flex__child} key={uuid()}>
                                  {language.name}
                                  ,
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className={styles.border__country}>
                        <p>
                          {borderCountries}
                          :
                        </p>
                        {borders.map((border: string) => {
                          return (
                            <button type="button" key={uuid()}>
                              {border}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default DetailView;

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Error from '../../../components/Error/Error';
import Loader from '../../../components/Loader/Loader';
import {
  alertFailedEng,
  alertFailedRu,
  alertFailedUa,
  alertSuccessEng,
  alertSuccessRu,
  alertSuccessUa,
  borderCountriesEng,
  borderCountriesRu,
  borderCountriesUa,
  capitalEng,
  capitalRu,
  capitalUa,
  CurrenciesEng,
  CurrenciesRu,
  CurrenciesUa,
  LanguagesEng,
  LanguagesRu,
  LanguagesUa,
  nativeNameEng,
  nativeNameRu,
  nativeNameUa,
  populationEng,
  populationRu,
  populationUa,
  regionEng,
  regionRu,
  regionUa,
  subRegionEng,
  subRegionRu,
  subRegionUa,
  topLevelDomainEng,
  topLevelDomainRu,
  topLevelDomainUa,
} from '../../../constants/Text';
import useLanguages from '../../../hooks/useLanguages';
import styles from '../scss/DetailCoutnry.module.scss';

interface ParamTypes {
  handle: string;
}
const DetailCoutnry = () => {
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const { handle } = useParams<ParamTypes>();
  const [alertMessage, setAlertMessage] = useState(String);
  const [showAlert, setShowAlert] = useState(true);
  const [isError, setisError] = useState(false);
  const { currentLanguage: alertSuccess } = useLanguages(
    alertSuccessEng,
    alertSuccessRu,
    alertSuccessUa,
  );
  const { currentLanguage: AlertFailed } = useLanguages(
    alertFailedEng,
    alertFailedRu,
    alertFailedUa,
  );
  const onLoad = () => {
    setAlertMessage(alertSuccess);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  const onErrorHandler = () => {
    setAlertMessage(AlertFailed);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${handle}`,
        );
        setState(result.data);
        setIsLoaded(true);
      } catch (error) {
        setisError(true);
      }
    };
    fetchData();
    return () => {
      setIsLoaded(false);
      setShowAlert(false);
    };
  }, [handle]);
  const closeAlert = () => {
    setShowAlert(false);
  };
  const containerVariant = {
    alertInitial: { x: -100, opacity: 0 },
    alertAnimate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exitAlert: { x: -1000, transition: { duration: 1 } },
  };
  const { currentLanguage: nativeNameLanguage } = useLanguages(
    nativeNameEng,
    nativeNameRu,
    nativeNameUa,
  );
  const { currentLanguage: populationLanguage } = useLanguages(
    populationEng,
    populationRu,
    populationUa,
  );
  const { currentLanguage: regionLanguage } = useLanguages(
    regionEng,
    regionRu,
    regionUa,
  );
  const { currentLanguage: subRegion } = useLanguages(
    subRegionEng,
    subRegionRu,
    subRegionUa,
  );
  const { currentLanguage: capitalLanguage } = useLanguages(
    capitalEng,
    capitalRu,
    capitalUa,
  );
  const { currentLanguage: borderCountries } = useLanguages(
    borderCountriesEng,
    borderCountriesRu,
    borderCountriesUa,
  );
  const { currentLanguage: topLevelDomainLanguage } = useLanguages(
    topLevelDomainEng,
    topLevelDomainRu,
    topLevelDomainUa,
  );
  const { currentLanguage: Currencies } = useLanguages(
    CurrenciesEng,
    CurrenciesRu,
    CurrenciesUa,
  );
  const { currentLanguage: Languages } = useLanguages(
    LanguagesEng,
    LanguagesRu,
    LanguagesUa,
  );
  return (
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
          borders,
        }: any) => {
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
                          <FontAwesomeIcon
                            icon={faTimes}
                            onClick={closeAlert}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <img
                      src={flag}
                      alt="flag"
                      className={styles.image}
                      onLoad={onLoad}
                      onError={onErrorHandler}
                    />
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
                          {currencies.map((currenci: any) => {
                            return (
                              <p
                                className={styles.text__flex__child}
                                key={uuid()}
                              >
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
                              <p
                                className={styles.text__flex__child}
                                key={uuid()}
                              >
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
                        return <button type="button" key={uuid()}>{border}</button>;
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        },
      )}
    </div>
  );
};
export default DetailCoutnry;

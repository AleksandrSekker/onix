import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Loader } from "../../Loader";
import styles from "./DetailCoutnry.module.scss";
interface Props {
  currencies: [{ name: string }];
  languages: [{ name: string }];
  borders: [{ border: string }];
  name: string;
  flag: string;
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
}
interface ParamTypes {
  handle: string;
}
export const DetailCoutnry = () => {
  const [state, setState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(Boolean);
  const { handle } = useParams<ParamTypes>();
  const [alertMessage, setAlertMessage] = useState(String);
  const [showAlert, setShowAlert] = useState(true);
  const onLoad = () => {
    setAlertMessage("Image successfully loaded");
  };
  const onErrorHandler = () => {
    console.log("error");
    setAlertMessage("Image don't loaded");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://restcountries.eu/rest/v2/name/${handle}`
        );
        setState(result.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
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
    alertInitial: { x: -1000, opacity: 0 },
    alertAnimate: { x: 0, opacity: 1, transition: { duration: 2 } },
    exitAlert: { x: -1000, transition: { duration: 1 } },
  };
  return (
    <div className='container'>
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
        }: Props) => {
          return (
            <div key={uuid()}>
              {!isLoaded ? (
                <Loader />
              ) : (
                <div key={uuid()} className={styles.display}>
                  <div>
                    <AnimatePresence>
                      {showAlert && (
                        <motion.div
                          variants={containerVariant}
                          initial='alertInitial'
                          animate='alertAnimate'
                          exit='exitAlert'
                          className={styles.alert__container}>
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
                      alt='flag'
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
                          Native name:
                          {nativeName}
                        </p>
                        <p>Population: {population}</p>
                        <p>Region: {region}</p>
                        <p>Sub Region: {subregion}</p>
                        <p>Capital: {capital}</p>
                      </div>
                      <div>
                        <p>Top Level Domain: {topLevelDomain}</p>
                        <div className={styles.text__flex}>
                          <p> Currencies:</p>
                          {currencies.map(currenci => {
                            return (
                              <p
                                className={styles.text__flex__child}
                                key={uuid()}>
                                {currenci.name},
                              </p>
                            );
                          })}
                        </div>
                        <div className={styles.text__flex}>
                          <p>Languages:</p>
                          {languages.map((language: { name: string }) => {
                            return (
                              <p
                                className={styles.text__flex__child}
                                key={uuid()}>
                                {language.name},
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className={styles.border__country}>
                      <p>Border Countries:</p>
                      {borders.map(border => {
                        return <button key={uuid()}>{border}</button>;
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
  );
};

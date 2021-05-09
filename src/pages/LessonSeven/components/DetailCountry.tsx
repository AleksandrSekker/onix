import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useDarkThemeContext from '../../../hooks/useDarkThemeContext';
import styles from '../scss/DetailCountry.module.scss';
import DetailView from './DetailView';

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
  const { t } = useTranslation();
  const onLoad = () => {
    setAlertMessage(t('alertSuccess'));
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  const onErrorHandler = () => {
    setAlertMessage(t('alertFailed'));
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`https://restcountries.eu/rest/v2/name/${handle}`);
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
    exitAlert: { x: -1000, transition: { duration: 1 } }
  };

  const { darkTheme } = useDarkThemeContext(styles);
  return (
    <DetailView
      darkTheme={darkTheme}
      state={state}
      isError={isError}
      isLoaded={isLoaded}
      showAlert={showAlert}
      containerVariant={containerVariant}
      alertMessage={alertMessage}
      closeAlert={closeAlert}
      onLoad={onLoad}
      nativeNameLanguage={t('nativeName')}
      onErrorHandler={onErrorHandler}
      populationLanguage={t('population')}
      regionLanguage={t('region')}
      subRegion={t('subRegion')}
      capitalLanguage={t('capital')}
      topLevelDomainLanguage={t('topLevelDomain')}
      Currencies={t('Currencies')}
      Languages={t('Languages')}
      borderCountries={t('borderCountries')}
    />
  );
};
export default DetailCoutnry;

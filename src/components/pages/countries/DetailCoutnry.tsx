import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
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
export const DetailCoutnry = (props: Props) => {
  const [state, setState] = useState([]);
  const { handle } = useParams<ParamTypes>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://restcountries.eu/rest/v2/name/${handle}`
      );
      setState(result.data);
    };
    fetchData();
  }, [handle]);

  return (
    <div className='container'>
      {state.map((data: Props) => {
        return (
          <div key={uuid()} className={styles.display}>
            <div>
              <img src={data.flag} alt='' className={styles.image} />
            </div>
            <div className={styles.text__block}>
              <p className={styles.country__name}>{data.name}</p>
              <div className={styles.detail__container}>
                <div>
                  <p>
                    Native name:
                    {data.nativeName}
                  </p>
                  <p>Population: {data.population}</p>
                  <p>Region: {data.region}</p>
                  <p>Sub Region: {data.subregion}</p>
                  <p>Capital: {data.capital}</p>
                </div>
                <div>
                  <p>Top Level Domain: {data.topLevelDomain}</p>
                  <div className={styles.text__flex}>
                    <p> Currencies:</p>
                    {data.currencies.map(currenci => {
                      return (
                        <p className={styles.text__flex__child} key={uuid()}>
                          {currenci.name},
                        </p>
                      );
                    })}
                  </div>
                  <div className={styles.text__flex}>
                    <p>Languages:</p>
                    {data.languages.map((language: { name: string }) => {
                      return (
                        <p className={styles.text__flex__child} key={uuid()}>
                          {language.name},
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={styles.border__country}>
                <p>Border Countries:</p>
                {data.borders.map(border => {
                  return <button key={uuid()}>{border}</button>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

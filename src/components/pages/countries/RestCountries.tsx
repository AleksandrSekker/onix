import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import styles from "./RestCountries.module.scss";
interface Props {}
interface State {
  isLoaded: boolean;
  items: [];
  name: string;
  population: string;
  region: string;
  capital: string;
  flag: string;
  apiDirection: string;
}

export default class RestCountries extends Component<Props, State> {
  state: any = { apiDirection: "all" };

  dataCall = async () => {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/${this.state.apiDirection}`
      );
      const json = await response.json();
      this.setState({
        items: json,
        isLoaded: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  componentDidMount() {
    this.dataCall();
  }
  componentWillUnmount() {
    this.setState({ isLoaded: false, items: [] });
  }
  componentDidUpdate(prevProps: Object[], prevState: { apiDirection: string }) {
    if (prevState.apiDirection !== this.state.apiDirection) {
      this.dataCall();
    }
  }
  submitForm = (e: any) => {
    e.preventDefault();
  };

  render() {
    const { isLoaded, items, inputString } = this.state;

    return (
      <div className='container'>
        <div className={styles.inputContainer}>
          <p>
            <FontAwesomeIcon icon={faSearch} />
          </p>
          <input
            type='text'
            value={inputString}
            className={styles.input__field}
            placeholder='Search for a country'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.setState({ apiDirection: `name/${e.target.value}` })
            }
          />
        </div>

        {!isLoaded ? (
          <div className={styles.loader__container}>
            <div className={styles.loader}></div>
          </div>
        ) : (
          <div className={styles.card}>
            {items.map(({ name, population, region, capital, flag }: State) => (
              <Link to={`/${name}`} className={styles.link} key={uuid()}>
                <motion.div
                  className={styles.cards}
                  whileHover={{
                    scale: 0.8,
                    rotate: 360,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 1.1 }}>
                  <img src={flag} alt='flag' />
                  <p>{name}</p>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Capital: {capital}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  detailcall: string;
}

export default class RestCountries extends Component<Props, State> {
  state: any = { apiDirection: "all" };

  dataCall = async () => {
    await fetch(`https://restcountries.eu/rest/v2/${this.state.apiDirection}`)
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      })
      .catch(error => {
        console.error(error);
      });
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
  detailPageHandler = () => {};
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
          <div>Loading...</div>
        ) : (
          <div className={styles.card}>
            {items.map(({ name, population, region, capital, flag }: State) => (
              <Link to={`/${name}`} className={styles.link} key={uuid()}>
                <div className={styles.cards} onClick={this.detailPageHandler}>
                  <img src={flag} alt='' />
                  <p>{name}</p>
                  <p>Population: {population}</p>
                  <p>Region: {region}</p>
                  <p>Capital: {capital}</p>
                  {/* <Link to={`/${name}`}> */}
                  {/* <button>Detail</button> */}
                  {/* </Link> */}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
}

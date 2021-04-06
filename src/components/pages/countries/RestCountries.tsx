import React, { Component } from "react";
import { Loader } from "../../Loader";
import { CardCountry } from "./CardCountry";
import { SearchCountry } from "./SearchCountry";
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
  submitForm = (e: React.ChangeEvent<HTMLInputElement>): void =>
    e.preventDefault();

  onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ apiDirection: `name/${e.target.value}` });

  render() {
    const { isLoaded, items, inputString } = this.state;

    return (
      <div className='container'>
        <SearchCountry
          inputString={inputString}
          onChangeInputHandler={this.onChangeInputHandler}
        />
        {!isLoaded ? <Loader /> : <CardCountry items={items} />}
      </div>
    );
  }
}

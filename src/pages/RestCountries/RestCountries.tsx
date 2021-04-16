import React, { Component } from "react";
import { Loader } from "../../components/Loader/Loader";
import { CardCountry } from "./CardCountry";
import { SearchCountry } from "./components/SearchCountry";
import { Error } from "../../components/Error/Error";
import { connect } from "react-redux";
import style from "./scss/RestCountries.module.scss";
import { switching } from "../../redux/checkedSlice";
import { RootState } from "../../app/store";
// interface Props {

// }
interface State {
  isLoaded?: boolean;
  items?: any;
  name?: string;
  population?: string;
  region?: string;
  capital?: string;
  flag?: string;
  apiDirection?: string;
  inputString?: any;
  isError?: boolean;
  switching?: () => void;
  checked?: boolean;
}

class RestCountries extends Component<State> {
  state: State = { apiDirection: "all" };

  dataCall = async () => {
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/${this.state.apiDirection}`
      );

      const json = await response.json();
      response.ok
        ? this.setState({
            items: json,
            isLoaded: true,
            isError: false,
          })
        : this.setState({
            isError: true,
          });
    } catch (error) {
      console.error(error);
      this.setState({
        isError: true,
      });
    }
  };
  componentDidMount() {
    this.dataCall();
    // first call
  }
  componentWillUnmount() {
    this.setState({ isLoaded: false, items: [] });
    // unsubscirbe
  }
  componentDidUpdate(prevProps: any, prevState: { apiDirection: string }) {
    if (
      prevState.apiDirection !== this.state.apiDirection &&
      this.state.apiDirection !== "name/"
    ) {
      this.dataCall();
    }
    // update call
  }
  submitForm = (e: React.ChangeEvent<HTMLInputElement>): void =>
    e.preventDefault();

  onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ apiDirection: `name/${e.target.value}` });
  variantCard = {
    cardHover: {
      scale: 0.8,
      rotate: 360,
      transition: { duration: 1 },
    },
  };

  render() {
    const { isLoaded, items, inputString } = this.state;

    return (
      <div className={this.props.checked ? style.dark : ""}>
        <div className='container'>
          <SearchCountry
            inputString={inputString}
            onChangeInputHandler={this.onChangeInputHandler}
          />

          {!isLoaded ? (
            <Loader />
          ) : this.state.isError ? (
            <Error />
          ) : (
            <CardCountry items={items} variantCard={this.variantCard} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  checked: state.checked.value,
});
export default connect(mapStateToProps, { switching })(RestCountries);

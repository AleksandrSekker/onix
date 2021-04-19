import React, { Component } from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import Loader from '../../components/Loader/Loader.tsx';
// @ts-ignore
import { CardCountry } from './CardCountry.tsx';
// @ts-ignore
import SearchCountry from './components/SearchCountry.tsx';
// @ts-ignore
import Error from '../../components/Error/Error.tsx';
// @ts-ignore
import style from './scss/RestCountries.module.scss';
// @ts-ignore
import { switching } from '../../redux/checkedSlice.ts';
// @ts-ignore
import { RootState } from '../../app/store.ts';
// @ts-ignore
import { ThemeContext } from '../../App.tsx';

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
  state: State = { apiDirection: 'all' };

  variantCard = {
    cardHover: {
      scale: 0.8,
      rotate: 360,
      transition: { duration: 1 },
    },
  };

  componentDidMount() {
    this.dataCall();
    // first call
  }

  componentDidUpdate(prevProps: any, prevState: { apiDirection: string }) {
    const { apiDirection } = this.state;
    if (prevState.apiDirection !== apiDirection && apiDirection !== 'name/') {
      this.dataCall();
    }
    // update call
  }

  dataCall = async () => {
    const { apiDirection } = this.state;
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/${apiDirection}`,
      );
      const json = await response.json();
      if (response.ok) {
        this.setState({
          items: json,
          isLoaded: true,
          isError: false,
        });
      } else {
        this.setState({
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        isError: true,
      });
    }
  };

  submitForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
  };

  onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ apiDirection: `name/${e.target.value}` });
  };

  render() {
    const { 
      isLoaded, items, inputString, isError 
    } = this.state;

    return (
      <ThemeContext.Consumer>
        {(darkTheme: boolean) => (
          <div className={darkTheme ? style.dark : ''}>
            <div className="container">
              <SearchCountry
                inputString={inputString}
                onChangeInputHandler={this.onChangeInputHandler}
              />
              {isError && <Error />}
              {!isLoaded ? (
                <Loader />
              ) : (
                <CardCountry items={items} variantCard={this.variantCard} />
              )}
            </div>
          </div>
        )}
        
      </ThemeContext.Consumer>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  checked: state.checked.value,
});
export default connect(mapStateToProps, { switching })(RestCountries);

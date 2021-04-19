import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../scss/RestCountries.module.scss';

interface Props {
  inputString: string;
  onChangeInputHandler: any;
}

const SearchCountry = ({ inputString, onChangeInputHandler }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <p>
        <FontAwesomeIcon icon={faSearch} />
      </p>
      <input
        type="text"
        value={inputString}
        className={styles.input__field}
        placeholder="Search for a country"
        onChange={onChangeInputHandler}
      />
    </div>
  );
};
export default SearchCountry;

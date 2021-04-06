import React from "react";
import styles from "./RestCountries.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface Props {
  inputString: string;
  onChangeInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchCountry = ({ inputString, onChangeInputHandler }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <p>
        <FontAwesomeIcon icon={faSearch} />
      </p>
      <input
        type='text'
        value={inputString}
        className={styles.input__field}
        placeholder='Search for a country'
        onChange={onChangeInputHandler}
      />
    </div>
  );
};

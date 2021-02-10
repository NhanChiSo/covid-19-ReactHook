import React, { useState, useEffect } from "react";

import { fetchCountries } from "../../api";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => props.handleCountry(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

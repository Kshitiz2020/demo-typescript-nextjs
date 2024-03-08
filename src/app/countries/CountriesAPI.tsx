"use client";
import Card from "react-bootstrap/Card";

import axios from "axios";
import { useEffect, useState } from "react";

interface CountryCapital {
  name: CountryInfo;
  capital: string;
  languages: string;
}

interface LanguageDetails {
  official: string;
  common: string;
}

interface NativeNames {
  [key: string]: LanguageDetails;
}

interface CountryInfo {
  common: string;
  official: string;
  nativeName: NativeNames;
}
const CountriesAPI = () => {
  const [countries, setCountries] = useState<CountryCapital[]>([]);

  const getCountriesInfo = async () => {
    const response = await axios.get(
      //"https://restcountries.com/v3.1/all?fields=capital"
      "https://restcountries.com/v3.1/all?fields=name,capital"
    );
    console.log(response);
    if (response.data) {
      setCountries(response.data);
    }
  };

  useEffect(() => {
    getCountriesInfo();
  }, []);

  return (
    <>
      <div>CountriesAPI will be here</div>
      {countries.map((country, index: number) => (
        <Card key={index}>
          <h1>{country.name.official}</h1>
          <h2>{country.capital}</h2>
          <p>{country.name.common}</p>
          <p>{}</p>
        </Card>
      ))}
    </>
  );
};
export default CountriesAPI;

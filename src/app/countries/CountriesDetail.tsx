import Image from "next/image";

interface IProps {
  countries: Country[];
}
interface Country {
  name: string;
  capital: string;
  population: number;
  area: number;
  flag: string;
}

//   type PopulationDetails = {
//     population: number;
//     region: string;
//     languages: string;
//     borders: string;
//   };

const CountriesDetails = (props: IProps) => {
  return (
    <>
      <h1>Country Detail</h1>
      {props.countries.map((country: Country, index: number) => {
        <div key={index}>
          <h2>{country.name}</h2>
          <p>Capital: {country.capital}</p>
          <p>Population:{country.population}</p>
          <p>Area:{country.area}</p>
          <Image src={country.flag} alt={country.name} width="300" />
        </div>;
      })}
    </>
  );
};

export default CountriesDetails;

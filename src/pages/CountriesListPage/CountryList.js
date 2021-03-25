import CountryCard from "../../components/CountryCard/CountryCard";
import { StyledCountryList } from "../CountriesListPage/StyledCountryList";
import { DataContext, useData } from "../../context/DataContext";

const CountryList = () => {
  const {
    state: { countries, filteredCountries },
  } = useData(DataContext);

  const displayCountries =
    filteredCountries === null ? countries : filteredCountries;

  return (
    <StyledCountryList>
      {displayCountries.length === 0
        ? "no matches"
        : displayCountries.map((country) => (
            <CountryCard details={country} key={country.alpha3Code} />
          ))}
    </StyledCountryList>
  );
};

export default CountryList;
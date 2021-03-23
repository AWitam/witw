import styled from "styled-components";
import CountryCard from "./CountryCard";
import { device } from "../themes/mediaQueries";
import { DataContext, useData } from "../context/DataContext";

const StyledCountryList = styled.section`
  display: grid;

  margin: 0 auto;

  @media ${device.mobileM} {
    padding: 0 3rem;
    grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
    column-gap: 1rem;
  }

  @media ${device.tablet} {
    column-gap: 3.5rem;
  }

  @media ${device.laptopL} {
    padding: 0 5rem;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4.625rem;
  }

  @media ${device.dektop} {
    grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
  }
`;

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

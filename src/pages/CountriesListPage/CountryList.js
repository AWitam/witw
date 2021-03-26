import { StyledCountryList } from "../CountriesListPage/StyledCountryList";
import { DataContext, useData } from "../../context/DataContext";
import { lazy, Suspense } from "react";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

const CountryCard = lazy(() =>
  import("../../components/CountryCard/CountryCard")
);

const CountryList = () => {
  const {
    state: { countries, filteredCountries, loading, error },
  } = useData(DataContext);

  const displayCountries =
    filteredCountries === null ? countries : filteredCountries;

  return (
    <StyledCountryList>
      {error && <Error />}
      <Suspense fallback={<Spinner />}>
        {!loading && displayCountries.length === 0
          ? "No matches in this region! Please try different search query."
          : displayCountries.map((country) => (
              <CountryCard details={country} key={country.alpha3Code} />
            ))}
      </Suspense>
    </StyledCountryList>
  );
};

export default CountryList;

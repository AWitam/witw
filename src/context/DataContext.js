import { createContext, useContext, useReducer, useMemo } from "react";
import { countries } from "./mock-data";

export const DataContext = createContext();

const initialState = {
  countries: countries,
  filteredCountries: null,
  currentRegion: "",
  regions: [],
  searchQuery: "",
};

const loadRegions = (data) => [
  ...new Set(data.map((country) => country.region)),
];

const filterByRegion = (data, region) => {
  return region === "All"
    ? data.countries
    : data.countries.filter((country) => country.region === region);
};

const filterByName = (data, name) => {
  const countriesToFilter = filterByRegion(data, data.currentRegion);

  return countriesToFilter.filter((country) =>
    country.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]|\s/g, "")
      .toLowerCase()
      .includes(name.toLowerCase())
  );
};

const contextReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_REGIONS":
      return {
        ...state,
        regions: loadRegions(state.countries),
      };
    case "FILTER_BY_REGION":
      return {
        ...state,
        filteredCountries: filterByRegion(state, action.payload),
        currentRegion: action.payload,
      };
    case "FILTER_BY_NAME":
      return {
        ...state,
        filteredCountries: filterByName(state, action.payload),
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

/* Context-reducer patttern from From Kent C. Dodds 
https://kentcdodds.com/blog/how-to-use-react-context-effectively/
*/

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataContextProvider`);
  }

  const [state, dispatch] = context;

  const getCountryDetails = (numCode) => {
    return countries.find((country) => Number(country.numericCode) === numCode);
  };

  return {
    state,
    dispatch,
    getCountryDetails,
  };
};

export default DataContextProvider;

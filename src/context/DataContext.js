import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";
import { contextReducer, initialState } from "./contextReducer";
// import { countries } from "./mock-data";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_DATA", payload: res }));
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataContextProvider`);
  }

  const [state, dispatch] = context;

  const getCountryDetails = (numCode) => {
    return state.countries.find(
      (country) => Number(country.numericCode) === numCode
    );
  };

  const getBorderCountry = (alphaCode) => {
    const match = state.countries.find(
      (country) => country.alpha3Code === alphaCode
    );
    return match;
  };

  return {
    state,
    dispatch,
    getCountryDetails,
    getBorderCountry,
  };
};

export default DataContextProvider;

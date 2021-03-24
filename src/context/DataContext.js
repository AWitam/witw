import { createContext, useContext, useReducer, useMemo } from "react";
import { contextReducer, initialState } from "./contextReducer";
import { countries } from "./mock-data";

export const DataContext = createContext();

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

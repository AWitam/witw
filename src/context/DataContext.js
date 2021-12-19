import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";
import { contextReducer, initialState } from "./contextReducer";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FETCH_DATA", payload: res }))
      .catch((error) => dispatch({ type: "HANDLE_ERROR", payload: error }));
  }, []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataContextProvider`);
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch,
  };
};

export default DataContextProvider;

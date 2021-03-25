// import { countries } from "./mock-data";
import { loadRegions, filterByRegion, filterByName } from "./actions";

export const initialState = {
  loading: false,
  countries: [],
  filteredCountries: null,
  currentRegion: "",
  regions: [],
  searchQuery: "",
};

export const contextReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_DATA":
      return {
        ...state,
        countries: action.payload,
        regions: loadRegions(action.payload),
        loading: false,
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

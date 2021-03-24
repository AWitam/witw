import { countries } from "./mock-data";
import { loadRegions, filterByRegion, filterByName } from "./actions";

export const initialState = {
  countries: countries,
  filteredCountries: null,
  currentRegion: "",
  regions: [],
  searchQuery: "",
};

export const contextReducer = (state, action) => {
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

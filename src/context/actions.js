import { normalizeName } from "../utils";

export const loadRegions = (data) => [
  ...new Set(data.map((country) => country.region)),
];

export const filterByRegion = (data, region) => {
  return region === "All" || region === ""
    ? data.countries
    : data.countries.filter((country) => country.region === region);
};

export const filterByName = (data, name) => {
  const countriesToFilter = filterByRegion(data, data.currentRegion);

  return countriesToFilter.filter((country) =>
    normalizeName(country.name).includes(name.toLowerCase())
  );
};

export const findCountryByAlpha3Code = (data, alphaCode) => {
  const results = data.countries.filter(
    (country) => country.alpha3Code === alphaCode
  );
  return results;
};

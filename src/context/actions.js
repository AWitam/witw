import { normalizeName } from "../utils";

export const loadRegions = (data) => {
  //  Theere are two objects coming from API without any specfic region assigned: "BVT" & "HMD". Both located in Antarctic area, so I added them to 'Polar' region that already exists as a region category

  return [
    ...new Set(
      data.map((country) => (country.region ? country.region : "Polar"))
    ),
  ].sort();
};

export const filterByRegion = (data, region) => {
  if (region === "All" || region === "") {
    return data.countries;
  } else if (region === "Polar") {
    // returns two exepctions described below as well as regular regions that belongs to Polar region
    return data.countries
      .filter((country) => country.region === region)
      .concat(data.countries.filter((country) => country.region === ""));
  } else {
    return data.countries.filter((country) => country.region === region);
  }
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

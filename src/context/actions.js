export const loadRegions = (data) => [
  ...new Set(data.map((country) => country.region)),
];

export const filterByRegion = (data, region) => {
  return region === "All"
    ? data.countries
    : data.countries.filter((country) => country.region === region);
};

export const filterByName = (data, name) => {
  const countriesToFilter = filterByRegion(data, data.currentRegion);

  return countriesToFilter.filter((country) =>
    country.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]|\s/g, "")
      .toLowerCase()
      .includes(name.toLowerCase())
  );
};

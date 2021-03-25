export const normalizeName = (name) =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]|\s/g, "")
    .toLowerCase();

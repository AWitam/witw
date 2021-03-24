import {
  StyledCountryCard,
  StyledCountryDetails,
  StyledLink,
} from "./StyledCountryCard";

const CountryCard = ({ details }) => {
  const { name, population, region, capital, flag, numericCode } = details;

  const namePath = name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]|\s/g, "")
    .toLowerCase();

  return (
    <StyledLink
      to={{ pathname: `/country/${namePath}`, state: Number(numericCode) }}
    >
      <StyledCountryCard>
        <div className="flag">
          <img src={flag} alt={name + " flag"} />
        </div>

        <StyledCountryDetails>
          <h3>{name.length > 35 ? name.slice(0, 35) + " ..." : name}</h3>
          <p>
            <span>Population: </span>
            {new Intl.NumberFormat().format(population)}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </StyledCountryDetails>
      </StyledCountryCard>
    </StyledLink>
  );
};

export default CountryCard;

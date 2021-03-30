import { StyledCountryCard, StyledCountryDetails } from "./StyledCountryCard";
import { StyledLink } from "../StyledElements/StyledLink";
import { normalizeName } from "../../utils";

const CountryCard = ({ details }) => {
  const { name, population, region, capital, flag } = details;

  const namePath = normalizeName(name);

  return (
    <StyledCountryCard>
      <StyledLink to={{ pathname: `/country/${namePath}`, state: details }}>
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
            {region === "" ? "Polar" : region}
          </p>
          <p>
            <span>Capital: </span>
            {capital === "" ? "-" : capital}
          </p>
        </StyledCountryDetails>
      </StyledLink>
    </StyledCountryCard>
  );
};

export default CountryCard;

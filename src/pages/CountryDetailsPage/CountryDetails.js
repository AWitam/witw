import {
  StyledCountryDetails,
  StyledDetails,
  FlagContainer,
  BackButton,
} from "./StyledCountryDetails";
import { ReactComponent as ArrowBack } from "../../assets/icon-arrow-back.svg";
import { DataContext, useData } from "../../context/DataContext";

const CountryDetails = ({ location }) => {
  const { getCountryDetails } = useData(DataContext);
  const details = getCountryDetails(location.state);

  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = details;

  return (
    <StyledCountryDetails>
      <BackButton to="/">
        <ArrowBack />
        Back
      </BackButton>{" "}
      {details && (
        <StyledDetails>
          <FlagContainer flag={flag} alt={`The flag of ${name}`} />
          <h2>{name}</h2>
          <div>
            <h3>Native name:&nbsp;</h3>
            <p> {nativeName}</p>
          </div>
          <div>
            <h3>Population:&nbsp; </h3>
            <p> {new Intl.NumberFormat().format(population)}</p>
          </div>
          <div>
            <h3>Region:&nbsp; </h3>
            <p>{region}</p>
          </div>
          <div>
            <h3>Sub Region:&nbsp; </h3>
            <p>{subregion}</p>
          </div>
          <div>
            <h3>Capital:&nbsp; </h3>
            <p> {capital}</p>
          </div>
          <br></br>
          <div>
            <h3>Top Level Domain:&nbsp;</h3>
            <p> {topLevelDomain.map((domain) => domain)}</p>
          </div>
          <div>
            <h3>Currencies:&nbsp;</h3>
            <p>
              {currencies
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(", ")}
            </p>
          </div>
          <div>
            <h3>
              {languages.length === 1 ? `Langusage:` : `Langusages:`}&nbsp;
            </h3>
            <p>{languages.map((lang) => lang.name).join(", ")}</p>
          </div>
        </StyledDetails>
      )}
    </StyledCountryDetails>
  );
};

export default CountryDetails;

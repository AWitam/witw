import {
  StyledCountryDetails,
  StyledDetails,
  FlagContainer,
  BackButton,
  StyledBorderCountries,
} from "./StyledCountryDetails";
import { StyledLink } from "../../components/StyledElements/StyledLink";
import { StyledButton } from "../../components/StyledElements/StyledButton";
import { ReactComponent as ArrowBack } from "../../assets/icon-arrow-back.svg";
import { DataContext, useData } from "../../context/DataContext";
import { normalizeName } from "../../utils";

const CountryDetails = ({ location }) => {
  const { getCountryDetails, getBorderCountry } = useData(DataContext);
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
    borders,
  } = details;

  // dont forget to remove undefined filter
  const borderCountries = borders
    .map((borderCode) => getBorderCountry(borderCode))
    .filter((el) => el !== undefined);

  return (
    <StyledCountryDetails>
      <BackButton to="/">
        <ArrowBack />
        Back
      </BackButton>{" "}
      {details && (
        <StyledDetails>
          <FlagContainer flag={flag} alt={`The flag of ${name}`} />

          <div className="info-container">
            <h2>{name}</h2>
            <div className="country-info">
              <div>
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
                  <p>{region === "" ? "Polar" : region}</p>
                </div>
                <div>
                  <h3>Sub Region:&nbsp; </h3>
                  <p>{subregion === "" ? "-" : subregion}</p>
                </div>
                <div>
                  <h3>Capital:&nbsp; </h3>
                  <p> {capital === "" ? "-" : capital}</p>
                </div>
                <br></br>
              </div>
              <div>
                <div>
                  <h3>Top Level Domain:&nbsp;</h3>
                  <p> {topLevelDomain.map((domain) => domain)}</p>
                </div>
                <div>
                  <h3>Currencies:&nbsp;</h3>
                  <p>
                    {currencies
                      .map(
                        (currency) => `${currency.name} (${currency.symbol})`
                      )
                      .join(", ")}
                  </p>
                </div>
                <div>
                  <h3>
                    {languages.length === 1 ? `Language:` : `Languages:`}
                    &nbsp;
                  </h3>
                  <p>{languages.map((lang) => lang.name).join(", ")}</p>
                </div>

                <br></br>
              </div>
            </div>

            <div>
              <StyledBorderCountries>
                <h4>Border Countries:</h4>
                {borderCountries.length === 0
                  ? "No bordering countries"
                  : borderCountries.map((borderCountry) => (
                      <StyledLink
                        key={borderCountry.name}
                        to={{
                          pathname: `${normalizeName(borderCountry.name)}`,
                          state: Number(borderCountry.numericCode),
                        }}
                      >
                        <StyledButton>{borderCountry.name}</StyledButton>
                      </StyledLink>
                    ))}
              </StyledBorderCountries>
            </div>
          </div>
        </StyledDetails>
      )}
    </StyledCountryDetails>
  );
};

export default CountryDetails;

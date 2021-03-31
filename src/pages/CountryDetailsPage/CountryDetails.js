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
import { useData, DataContext } from "../../context/DataContext";
import { normalizeName } from "../../utils";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const CountryDetails = () => {
  const details = useLocation();
  const {
    state: { countries },
  } = useData(DataContext);
  const mainRef = useRef(null);

  useEffect(() => {
    mainRef.current.focus();
  }, []);

  document.addEventListener(
    "focusin",
    function () {
      console.log("focused: ", document.activeElement);
    },
    true
  );
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
  } = details.state;

  const getBorderCountry = (alphaCode) => {
    const match = countries.find((country) => country.alpha3Code === alphaCode);
    return match;
  };

  const borderCountries =
    countries && borders.map((borderCode) => getBorderCountry(borderCode));

  return (
    <StyledCountryDetails>
      <StyledLink tabIndex="1" to="/">
        <BackButton>
          <ArrowBack />
          Back
        </BackButton>
      </StyledLink>{" "}
      {details && (
        <StyledDetails ref={mainRef}>
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
              </div>
            </div>
            <br></br>
            <br></br>
            <div>
              <StyledBorderCountries>
                <h4>Border Countries:</h4>
                {borderCountries.length === 0
                  ? "No bordering countries"
                  : borderCountries.map((borderCountry) => (
                      <StyledLink
                        tabIndex="1"
                        key={borderCountry.name}
                        to={{
                          pathname: `${normalizeName(borderCountry.name)}`,
                          state: borderCountry,
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

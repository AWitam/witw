import styled from "styled-components";
import { device } from "../themes/mediaQueries";
import { ReactComponent as ArrowBack } from "../assets/icon-arrow-back.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataContext, useData } from "../context/DataContext";

const StyledCountryDetails = styled.section`
  padding: 0 1.75rem;
  margin: 2.5rem auto 0 auto;

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.laptopL} {
    padding: 0 5rem;
  }
`;

const BackButton = styled(Link)`
  background-color: ${({ theme }) => theme.elements};
  padding: 0.5rem 1.25rem;
  box-shadow: 0px 10px 15px ${({ theme }) => theme.shadow};
  border-radius: 0.125rem;
  font-size: 0.875rem;
  color: inherit;
  text-decoration: none;

  svg {
    max-height: 0.5rem;
    fill: ${({ theme }) => theme.text};
    margin-right: 0.4rem;
  }

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0.7rem 2rem;
  }
`;

const FlagContainer = styled.div`
  margin: 4rem auto 3rem auto;
  background-image: url(${({ flag }) => flag});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 20rem;
  height: 14.375rem;
`;

const StyledDetails = styled.div`
  margin: 0 auto;

  h2 {
    font-size: 1.375rem;
  }

  > div {
    display: flex;
    align-items: center;

    h3 {
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0.5rem 0;
    }

    p {
      margin: 0.5rem 0;
    }
  }
`;

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

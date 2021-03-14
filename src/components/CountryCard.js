import styled from "styled-components";
import { device } from "../themes/mediaQueries";

const StyledCountryCard = styled.div`
  background-color: ${({ theme }) => theme.elements};
  margin: 2rem auto;
  border-radius: 0.3rem;
  width: 16.5rem;
  height: 21rem;
  box-shadow: 0px 10px 15px ${({ theme }) => theme.shadow};

  .flag {
    width: 100%;
    height: 10rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media ${device.tablet} {
    justify-self: stretch;
    width: 100%;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

const StyledCountryDetails = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.125rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 0.875rem;
    margin: 0.6rem 0;

    > span {
      font-weight: 600;
    }
  }
`;

const CountryCard = ({ name, population, region, capital, flag }) => {
  return (
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
  );
};

export default CountryCard;

import styled from "styled-components";
import { device } from "../../themes/mediaQueries";
import { StyledLink } from "../../components/StyledElements/StyledLink";

export const StyledCountryDetails = styled.section`
  padding: 0 1.75rem;
  margin: 2.5rem auto 0 auto;

  @media ${device.tablet} {
    padding: 0 3rem;
  }

  @media ${device.laptopL} {
    padding: 0 5rem;
  }
`;

export const BackButton = styled(StyledLink)`
  background-color: ${({ theme }) => theme.elements};
  padding: 0.5rem 1.25rem;
  box-shadow: 0px 10px 15px ${({ theme }) => theme.shadow};
  border-radius: 0.125rem;
  font-size: 0.875rem;

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

export const FlagContainer = styled.div`
  margin: 4rem auto 3rem auto;
  background-image: url(${({ flag }) => flag});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 20rem;
  height: 14.375rem;

  @media ${device.tablet} {
    width: 25rem;
    height: 16rem;
  }

  @media ${device.laptop} {
    width: 28rem;
    height: 20rem;
  }

  @media ${device.laptopL} {
    margin: 0;
    width: 35rem;
    height: 25rem;
  }
`;

export const StyledDetails = styled.div`
  margin: 0 auto;

  h2 {
    font-size: 1.375rem;
    margin-top: 0;
  }

  > div {
    align-items: center;

    h3 {
      font-size: 0.875rem;
      font-weight: 600;
      margin: 0.5rem 0;
      display: inline-block;

      @media ${device.laptop} {
        font-size: 1rem;
      }
    }

    p {
      font-size: 0.875rem;
      display: inline-block;
      margin: 0.5rem 0;
    }
  }

  @media ${device.mobileL} {
    .info-container {
      margin: 0 auto;
      max-width: 80%;
    }
    .country-info {
      display: flex;
      gap: 4rem;
    }
  }

  @media ${device.tablet} {
    .country-info {
      display: flex;
      gap: 5.5rem;
    }
  }

  @media ${device.laptop} {
    display: flex;
    margin-top: 4rem;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;

    .info-container {
      max-width: 45%;
    }
  }

  @media ${device.laptopL} {
    .info-container {
      max-width: 37.5rem;
    }
  }
`;

export const StyledBorderCountries = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  align-items: center;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    display: block;
    width: 100%;
    margin: 0;

    @media ${device.laptop} {
      display: inline-block;
      width: auto;
    }
  }

  button {
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme.elements};
  }
`;

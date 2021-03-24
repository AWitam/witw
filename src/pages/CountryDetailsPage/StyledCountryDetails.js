import styled from "styled-components";
import { device } from "../../themes/mediaQueries";
import { Link } from "react-router-dom";

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

export const BackButton = styled(Link)`
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

export const FlagContainer = styled.div`
  margin: 4rem auto 3rem auto;
  background-image: url(${({ flag }) => flag});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 20rem;
  height: 14.375rem;
`;

export const StyledDetails = styled.div`
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

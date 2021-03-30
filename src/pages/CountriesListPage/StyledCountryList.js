import styled from "styled-components";
import { device } from "../../themes/mediaQueries";

export const StyledCountryList = styled.section`
  display: grid;
  margin: 0 auto;

  a {
    :focus {
      outline: none;
    }
  }

  @media ${device.mobileM} {
    padding: 0 3rem;
    grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
    column-gap: 1rem;
  }

  @media ${device.tablet} {
    column-gap: 2.5rem;
  }

  @media ${device.laptop} {
    column-gap: 4.625rem;
  }

  @media ${device.laptopL} {
    padding: 0 5rem;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.dektop} {
    grid-template-columns: repeat(auto-fit, minmax(16.5rem, 1fr));
  }
`;

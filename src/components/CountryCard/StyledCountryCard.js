import styled from "styled-components";
import { device } from "../../themes/mediaQueries";

export const StyledCountryCard = styled.div`
  background-color: ${({ theme }) => theme.elements};
  margin: 2rem auto;
  border-radius: 0.3rem;
  width: 16.5rem;
  height: 21rem;
  box-shadow: 0px 10px 15px ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

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

  :focus-within {
    outline: auto;
  }

  :hover {
    transform: scale(1.05);
  }

  @media ${device.tablet} {
    justify-self: stretch;
    max-width: 20rem;
  }

  @media ${device.laptop} {
    width: 100%;
    margin: 0 auto 4.75rem auto;
  }
`;

export const StyledCountryDetails = styled.div`
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

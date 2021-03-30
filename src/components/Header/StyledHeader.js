import styled from "styled-components";
import { device } from "../../themes/mediaQueries";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  padding: 0 1rem;
  background: ${({ theme }) => theme.elements};
  box-shadow: 0 5px 10px ${({ theme }) => theme.shadow};

  h1 {
    font-size: 0.875rem;
    :focus-within {
      outline-color: ${({ theme }) => theme.input};
    }
  }

  @media ${device.tablet} {
    padding: 0 3rem;
    h1 {
      font-size: 1.25rem;
    }
  }

  @media ${device.laptopL} {
    padding: 0 5rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const StyledTitle = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

import styled from "styled-components";
import { StyledButton } from "../StyledElements/StyledButton";
import { device } from "../../themes/mediaQueries";

export const StyledThemeSwitcher = styled(StyledButton)`
  font-weight: 600;
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  font-size: 0.75rem;

  svg {
    max-height: 1rem;
    margin-right: 0.6rem;
  }

  :focus {
    outline-color: ${({ theme }) => theme.input};
  }

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

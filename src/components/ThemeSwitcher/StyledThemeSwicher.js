import styled from "styled-components";
import { StyledButton } from "../StyledButton/StyledButton";

export const StyledThemeSwitcher = styled(StyledButton)`
  font-weight: 600;

  svg {
    max-height: 1rem;
    margin-right: 0.6rem;
  }

  :focus {
    outline-color: ${({ theme }) => theme.input};
  }
`;

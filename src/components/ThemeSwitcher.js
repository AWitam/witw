import { Fragment } from "react";
import styled from "styled-components";
import { ReactComponent as Moon } from "../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../assets/icon-sun.svg";
import StyledButton from "./StyledButton";

const StyledThemeSwitcher = styled(StyledButton)`
  font-weight: 600;

  svg {
    max-height: 1rem;
    margin-right: 0.6rem;
  }

  :focus {
    outline-color: ${({ theme }) => theme.input};
  }
`;

const ThemeSwitcher = ({ theme, themeToggle }) => {
  return (
    <StyledThemeSwitcher onClick={themeToggle}>
      {theme === "light" ? (
        <Fragment>
          <Moon /> Dark Mode
        </Fragment>
      ) : (
        <Fragment>
          <Sun /> Light Mode
        </Fragment>
      )}
    </StyledThemeSwitcher>
  );
};

export default ThemeSwitcher;

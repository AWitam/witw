import { StyledThemeSwitcher } from "./StyledThemeSwicher";
import { Fragment } from "react";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";

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

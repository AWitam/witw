import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import InputsContainer from "./components/InputsContainer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/globalStyles";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { lightTheme, darkTheme } from "./themes/themes";
import useTheme from "./hooks/useTheme";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";
import { DataContext, useData } from "./context/DataContext";
import { useEffect } from "react";

function App() {
  const [theme, themeToggler] = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  const { dispatch } = useData(DataContext);

  useEffect(() => {
    dispatch({ type: "LOAD_REGIONS" });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <Header>
          <ThemeSwitcher
            themeToggle={themeToggler}
            theme={theme}
          ></ThemeSwitcher>
        </Header>

        <Route exact path="/">
          <InputsContainer />
          <CountryList
          // countries={countries}
          // currentCountry={currentCountry}
          />
        </Route>
        <Route
          exact
          path="/country/:name"
          component={CountryDetails}
          // render={(routeProps) => (
          //   <CountryDetails
          //     getCountryDetails={handleCountryDetails}
          //     {...routeProps}
          //   />
          // )}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

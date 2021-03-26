import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InputsContainer from "./components/Filters/InputsContainer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/globalStyles";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { lightTheme, darkTheme } from "./themes/themes";
import useTheme from "./hooks/useTheme";
import CountryList from "./pages/CountriesListPage/CountryList";
import CountryDetails from "./pages/CountryDetailsPage/CountryDetails";

function App() {
  const [theme, themeToggler] = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

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
          <CountryList />
        </Route>
        <Route exact path="/country/:name" component={CountryDetails} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

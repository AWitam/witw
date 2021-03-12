import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/globalStyles";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { lightTheme, darkTheme } from "./themes/themes";
import useTheme from "./hooks/useTheme";

function App() {
  const [theme, themeToggler] = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header>
        <ThemeSwitcher themeToggle={themeToggler} theme={theme}></ThemeSwitcher>
      </Header>
    </ThemeProvider>
  );
}

export default App;

import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  body {
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: background-color 0.3s ease-in;
    font-weight: 300;
  }
`;

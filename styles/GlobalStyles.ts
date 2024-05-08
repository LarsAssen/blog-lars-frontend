import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box; // Ensures padding and border are included in the element's total width and height
}

body, html {
width: 100%;
height: 100%;
}

  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
    transition: all 0.50s linear;
  }

    a {
        color: ${({ theme }) => theme.primaryColor};
        text-decoration: none;
    }

    button {
        font-family: ${({ theme }) => theme.fontFamily};
        font-size: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

`;

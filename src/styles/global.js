import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: auto;
  }
  html, body {
    font-family: Roboto;
  }
  button{
    cursor: pointer;
    outline: none!important;
  }
  input{
    outline: none!important;
  }
`;

export default GlobalStyle;

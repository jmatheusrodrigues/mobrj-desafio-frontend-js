import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import "../styles/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

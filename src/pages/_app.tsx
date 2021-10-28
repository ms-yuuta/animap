import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;

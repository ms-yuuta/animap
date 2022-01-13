import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material";
import { theme } from "styles/theme";

import "styles/globals.css";
import { fetcher } from "./_app.hooks";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SWRConfig value={{ refreshInterval: 5000, fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
        <Toaster toastOptions={{ duration: 4000, style: { border: "1px solid #3460AB" } }} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;

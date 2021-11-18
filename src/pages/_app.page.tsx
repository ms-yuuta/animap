import "styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "styles/theme";
import { SWRConfig } from "swr";
import { fetcher } from "./_app.hooks";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider theme={theme}>
        <div>
          <Component {...pageProps} />
          <Toaster toastOptions={{ duration: 4000, style: { border: "1px solid #3460AB" } }} />
        </div>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;

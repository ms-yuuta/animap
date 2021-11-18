import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale:
        }
        body {
          margin: 0;
        }
      `,
    },
  },
  palette: {
    primary: {
      light: "#5c7fbb",
      main: "#3460AB",
      dark: "#244377",
    },
    secondary: {
      light: "#facb33",
      main: "#F9BE00",
      dark: "#ae8500",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#80cbc4",
      main: "#26a69a",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});

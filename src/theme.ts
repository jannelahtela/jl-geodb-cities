import { createTheme } from "@mui/material/styles";

/**
 * Custom Material-UI theme configuration.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Default blue
    },
    secondary: {
      main: "#ff9800", // Orange
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
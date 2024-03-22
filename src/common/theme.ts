import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#1d3557", // Dark blue color
    },
    secondary: {
      main: "#e63946", // Red color
    },
    background: {
      default: "#e7e9e9", // Light gray color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontSize: 16,

    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
    },
    subtitle1: {
      fontSize: "1rem",
    },
    subtitle2: {
      fontSize: "0.875rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    button: {
      fontSize: "1rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
    overline: {
      fontSize: "0.75rem",
    },
  },
});

export default Theme;

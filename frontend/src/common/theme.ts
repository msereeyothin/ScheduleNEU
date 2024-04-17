import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#c92c38",
    },
    secondary: {
      main: "#1C3557",
      light: "#ADD8E6",
    },
    background: {
      default: "#F5F6F8",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Arial, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: 30,
      fontWeight: 800,
    },
    h2: {
      fontSize: 30,
      fontWeight: 600,
      color: "#1C3557",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      color: "#1C3557",
    },
    body1: {
      fontSize: 16,
      fontWeight: 300,
      color: "#1C3557",
    },
    button: {
      fontSize: 16,
      fontWeight: 600,
      color: "#F5F6F8",
    },
  },
});

export default Theme;

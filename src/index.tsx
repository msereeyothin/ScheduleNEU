import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SchedulePage from "./pages/SchedulePage";
import { ThemeProvider, createTheme } from "@mui/material";
import About from "./pages/About";
import Home from "./pages/Home";

const theme = createTheme({
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

const Root = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<SchedulePage />}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();

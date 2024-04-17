import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import About from "./pages/About";
import Home from "./pages/Home";
import Theme from "./common/theme";
import Layout from "./components/Layout/Layout";
import Landing from "./pages/Landing";

const theme = Theme;

const Root = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();
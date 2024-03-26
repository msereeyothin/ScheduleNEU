import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import SchedulePage from "./pages/SchedulePage";
import { ThemeProvider } from "@mui/material";
import About from "./pages/About";
import Home from "./pages/Home";
import Theme from "./common/theme";
import Layout from "./components/Layout/Layout";

const theme = Theme;

const Root = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/schedule" element={<SchedulePage />}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();

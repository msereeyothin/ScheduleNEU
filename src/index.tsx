import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import SchedulePage from "./pages/SchedulePage";

const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/schedule" element={<SchedulePage />}></Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));

reportWebVitals();

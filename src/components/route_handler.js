import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Navbar from "./navbar";
import Calculator from "./calculator";
import Quote from "../pages/quote";

const RouteHanlder = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/calc" element={<Calculator></Calculator>} />
        <Route path="/quote" element={<Quote></Quote>} />
      </Routes>
    </Router>
  );
};

export default RouteHanlder;

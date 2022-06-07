import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../App';
import Navbar from './navbar';
import Calculator from './calculator';
import Quote from '../pages/quote';

const RouteHanlder = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calc" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default RouteHanlder;

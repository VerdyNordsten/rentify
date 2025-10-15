import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehicleDetail from "./pages/VehicleDetail";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/:id" element={<VehicleDetail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;

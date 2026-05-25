import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import SriLanka6N7DTour from "./pages/tours/SriLanka6N7DTour";
import Journeys from "./pages/Journeys";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
  path="/explore-sri-lanka/6n-7d-sri-lanka-tour"
  element={<SriLanka6N7DTour />}

/>
<Route path="/journeys" element={<Journeys />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
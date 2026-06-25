import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import SriLanka6N7DTour from "./pages/tours/SriLanka6N7DTour";
import Journeys from "./pages/Journeys";
import SriLanka8N9DTour from "./pages/tours/SriLanka8N9DTour";
import CulturalTriangleTour from "./pages/tours/CulturalTriangleTour";
import HillCountryTour from "./pages/tours/HillCountryTour";
import FamilyTour from "./pages/tours/FamilyTour";
import HoneymoonTour from "./pages/tours/HoneymoonTour";
import ExploreSriLanka from "./pages/ExploreSriLanka";
import Experiences from "./pages/Experiences";
import ExploreTheWorld from "./pages/ExploreTheWorld";
import WorldCountryPage from "./pages/world/WorldCountryPage";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore-sri-lanka/6n-7d-sri-lanka-tour" element={<SriLanka6N7DTour />}/>
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/explore-sri-lanka/8n-9d-sri-lanka-tour" element={<SriLanka8N9DTour />}/>
        <Route path="/explore-sri-lanka/cultural-triangle-tour" element={<CulturalTriangleTour />}/>
        <Route path="/explore-sri-lanka/hill-country-tour" element={<HillCountryTour />}/>
        <Route path="/explore-sri-lanka/family-tour" element={<FamilyTour />} />
        <Route path="/explore-sri-lanka/honeymoon-tour" element={<HoneymoonTour />} />

        <Route path="/explore-sri-lanka" element={<ExploreSriLanka />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/explore-the-world" element={<ExploreTheWorld />} />
        <Route path="/explore-the-world/:countrySlug" element={<WorldCountryPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
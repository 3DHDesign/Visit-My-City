import DestinationsSection from "../components/home/DestinationsSection";
import ExperiencesSection from "../components/home/ExperiencesSection";
import FeaturedJourneysSection from "../components/home/FeaturedJourneysSection";
import FinalCTASection from "../components/home/FinalCTASection";
import Hero from "../components/home/Hero";
import TestimonialsSection from "../components/home/TestimonialsSection";
import TravelPathsSection from "../components/home/TravelPathsSection";
import TravelServicesSection from "../components/home/TravelServicesSection";
import WelcomeSriLankaSection from "../components/home/WelcomeSriLankaSection";
import WhyChooseSection from "../components/home/WhyChooseSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeSriLankaSection />
      <TravelPathsSection />
      <WhyChooseSection/>
      <ExperiencesSection/>
      <TravelServicesSection/>
      <DestinationsSection/>
      <FeaturedJourneysSection/>
      <TestimonialsSection/>
      <FinalCTASection/>
    </>
  );
};

export default Home;
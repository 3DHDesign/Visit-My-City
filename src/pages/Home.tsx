// import DestinationsSection from "../components/home/DestinationsSection";
import ExperiencesSection from "../components/home/ExperiencesSection";
// import FeaturedJourneysSection from "../components/home/FeaturedJourneysSection";
import FinalCTASection from "../components/home/FinalCTASection";
import Hero from "../components/home/Hero";
import RealMomentsGallery from "../components/home/RealMomentsGallery";
import TestimonialsSection from "../components/home/TestimonialsSection";
import TravelPathsSection from "../components/home/TravelPathsSection";
// import TravelServicesSection from "../components/home/TravelServicesSection";
import VmcMomentsSection from "../components/home/VmcMomentsSection";
import WelcomeSriLankaSection from "../components/home/WelcomeSriLankaSection";
// import WhyChooseSection from "../components/home/WhyChooseSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WelcomeSriLankaSection />
      <VmcMomentsSection/>
      <TravelPathsSection />
      {/* <WhyChooseSection/> */}
      <ExperiencesSection/>
      {/* <TravelServicesSection/>
      <DestinationsSection/>
      <FeaturedJourneysSection/> */}
       <RealMomentsGallery />
      <TestimonialsSection/>
      <FinalCTASection/>
    </>
  );
};

export default Home;
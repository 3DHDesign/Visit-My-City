import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import CertificationsSection from "../components/about/CertificationsSection";
import WhatWeDoSection from "../components/about/WhatWeDoSection";
import WhyChooseUsSection from "../components/about/WhyChooseUsSection";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <main className="bg-[#FCFCFA]">
      <AboutHero />
      <AboutIntro />
      <CertificationsSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <AboutCTA />
    </main>
  );
};

export default About;
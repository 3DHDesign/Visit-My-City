import { FiArrowUpRight } from "react-icons/fi";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1F33] pt-36 pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,169,59,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(45,106,79,0.3),transparent_35%)]" />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
            About Visit My City
          </p>

          <h1 className="mt-5 text-[44px] font-bold leading-[1.05] !text-white md:text-[68px]">
            Creating meaningful journeys from Sri Lanka to the world.
          </h1>

          <p className="mt-7 max-w-2xl text-[17px] leading-8 !text-white/70">
            Visit My City Travels operates under Virelio, offering inbound Sri
            Lanka tours, outbound travel packages, corporate travel solutions,
            hotel bookings, air ticketing, visa support, and tailor-made travel
            experiences.
          </p>

          <a
            href="#about-intro"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E9A93B] px-7 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Discover Our Story
            <FiArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
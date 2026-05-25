import {
    FiArrowUpRight,
    FiMessageCircle,
    FiPhone,
  } from "react-icons/fi";
  import PrimaryButton from "../common/PrimaryButton";
  
  const ContactHero = () => {
    return (
      <section className="  mb-10 relative min-h-[680px] overflow-hidden bg-[#071827] pt-[160px] pb-2 lg:pt-[170px] lg:pb-28">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1900&q=85"
          alt="Travel planning"
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071827]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071827]/95 via-[#071827]/75 to-[#071827]/35" />
  
        <div className="container-wide relative z-10">
          <div className="max-w-[850px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B] backdrop-blur-md">
              <FiMessageCircle size={14} />
              Contact Visit My City
            </span>
  
            <h1 className="mt-7 text-[44px] font-bold leading-[1.04] !text-white md:text-[68px] lg:text-[78px]">
              Let’s Plan Your
              <span className="block !text-[#E9A93B]">Next Journey.</span>
            </h1>
  
            <p className="mt-7 max-w-[760px] text-[17px] leading-8 !text-white/85">
              Planning a Sri Lanka tour, overseas holiday, honeymoon, or corporate
              trip? Share your idea with us and our travel team will help shape
              the right journey.
            </p>
  
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton
                text="Send Inquiry"
                href="#contact-form"
                variant="gold"
              />
  
              <a
                href="tel:+94114327637"
                className="group inline-flex h-[44px] min-w-[155px] items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 text-[13.5px] font-semibold !text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:!text-[#0B1F33]"
              >
                <FiPhone size={15} />
                Call Us
                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </a>
            </div>
  
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Inbound Sri Lanka Tours",
                "Outbound World Travel",
                "Corporate Travel",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold !text-white/80 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactHero;
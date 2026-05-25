import {
    FiBriefcase,
    FiCreditCard,
    FiGlobe,
    FiHeart,
    FiHome,
    FiMap,
    FiNavigation,
    FiUsers,
  } from "react-icons/fi";
  
  const services = [
    {
      icon: FiMap,
      title: "Inbound Sri Lanka Tours",
      desc: "Cultural tours, nature escapes, beach holidays, heritage journeys, and personalized Sri Lanka experiences.",
    },
    {
      icon: FiGlobe,
      title: "Outbound Travel Packages",
      desc: "International holiday packages designed for families, couples, groups, and corporate travelers.",
    },
    {
      icon: FiBriefcase,
      title: "Corporate Travel",
      desc: "Professional travel planning for business trips, meetings, events, and executive travel requirements.",
    },
    {
      icon: FiHome,
      title: "Hotel Bookings",
      desc: "Carefully selected stays from boutique hotels to premium resorts based on guest preference and budget.",
    },
    {
      icon: FiNavigation,
      title: "Air Ticketing",
      desc: "Reliable flight booking support for local and international travel plans.",
    },
    {
      icon: FiCreditCard,
      title: "Visa Support",
      desc: "Guidance and coordination support for travel documentation and visa-related requirements.",
    },
    {
      icon: FiUsers,
      title: "MICE Travel",
      desc: "Meetings, incentives, conferences, and event-related travel planning with smooth coordination.",
    },
    {
      icon: FiHeart,
      title: "Honeymoon Packages",
      desc: "Romantic and memorable travel experiences designed with comfort, privacy, and premium touches.",
    },
  ];
  
  const WhatWeDoSection = () => {
    return (
      <section className="bg-[#FCFCFA] py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              What We Do
            </p>
  
            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              Travel services designed around every journey.
            </h2>
  
            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              Whether guests are discovering Sri Lanka or traveling overseas, we
              support every stage of the journey with careful planning and
              reliable coordination.
            </p>
          </div>
  
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
  
              return (
                <div
                  key={service.title}
                  className="group rounded-[30px] border border-[#EFE7DA] bg-white p-6 shadow-[0_18px_50px_rgba(11,31,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/50 hover:shadow-[0_24px_70px_rgba(11,31,51,0.09)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/12 text-[#E9A93B] transition-all duration-300 group-hover:bg-[#0B1F33]">
                    <Icon size={22} />
                  </div>
  
                  <h3 className="mt-6 text-[18px] font-bold leading-snug !text-[#0B1F33]">
                    {service.title}
                  </h3>
  
                  <p className="mt-3 text-[14px] leading-7 !text-slate-500">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatWeDoSection;
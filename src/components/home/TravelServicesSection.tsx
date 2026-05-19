import {
    FiArrowUpRight,
    FiBriefcase,
    FiCreditCard,
    FiFileText,
    FiMapPin,
    FiShield,
    FiTruck,
    FiUsers,
  } from "react-icons/fi";
  
  type Service = {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
  };
  
  const services: Service[] = [
    {
      title: "Flight Reservations",
      description:
        "International and domestic flight booking support for business, leisure, group, and family travel.",
      icon: <FiCreditCard />,
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Hotel Reservations",
      description:
        "Comfortable hotel stays, luxury resorts, boutique properties, and corporate accommodation arrangements.",
      icon: <FiBriefcase />,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Travel Insurance",
      description:
        "Travel insurance assistance for safer journeys, medical protection, and peace of mind.",
      icon: <FiShield />,
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Ground Transfers",
      description:
        "Airport transfers, private transport, chauffeur services, and comfortable travel between destinations.",
      icon: <FiTruck />,
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Visa Assistance",
      description:
        "Limited visa consultation and assistance for selected travel destinations and tour requirements.",
      icon: <FiFileText />,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "MICE Arrangements",
      description:
        "Meetings, incentives, conferences, exhibitions, corporate groups, and special business travel events.",
      icon: <FiUsers />,
      image:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Tour Guide Services",
      description:
        "Professional multilingual guide services for cultural tours, city visits, and destination experiences.",
      icon: <FiMapPin />,
      image:
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Custom Excursions",
      description:
        "Personalized excursions, day tours, special activities, and curated local experiences.",
      icon: <FiArrowUpRight />,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
  ];
  
  const TravelServicesSection = () => {
    return (
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
  
        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-[860px] text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Travel Services
            </span>
  
            <h2 className="mt-7 text-[36px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[54px] lg:text-[62px]">
              Complete Travel Services,
              <span className="block !text-[#2D6A4F]">All in One Place.</span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
              From flights and hotels to transfers, insurance, visa support, and
              guided experiences, Visit My City handles the details so your
              journey feels effortless.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative min-h-[360px] overflow-hidden rounded-[32px] bg-[#0B1F33] shadow-[0_20px_65px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(15,23,42,0.18)]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/95 via-[#0B1F33]/58 to-black/10" />
  
                <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[24px] text-[#E9A93B] ring-1 ring-white/15 backdrop-blur-md">
                      {service.icon}
                    </div>
  
                    <span className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] !text-white/80 ring-1 ring-white/15 backdrop-blur-md">
                      Service
                    </span>
                  </div>
  
                  <div>
                    <h3 className="text-[24px] font-bold leading-tight !text-white">
                      {service.title}
                    </h3>
  
                    <p className="mt-4 text-[14.5px] leading-7 !text-white/72">
                      {service.description}
                    </p>
  
                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold !text-[#E9A93B] transition-all hover:gap-3"
                    >
                      Learn More
                      <FiArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom CTA Strip */}
          <div className="mt-14 overflow-hidden rounded-[34px] bg-[#0B1F33] p-8 shadow-[0_22px_75px_rgba(11,31,51,0.16)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                  Need a complete travel plan?
                </p>
  
                <h3 className="mt-3 max-w-[760px] text-[30px] font-bold leading-tight !text-white md:text-[38px]">
                  Tell us where you want to go — we’ll help plan the flights,
                  stay, transfers, and experiences.
                </h3>
              </div>
  
              <a
                href="#"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#E9A93B] px-7 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:bg-white"
              >
                Start Planning
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TravelServicesSection;
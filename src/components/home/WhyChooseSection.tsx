import {
    FiAward,
    FiBriefcase,
    FiCheckCircle,
    FiCompass,
    FiGlobe,
    FiHeadphones,
    FiLayers,
  } from "react-icons/fi";
  
  type Feature = {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  
  const features: Feature[] = [
    {
      title: "Certified Travel Partner",
      description:
        "IATA, SLTDA, SLAITO, CAASL and Safe Travels accredited travel expertise you can rely on.",
      icon: <FiAward />,
    },
    {
      title: "Tailor-Made Travel Planning",
      description:
        "Custom inbound and outbound journeys planned around your budget, schedule, interests, and travel style.",
      icon: <FiCompass />,
    },
    {
      title: "Inbound & Outbound Expertise",
      description:
        "Sri Lanka tours for global travelers and worldwide holiday packages for Sri Lankan travelers.",
      icon: <FiGlobe />,
    },
    {
      title: "Corporate & Leisure Travel",
      description:
        "Business travel, MICE, honeymoons, family holidays, group tours, and special travel arrangements.",
      icon: <FiBriefcase />,
    },
    {
      title: "Complete Travel Services",
      description:
        "Flights, hotels, transfers, travel insurance, guides, excursions, and visa assistance in one place.",
      icon: <FiLayers />,
    },
    {
      title: "Reliable Travel Support",
      description:
        "Friendly assistance before and during your journey, with trusted local and international travel partners.",
      icon: <FiHeadphones />,
    },
  ];
  
  const WhyChooseSection = () => {
    return (
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
  
        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-[850px] text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Why Choose Us
            </span>
  
            <h2 className="mt-7 text-[34px] font-bold leading-[1.1] !text-[#0B1F33] md:text-[52px] lg:text-[60px]">
              Travel With Confidence.
              <span className="block !text-[#2D6A4F]">
                Experience Every City Better.
              </span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
              Visit My City brings certified travel expertise, destination
              knowledge, and complete planning support for both Sri Lanka tours
              and worldwide travel packages.
            </p>
          </div>
  
          {/* Feature Grid */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[30px] border border-slate-100 bg-[#FCFCFA] p-7 shadow-[0_18px_55px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_26px_75px_rgba(15,23,42,0.09)] md:p-8"
              >
                <div className="absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#E9A93B]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2D6A4F]/10" />
  
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[24px] text-[#2D6A4F] shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-[#0B1F33] group-hover:text-[#E9A93B]">
                      {feature.icon}
                    </div>
  
                    <span className="text-[13px] font-bold !text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
  
                  <h3 className="mt-7 text-[24px] font-bold leading-tight !text-[#0B1F33]">
                    {feature.title}
                  </h3>
  
                  <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                    {feature.description}
                  </p>
  
                  <div className="mt-7 flex items-center gap-2 text-[13px] font-bold !text-[#2D6A4F]">
                    <FiCheckCircle size={16} />
                    Trusted travel support
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom Highlight */}
          <div className="mt-14 overflow-hidden rounded-[34px] bg-[#0B1F33] p-8 shadow-[0_22px_75px_rgba(11,31,51,0.16)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                  Destination Management Company
                </p>
  
                <h3 className="mt-4 text-[30px] font-bold leading-tight !text-white md:text-[38px]">
                  From Sri Lanka’s hidden gems to the world’s iconic cities, we
                  plan journeys with care.
                </h3>
              </div>
  
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-2xl bg-white/10 px-4 py-5 backdrop-blur-md">
                  <p className="text-[26px] font-bold !text-white">2014</p>
                  <p className="mt-1 text-[12px] font-semibold !text-white/60">
                    Established
                  </p>
                </div>
  
                <div className="rounded-2xl bg-white/10 px-4 py-5 backdrop-blur-md">
                  <p className="text-[26px] font-bold !text-white">2</p>
                  <p className="mt-1 text-[12px] font-semibold !text-white/60">
                    Travel Paths
                  </p>
                </div>
  
                <div className="rounded-2xl bg-white/10 px-4 py-5 backdrop-blur-md">
                  <p className="text-[26px] font-bold !text-white">5+</p>
                  <p className="mt-1 text-[12px] font-semibold !text-white/60">
                    Accreditations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseSection;
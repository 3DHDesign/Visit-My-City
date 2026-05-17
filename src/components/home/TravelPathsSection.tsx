import {
    FiArrowUpRight,
    FiGlobe,
    FiMapPin,
    FiShield,
    FiCheckCircle,
  } from "react-icons/fi";
  import PrimaryButton from "../common/PrimaryButton";
  
  const sriLankaPins = ["Kandy", "Galle", "Ella", "Sigiriya", "Yala", "Bentota"];
  const worldPins = ["Dubai", "Azerbaijan", "Japan", "Thailand", "Singapore"];
  const accreditations = ["Safe Travels", "IATA", "SLTDA", "CAASL", "SLAITO"];
  
  const TravelPathsSection = () => {
    return (
      <section className="relative overflow-hidden bg-[#FCFCFA] pt-32 pb-28 lg:pt-36 lg:pb-32">
        <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-24 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
  
        <div className="container-wide relative z-10">
          <div className="mx-auto max-w-[1180px] text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Inbound & Outbound Travel
            </span>
  
            <h2 className="mt-7 text-center text-[34px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[52px] lg:text-[64px]">
              One Travel Partner. Two Worlds to Explore.
            </h2>
  
            <p className="mx-auto mt-6 max-w-[760px] text-center text-[16px] leading-8 !text-slate-600 md:text-[17px]">
              From curated Sri Lanka journeys for global travelers to outbound
              holidays for Sri Lankans, Visit My City brings both worlds together
              with trusted travel expertise.
            </p>
          </div>
  
          <div className="mx-auto mt-16 grid max-w-[1180px] gap-8 lg:grid-cols-2">
            {/* Inbound */}
            <div className="group relative overflow-hidden rounded-[36px] border border-slate-100 bg-white p-8 shadow-[0_22px_75px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#2D6A4F]/10" />
              <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#2D6A4F]/14 blur-3xl" />
  
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#0B1F33] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] !text-white">
                    <FiMapPin className="text-[#E9A93B]" size={14} />
                    Inbound Travel
                  </span>
  
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#2D6A4F]/10 text-[#2D6A4F] ring-1 ring-slate-100">
                    <FiMapPin size={28} />
                  </div>
                </div>
  
                <h3 className="mt-10 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[44px]">
                  Explore Sri Lanka
                </h3>
  
                <p className="mt-6 max-w-[600px] text-[16px] leading-8 !text-slate-600">
                  Tailor-made Sri Lanka journeys for international travelers
                  discovering culture, wildlife, beaches, hill country, heritage,
                  and authentic local experiences.
                </p>
  
                <div className="mt-8 flex flex-wrap gap-3">
                  {sriLankaPins.map((pin) => (
                    <span
                      key={pin}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold !text-[#0B1F33] shadow-sm"
                    >
                      {pin}
                    </span>
                  ))}
                </div>
  
                <div className="mt-10 flex flex-col gap-5 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <PrimaryButton
                    text="Explore Sri Lanka"
                    href="#"
                    variant="gold"
                  />
  
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[14px] font-bold !text-[#0B1F33] transition-all hover:!text-[#E9A93B]"
                  >
                    Learn More
                    <FiArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
  
            {/* Outbound */}
            <div className="group relative overflow-hidden rounded-[36px] border border-slate-100 bg-white p-8 shadow-[0_22px_75px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 md:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#E9A93B]/15" />
              <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#E9A93B]/20 blur-3xl" />
  
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#0B1F33] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] !text-white">
                    <FiGlobe className="text-[#E9A93B]" size={14} />
                    Outbound Travel
                  </span>
  
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#E9A93B]/15 text-[#E9A93B] ring-1 ring-slate-100">
                    <FiGlobe size={28} />
                  </div>
                </div>
  
                <h3 className="mt-10 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[44px]">
                  Discover The World
                </h3>
  
                <p className="mt-6 max-w-[600px] text-[16px] leading-8 !text-slate-600">
                  Outbound holiday packages for Sri Lankan travelers planning
                  overseas holidays, honeymoons, business travel, family tours,
                  and group getaways.
                </p>
  
                <div className="mt-8 flex flex-wrap gap-3">
                  {worldPins.map((pin) => (
                    <span
                      key={pin}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold !text-[#0B1F33] shadow-sm"
                    >
                      {pin}
                    </span>
                  ))}
                </div>
  
                <div className="mt-10 flex flex-col gap-5 border-t border-slate-100 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <PrimaryButton
                    text="Explore The World"
                    href="#"
                    variant="dark"
                  />
  
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[14px] font-bold !text-[#0B1F33] transition-all hover:!text-[#E9A93B]"
                  >
                    Learn More
                    <FiArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          {/* Accreditation */}
          <div className="mx-auto mt-14 max-w-[1180px] rounded-[32px] border border-slate-100 bg-white p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[300px_1fr]">
              <div className="flex items-center gap-4">
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#E9A93B]/15 p-4 text-[#E9A93B]">
                  <FiShield size={24} />
                </div>
  
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] !text-[#E9A93B]">
                    Certified & Accredited
                  </p>
                  <h3 className="mt-1 text-[22px] font-bold !text-[#0B1F33]">
                    Trusted Expertise
                  </h3>
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {accreditations.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[66px] items-center justify-center gap-2 rounded-2xl border border-slate-100 bg-[#FCFCFA] px-4 text-center shadow-sm"
                  >
                    <FiCheckCircle size={16} className="shrink-0 text-[#2D6A4F]" />
  
                    <span className="text-[13px] font-bold !text-[#0B1F33]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TravelPathsSection;
import {
  FiArrowUpRight,
  FiGlobe,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiSend,
  FiShield,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const contactOptions = [
  {
    label: "Call Travel Team",
    value: "+94 11 460 0900",
    href: "tel:+94114600900",
    icon: FiPhone,
  },
  {
    label: "Call Mobile",
    value: "+94 76 619 2447",
    href: "tel:+94766192447",
    icon: FiPhone,
  },
  {
    label: "WhatsApp Inquiry",
    value: "Chat with us",
    href: "https://wa.me/94766192447?text=Hello%2C%20I%20would%20like%20to%20get%20more%20details%20about%20a%20travel%20plan.",
    icon: FiMessageCircle,
  },
];

const travelTypes = [
  {
    title: "Explore Sri Lanka",
    desc: "Inbound tours, culture, wildlife, beaches, and tailor-made island journeys.",
    icon: FiMapPin,
    href: "/explore-sri-lanka",
  },
  {
    title: "Explore The World",
    desc: "Outbound holidays, family escapes, corporate trips, and overseas packages.",
    icon: FiGlobe,
    href: "/explore-the-world",
  },
];

const FinalCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-7 sm:py-9 lg:py-12">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[#E9A93B]/14 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Main wrapper */}
        <div className="relative overflow-hidden rounded-[26px] border border-[#E8DED0] bg-white p-1.5 shadow-[0_25px_80px_rgba(11,31,51,0.08)] sm:rounded-[36px] sm:p-3 lg:rounded-[46px] lg:p-4">
          <div className="grid overflow-hidden rounded-[21px] sm:rounded-[29px] lg:grid-cols-[1.08fr_0.92fr] lg:rounded-[36px]">
            {/* =====================================================
                LEFT VISUAL CTA
            ====================================================== */}
            <div className="relative min-h-[540px] overflow-hidden bg-[#0B1F33] px-5 py-7 sm:min-h-[620px] sm:p-10 lg:p-12">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85"
                alt="Plan your next journey with Visit My City"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/90 to-[#0B1F33]/45" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,169,59,0.2),transparent_34%)]" />

              <div className="relative z-10 flex min-h-[485px] flex-col justify-between sm:min-h-[540px]">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B] backdrop-blur-md sm:px-5 sm:text-[11px] sm:tracking-[0.22em]">
                    <FiSend size={13} />
                    Start Planning Today
                  </span>

                  <h2 className="mt-6 max-w-[820px] text-[35px] font-bold leading-[1.03] !text-white sm:mt-8 sm:text-[54px] md:text-[64px] lg:text-[72px]">
                    Ready to turn your travel idea into a real journey?
                  </h2>

                  <p className="mt-5 max-w-[680px] text-[14px] leading-7 !text-white/72 sm:mt-7 sm:text-[17px] sm:leading-8">
                    Share your destination, travel dates, guest count, and
                    budget. Our team will help shape the right Sri Lanka or
                    overseas travel plan for you.
                  </p>
                </div>

                <div>
                  {/* Trust items */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {["Flights", "Hotels", "Transfers"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[16px] border border-white/12 bg-white/[0.08] px-3 py-3 backdrop-blur-md sm:rounded-[22px] sm:px-4 sm:py-4"
                      >
                        <FiShield
                          className="text-[#E9A93B]"
                          size={16}
                        />

                        <p className="mt-2 text-[11px] font-bold !text-white sm:mt-3 sm:text-[13px]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-row sm:gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E9A93B] px-4 py-3.5 text-[12px] font-bold !text-[#0B1F33] shadow-[0_18px_45px_rgba(233,169,59,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:px-8 sm:py-4 sm:text-[14px]"
                    >
                      Send Inquiry
                      <FiArrowUpRight size={15} />
                    </Link>

                    <Link
                      to="/journeys"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3.5 text-[12px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33] sm:px-8 sm:py-4 sm:text-[14px]"
                    >
                      View Journeys
                      <FiArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                RIGHT ACTION PANEL
            ====================================================== */}
            <div className="bg-[#F8F5EF] px-3 py-4 sm:p-6 md:p-8 lg:p-10">
              {/* =================================================
                  TRAVEL PATH
              ================================================== */}
              <div className="rounded-[24px] border border-[#E8DED0] bg-white p-4 shadow-[0_18px_55px_rgba(11,31,51,0.06)] sm:rounded-[32px] sm:p-6 md:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-[#B98525] sm:text-[11px] sm:tracking-[0.22em]">
                  Choose Your Travel Path
                </p>

                <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4">
                  {travelTypes.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        className={`group rounded-[22px] border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B05F]/55 hover:bg-[#FFF8EA] hover:shadow-[0_18px_55px_rgba(11,31,51,0.08)] sm:rounded-[28px] sm:p-5 ${
                          index === 0
                            ? "border-[#E9A93B]/40 bg-[#FFF8EA]"
                            : "border-[#EFE7DA] bg-[#FCFCFA]"
                        }`}
                      >
                        {/* MOBILE: icon and title in same header row */}
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] transition-all duration-300 sm:h-13 sm:w-13 sm:rounded-2xl ${
                              index === 0
                                ? "bg-[#E9A93B] text-[#0B1F33]"
                                : "bg-[#0B1F33] text-[#E9A93B]"
                            }`}
                          >
                            <Icon size={21} />
                          </span>

                          <h3 className="text-[19px] font-bold leading-tight !text-[#0B1F33] sm:text-[21px]">
                            {item.title}
                          </h3>
                        </div>

                        {/* Description now gets FULL width */}
                        <p className="mt-4 text-[13px] leading-6 !text-slate-600 sm:text-[14px] sm:leading-7">
                          {item.desc}
                        </p>

                        <p className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold !text-[#2D6A4F] transition-all group-hover:gap-3 group-hover:!text-[#B98525] sm:text-[13px]">
                          Start here
                          <FiArrowUpRight size={14} />
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  CONTACT
              ================================================== */}
              <div className="mt-4 rounded-[24px] border border-[#E8DED0] bg-white p-4 shadow-[0_18px_55px_rgba(11,31,51,0.06)] sm:mt-5 sm:rounded-[32px] sm:p-6 md:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-[#B98525] sm:text-[11px] sm:tracking-[0.22em]">
                  Talk To Us
                </p>

                <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                  {contactOptions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="group flex min-w-0 items-center gap-3 rounded-[20px] border border-[#EFE7DA] bg-[#FCFCFA] px-3 py-3.5 transition-all duration-300 hover:border-[#D9B05F]/50 hover:bg-[#FFF8EA] sm:gap-4 sm:rounded-[24px] sm:px-4 sm:py-4"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] bg-[#EEF7F2] text-[#2D6A4F] transition-all duration-300 group-hover:bg-[#2D6A4F] group-hover:text-white sm:h-11 sm:w-11 sm:rounded-2xl">
                          <Icon size={18} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-[9px] font-bold uppercase tracking-[0.13em] !text-slate-400 sm:text-[11px] sm:tracking-[0.16em]">
                            {item.label}
                          </span>

                          <span className="mt-1 block break-words text-[14px] font-bold !text-[#0B1F33] sm:text-[16px]">
                            {item.value}
                          </span>
                        </span>

                        <FiArrowUpRight
                          size={15}
                          className="shrink-0 text-[#B98525] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:text-[17px]"
                        />
                      </a>
                    );
                  })}
                </div>

                {/* Address */}
                <div className="mt-4 rounded-[20px] bg-[#0B1F33] p-4 sm:mt-5 sm:rounded-[24px] sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B] sm:text-[11px] sm:tracking-[0.18em]">
                    Visit My City (PVT ) Ltd Travels
                  </p>

                  <p className="mt-2 text-[13px] leading-6 !text-white/70 sm:mt-3 sm:text-[14px] sm:leading-7">
                    No. 12, Sri Dhamma Mawatha,
                    <br className="hidden sm:block" />
                    Colombo 10, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST LINE
        ====================================================== */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-3">
          {[
            "Inbound Tours",
            "Outbound Packages",
            "Corporate Travel",
            "Custom Journeys",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#E8DED0] bg-white px-3.5 py-2 text-[10px] font-bold !text-[#0B1F33] shadow-[0_10px_30px_rgba(11,31,51,0.04)] sm:px-5 sm:py-2.5 sm:text-[12px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
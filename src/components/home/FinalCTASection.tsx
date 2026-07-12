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
    <section className="relative overflow-hidden bg-[#FCFCFA] py-8 lg:py-12">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[#E9A93B]/14 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="relative overflow-hidden rounded-[46px] border border-[#E8DED0] bg-white p-4 shadow-[0_30px_100px_rgba(11,31,51,0.1)]">
          <div className="grid overflow-hidden rounded-[36px] lg:grid-cols-[1.08fr_0.92fr]">
            {/* Left visual CTA */}
            <div className="relative min-h-[620px] overflow-hidden bg-[#0B1F33] p-7 md:p-10 lg:p-12">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85"
                alt="Plan your next journey with Visit My City"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/90 to-[#0B1F33]/45" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,169,59,0.2),transparent_34%)]" />

              <div className="relative z-10 flex min-h-[540px] flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B] backdrop-blur-md">
                    <FiSend size={14} />
                    Start Planning Today
                  </span>

                  <h2 className="mt-8 max-w-[820px] text-[42px] font-bold leading-[1.02] !text-white md:text-[64px] lg:text-[72px]">
                    Ready to turn your travel idea into a real journey?
                  </h2>

                  <p className="mt-7 max-w-[680px] text-[16px] leading-8 !text-white/72 md:text-[18px]">
                    Share your destination, travel dates, guest count, and
                    budget. Our team will help shape the right Sri Lanka or
                    overseas travel plan for you.
                  </p>
                </div>

                <div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {["Flights", "Hotels", "Transfers"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-white/12 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                      >
                        <FiShield className="text-[#E9A93B]" size={18} />
                        <p className="mt-3 text-[13px] font-bold !text-white">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] shadow-[0_18px_45px_rgba(233,169,59,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      Send Inquiry
                      <FiArrowUpRight size={16} />
                    </Link>

                    <Link
                      to="/journeys"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                    >
                      View Journeys
                      <FiArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right action panel */}
            <div className="bg-[#F8F5EF] p-6 md:p-8 lg:p-10">
              <div className="rounded-[32px] border border-[#E8DED0] bg-white p-6 shadow-[0_18px_55px_rgba(11,31,51,0.06)] md:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#B98525]">
                  Choose Your Travel Path
                </p>

                <div className="mt-6 grid gap-4">
                  {travelTypes.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="group rounded-[28px] border border-[#EFE7DA] bg-[#FCFCFA] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B05F]/55 hover:bg-[#FFF8EA] hover:shadow-[0_18px_55px_rgba(11,31,51,0.08)]"
                      >
                        <div className="flex gap-4">
                          <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F33] text-[#E9A93B] transition-all duration-300 group-hover:bg-[#E9A93B] group-hover:text-[#0B1F33]">
                            <Icon size={23} />
                          </span>

                          <div>
                            <h3 className="text-[21px] font-bold !text-[#0B1F33]">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-[14px] leading-7 !text-slate-600">
                              {item.desc}
                            </p>

                            <p className="mt-4 inline-flex items-center gap-2 text-[13px] font-bold !text-[#2D6A4F] transition-all group-hover:gap-3 group-hover:!text-[#B98525]">
                              Start here
                              <FiArrowUpRight size={14} />
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 rounded-[32px] border border-[#E8DED0] bg-white p-6 shadow-[0_18px_55px_rgba(11,31,51,0.06)] md:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#B98525]">
                  Talk To Us
                </p>

                <div className="mt-5 grid gap-3">
                  {contactOptions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="group flex items-center gap-4 rounded-[24px] border border-[#EFE7DA] bg-[#FCFCFA] px-4 py-4 transition-all duration-300 hover:border-[#D9B05F]/50 hover:bg-[#FFF8EA]"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF7F2] text-[#2D6A4F] transition-all duration-300 group-hover:bg-[#2D6A4F] group-hover:text-white">
                          <Icon size={19} />
                        </span>

                        <span>
                          <span className="block text-[11px] font-bold uppercase tracking-[0.16em] !text-slate-400">
                            {item.label}
                          </span>

                          <span className="mt-1 block text-[16px] font-bold !text-[#0B1F33]">
                            {item.value}
                          </span>
                        </span>

                        <FiArrowUpRight
                          size={17}
                          className="ml-auto text-[#B98525] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-[24px] bg-[#0B1F33] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                    Visit My City Travels
                  </p>

                  <p className="mt-3 text-[14px] leading-7 !text-white/70">
                    No. 12, Sri Dhamma Mawatha, Colombo 10, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small bottom trust line */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-center">
          {["Inbound Tours", "Outbound Packages", "Corporate Travel", "Custom Journeys"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-[#E8DED0] bg-white px-5 py-2.5 text-[12px] font-bold !text-[#0B1F33] shadow-[0_10px_30px_rgba(11,31,51,0.04)]"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
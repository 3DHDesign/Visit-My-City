import {
    FiArrowUpRight,
    FiGlobe,
    FiMapPin,
    FiMessageCircle,
    FiPhone,
  } from "react-icons/fi";
  import PrimaryButton from "../common/PrimaryButton";
  
  const FinalCTASection = () => {
    return (
      <section className="relative overflow-hidden bg-[#FCFCFA] py-24 lg:py-32">
        <div className="container-wide relative z-10">
          <div className="relative overflow-hidden rounded-[42px] bg-[#0B1F33] px-7 py-14 shadow-[0_28px_90px_rgba(11,31,51,0.22)] md:px-12 md:py-16 lg:px-16 lg:py-20">
            {/* Background Lights */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#2D6A4F]/35 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 -bottom-32 h-[380px] w-[380px] rounded-full bg-[#E9A93B]/25 blur-3xl" />
  
            {/* Decorative Lines */}
            <div className="pointer-events-none absolute right-10 top-10 hidden h-[260px] w-[260px] rounded-full border border-white/10 lg:block" />
            <div className="pointer-events-none absolute right-24 top-24 hidden h-[130px] w-[130px] rounded-full border border-white/10 lg:block" />
  
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Content */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B] backdrop-blur-md">
                  <FiMessageCircle size={14} />
                  Start Planning Today
                </span>
  
                <h2 className="mt-7 max-w-[820px] text-[38px] font-bold leading-[1.05] !text-white md:text-[58px] lg:text-[68px]">
                  Ready to Plan Your Next Journey?
                </h2>
  
                <p className="mt-7 max-w-[690px] text-[16px] leading-8 !text-white/72 md:text-[18px]">
                  Whether you want to explore Sri Lanka or travel overseas, our
                  team is ready to help you plan flights, hotels, transfers,
                  experiences, and complete travel arrangements.
                </p>
  
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <PrimaryButton
                    text="Plan Sri Lanka Tour"
                    href="#"
                    variant="gold"
                  />
  
                  <PrimaryButton
                    text="Plan Overseas Trip"
                    href="#"
                    variant="glass"
                  />
                </div>
              </div>
  
              {/* Right Contact Card */}
              <div className="rounded-[34px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-8">
                <div className="grid gap-4">
                  <a
                    href="tel:+94114327637"
                    className="group flex items-center gap-4 rounded-3xl bg-white px-5 py-5 transition-all duration-300 hover:bg-[#E9A93B]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F33] text-[#E9A93B] transition-all duration-300 group-hover:bg-white group-hover:text-[#0B1F33]">
                      <FiPhone size={20} />
                    </div>
  
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-slate-500 group-hover:!text-[#0B1F33]/70">
                        Call Us
                      </p>
                      <h3 className="mt-1 text-[18px] font-bold !text-[#0B1F33]">
                        +94 11 432 7637 / 8
                      </h3>
                    </div>
                  </a>
  
                  <a
                    href="#"
                    className="group flex items-center gap-4 rounded-3xl bg-white px-5 py-5 transition-all duration-300 hover:bg-[#E9A93B]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F33] text-[#E9A93B] transition-all duration-300 group-hover:bg-white group-hover:text-[#0B1F33]">
                      <FiMessageCircle size={20} />
                    </div>
  
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-slate-500 group-hover:!text-[#0B1F33]/70">
                        WhatsApp
                      </p>
                      <h3 className="mt-1 text-[18px] font-bold !text-[#0B1F33]">
                        Chat With Travel Team
                      </h3>
                    </div>
  
                    <FiArrowUpRight
                      size={18}
                      className="ml-auto text-[#0B1F33] transition-transform duration-300 group-hover:rotate-45"
                    />
                  </a>
                </div>
  
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                    <FiMapPin size={24} className="text-[#E9A93B]" />
  
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] !text-white/45">
                      Inbound
                    </p>
  
                    <h4 className="mt-1 text-[18px] font-bold !text-white">
                      Sri Lanka Tours
                    </h4>
                  </div>
  
                  <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                    <FiGlobe size={24} className="text-[#E9A93B]" />
  
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.18em] !text-white/45">
                      Outbound
                    </p>
  
                    <h4 className="mt-1 text-[18px] font-bold !text-white">
                      World Travel
                    </h4>
                  </div>
                </div>
  
                <p className="mt-6 text-[13.5px] leading-6 !text-white/55">
                  No. 12, Sri Dhamma Mawatha, Colombo 10, Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FinalCTASection;
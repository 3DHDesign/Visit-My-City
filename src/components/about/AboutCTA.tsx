import { FiArrowUpRight } from "react-icons/fi";

const AboutCTA = () => {
  return (
    <section className="bg-[#FCFCFA] py-24">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-[40px] border border-[#EFE7DA] bg-white p-8 text-center shadow-[0_24px_80px_rgba(11,31,51,0.08)] md:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/12 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[52px]">
              Ready to plan your next travel experience?
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              Whether you are exploring Sri Lanka or planning an overseas trip,
              our team is ready to help you create the right journey.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-8 py-4 text-[14px] font-bold !text-white shadow-[0_18px_45px_rgba(11,31,51,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
              >
                Plan Your Trip
                <FiArrowUpRight size={16} />
              </a>

              <a
                href="/journeys"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E9A93B]/45 bg-[#E9A93B]/10 px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E9A93B]"
              >
                View Journeys
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
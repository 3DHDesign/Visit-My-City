import {
  FiAward,
  FiBriefcase,
  FiCheck,
  FiCompass,
  FiGlobe,
  FiHeadphones,
  FiLayers,
  FiShield,
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

const proofPoints = [
  "Established in 2014",
  "Inbound & outbound travel",
  "Certified DMC support",
  "Tailor-made journeys",
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-24 lg:py-32">
      {/* Premium soft background */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[42%] bg-[#0B1F33]" />
      <div className="pointer-events-none absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[32%] h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left editorial panel */}
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[38px] bg-[#0B1F33] p-8 shadow-[0_30px_90px_rgba(11,31,51,0.22)] md:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#2D6A4F]/25 blur-3xl" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B] backdrop-blur">
                  <FiShield size={14} />
                  Why Choose Us
                </span>

                <h2 className="mt-8 text-[38px] font-bold leading-[1.06] !text-white md:text-[54px]">
                  Travel with confidence, from planning to arrival.
                </h2>

                <p className="mt-6 text-[16px] leading-8 !text-white/68">
                  Visit My City combines certified travel expertise, destination
                  knowledge, and reliable coordination to make every journey
                  easier, safer, and more memorable.
                </p>

                <div className="mt-9 grid gap-3">
                  {proofPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
                        <FiCheck size={14} />
                      </span>

                      <p className="text-[14px] font-semibold !text-white/80">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right reason timeline */}
          <div>
            <div className="mb-9 max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Built for better travel
              </p>

              <h3 className="mt-4 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[46px]">
                We handle the details, so travelers can enjoy the journey.
              </h3>
            </div>

            <div className="relative">
              <div className="absolute left-[27px] top-6 hidden h-[calc(100%-3rem)] w-px bg-[#E6DED0] md:block" />

              <div className="grid gap-5">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className="group relative rounded-[30px] border border-[#EFE7DA] bg-white p-5 shadow-[0_16px_50px_rgba(11,31,51,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#E9A93B]/45 hover:shadow-[0_26px_80px_rgba(11,31,51,0.1)] md:ml-16 md:p-6"
                  >
                    <div className="absolute -left-[64px] top-6 hidden h-14 w-14 items-center justify-center rounded-2xl border border-[#EFE7DA] bg-[#FCFCFA] text-[22px] text-[#2D6A4F] shadow-[0_12px_30px_rgba(11,31,51,0.06)] transition-all duration-300 group-hover:border-[#E9A93B]/50 group-hover:bg-[#0B1F33] group-hover:text-[#E9A93B] md:flex">
                      {feature.icon}
                    </div>

                    <div className="flex gap-4 md:hidden">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FCFCFA] text-[22px] text-[#2D6A4F] ring-1 ring-[#EFE7DA]">
                        {feature.icon}
                      </div>

                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                          Reason 0{index + 1}
                        </span>

                        <h4 className="mt-2 text-[21px] font-bold leading-tight !text-[#0B1F33]">
                          {feature.title}
                        </h4>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                        Reason 0{index + 1}
                      </span>

                      <h4 className="mt-2 text-[24px] font-bold leading-tight !text-[#0B1F33]">
                        {feature.title}
                      </h4>
                    </div>

                    <p className="mt-4 text-[15px] leading-7 !text-slate-600 md:max-w-[720px]">
                      {feature.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom premium proof strip */}
        <div className="mt-14 overflow-hidden rounded-[34px] border border-[#EFE7DA] bg-white shadow-[0_24px_80px_rgba(11,31,51,0.08)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 md:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                Destination Management Company
              </p>

              <h3 className="mt-3 text-[28px] font-bold leading-tight !text-[#0B1F33] md:text-[36px]">
                From Sri Lanka’s hidden gems to the world’s iconic cities.
              </h3>

              <p className="mt-4 max-w-2xl text-[15px] leading-7 !text-slate-600">
                Whether it is a family holiday, corporate trip, honeymoon, or
                group journey, our team helps shape the travel plan with care.
              </p>
            </div>

            <div className="grid grid-cols-3 border-t border-[#EFE7DA] lg:border-l lg:border-t-0">
              <div className="p-6 text-center">
                <p className="text-[30px] font-bold !text-[#0B1F33]">2014</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.12em] !text-slate-400">
                  Established
                </p>
              </div>

              <div className="border-x border-[#EFE7DA] p-6 text-center">
                <p className="text-[30px] font-bold !text-[#0B1F33]">2</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.12em] !text-slate-400">
                  Travel Paths
                </p>
              </div>

              <div className="p-6 text-center">
                <p className="text-[30px] font-bold !text-[#0B1F33]">5+</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.12em] !text-slate-400">
                  Credentials
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
import { FiCheck, FiCompass, FiHeadphones, FiShield, FiStar } from "react-icons/fi";

const points = [
  "Tailor-made travel planning based on guest preferences",
  "Strong local knowledge for Sri Lanka inbound tours",
  "Reliable global support for outbound travel needs",
  "Professional service for families, corporates, and groups",
  "Smooth coordination from inquiry to journey completion",
];

const cards = [
  {
    title: "Reliable",
    description: "Planned with care and handled professionally.",
    icon: FiShield,
  },
  {
    title: "Personal",
    description: "Every journey is shaped around the traveler.",
    icon: FiCompass,
  },
  {
    title: "Supportive",
    description: "Friendly assistance before and during travel.",
    icon: FiHeadphones,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-wide">
        <div className="overflow-hidden rounded-[34px] bg-[#0B1F33] shadow-[0_26px_80px_rgba(11,31,51,0.12)]">
          <div className="grid lg:grid-cols-[1.05fr_0.85fr]">
            {/* Left content */}
            <div className="relative p-7 md:p-10 lg:p-12">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/15 blur-3xl" />
              <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-[#2D6A4F]/20 blur-3xl" />

              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Why Choose Us
                </p>

                <h2 className="mt-4 max-w-3xl text-[34px] font-bold leading-tight !text-white md:text-[48px]">
                  Travel planning with trust, care, and attention to detail.
                </h2>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 !text-white/70 md:text-[16px]">
                  We make travel simple, organized, and meaningful. Every
                  itinerary is planned around the traveler’s comfort,
                  expectations, timing, and budget.
                </p>

                <div className="mt-8 grid gap-3">
                  {points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
                        <FiCheck size={14} />
                      </span>

                      <p className="text-[14px] leading-6 !text-white/78 md:text-[15px]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right cards */}
            <div className="bg-white/[0.06] p-5 md:p-6 lg:p-7">
              <div className="grid h-full gap-4 md:grid-cols-3 lg:grid-cols-1">
                {cards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[24px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                    >
                      <Icon className="text-[#E9A93B]" size={26} />

                      <h3 className="mt-5 text-[20px] font-bold !text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[14px] leading-7 !text-white/62">
                        {item.description}
                      </p>
                    </div>
                  );
                })}

                <div className="rounded-[24px] border border-[#E9A93B]/25 bg-[#E9A93B]/12 p-6 backdrop-blur">
                  <FiStar className="text-[#E9A93B]" size={26} />

                  <h3 className="mt-5 text-[20px] font-bold !text-white">
                    Since 2014
                  </h3>

                  <p className="mt-3 text-[14px] leading-7 !text-white/62">
                    Built with experience in Sri Lanka and worldwide travel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
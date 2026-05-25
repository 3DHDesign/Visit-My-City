import { FiCheck, FiShield, FiStar, FiTrendingUp } from "react-icons/fi";

const points = [
  "Tailor-made travel planning based on guest preferences",
  "Strong local knowledge for Sri Lanka inbound tours",
  "Reliable global support for outbound travel needs",
  "Professional service for families, corporates, and groups",
  "Smooth coordination from inquiry to journey completion",
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <div className="overflow-hidden rounded-[40px] bg-[#0B1F33]">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative p-8 md:p-12 lg:p-14">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/15 blur-3xl" />

              <div className="relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Why Choose Us
                </p>

                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[50px]">
                  Travel planning with trust, care, and attention to detail.
                </h2>

                <p className="mt-5 max-w-2xl text-[16px] leading-8 !text-white/70">
                  We focus on making travel simple, organized, and meaningful.
                  Every itinerary is planned with the traveler’s comfort,
                  expectations, timing, and budget in mind.
                </p>

                <div className="mt-9 grid gap-4">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
                        <FiCheck size={14} />
                      </span>

                      <p className="text-[15px] leading-7 !text-white/75">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 p-6 md:grid-cols-3 lg:grid-cols-1 lg:p-8">
              <div className="rounded-[28px] bg-white/8 p-7 backdrop-blur">
                <FiShield className="text-[#E9A93B]" size={28} />
                <h3 className="mt-5 text-[20px] font-bold !text-white">
                  Reliable
                </h3>
                <p className="mt-3 text-[14px] leading-7 !text-white/60">
                  Planned with care and handled professionally.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/8 p-7 backdrop-blur">
                <FiStar className="text-[#E9A93B]" size={28} />
                <h3 className="mt-5 text-[20px] font-bold !text-white">
                  Premium
                </h3>
                <p className="mt-3 text-[14px] leading-7 !text-white/60">
                  Designed for comfort, quality, and experience.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/8 p-7 backdrop-blur">
                <FiTrendingUp className="text-[#E9A93B]" size={28} />
                <h3 className="mt-5 text-[20px] font-bold !text-white">
                  Growing
                </h3>
                <p className="mt-3 text-[14px] leading-7 !text-white/60">
                  Built under Virelio with a modern travel vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
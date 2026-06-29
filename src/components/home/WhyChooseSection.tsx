import type { ReactNode } from "react";
import {
  FiAward,
  FiBriefcase,
  FiCompass,
  FiGlobe,
  FiHeadphones,
  FiLayers,
} from "react-icons/fi";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Certified Expertise",
    description:
      "Accredited travel support backed by trusted industry credentials.",
    icon: <FiAward />,
  },
  {
    title: "Tailor-Made Planning",
    description:
      "Personalized inbound and outbound journeys planned around each traveler.",
    icon: <FiCompass />,
  },
  {
    title: "Two Travel Paths",
    description:
      "Sri Lanka tours for global travelers and overseas holidays for Sri Lankans.",
    icon: <FiGlobe />,
  },
  {
    title: "Complete Services",
    description:
      "Flights, hotels, transfers, insurance, guides, excursions, and visa support.",
    icon: <FiLayers />,
  },
  {
    title: "Corporate & Leisure",
    description:
      "Support for business trips, MICE, honeymoons, families, and group tours.",
    icon: <FiBriefcase />,
  },
  {
    title: "Reliable Support",
    description:
      "Friendly assistance before and during the journey for smoother travel.",
    icon: <FiHeadphones />,
  },
];

const stats = [
  { value: "2014", label: "Established" },
  { value: "2", label: "Travel Paths" },
  { value: "5+", label: "Credentials" },
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-40 top-20 h-[360px] w-[360px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[360px] w-[360px] rounded-full bg-[#E9A93B]/15 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-[1180px]">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Why Choose Visit My City
              </p>

              <h2 className="mt-4 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[46px]">
                Travel made easier, safer, and more personal.
              </h2>
            </div>

            <p className="max-w-2xl text-[16px] leading-8 !text-slate-600">
              From Sri Lanka experiences to overseas holidays, our team brings
              together certified travel expertise, destination knowledge, and
              reliable coordination for every journey.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-[28px] border border-[#EFE7DA] bg-white p-6 shadow-[0_14px_45px_rgba(11,31,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/50 hover:shadow-[0_22px_65px_rgba(11,31,51,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2D6A4F]/10 text-[22px] text-[#2D6A4F] transition-all duration-300 group-hover:bg-[#0B1F33] group-hover:text-[#E9A93B]">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-[20px] font-bold leading-tight !text-[#0B1F33]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[14px] leading-7 !text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>

          {/* Compact proof strip */}
          <div className="mt-8 grid overflow-hidden rounded-[28px] border border-[#EFE7DA] bg-white shadow-[0_18px_55px_rgba(11,31,51,0.06)] sm:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`p-6 text-center ${
                  index === 1 ? "border-y border-[#EFE7DA] sm:border-x sm:border-y-0" : ""
                }`}
              >
                <p className="text-[30px] font-bold !text-[#0B1F33]">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] !text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCamera,
  FiHeart,
  FiMap,
  FiSun,
  FiUmbrella,
  FiUsers,
  FiWind,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

type Experience = {
  title: string;
  label: string;
  description: string;
  icon: IconType;
  image: string;
  size: "large" | "wide" | "small";
};

const experiences: Experience[] = [
  {
    title: "Wildlife & Safari",
    label: "Nature",
    description:
      "Yala, Minneriya, elephants, leopards, birdlife, and national park experiences.",
    icon: FiCamera,
    image:"https://images.unsplash.com/photo-1609242030544-f2a37bab739c?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "large",
  },
  {
    title: "Hill Country Escapes",
    label: "Scenic",
    description:
      "Tea estates, misty mountains, waterfalls, scenic train routes, and cool highland stays.",
    icon: FiMap,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Nine%20Arch%20Bridge%20in%20Ella.jpg?width=1200",
    size: "small",
  },
  {
    title: "Beach & Leisure",
    label: "Coastal",
    description:
      "Golden beaches, ocean stays, island relaxation, water activities, and coastal sunsets.",
    icon: FiUmbrella,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    title: "Honeymoon Journeys",
    label: "Romantic",
    description:
      "Private escapes, scenic hotels, romantic experiences, and memorable couple travel.",
    icon: FiHeart,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Marawila%20SL%20Beach.jpg?width=1600",
    size: "wide",
  },
  {
    title: "MICE & Business Travel",
    label: "Corporate",
    description:
      "Meetings, incentives, conferences, exhibitions, executive trips, and group coordination.",
    icon: FiBriefcase,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
  {
    title: "Adventure & Sports",
    label: "Active",
    description:
      "Hiking, rafting, cycling, outdoor activities, and active holiday experiences.",
    icon: FiWind,
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=85",
    size: "small",
  },
];

const quickExperiences = [
  {
    icon: FiSun,
    title: "Wellness",
  },
  {
    icon: FiUsers,
    title: "Group Tours",
  },
  {
    icon: FiHeart,
    title: "Honeymoon",
  },
  {
    icon: FiBriefcase,
    title: "Corporate",
  },
];

const ExperiencesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-4 lg:py-8">
      {/* soft background */}
      <div className="pointer-events-none absolute -left-36 top-20 h-[420px] w-[420px] rounded-full bg-white/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[460px] w-[460px] rounded-full bg-[#D9B05F]/12 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Top Header */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] !text-[#B98525]">
              Travel Experiences
            </p>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.05] !text-[#0B1F33] md:text-[58px]">
              Not just tours.
              <span className="block !text-[#2D6A4F]">
                Experiences that feel personal.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-[650px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
              From wildlife and tea country to beaches, honeymoons, business
              travel, and adventure, every journey can be shaped around the
              traveler’s style, pace, and purpose.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {quickExperiences.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-[#E3D7C4] bg-white px-4 py-2.5 text-[13px] font-bold !text-[#0B1F33] shadow-[0_10px_30px_rgba(11,31,51,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9B05F]/60 hover:bg-[#FFF9EF]"
                  >
                    <Icon
                      size={15}
                      className="text-[#2D6A4F] transition-colors group-hover:text-[#B98525]"
                    />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bento Layout */}
        <div className="mt-16 grid auto-rows-[280px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((item) => {
            const Icon = item.icon;

            const sizeClass =
              item.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : item.size === "wide"
                ? "md:col-span-2"
                : "";

            return (
              <Link
                key={item.title}
                to="/contact"
                className={`group relative overflow-hidden rounded-[34px] bg-white shadow-[0_20px_60px_rgba(11,31,51,0.08)] ring-1 ring-[#EFE7DA] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(11,31,51,0.13)] ${sizeClass}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/78 via-[#0B1F33]/20 to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-white/16 px-4 py-2 backdrop-blur-md">
                  <Icon size={15} className="text-[#F7C76D]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] !text-white">
                    {item.label}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className={`font-bold leading-tight !text-white ${
                      item.size === "large"
                        ? "text-[34px] md:text-[46px]"
                        : "text-[25px]"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-3 leading-7 !text-white/75 ${
                      item.size === "large"
                        ? "max-w-[520px] text-[15.5px]"
                        : "text-[14px]"
                    }`}
                  >
                    {item.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold !text-[#F7C76D]">
                    Plan this experience
                    <FiArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-8 rounded-[34px] border border-[#E3D7C4] bg-white p-6 shadow-[0_18px_55px_rgba(11,31,51,0.06)] md:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#B98525]">
                Custom Experience Planning
              </p>

              <h3 className="mt-3 text-[26px] font-bold leading-tight !text-[#0B1F33] md:text-[36px]">
                Have a different travel idea in mind?
              </h3>

              <p className="mt-3 max-w-2xl text-[15px] leading-7 !text-slate-600">
                Tell us your travel mood, destination, dates, group size, and
                budget. We’ll shape the right experience for you.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white shadow-[0_16px_40px_rgba(11,31,51,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
            >
              Customize Experience
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
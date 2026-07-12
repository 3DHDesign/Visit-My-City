import { useEffect } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCompass,
  FiGlobe,
  FiMapPin,
  FiPhone,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85",

  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=85",

  azerbaijan:
    "https://images.unsplash.com/photo-1743586652972-0f8994efe810?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  thailand:
    "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=85",

  malaysia:
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=85",

  singapore:
    "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85",

  india:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85",
};

const destinations = [
  
  {
    id: "malaysia",
    title: "Malaysia Packages",
    icon: "🌴",
    image: IMAGES.malaysia,
    subtitle: "City breaks & tropical stays",
    desc: "Explore Malaysia through Kuala Lumpur, shopping, family attractions, cultural experiences, Batu Caves, city sightseeing, and tropical leisure options.",
    highlights: [
      "Kuala Lumpur",
      "Batu Caves",
      "Shopping tours",
      "Family attractions",
    ],
  },
  {
    id: "singapore",
    title: "Singapore Packages",
    icon: "🦁",
    image: IMAGES.singapore,
    subtitle: "Modern city experiences",
    desc: "Enjoy Singapore with modern attractions, clean city experiences, Sentosa, gardens, shopping, family entertainment, and well-planned short holidays.",
    highlights: [
      "Sentosa",
      "Gardens by the Bay",
      "City attractions",
      "Family experiences",
    ],
  },
  {
    id: "thailand",
    title: "Thailand Packages",
    icon: "🏯",
    image: IMAGES.thailand,
    subtitle: "Temples, islands & nightlife",
    desc: "Plan a Thailand holiday with Bangkok city experiences, temples, shopping, island getaways, beaches, nightlife, family activities, and leisure stays.",
    highlights: [
      "Bangkok city",
      "Island stays",
      "Temple visits",
      "Beach leisure",
    ],
  },
  {
    id: "dubai",
    title: "Dubai Packages",
    icon: "🌆",
    image: IMAGES.dubai,
    subtitle: "City luxury & desert escapes",
    desc: "Experience Dubai with modern city attractions, luxury shopping, desert safaris, skyline views, family entertainment, and premium holiday experiences.",
    highlights: [
      "Desert safari",
      "City tour",
      "Shopping experiences",
      "Family attractions",
    ],
  },
  {
    id: "azerbaijan",
    title: "Azerbaijan Packages",
    icon: "🏔️",
    image: IMAGES.azerbaijan,
    subtitle: "Baku, mountains & culture",
    desc: "Discover Azerbaijan through Baku city experiences, mountain scenery, cultural landmarks, old town streets, modern architecture, and scenic countryside routes.",
    highlights: [
      "Baku city tour",
      "Old city walks",
      "Mountain routes",
      "Cultural landmarks",
    ],
  },
  {
    id: "india",
    title: "India Packages",
    icon: "🕌",
    image: IMAGES.india,
    subtitle: "Culture, pilgrimage & family tours",
    desc: "Arrange India tours for culture, pilgrimage, shopping, family holidays, heritage sites, city experiences, and customized travel routes.",
    highlights: [
      "Pilgrimage tours",
      "Heritage sites",
      "Family holidays",
      "Shopping routes",
    ],
  },
];

const whyChoose = [
  "Outbound tour planning for popular international destinations",
  "Custom packages based on travel dates and budget",
  "Hotel, transfer and sightseeing arrangement support",
  "Family, honeymoon, group and leisure travel options",
  "Visa and travel document guidance where applicable",
  "Quotation prepared according to guest requirements",
];

const ExploreTheWorld = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const timer = setTimeout(() => {
      const section = document.querySelector(location.hash);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main className="bg-[#FCFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Explore the world with Visit My City"
            className="h-full w-full object-cover"
          />

          {/* Cleaner balanced overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2C]/88 via-[#071A2C]/48 to-[#071A2C]/10" />

          {/* Subtle bottom depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/35 via-transparent to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
              Explore The World
            </p>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
              Outbound travel packages for unforgettable holidays.
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/85">
              Visit My City arranges international tours for families, couples,
              groups, honeymooners, and leisure travelers with customized
              routes, hotel options, transfers, sightseeing, and travel support.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#destinations"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                View Destinations
                <FiArrowUpRight size={16} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
              >
                Plan My Trip
                <FiCompass size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Outbound Travel
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                From city escapes to island holidays, we arrange your journey.
              </h2>

              <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                Whether guests want Dubai, Azerbaijan, Thailand, Malaysia,
                Singapore, India or another international destination, Visit My
                City can prepare travel plans based on the preferred dates,
                budget, hotel category, number of guests and travel style.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div
                  key={item}
                  className="group flex items-start gap-3 rounded-[24px] border border-[#E9E1D5] bg-white p-5 shadow-[0_8px_20px_rgba(11,31,51,0.05),0_18px_45px_rgba(11,31,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/35 hover:shadow-[0_14px_30px_rgba(11,31,51,0.08),0_28px_60px_rgba(11,31,51,0.10)]"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                    <FiCheck size={14} />
                  </span>

                  <p className="text-[15px] font-semibold leading-7 !text-[#0B1F33]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="bg-white py-8">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Popular Destinations
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              Choose your next international destination.
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              These destination categories can be arranged as group packages,
              private holidays, honeymoon trips, family tours, or custom travel
              plans.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <Link
                id={item.id}
                key={item.title}
                to={`/explore-the-world/${item.id}`}
                className="group scroll-mt-28 overflow-hidden rounded-[32px] border border-[#E9E1D5] bg-white shadow-[0_8px_20px_rgba(11,31,51,0.06),0_24px_55px_rgba(11,31,51,0.09)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9A93B]/40 hover:shadow-[0_14px_30px_rgba(11,31,51,0.10),0_34px_75px_rgba(11,31,51,0.14)]"
              >
                {/* Image */}
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/90 via-[#071A2C]/20 to-transparent" />

                  {/* Destination Icon */}
                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/20 bg-[#E9A93B] text-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                    {item.icon}
                  </span>

                  {/* Image Content */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] !text-white/75">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 text-[28px] font-bold !text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative overflow-hidden bg-gradient-to-br from-white to-[#FCFAF6] p-6">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#E9A93B]/10 blur-3xl" />

                  <div className="relative z-10">
                    <p className="text-[15px] leading-8 !text-slate-600">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.highlights.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-[#2D6A4F]/10 bg-[#2D6A4F]/7 px-4 py-2 text-[13px] font-semibold !text-[#2D6A4F]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 inline-flex items-center gap-3 text-[14px] font-bold !text-[#0B1F33]">
                      View Packages

                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Styles */}
      <section className="bg-[#FCFCFA] py-8">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Global Destinations */}
            <div className="group rounded-[32px] border border-[#E9E1D5] bg-white p-8 shadow-[0_8px_20px_rgba(11,31,51,0.05),0_20px_50px_rgba(11,31,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/35 hover:shadow-[0_14px_30px_rgba(11,31,51,0.08),0_30px_65px_rgba(11,31,51,0.11)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0B1F33] text-[#E9A93B] shadow-[0_10px_25px_rgba(11,31,51,0.18)]">
                <FiGlobe size={22} />
              </div>

              <h3 className="mt-6 text-[24px] font-bold !text-[#0B1F33]">
                Global Destinations
              </h3>

              <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                Explore popular outbound destinations with flexible travel
                planning, sightseeing, hotels, transfers, and support.
              </p>
            </div>

            {/* Every Traveler */}
            <div className="group rounded-[32px] border border-[#E9E1D5] bg-white p-8 shadow-[0_8px_20px_rgba(11,31,51,0.05),0_20px_50px_rgba(11,31,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/35 hover:shadow-[0_14px_30px_rgba(11,31,51,0.08),0_30px_65px_rgba(11,31,51,0.11)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0B1F33] text-[#E9A93B] shadow-[0_10px_25px_rgba(11,31,51,0.18)]">
                <FiUsers size={22} />
              </div>

              <h3 className="mt-6 text-[24px] font-bold !text-[#0B1F33]">
                For Every Traveler
              </h3>

              <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                Packages can be arranged for families, couples, honeymooners,
                small groups, corporate travelers, and leisure guests.
              </p>
            </div>

            {/* Custom Planning */}
            <div className="group rounded-[32px] border border-[#E9E1D5] bg-white p-8 shadow-[0_8px_20px_rgba(11,31,51,0.05),0_20px_50px_rgba(11,31,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/35 hover:shadow-[0_14px_30px_rgba(11,31,51,0.08),0_30px_65px_rgba(11,31,51,0.11)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#0B1F33] text-[#E9A93B] shadow-[0_10px_25px_rgba(11,31,51,0.18)]">
                <FiMapPin size={22} />
              </div>

              <h3 className="mt-6 text-[24px] font-bold !text-[#0B1F33]">
                Custom Planning
              </h3>

              <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                Share travel dates, guest count, preferred hotel category and
                budget. Our team will prepare a suitable quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center shadow-[0_18px_50px_rgba(11,31,51,0.12),0_40px_90px_rgba(11,31,51,0.15)] md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                <FiStar size={14} />
                Start Planning
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                Need an outbound tour package arranged?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 !text-white/70">
                Share the destination, travel dates, number of guests, hotel
                preference, special interests, and budget. Our team will prepare
                a suitable international travel package and quotation.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Send Inquiry
                  <FiArrowUpRight size={16} />
                </Link>

                {/* Landline */}
                <a
                  href="tel:+94114600900"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  +94 11 460 0900
                </a>

                {/* Mobile */}
                <a
                  href="tel:+94766192447"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  +94 76 619 2447
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreTheWorld;
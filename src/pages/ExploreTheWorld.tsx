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
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/88 to-[#0B1F33]/35" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
              Explore The World
            </p>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
              Outbound travel packages for unforgettable holidays.
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
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
      <section className="py-24">
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
                  className="flex items-start gap-3 rounded-[24px] border border-[#EFE7DA] bg-white p-5 shadow-[0_14px_40px_rgba(11,31,51,0.04)]"
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
      <section id="destinations" className="bg-white py-24">
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((item) => (
              <Link
                id={item.id}
                key={item.title}
                to={`/explore-the-world/${item.id}`}
                className="group scroll-mt-28 overflow-hidden rounded-[32px] border border-[#EFE7DA] bg-[#FCFCFA] shadow-[0_16px_50px_rgba(11,31,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(11,31,51,0.12)]"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-[#0B1F33]/10 to-transparent" />

                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B] text-[22px]">
                    {item.icon}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[13px] font-bold uppercase tracking-[0.14em] !text-white/75">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 text-[28px] font-bold !text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[15px] leading-8 !text-slate-600">
                    {item.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.highlights.map((point) => (
                      <span
                        key={point}
                        className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold !text-[#2D6A4F]"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Styles */}
      <section className="bg-[#FCFCFA] py-24">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[32px] border border-[#EFE7DA] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/15 text-[#E9A93B]">
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

            <div className="rounded-[32px] border border-[#EFE7DA] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/15 text-[#E9A93B]">
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

            <div className="rounded-[32px] border border-[#EFE7DA] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/15 text-[#E9A93B]">
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
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                <FiStar size={14} />
                Start Planning
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                Need an outbound tour package arranged?
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-white/70">
                Share the destination, travel dates, number of guests, hotel
                preference, special interests, and budget. Our team will prepare
                a suitable international travel package and quotation.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Send Inquiry
                  <FiArrowUpRight size={16} />
                </Link>

                <a
                  href="tel:+94114327637"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  Call +94 11 432 7637
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
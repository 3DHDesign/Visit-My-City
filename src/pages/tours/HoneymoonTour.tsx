import {
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiMapPin,
  FiPhone,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const IMAGES = {
  hero: "/images/tours/honeymoon/honeymoon-hero.jpg",
  heroMobile: "/images/tours/honeymoon/honeymoon-hero-mobile.jpg",
  card: "/images/tours/honeymoon/honeymoon-private-tour-card.jpg",

  arrival: "/images/tours/honeymoon/day-01-arrival-welcome.jpg",
  sigiriya: "/images/tours/honeymoon/day-02-sigiriya-cultural-escape.jpg",
  kandy: "/images/tours/honeymoon/day-03-kandy-cultural-moments.jpg",
  nuwaraEliya: "/images/tours/honeymoon/day-04-tea-country-romance.jpg",
  ellaTrain: "/images/tours/honeymoon/day-05-scenic-journey-ella-train.jpg",


  beach:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",

  galle: "/images/tours/honeymoon/day-08-galle-coastal-experiences.jpg",
  departure: "/images/tours/honeymoon/day-09-departure.jpg",
};

const itinerary = [
  {
    day: "Day 01",
    title: "Arrival & Romantic Island Welcome",
    location: "Airport → Negombo / Colombo",
    image: IMAGES.arrival,
    desc: "On arrival in Sri Lanka, the couple will be welcomed at the airport and transferred to Negombo or Colombo for a relaxed first night. Depending on arrival time, a beach walk, city orientation, or hotel relaxation can be arranged.",
  },
  {
    day: "Day 02",
    title: "Cultural Escape to Sigiriya",
    location: "Negombo / Colombo → Sigiriya",
    image: IMAGES.sigiriya,
    desc: "Travel towards Sri Lanka’s cultural region with optional stops such as Pinnawala, Dambulla Cave Temple, or village experiences. Couples can enjoy a peaceful stay near Sigiriya with nature, heritage, and scenic surroundings.",
  },
  {
    day: "Day 03",
    title: "Sigiriya, Pidurangala & Kandy",
    location: "Sigiriya → Dambulla → Kandy",
    image: IMAGES.kandy,
    desc: "Start the day with Sigiriya Rock Fortress or Pidurangala viewpoint, then continue to Kandy. In Kandy, couples can enjoy lake views, cultural experiences, city viewpoints, and the Temple of the Sacred Tooth Relic.",
  },
  {
    day: "Day 04",
    title: "Tea Country Romance",
    location: "Kandy → Nuwara Eliya",
    image: IMAGES.nuwaraEliya,
    desc: "Travel through misty mountains, tea plantations, waterfalls, and scenic roads towards Nuwara Eliya. Suggested experiences include a tea factory visit, Gregory Lake, colonial-style town views, and relaxed hill-country sightseeing.",
  },
  {
    day: "Day 05",
    title: "Scenic Journey to Ella",
    location: "Nuwara Eliya → Ella",
    image: IMAGES.ellaTrain,
    desc: "Continue to Ella, one of Sri Lanka’s most scenic hill-country destinations. The route can include a scenic train experience, Nine Arches Bridge, Ravana Falls, Little Adam’s Peak, and peaceful viewpoints.",
  },

  {
    day: "Day 06",
    title: "Beach Getaway",
    location: "Ella → Mirissa / Bentota / Unawatuna",
    image: IMAGES.beach,
    desc: "Travel towards Sri Lanka’s southern coastline for a romantic beach stay. Couples can relax by the ocean, enjoy resort facilities, visit Mirissa, Bentota, Unawatuna, or another preferred coastal destination.",
  },
  {
    day: "Day 07",
    title: "Galle Fort & Coastal Experiences",
    location: "Down South",
    image: IMAGES.galle,
    desc: "Enjoy a coastal day with optional experiences such as Galle Fort, Coconut Tree Hill, Secret Beach, Madu River boat ride, turtle hatchery, sunset viewpoints, cafés, and relaxed beach time.",
  },
  {
    day: "Day 08",
    title: "Departure",
    location: "Down South → Airport",
    image: IMAGES.departure,
    desc: "After a relaxed final morning, the couple will be transferred to Bandaranaike International Airport for departure. The final day plan will be arranged based on flight time and preferred stopovers.",
  },
];

const highlights = [
  "Private honeymoon-style Sri Lanka itinerary",
  "Airport welcome and relaxed first-night arrangement",
  "Sigiriya, Dambulla and cultural heritage options",
  "Kandy city, lake views and cultural experiences",
  "Tea country, waterfalls and Nuwara Eliya scenery",
  "Ella, Nine Arches Bridge and mountain viewpoints",
  "Optional scenic train journey through the hill country",
  "Romantic beach stay in Mirissa, Bentota or Unawatuna",
  "Galle Fort, sunset spots and coastal add-ons",
  "Custom hotels, route and pace based on couple preference",
];

const includes = [
  "Custom honeymoon itinerary planning",
  "Private air-conditioned transportation",
  "English-speaking chauffeur guide",
  "Airport pickup and departure transfer",
  "Romantic hotel and resort options",
  "Flexible sightseeing schedule",
  "Optional train and beach experience support",
  "Quotation based on dates and hotel category",
];

const tourFacts = [
  {
    icon: FiCalendar,
    label: "Duration",
    value: "Flexible Duration",
  },
  {
    icon: FiMapPin,
    label: "Route",
    value: "Sigiriya, Kandy, Nuwara Eliya, Ella & Beach",
  },
  {
    icon: FiUsers,
    label: "Best For",
    value: "Couples & honeymoon travelers",
  },
  {
    icon: FiClock,
    label: "Tour Style",
    value: "Private romantic getaway",
  },
];

const HoneymoonTour = () => {
  return (
    <main className="bg-[#FCFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-36">
      <div className="absolute inset-0">
  <picture className="block h-full w-full">
    <source media="(max-width: 767px)" srcSet={IMAGES.heroMobile} />

    <img
      src={IMAGES.hero}
      alt="Cultural Triangle Tour Sri Lanka"
      className="h-full w-full object-cover object-center md:object-[50%_45%]"
    />
  </picture>

  <div className="absolute inset-0 bg-gradient-to-r from-[#071A2C]/80 via-[#071A2C]/45 to-[#071A2C]/15 md:from-[#071A2C]/70 md:via-[#071A2C]/30 md:to-transparent" />
</div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
              Available On Request
            </p>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:text-[68px]">
              Honeymoon Sri Lanka Tour
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              A romantic Sri Lanka island getaway designed with private travel,
              scenic hill country, cultural highlights, beautiful beaches,
              relaxed pacing, and memorable experiences for couples.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Plan This Tour
                <FiArrowUpRight size={16} />
              </Link>

              <a
                href="tel:+94 114 600 900"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
              >
                <FiPhone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      {/* Tour Facts */}
      <section className="relative z-20 -mt-10 px-4 md:-mt-14">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tourFacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-[26px] border border-[#E9E1D5] bg-white p-6 shadow-[0_14px_35px_rgba(11,31,51,0.08),0_30px_70px_rgba(11,31,51,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9A93B]/45 hover:shadow-[0_20px_45px_rgba(11,31,51,0.12),0_40px_90px_rgba(11,31,51,0.12)]"
                >
                  {/* Decorative background */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E9A93B]/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                  {/* Top accent */}
                  <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#E9A93B] to-[#2D6A4F]" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-[18px] bg-[#0B1F33] text-[#E9A93B] shadow-[0_10px_25px_rgba(11,31,51,0.20)] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-[#E9A93B]">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-[16px] font-bold leading-6 !text-[#0B1F33]">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Tour Overview
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                A romantic island journey across culture, mountains, and
                beaches.
              </h2>

              <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                The Honeymoon Sri Lanka Tour is created for couples who want a
                private, comfortable and scenic holiday. The journey can combine
                ancient landmarks, misty tea country, Ella viewpoints, soft
                adventure, luxury-style stays, and relaxing beach days.
              </p>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                This tour is arranged on request based on travel dates, hotel
                preference, preferred destinations, activity level, special
                arrangements, and budget.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                      <FiCheck size={14} />
                    </span>

                    <p className="text-[15px] leading-7 !text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-[#EFE7DA] bg-white p-6 shadow-[0_20px_70px_rgba(11,31,51,0.07)]">
              <div className="overflow-hidden rounded-[26px]">
                <img
                  src={IMAGES.card}
                  alt="Honeymoon Sri Lanka private tour"
                  className="h-[280px] w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                  <FiStar size={15} />
                  Recommended For
                </p>

                <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                  Couples who want privacy, scenery, and comfort
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                  Ideal for honeymooners and couples looking for a peaceful Sri
                  Lanka route with scenic places, private transport, beautiful
                  hotels, and relaxed island experiences.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:bg-[#2D6A4F]"
                >
                  Request This Tour
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Suggested Route
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              Romantic Sri Lanka Experiences
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              This sample route can be customized according to the couple’s travel
              dates, preferred hotel style, destination interests, and departure
              flight time.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid gap-7">
              {itinerary.map((item, index) => (
                <article
                  key={item.day}
                  className="group overflow-hidden rounded-[32px] border border-[#E9E1D5] bg-white shadow-[0_8px_20px_rgba(11,31,51,0.06),0_24px_55px_rgba(11,31,51,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/40 hover:shadow-[0_14px_30px_rgba(11,31,51,0.09),0_34px_75px_rgba(11,31,51,0.14)]"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-[0.82fr_1.18fr] ${index % 2 === 1
                        ? "lg:grid-cols-[1.18fr_0.82fr]"
                        : ""
                      }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative min-h-[260px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/45 via-transparent to-transparent" />

                      <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#071A2C]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B] shadow-[0_8px_25px_rgba(0,0,0,0.20)] backdrop-blur-md">
                        {item.day}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`relative flex min-h-[260px] flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-[#FCFAF6] p-6 md:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""
                        }`}
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#E9A93B]/10 blur-3xl" />

                      <div className="relative z-10">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] !text-[#E9A93B]">
                          {item.day}
                        </p>

                        <h3 className="mt-2 text-[27px] font-bold leading-tight !text-[#0B1F33] md:text-[28px]">
                          {item.title}
                        </h3>

                        <div className="mt-4 inline-flex max-w-full items-start gap-2 rounded-full border border-[#2D6A4F]/12 bg-[#2D6A4F]/8 px-4 py-2">
                          <FiMapPin
                            size={15}
                            className="mt-0.5 shrink-0 text-[#2D6A4F]"
                          />

                          <p className="text-[14px] font-semibold leading-5 !text-[#2D6A4F]">
                            {item.location}
                          </p>
                        </div>

                        <p className="mt-5 text-[15px] leading-8 !text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-[#FCFCFA] py-8">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Custom Arrangements
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
                A honeymoon journey arranged around comfort and memorable
                moments.
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Exact inclusions, hotels, room categories, meals, entrance
                tickets, train arrangements, coastal experiences, and special
                requests will be confirmed in the final quotation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[24px] border border-[#EFE7DA] bg-white p-5 shadow-[0_14px_40px_rgba(11,31,51,0.04)]"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
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

      {/* CTA */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Customize This Tour
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                Want to arrange a Sri Lanka honeymoon getaway?
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-white/70">
                Share the travel dates, number of nights, hotel preference,
                preferred destinations, special requests, and budget. Our team
                will prepare a romantic Sri Lanka itinerary and quotation.
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
                  href="tel:+94 114 600 900"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  Call +94 114 600 900
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HoneymoonTour;
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
  hero: "/images/tours/hill-country/hill-country-tour-hero.jpg",
  card: "/images/tours/hill-country/hill-country-private-tour-card.jpg",

  airport: "/images/tours/hill-country/day-01-arrival-sri-lanka.jpg",
  kandy: "/images/tours/hill-country/day-02-journey-to-kandy.jpg",
  nuwaraEliya: "/images/tours/hill-country/day-03-kandy-to-nuwara-eliya.jpg",
  ellaTrain: "/images/tours/hill-country/day-04-nuwara-eliya-to-ella.jpg",
  ella: "/images/tours/hill-country/day-05-ella-highlights.jpg",
  downSouth: "/images/tours/hill-country/day-06-hill-country-to-down-south.jpg",
  departure:
    "/images/tours/hill-country/day-07-down-south-leisure-departure.jpg",
};

const itinerary = [
  {
    day: "Day 01",
    title: "Arrival in Sri Lanka",
    location: "Airport → Colombo / Negombo",
    image: IMAGES.airport,
    desc: "On arrival at Bandaranaike International Airport, guests will be welcomed and transferred to Colombo or Negombo for the first overnight stay. Depending on arrival time, a short city orientation, beach walk, or relaxed hotel check-in can be arranged.",
  },
  {
    day: "Day 02",
    title: "Journey to Kandy",
    location: "Colombo / Negombo → Kandy",
    image: IMAGES.kandy,
    desc: "Travel towards Kandy, Sri Lanka’s cultural capital. Suggested experiences can include Pinnawala Elephant Orphanage, Peradeniya Botanical Garden, Kandy Lake, a cultural dance show, city viewpoints, and the Temple of the Sacred Tooth Relic.",
  },
  {
    day: "Day 03",
    title: "Kandy to Nuwara Eliya",
    location: "Kandy → Tea Country → Nuwara Eliya",
    image: IMAGES.nuwaraEliya,
    desc: "Continue into Sri Lanka’s cool hill country through scenic tea estates, waterfalls, and mountain roads. Guests can visit a tea plantation and factory, Ramboda Falls, Gregory Lake, Victoria Park, and the colonial-style town of Nuwara Eliya.",
  },
  {
    day: "Day 04",
    title: "Nuwara Eliya to Ella",
    location: "Nuwara Eliya → Ella",
    image: IMAGES.ellaTrain,
    desc: "Travel towards Ella, one of Sri Lanka’s most loved hill-country destinations. The route can include the scenic train experience, mountain viewpoints, tea landscapes, waterfalls, and relaxed time in Ella town.",
  },
  {
    day: "Day 05",
    title: "Ella Highlights",
    location: "Ella",
    image: IMAGES.ella,
    desc: "Explore Ella’s signature attractions including Nine Arches Bridge, Little Adam’s Peak, Ravana Falls, Ella Gap viewpoints, and optional adventure activities. This day is ideal for photography, nature, soft hiking, and relaxed sightseeing.",
  },
  {
    day: "Day 06",
    title: "Hill Country to Down South",
    location: "Ella → Galle / Mirissa / Bentota",
    image: IMAGES.downSouth,
    desc: "After the hill-country experience, travel towards Sri Lanka’s southern coastline. Depending on the selected route, guests can relax in Mirissa, Unawatuna, Galle, Bentota, or another beach destination.",
  },
  {
    day: "Day 07",
    title: "Down South Leisure & Departure",
    location: "Down South → Airport",
    image: IMAGES.departure,
    desc: "Enjoy a relaxed final coastal experience before departure. Suggested stops can include Galle Fort, Coconut Tree Hill, Secret Beach, Madu River, or Kosgoda Turtle Hatchery depending on flight time. Guests will then be transferred to the airport for departure.",
  },
];

const highlights = [
  "Airport arrival and private guided transfers",
  "Kandy city tour and cultural experiences",
  "Temple of the Sacred Tooth Relic and Kandy Lake",
  "Tea plantations, tea factory visit and waterfalls",
  "Nuwara Eliya city tour and cool mountain climate",
  "Ella, Nine Arches Bridge and Little Adam’s Peak",
  "Optional scenic train journey through the hill country",
  "Down South beach extension before departure",
  "Galle Fort, Mirissa, Bentota or coastal add-ons",
  "Flexible itinerary based on travel dates and budget",
];

const includes = [
  "Custom hill-country itinerary planning",
  "Private air-conditioned transportation",
  "English-speaking chauffeur guide",
  "Airport pickup and departure transfer",
  "Hotel options based on guest preference",
  "Sightseeing route planning",
  "Optional train ticket arrangement support",
  "Quotation based on group size and hotel category",
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
    value: "Kandy, Nuwara Eliya, Ella & Down South",
  },
  {
    icon: FiUsers,
    label: "Best For",
    value: "Nature lovers, couples, families & private groups",
  },
  {
    icon: FiClock,
    label: "Tour Style",
    value: "Available on request",
  },
];

const HillCountryTour = () => {
  return (
    <main className="bg-[#FCFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Hill Country Tour Sri Lanka"
            className="h-full w-full object-cover object-[45%_45%]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2C]/70 via-[#071A2C]/30 to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
              Available On Request
            </p>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:text-[68px]">
              Hill Country Tour
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              A scenic Sri Lanka journey through misty mountains, tea
              plantations, waterfalls, cultural cities, iconic train routes,
              Ella viewpoints, and a relaxing Down South beach extension.
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
                href="tel:+94114327637"
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
      <section className="relative z-20 -mt-12">
        <div className="container-wide">
          <div className="grid gap-4 rounded-[34px] border border-[#EFE7DA] bg-white p-5 shadow-[0_24px_80px_rgba(11,31,51,0.12)] md:grid-cols-2 lg:grid-cols-4">
            {tourFacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[26px] bg-[#FCFCFA] p-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9A93B]/12 text-[#E9A93B]">
                    <Icon size={21} />
                  </div>

                  <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.16em] !text-slate-400">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-[16px] font-bold leading-6 !text-[#0B1F33]">
                    {item.value}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Tour Overview
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                Explore Sri Lanka’s misty mountains, tea estates, waterfalls,
                and southern beaches.
              </h2>

              <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                The Hill Country Tour is designed for travelers who want to
                experience Sri Lanka’s cooler mountain regions, scenic roads,
                tea plantations, waterfalls, cultural towns, and the famous Ella
                landscape.
              </p>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                This tour can begin with airport arrival, continue through
                Kandy, Nuwara Eliya and Ella, then finish with a Down South
                beach stay or direct airport departure depending on the guest’s
                flight schedule.
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
                  alt="Sri Lanka Hill Country private tour"
                  className="h-[280px] w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                  <FiStar size={15} />
                  Recommended For
                </p>

                <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                  Travelers who love nature, mountains, and scenic journeys
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                  Ideal for couples, families, photographers, and private groups
                  who want a peaceful Sri Lanka route with mountain views,
                  waterfalls, tea estates, and coastal relaxation.
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
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Suggested Route
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              Hill Country experiences
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              This sample route can be adjusted based on the guest’s travel
              dates, preferred hotel category, flight time, and required beach
              extension.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid gap-6">
              {itinerary.map((item, index) => (
                <div
                  key={item.day}
                  className="overflow-hidden rounded-[32px] border border-[#EFE7DA] bg-[#FCFCFA] shadow-[0_16px_50px_rgba(11,31,51,0.05)]"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-[0.82fr_1.18fr] ${
                      index % 2 === 1 ? "lg:grid-cols-[1.18fr_0.82fr]" : ""
                    }`}
                  >
                    <div
                      className={`min-h-[260px] ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full min-h-[260px] w-full object-cover"
                      />
                    </div>

                    <div className="p-6 md:p-8 lg:p-10">
                      <p className="text-[12px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                        {item.day}
                      </p>

                      <h3 className="mt-2 text-[28px] font-bold !text-[#0B1F33]">
                        {item.title}
                      </h3>

                      <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold !text-[#2D6A4F]">
                        <FiMapPin size={15} />
                        {item.location}
                      </p>

                      <p className="mt-5 text-[15px] leading-8 !text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-[#FCFCFA] py-24">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Custom Arrangements
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
                A scenic hill-country journey arranged around your guest’s
                requirement.
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Exact inclusions, hotels, room categories, meals, entrance
                tickets, train arrangements, and activities will be confirmed in
                the final quotation.
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
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Customize This Tour
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                Want to arrange a Hill Country tour?
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-white/70">
                Share the travel dates, number of guests, hotel preference,
                preferred route, train experience requirement, beach extension,
                and budget. Our team will prepare a custom Sri Lanka hill
                country itinerary and quotation.
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

export default HillCountryTour;

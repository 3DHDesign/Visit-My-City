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
  hero: "/images/tours/family/family-tour-hero.jpg",
  heroMobile: "/images/tours/family/family-tour-hero-mobile.jpg",
  card: "/images/tours/family/family-private-tour-card.jpg",

  arrival: "/images/tours/family/day-01-arrival-relaxed-start.jpg",
  kandy: "/images/tours/family/day-02-kandy-family-journey.jpg",
  kandyCulture: "/images/tours/family/day-03-kandy-leisure-culture.jpg",
  nuwaraEliya: "/images/tours/family/day-04-tea-country-nuwara-eliya.jpg",
  ella: "/images/tours/family/day-05-ella-scenic-experience.jpg",
  wildlife: "/images/tours/family/day-06-wildlife-soft-adventure.jpg",
  beach: "/images/tours/family/day-07-beach-relaxation.jpg",
  galle: "/images/tours/family/day-08-galle-fort-departure.jpg",
};

const itinerary = [
  {
    day: "Day 01",
    title: "Arrival & Relaxed Start",
    location: "Airport → Negombo / Colombo",
    image: IMAGES.arrival,
    desc: "On arrival in Sri Lanka, the family will be welcomed at the airport and transferred to Negombo or Colombo for a relaxed first night. The day can be kept light with hotel check-in, rest time, a beach walk, or a short city orientation depending on arrival time.",
  },
  {
    day: "Day 02",
    title: "Kandy Family Journey",
    location: "Negombo / Colombo → Kandy",
    image: IMAGES.kandy,
    desc: "Travel to Kandy at a comfortable pace with optional stops such as Pinnawala Elephant Orphanage, a spice garden, or Peradeniya Botanical Garden. In Kandy, families can enjoy lake views, city viewpoints, cultural experiences, and the Temple of the Sacred Tooth Relic.",
  },
  {
    day: "Day 03",
    title: "Kandy Leisure & Culture",
    location: "Kandy",
    image: IMAGES.kandyCulture,
    desc: "Spend a relaxed day in Kandy with family-friendly sightseeing. The route can include Kandy Lake, Bahirawakanda viewpoint, shopping time, a cultural dance show, gem museum, and soft sightseeing without rushing the children or elderly travelers.",
  },
  {
    day: "Day 04",
    title: "Tea Country & Nuwara Eliya",
    location: "Kandy → Nuwara Eliya",
    image: IMAGES.nuwaraEliya,
    desc: "Continue into Sri Lanka’s cooler hill country with scenic tea plantations, waterfalls, and mountain roads. Families can visit a tea factory, enjoy Lake Gregory, explore colonial-style Nuwara Eliya, and experience the calm weather of the central highlands.",
  },
  {
    day: "Day 05",
    title: "Ella Scenic Experience",
    location: "Nuwara Eliya → Ella",
    image: IMAGES.ella,
    desc: "Travel towards Ella with beautiful mountain views and optional scenic train arrangements. Families can visit Nine Arches Bridge, Ravana Falls, Ella viewpoints, and enjoy a slower nature-focused day with photo stops and relaxed sightseeing.",
  },
  {
    day: "Day 06",
    title: "Wildlife or Soft Adventure Add-on",
    location: "Ella → Yala / Udawalawe / Down South",
    image: IMAGES.wildlife,
    desc: "Depending on the family’s interest, this day can include a wildlife safari in Yala or Udawalawe, or a direct transfer towards the southern coast. The route will be planned based on children’s ages, travel comfort, and preferred activity level.",
  },
  {
    day: "Day 07",
    title: "Beach Relaxation",
    location: "Bentota / Galle / Mirissa / Unawatuna",
    image: IMAGES.beach,
    desc: "Enjoy a peaceful beach stay along Sri Lanka’s southern coastline. Families can relax at the hotel, enjoy the pool, visit the beach, or choose light activities such as a Madu River boat ride or Kosgoda Turtle Hatchery visit.",
  },
  {
    day: "Day 08",
    title: "Galle Fort & Departure",
    location: "Down South → Airport",
    image: IMAGES.galle,
    desc: "Before departure, families can explore Galle Fort, lighthouse views, coastal streets, cafés, and souvenir stops if time allows. Afterwards, the family will be transferred comfortably to the airport for departure.",
  },
];

const highlights = [
  "Comfortable private family-friendly itinerary",
  "Airport pickup and relaxed first-day arrangement",
  "Kandy cultural experiences and botanical garden options",
  "Tea country, waterfalls and Nuwara Eliya scenery",
  "Ella viewpoints, Nine Arches Bridge and nature stops",
  "Optional wildlife safari in Yala or Udawalawe",
  "Down South beach stay with relaxed family time",
  "Galle Fort, Madu River and turtle hatchery options",
  "Flexible pacing for kids, parents and elderly travelers",
  "Custom hotels, route and duration based on family needs",
];

const includes = [
  "Custom family itinerary planning",
  "Private air-conditioned vehicle",
  "English-speaking chauffeur guide",
  "Airport arrival and departure transfers",
  "Family-friendly hotel options",
  "Flexible sightseeing schedule",
  "Optional train and safari arrangement support",
  "Quotation based on family size and hotel category",
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
    value: "Families, kids, parents & private groups",
  },
  {
    icon: FiClock,
    label: "Tour Style",
    value: "Comfortable private journey",
  },
];

const FamilyTour = () => {
  return (
    <main className="bg-[#FCFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
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
              Family Sri Lanka Tour
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
              A comfortable Sri Lanka family journey designed with relaxed
              travel times, kid-friendly sightseeing, cultural experiences,
              mountain scenery, wildlife options, and beach relaxation.
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
                A relaxed Sri Lanka journey made for families.
              </h2>

              <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                The Family Sri Lanka Tour is created for travelers who want a
                comfortable and well-balanced holiday without rushing from place
                to place. The route can include culture, nature, tea country,
                wildlife, beaches, and family-friendly activities.
              </p>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                This tour is arranged on request based on the family’s travel
                dates, children’s ages, preferred hotel category, must-visit
                places, comfort level, and budget.
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
                  alt="Family Sri Lanka private tour"
                  className="h-[280px] w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                  <FiStar size={15} />
                  Recommended For
                </p>

                <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                  Families who want comfort, safety, and flexibility
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                  Ideal for families with children, parents, elderly travelers,
                  and private groups who prefer a relaxed itinerary with smooth
                  travel planning.
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
              Family-Friendly Sri Lanka Experiences
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              This sample route can be customized according to the family’s travel
              dates, preferred pace, hotel style, children’s ages, and departure
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
                A family holiday arranged around comfort and convenience.
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Exact inclusions, hotels, room categories, meals, entrance
                tickets, safari arrangements, and activities will be confirmed
                in the final quotation.
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
                Want to arrange a Sri Lanka family holiday?
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-white/70">
                Share the travel dates, number of family members, children’s
                ages, hotel preference, must-visit places, activity level, and
                budget. Our team will prepare a comfortable family itinerary and
                quotation.
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

export default FamilyTour;
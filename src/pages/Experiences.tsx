import {
  FiArrowUpRight,
  FiCheck,
  FiCompass,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiShield,
  FiStar,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const IMAGES = {
  hero:
    "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1800&h=900&q=85",

  luxury:
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&h=600&q=85",

  wildlife:
    "https://travellersisle.com/wp-content/uploads/2022/08/Crowded-Yala-national-park.jpg?auto=format&fit=crop&w=900&h=600&q=85",

  adventure:
    "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=900&h=600&q=85",

  honeymoon:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&h=600&q=85",

  family:
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&h=600&q=85",
};

const experiences = [
  {
    id: "luxury-tours",
    title: "Luxury Tours",
    icon: FiStar,
    image: IMAGES.luxury,
    subtitle: "Premium stays & private journeys",
    desc: "Curated travel experiences with premium hotels, private transfers, relaxed pacing, handpicked destinations, and personalized service for guests who want comfort and exclusivity.",
    highlights: [
      "Premium hotels and resorts",
      "Private transport",
      "Relaxed sightseeing",
      "Personalized travel plan",
    ],
  },
  {
    id: "wildlife-safari",
    title: "Wildlife & Safari",
    icon: FiShield,
    image: IMAGES.wildlife,
    subtitle: "Yala, Minneriya & nature",
    desc: "Nature-focused journeys with safari experiences, national parks, wildlife photography, forest routes, birdwatching, and soft adventure options across Sri Lanka.",
    highlights: [
      "Yala safari",
      "Udawalawe safari",
      "Minneriya elephants",
      "Nature photography",
    ],
  },
  {
    id: "adventure-tours",
    title: "Adventure Tours",
    icon: FiZap,
    image: IMAGES.adventure,
    subtitle: "Trails, hikes & active escapes",
    desc: "Active travel experiences designed around scenic hikes, waterfalls, mountain viewpoints, cycling, soft adventure, nature trails, and memorable outdoor activities.",
    highlights: [
      "Hiking routes",
      "Waterfalls",
      "Mountain viewpoints",
      "Soft adventure",
    ],
  },
  {
    id: "honeymoon-trips",
    title: "Honeymoon Trips",
    icon: FiHeart,
    image: IMAGES.honeymoon,
    subtitle: "Romantic curated getaways",
    desc: "Private romantic journeys with scenic destinations, peaceful resorts, hill-country experiences, beach stays, sunset moments, and flexible pacing for couples.",
    highlights: [
      "Romantic hotels",
      "Private route",
      "Hill country",
      "Beach relaxation",
    ],
  },
  {
    id: "family-holidays",
    title: "Family Holidays",
    icon: FiUsers,
    image: IMAGES.family,
    subtitle: "Safe, easy & comfortable trips",
    desc: "Comfortable family-friendly travel plans with flexible timing, safe transport, kid-friendly sightseeing, beach time, nature experiences, and smooth arrangements.",
    highlights: [
      "Kid-friendly route",
      "Comfortable pacing",
      "Safe transport",
      "Flexible activities",
    ],
  },
];

const whyChoose = [
  "Travel styles planned around guest interests",
  "Private transport and chauffeur guide support",
  "Flexible routes for couples, families and groups",
  "Hotel options based on comfort level and budget",
  "Sri Lanka and international travel planning support",
  "Custom quotations based on exact requirements",
];

const Experiences = () => {
  return (
    <main className="bg-[#FCFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Travel Experiences"
            className="h-full w-full object-cover"
          />

          {/* Balanced overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A2C]/85 via-[#071A2C]/45 to-[#071A2C]/10" />

          {/* Subtle bottom depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/35 via-transparent to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
              Travel Experiences
            </p>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
              Choose the travel style that matches your journey.
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/85">
              From luxury escapes and wildlife safaris to adventure tours,
              honeymoon getaways and family holidays, Visit My City arranges
              travel experiences around every guest’s preference.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#experience-styles"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Experiences
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
                Designed Around You
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                Not every traveler wants the same kind of holiday.
              </h2>

              <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                Some guests want luxury and comfort. Some want wildlife and
                nature. Some want adventure, romance, or an easy family holiday.
                This page helps users quickly choose the experience style they
                are looking for before sending an inquiry.
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

      {/* Experience Styles */}
      <section id="experience-styles" className="bg-white py-8">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Experience Styles
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              Find the right travel experience.
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              These are flexible travel experience categories. Each one can be
              arranged as a Sri Lanka tour, international tour, or custom travel
              plan based on the guest’s requirement.
            </p>
          </div>

          <div className="mt-14 grid gap-7">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  id={item.id}
                  key={item.title}
                  className="group overflow-hidden rounded-[34px] border border-[#E9E1D5] bg-white shadow-[0_8px_20px_rgba(11,31,51,0.06),0_24px_55px_rgba(11,31,51,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/40 hover:shadow-[0_14px_30px_rgba(11,31,51,0.09),0_34px_75px_rgba(11,31,51,0.14)]"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-[0.82fr_1.18fr] ${
                      index % 2 === 1
                        ? "lg:grid-cols-[1.18fr_0.82fr]"
                        : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative min-h-[300px] overflow-hidden ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full min-h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#071A2C]/35 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 flex h-13 w-13 items-center justify-center rounded-[18px] border border-white/20 bg-[#E9A93B] text-[#0B1F33] shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-[#FCFAF6] p-6 md:p-8 lg:p-10 ${
                        index % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#E9A93B]/10 blur-3xl" />

                      <div className="relative z-10">
                        <p className="text-[12px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                          {item.subtitle}
                        </p>

                        <h3 className="mt-3 text-[32px] font-bold !text-[#0B1F33]">
                          {item.title}
                        </h3>

                        <p className="mt-5 text-[15px] leading-8 !text-slate-600">
                          {item.desc}
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {item.highlights.map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-3"
                            >
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                                <FiCheck size={13} />
                              </span>

                              <span className="text-[14px] font-semibold !text-slate-600">
                                {point}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Link
                          to="/contact"
                          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white shadow-[0_12px_30px_rgba(11,31,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
                        >
                          Request This Experience
                          <FiArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FCFCFA] py-8">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center shadow-[0_18px_50px_rgba(11,31,51,0.12),0_40px_90px_rgba(11,31,51,0.15)] md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-4xl">
              <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                <FiMapPin size={14} />
                Start Planning
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                Have a travel style in mind?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-8 !text-white/70">
                Share the destination, travel dates, number of guests, preferred
                experience style, hotel category, and budget. Our team will
                prepare a suitable travel plan and quotation.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Send Inquiry
                  <FiArrowUpRight size={16} />
                </Link>

                <a
                  href="tel:+94114600900"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  +94 11 460 0900
                </a>

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

export default Experiences;
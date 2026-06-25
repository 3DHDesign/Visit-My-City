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
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
    luxury:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85",
    wildlife:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=900&q=85",
    adventure:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
    honeymoon:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    family:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
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
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/88 to-[#0B1F33]/35" />
          </div>
  
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                Travel Experiences
              </p>
  
              <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                Choose the travel style that matches your journey.
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
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
        <section className="py-24">
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
  
        {/* Experience Styles */}
        <section id="experience-styles" className="bg-white py-24">
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
  
            <div className="mt-14 grid gap-6">
              {experiences.map((item, index) => {
                const Icon = item.icon;
  
                return (
                  <div
                    id={item.id}
                    key={item.title}
                    className="overflow-hidden rounded-[34px] border border-[#EFE7DA] bg-[#FCFCFA] shadow-[0_16px_50px_rgba(11,31,51,0.05)]"
                  >
                    <div
                      className={`grid gap-0 lg:grid-cols-[0.82fr_1.18fr] ${
                        index % 2 === 1
                          ? "lg:grid-cols-[1.18fr_0.82fr]"
                          : ""
                      }`}
                    >
                      <div
                        className={`relative min-h-[300px] overflow-hidden ${
                          index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full min-h-[300px] w-full object-cover"
                        />
  
                        <div className="absolute left-5 top-5 flex h-13 w-13 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
                          <Icon size={24} />
                        </div>
                      </div>
  
                      <div className="p-6 md:p-8 lg:p-10">
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
                            <div key={point} className="flex items-center gap-3">
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
                          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
                        >
                          Request This Experience
                          <FiArrowUpRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-[#FCFCFA] py-24">
          <div className="container-wide">
            <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center md:p-14">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />
  
              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  <FiMapPin size={14} />
                  Start Planning
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                  Have a travel style in mind?
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-white/70">
                  Share the destination, travel dates, number of guests, preferred
                  experience style, hotel category, and budget. Our team will
                  prepare a suitable travel plan and quotation.
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
  
  export default Experiences;
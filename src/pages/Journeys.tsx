import {
    FiArrowUpRight,
    FiCalendar,
    FiCheck,
    FiCompass,
    FiGlobe,
    FiHeart,
    FiMapPin,
    FiSend,
    FiStar,
    FiUsers,
  } from "react-icons/fi";
  import { Link } from "react-router-dom";
  
  const journeyCards = [
    {
      title: "6 Nights / 7 Days Sri Lanka Tour",
      tag: "Featured",
      type: "Sri Lanka",
      duration: "6N / 7D",
      route: "Colombo → Kandy → Nuwara Eliya → Ella → Yala → Bentota",
      desc: "A complete Sri Lanka journey covering culture, hill country, wildlife, beaches, and coastal experiences.",
      image:
        "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=85",
      path: "/explore-sri-lanka/6n-7d-sri-lanka-tour",
      active: true,
    },
    {
      title: "8 Nights / 9 Days Sri Lanka Tour",
      tag: "Coming Soon",
      type: "Sri Lanka",
      duration: "8N / 9D",
      route: "Colombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Galle",
      desc: "An extended island journey with culture, scenic landscapes, wildlife, beaches, and heritage stops.",
      image:
        "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=85",
      path: "/contact",
      active: false,
    },
    {
      title: "Dubai Family Escape",
      tag: "Coming Soon",
      type: "Outbound",
      duration: "Custom",
      route: "Dubai City → Desert Safari → Shopping → Family Attractions",
      desc: "A family-friendly Dubai holiday with city experiences, shopping, desert activities, and premium stays.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
      path: "/contact",
      active: false,
    },
    {
      title: "Azerbaijan Holiday Package",
      tag: "Coming Soon",
      type: "Outbound",
      duration: "Custom",
      route: "Baku → Old City → Mountains → Cultural Experiences",
      desc: "A scenic outbound journey with city charm, mountain views, culture, and relaxing holiday moments.",
      image:
        "https://images.unsplash.com/photo-1596306499317-849023209d79?auto=format&fit=crop&w=1200&q=85",
      path: "/contact",
      active: false,
    },
    {
      title: "Honeymoon Sri Lanka Journey",
      tag: "Custom Plan",
      type: "Romantic",
      duration: "Flexible",
      route: "Hill Country → Beach Resort → Private Experiences",
      desc: "A romantic Sri Lanka journey designed with privacy, scenic stays, beach relaxation, and special experiences.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      path: "/contact",
      active: false,
    },
    {
      title: "Corporate Travel Journey",
      tag: "Custom Plan",
      type: "Business",
      duration: "Flexible",
      route: "Flights → Hotels → Transfers → MICE Support",
      desc: "Business travel planning for corporate teams, meetings, incentives, conferences, and executive travel needs.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
      path: "/contact",
      active: false,
    },
  ];
  
  const journeyTypes = [
    {
      icon: FiUsers,
      title: "Family Holidays",
      desc: "Comfortable journeys for families and small groups.",
    },
    {
      icon: FiHeart,
      title: "Honeymoon Trips",
      desc: "Romantic escapes with premium and private touches.",
    },
    {
      icon: FiGlobe,
      title: "Outbound Packages",
      desc: "Overseas holidays planned with reliable support.",
    },
    {
      icon: FiCompass,
      title: "Adventure & Wildlife",
      desc: "Safari, nature, hiking, and outdoor experiences.",
    },
  ];
  
  const benefits = [
    "Ready-made tour ideas that can be customized",
    "Sri Lanka inbound and overseas outbound options",
    "Package flow designed for easier travel planning",
    "Inquiry-based customization for hotels, budget, and dates",
  ];
  
  const Journeys = () => {
    return (
      <main className="bg-[#FCFCFA]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F33] pt-36 pb-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85"
              alt="Curated travel journeys"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/90 to-[#0B1F33]/55" />
          </div>
  
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                Curated Journeys
              </p>
  
              <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                Ready-made travel packages for every kind of traveler.
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
                Explore carefully planned Sri Lanka and overseas journeys. Choose
                a package, customize the details, and let our team shape the right
                travel experience for you.
              </p>
  
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#featured-journeys"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  View Journeys
                  <FiArrowUpRight size={16} />
                </a>
  
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  Customize a Tour
                  <FiSend size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
  
        {/* Benefits Bar */}
        <section className="relative z-20 -mt-12">
          <div className="container-wide">
            <div className="grid gap-4 rounded-[34px] border border-[#EFE7DA] bg-white p-5 shadow-[0_24px_80px_rgba(11,31,51,0.12)] md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => (
                <div key={item} className="rounded-[26px] bg-[#FCFCFA] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E9A93B]/12 text-[#E9A93B]">
                    <FiCheck size={19} />
                  </div>
  
                  <p className="mt-4 text-[14px] font-semibold leading-6 !text-[#0B1F33]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Featured Journeys */}
        <section id="featured-journeys" className="py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Featured Packages
              </p>
  
              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                Explore our curated journeys
              </h2>
  
              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Start with a ready-made route or request a custom version based on
                your travel dates, guest count, hotel preference, and budget.
              </p>
            </div>
  
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {journeyCards.map((journey) => (
                <article
                  key={journey.title}
                  className="group overflow-hidden rounded-[34px] border border-[#EFE7DA] bg-white shadow-[0_18px_55px_rgba(11,31,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/50 hover:shadow-[0_28px_85px_rgba(11,31,51,0.11)]"
                >
                  <div className="relative h-[245px] overflow-hidden">
                    <img
                      src={journey.image}
                      alt={journey.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/75 via-[#0B1F33]/10 to-transparent" />
  
                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${
                          journey.active
                            ? "bg-[#E9A93B] !text-[#0B1F33]"
                            : "bg-white/90 !text-[#0B1F33]"
                        }`}
                      >
                        {journey.tag}
                      </span>
  
                      <span className="rounded-full bg-[#0B1F33]/70 px-3 py-1.5 text-[11px] font-bold !text-white backdrop-blur">
                        {journey.type}
                      </span>
                    </div>
  
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="flex items-center gap-2 text-[13px] font-bold !text-white/85">
                        <FiCalendar className="text-[#E9A93B]" size={15} />
                        {journey.duration}
                      </p>
                    </div>
                  </div>
  
                  <div className="p-6">
                    <h3 className="text-[24px] font-bold leading-tight !text-[#0B1F33]">
                      {journey.title}
                    </h3>
  
                    <p className="mt-3 flex items-start gap-2 text-[13.5px] font-semibold leading-6 !text-[#2D6A4F]">
                      <FiMapPin className="mt-1 shrink-0" size={15} />
                      {journey.route}
                    </p>
  
                    <p className="mt-4 text-[14.5px] leading-7 !text-slate-500">
                      {journey.desc}
                    </p>
  
                    <Link
                      to={journey.path}
                      className={`mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[13px] font-bold transition-all duration-300 ${
                        journey.active
                          ? "bg-[#0B1F33] !text-white hover:bg-[#2D6A4F]"
                          : "border border-[#E9A93B]/40 bg-[#E9A93B]/10 !text-[#0B1F33] hover:bg-[#E9A93B]"
                      }`}
                    >
                      {journey.active ? "View Journey" : "Request Custom Plan"}
                      <FiArrowUpRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
  
        {/* Journey Types */}
        <section className="bg-white py-24">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Journey Types
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
                  Choose the travel style that fits your plan.
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                  Every journey can be adjusted based on group size, hotel class,
                  pace, activities, and travel purpose. This makes the page useful
                  even before all detailed package pages are completed.
                </p>
              </div>
  
              <div className="grid gap-5 sm:grid-cols-2">
                {journeyTypes.map((item) => {
                  const Icon = item.icon;
  
                  return (
                    <div
                      key={item.title}
                      className="rounded-[30px] border border-[#EFE7DA] bg-[#FCFCFA] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/50 hover:shadow-[0_22px_65px_rgba(11,31,51,0.08)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/12 text-[#E9A93B]">
                        <Icon size={22} />
                      </div>
  
                      <h3 className="mt-5 text-[20px] font-bold !text-[#0B1F33]">
                        {item.title}
                      </h3>
  
                      <p className="mt-3 text-[14px] leading-7 !text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
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
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Custom Travel Planning
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                  Can’t find the right journey?
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-white/70">
                  Tell us your destination, dates, guest count, travel purpose,
                  and budget. We’ll prepare a suitable journey plan for you.
                </p>
  
                <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                  >
                    Request Custom Journey
                    <FiArrowUpRight size={16} />
                  </Link>
  
                  <Link
                    to="/explore-sri-lanka/6n-7d-sri-lanka-tour"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                  >
                    <FiStar size={16} />
                    View Featured Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Journeys;
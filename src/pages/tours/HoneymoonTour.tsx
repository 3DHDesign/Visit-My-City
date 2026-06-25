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
    hero:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85",
    card:
      "https://images.unsplash.com/photo-1578590467931-66e4d3b0c960?auto=format&fit=crop&w=1200&q=85",
    arrival:
      "https://images.unsplash.com/photo-1588253865900-bc752d5d1b94?auto=format&fit=crop&w=900&q=85",
    sigiriya:
      "https://images.unsplash.com/photo-1586613835346-8b033913e1e5?auto=format&fit=crop&w=900&q=85",
    kandy:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=900&q=85",
    nuwaraEliya:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=85",
    ella:
      "https://images.unsplash.com/photo-1578590467931-66e4d3b0c960?auto=format&fit=crop&w=900&q=85",
    beach:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    galle:
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=900&q=85",
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
      image: IMAGES.ella,
      desc: "Continue to Ella, one of Sri Lanka’s most scenic hill-country destinations. The route can include a scenic train experience, Nine Arches Bridge, Ravana Falls, Little Adam’s Peak, and peaceful viewpoints.",
    },
    {
      day: "Day 06",
      title: "Ella Leisure & Nature",
      location: "Ella",
      image: IMAGES.ella,
      desc: "Spend a relaxed day in Ella with soft adventure, beautiful views, photo stops, cafés, waterfalls, and optional wellness or nature experiences. This day can be kept light and flexible for couples who prefer a slower pace.",
    },
    {
      day: "Day 07",
      title: "Beach Getaway",
      location: "Ella → Mirissa / Bentota / Unawatuna",
      image: IMAGES.beach,
      desc: "Travel towards Sri Lanka’s southern coastline for a romantic beach stay. Couples can relax by the ocean, enjoy resort facilities, visit Mirissa, Bentota, Unawatuna, or another preferred coastal destination.",
    },
    {
      day: "Day 08",
      title: "Galle Fort & Coastal Experiences",
      location: "Down South",
      image: IMAGES.galle,
      desc: "Enjoy a coastal day with optional experiences such as Galle Fort, Coconut Tree Hill, Secret Beach, Madu River boat ride, turtle hatchery, sunset viewpoints, cafés, and relaxed beach time.",
    },
    {
      day: "Day 09",
      title: "Departure",
      location: "Down South → Airport",
      image: IMAGES.arrival,
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
        <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
          <div className="absolute inset-0">
            <img
              src={IMAGES.hero}
              alt="Honeymoon Sri Lanka Tour"
              className="h-full w-full object-cover opacity-40"
            />
  
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/88 to-[#0B1F33]/35" />
          </div>
  
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                Available On Request
              </p>
  
              <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                Honeymoon Sri Lanka Tour
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
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
        <section className="bg-white py-24">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Suggested Route
              </p>
  
              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                Romantic Sri Lanka experiences
              </h2>
  
              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                This sample route can be customized according to the couple’s
                travel dates, preferred hotel style, destination interests, and
                departure flight time.
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
                        index % 2 === 1
                          ? "lg:grid-cols-[1.18fr_0.82fr]"
                          : ""
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
  
  export default HoneymoonTour;
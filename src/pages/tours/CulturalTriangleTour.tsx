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
    hero: "/images/tours/cultural-traingle/cultural-triangle-tour-hero.jpg",
    card: "/images/tours/cultural-traingle/cultural-triangle-private-tour-card.jpg",
  
    anuradhapura:
      "/images/tours/cultural-traingle/stop-01-anuradhapura-ancient-city.jpg",
    polonnaruwa:
      "/images/tours/cultural-traingle/stop-02-polonnaruwa-heritage-city.jpg",
    sigiriya:
      "/images/tours/cultural-traingle/stop-03-sigiriya-rock-fortress.jpg",
    pidurangala:
      "/images/tours/cultural-traingle/stop-04-pidurangala-rock-viewpoint.jpg",
    dambulla:
      "/images/tours/cultural-traingle/stop-05-dambulla-cave-temple.jpg",
    kandy:
      "/images/tours/cultural-traingle/optional-kandy-cultural-extension.jpg",
  };
  
  const itinerary = [
    {
      day: "Stop 01",
      title: "Anuradhapura Ancient City",
      location: "Sacred City of Anuradhapura",
      image: IMAGES.anuradhapura,
      desc: "Explore one of Sri Lanka’s most important ancient kingdoms with sacred temples, historic stupas, royal ruins, and spiritual landmarks. Key places can include Jaya Sri Maha Bodhi, Ruwanwelisaya, Thuparamaya, Abhayagiri, Jetavanaramaya, Isurumuniya, and Mihintale depending on the selected route.",
    },
    {
      day: "Stop 02",
      title: "Polonnaruwa Heritage City",
      location: "Ancient Kingdom of Polonnaruwa",
      image: IMAGES.polonnaruwa,
      desc: "Discover the ruins of Sri Lanka’s medieval capital, known for its royal palace complex, ancient irrigation works, Buddhist monuments, and stone sculptures. Suggested places include the Royal Palace, Gal Vihara, Vatadage, Lankatilaka Temple, Rankoth Vehera, and Parakrama Samudraya.",
    },
    {
      day: "Stop 03",
      title: "Sigiriya Rock Fortress",
      location: "Sigiriya",
      image: IMAGES.sigiriya,
      desc: "Visit the iconic Sigiriya Rock Fortress, one of Sri Lanka’s most famous landmarks. Guests can experience ancient palace ruins, water gardens, frescoes, mirror wall, lion staircase, and panoramic views from the summit.",
    },
    {
      day: "Stop 04",
      title: "Pidurangala Rock Viewpoint",
      location: "Pidurangala",
      image: IMAGES.pidurangala,
      desc: "Add Pidurangala Rock for a scenic cultural and adventure experience. The climb offers one of the best views of Sigiriya Rock and the surrounding forest landscape, making it ideal for photography and sunrise or sunset experiences.",
    },
    {
      day: "Stop 05",
      title: "Dambulla Cave Temple",
      location: "Dambulla",
      image: IMAGES.dambulla,
      desc: "Explore the historic Dambulla Cave Temple, a sacred cave temple complex known for Buddhist murals, statues, and centuries-old spiritual heritage. This is one of the most meaningful cultural stops in the central region.",
    },
    {
      day: "Optional Add-on",
      title: "Kandy Cultural Extension",
      location: "Kandy",
      image: IMAGES.kandy,
      desc: "The tour can also be extended to Kandy for the Temple of the Sacred Tooth Relic, Kandy Lake, cultural dance show, gem museum, and city viewpoints, depending on the guest’s available travel days.",
    },
  ];
  
  const highlights = [
    "Anuradhapura ancient city and sacred Buddhist landmarks",
    "Jaya Sri Maha Bodhi, Ruwanwelisaya, Isurumuniya and Mihintale options",
    "Polonnaruwa royal ruins, Gal Vihara and Parakrama Samudraya",
    "Sigiriya Rock Fortress and ancient palace gardens",
    "Pidurangala Rock viewpoint for scenic photography",
    "Dambulla Cave Temple with murals and Buddhist statues",
    "Optional Kandy cultural extension",
    "Private guided heritage-focused journey",
    "Flexible itinerary based on travel dates and guest interests",
    "Ideal for culture, history, temple, and photography lovers",
  ];
  
  const includes = [
    "Custom itinerary planning",
    "Private air-conditioned transportation",
    "English-speaking chauffeur guide",
    "Hotel options based on guest preference",
    "Airport transfers on request",
    "Sightseeing route planning",
    "Quotation based on group size and hotel category",
    "Travel support throughout the journey",
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
      value: "Anuradhapura, Polonnaruwa, Sigiriya & Dambulla",
    },
    {
      icon: FiUsers,
      label: "Best For",
      value: "Culture lovers, families & private groups",
    },
    {
      icon: FiClock,
      label: "Tour Style",
      value: "Available on request",
    },
  ];
  
  const CulturalTriangleTour = () => {
    return (
      <main className="bg-[#FCFCFA]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
          <div className="absolute inset-0">
          <img
  src={IMAGES.hero}
  alt="Cultural Triangle Tour Sri Lanka"
  className="h-full w-full object-cover object-[50%_45%]"
/>

<div className="absolute inset-0 bg-gradient-to-r from-[#071A2C]/70 via-[#071A2C]/30 to-transparent" />
          </div>
  
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                Available On Request
              </p>
  
              <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                Cultural Triangle Tour
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
                A tailor-made Sri Lanka heritage journey through ancient
                kingdoms, sacred temples, rock fortresses, Buddhist monuments,
                cave art, and timeless cultural landmarks.
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
                  Discover Sri Lanka’s ancient kingdoms, temples, and heritage
                  wonders.
                </h2>
  
                <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                  The Cultural Triangle Tour is designed for travelers who want a
                  deeper heritage experience in Sri Lanka. This journey can
                  include Anuradhapura, Polonnaruwa, Sigiriya, Pidurangala,
                  Dambulla Cave Temple, and optional Kandy cultural experiences.
                </p>
  
                <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                  This is not a fixed leaflet package. It is arranged on request
                  based on the guest’s travel dates, preferred hotel category,
                  group size, interests, and budget.
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
                    alt="Sri Lanka Cultural Triangle private tour"
                    className="h-[280px] w-full object-cover"
                  />
                </div>
  
                <div className="mt-6">
                  <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                    <FiStar size={15} />
                    Recommended For
                  </p>
  
                  <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                    Travelers who love culture, temples, and history
                  </h3>
  
                  <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                    Ideal for guests who want a meaningful Sri Lanka journey
                    focused on ancient architecture, sacred places, royal cities,
                    cultural landmarks, and photography.
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
                Cultural Triangle experiences
              </h2>
  
              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                These are suggested stops. The final route can be customized
                according to the guest’s arrival city, number of days, and
                preferred travel style.
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
                  A heritage journey arranged around your guest’s requirement.
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                  Exact inclusions, hotels, room categories, meals, entrance
                  tickets, and activities will be confirmed in the final
                  quotation.
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
                  Want to arrange a Cultural Triangle tour?
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-white/70">
                  Share the travel dates, number of guests, hotel preference,
                  must-visit places, and budget. Our team will prepare a custom
                  Sri Lanka heritage itinerary and quotation.
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
  
  export default CulturalTriangleTour;
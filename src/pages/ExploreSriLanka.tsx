import {
    FiArrowUpRight,
    FiCheck,
    FiCompass,
    FiHeart,
    FiMapPin,
    FiPhone,
    FiStar,
    FiUsers,
  } from "react-icons/fi";
  import { Link } from "react-router-dom";
  
  const IMAGES = {
    hero:
      "https://images.unsplash.com/photo-1499848144902-af767f6d0c7f?auto=format&fit=crop&w=1800&h=1000&q=85",
  
    intro: "/images/explore-sri-lanka/intro.jpg",
  
    tour8: "/images/explore-sri-lanka/tour8.jpg",
  
    tour6: "/images/explore-sri-lanka/tour6.jpg",
  
    cultural: "/images/explore-sri-lanka/cultural.jpg",
  
    hill: "/images/explore-sri-lanka/hill.jpg",
  
    family: "/images/explore-sri-lanka/family.jpg",
  
    honeymoon: "/images/explore-sri-lanka/honeymoon.jpg",
  };
  
  const fixedPackages = [
    {
      title: "8N / 9D Sri Lanka Tour",
      tag: "Fixed Package",
      image: IMAGES.tour8,
      path: "/explore-sri-lanka/8n-9d-sri-lanka-tour",
      desc: "A complete island journey covering culture, hill country, wildlife, heritage, beaches, and relaxing coastal experiences.",
      meta: "8 Nights / 9 Days",
      highlights: ["Colombo", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Bentota"],
    },
    {
      title: "6N / 7D Sri Lanka Tour",
      tag: "Fixed Package",
      image: IMAGES.tour6,
      path: "/explore-sri-lanka/6n-7d-sri-lanka-tour",
      desc: "A compact Sri Lanka escape designed for travelers who want culture, nature, wildlife, beaches, and key highlights in one journey.",
      meta: "6 Nights / 7 Days",
      highlights: ["Colombo", "Kandy", "Nuwara Eliya", "Yala", "Galle", "Bentota"],
    },
  ];
  
  const customTours = [
    {
      title: "Cultural Triangle Tour",
      icon: "🏯",
      tag: "Available On Request",
      image: IMAGES.cultural,
      path: "/explore-sri-lanka/cultural-triangle-tour",
      desc: "A heritage-focused journey through Anuradhapura, Polonnaruwa, Sigiriya, Dambulla Cave Temple, and sacred cultural landmarks.",
      meta: "Heritage, temples & history",
      highlights: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla"],
    },
    {
      title: "Hill Country Tour",
      icon: "🚂",
      tag: "Available On Request",
      image: IMAGES.hill,
      path: "/explore-sri-lanka/hill-country-tour",
      desc: "A scenic route through Kandy, Nuwara Eliya, Ella, tea plantations, waterfalls, mountain viewpoints, and optional beach extension.",
      meta: "Kandy, Ella & Nuwara Eliya",
      highlights: ["Kandy", "Nuwara Eliya", "Ella", "Down South"],
    },
    {
      title: "Family Sri Lanka Tour",
      icon: "👨‍👩‍👧",
      tag: "Available On Request",
      image: IMAGES.family,
      path: "/explore-sri-lanka/family-tour",
      desc: "A relaxed and comfortable private journey planned around families, children, parents, elderly travelers, and flexible sightseeing.",
      meta: "Comfortable family journey",
      highlights: ["Culture", "Nature", "Wildlife", "Beach"],
    },
    {
      title: "Honeymoon Sri Lanka Tour",
      icon: "💕",
      tag: "Available On Request",
      image: IMAGES.honeymoon,
      path: "/explore-sri-lanka/honeymoon-tour",
      desc: "A romantic island getaway with private travel, scenic hill country, cultural highlights, beautiful beaches, and relaxed experiences.",
      meta: "Romantic island getaway",
      highlights: ["Sigiriya", "Ella", "Tea Country", "Beach"],
    },
  ];
  
  const whyChoose = [
    "Private and customizable Sri Lanka tours",
    "Airport pickup and departure transfer support",
    "Comfortable air-conditioned transport options",
    "English-speaking chauffeur guide arrangements",
    "Hotel planning based on budget and preference",
    "Tour plans for families, couples, groups, and FIT travelers",
  ];
  
  const ExploreSriLanka = () => {
    return (
      <main className="bg-[#FCFCFA]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
          <div className="absolute inset-0">
            <img
              src={IMAGES.hero}
              alt="Explore Sri Lanka with Visit My City"
              className="h-full w-full object-cover opacity-40"
            />
  
            
          </div>
  
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                Explore Sri Lanka
              </p>
  
              <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                Discover Sri Lanka with private tours and tailor-made journeys.
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
                From ancient kingdoms and misty mountains to wildlife safaris,
                cultural cities, tropical beaches, and romantic island escapes,
                Visit My City arranges Sri Lanka tours around your travel style.
              </p>
  
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#tour-packages"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  View Tour Packages
                  <FiArrowUpRight size={16} />
                </a>
  
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  Customize My Tour
                  <FiCompass size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
  
        {/* Intro */}
        <section className="py-8">
          <div className="container-wide">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Sri Lanka Travel Experiences
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                  One island. Many ways to experience it.
                </h2>
  
                <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                  Sri Lanka is ideal for travelers looking for a balanced holiday
                  with culture, nature, history, wildlife, beaches, scenic train
                  journeys, and warm local hospitality. Whether guests want a
                  ready-made itinerary or a fully customized plan, our team can
                  arrange the route, hotels, transport, and travel support.
                </p>
  
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {whyChoose.map((item) => (
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
  
              <div className="rounded-[34px] border border-[#EFE7DA] bg-white p-5 shadow-[0_20px_70px_rgba(11,31,51,0.07)]">
                <div className="overflow-hidden rounded-[28px]">
                  <img
                    src={IMAGES.intro}
                    alt="Sri Lanka scenic tour"
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Fixed Packages */}
        <section id="tour-packages" className="bg-white py-8">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Sri Lanka Tour Packages
              </p>
  
              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                Ready-made tour itineraries
              </h2>
  
              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Choose from our planned Sri Lanka packages or request changes
                based on your travel dates, hotel preference, number of guests,
                and budget.
              </p>
            </div>
  
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {fixedPackages.map((tour) => (
                <Link
                  key={tour.title}
                  to={tour.path}
                  className="group overflow-hidden rounded-[34px] border border-[#EFE7DA] bg-[#FCFCFA] shadow-[0_16px_50px_rgba(11,31,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(11,31,51,0.12)]"
                >
                  <div className="relative h-[290px] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/80 via-transparent to-transparent" />
  
                    <span className="absolute left-5 top-5 rounded-full bg-[#E9A93B] px-4 py-2 text-[12px] font-bold !text-[#0B1F33]">
                      {tour.tag}
                    </span>
  
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[13px] font-bold uppercase tracking-[0.14em] !text-white/75">
                        {tour.meta}
                      </p>
  
                      <h3 className="mt-2 text-[30px] font-bold !text-white">
                        {tour.title}
                      </h3>
                    </div>
                  </div>
  
                  <div className="p-6 md:p-8">
                    <p className="text-[15px] leading-8 !text-slate-600">
                      {tour.desc}
                    </p>
  
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tour.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-4 py-2 text-[13px] font-semibold !text-[#2D6A4F]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
  
                    <div className="mt-7 inline-flex items-center gap-3 text-[14px] font-bold !text-[#0B1F33]">
                      View Itinerary
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
  
        {/* Custom Tours */}
        <section className="bg-[#FCFCFA] py-8">
          <div className="container-wide">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Tailor-Made Sri Lanka Tours
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                  Custom journeys arranged on request.
                </h2>
              </div>
  
              <p className="text-[16px] leading-8 !text-slate-600">
                These tours are not fixed leaflet packages. They are flexible tour
                ideas that Visit My City can arrange based on the guest’s
                requirement, travel dates, preferred route, hotel category, and
                budget.
              </p>
            </div>
  
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {customTours.map((tour) => (
                <Link
                  key={tour.title}
                  to={tour.path}
                  className="group overflow-hidden rounded-[32px] border border-[#EFE7DA] bg-white shadow-[0_16px_50px_rgba(11,31,51,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(11,31,51,0.12)]"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
  
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/85 via-[#0B1F33]/10 to-transparent" />
  
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[12px] font-bold !text-[#0B1F33] backdrop-blur">
                      {tour.tag}
                    </span>
  
                    <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B] text-[22px]">
                      {tour.icon}
                    </span>
  
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[13px] font-bold uppercase tracking-[0.14em] !text-white/75">
                        {tour.meta}
                      </p>
  
                      <h3 className="mt-2 text-[28px] font-bold !text-white">
                        {tour.title}
                      </h3>
                    </div>
                  </div>
  
                  <div className="p-6 md:p-7">
                    <p className="text-[15px] leading-8 !text-slate-600">
                      {tour.desc}
                    </p>
  
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tour.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#FCFCFA] px-4 py-2 text-[13px] font-semibold !text-[#2D6A4F]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
  
                    <div className="mt-7 inline-flex items-center gap-3 text-[14px] font-bold !text-[#0B1F33]">
                      Explore Tour
                      <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
  
        {/* Travel Styles */}
        <section className="bg-white py-8">
          <div className="container-wide">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[32px] border border-[#EFE7DA] bg-[#FCFCFA] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/15 text-[#E9A93B]">
                  <FiMapPin size={22} />
                </div>
  
                <h3 className="mt-6 text-[24px] font-bold !text-[#0B1F33]">
                  Private Routes
                </h3>
  
                <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                  Tours can be planned as private routes with flexible stops,
                  comfortable travel time, and personalized sightseeing.
                </p>
              </div>
  
              <div className="rounded-[32px] border border-[#EFE7DA] bg-[#FCFCFA] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/15 text-[#E9A93B]">
                  <FiUsers size={22} />
                </div>
  
                <h3 className="mt-6 text-[24px] font-bold !text-[#0B1F33]">
                  For Every Traveler
                </h3>
  
                <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                  Suitable for families, couples, honeymooners, culture lovers,
                  nature travelers, small groups, and overseas guests.
                </p>
              </div>
  
              <div className="rounded-[32px] border border-[#EFE7DA] bg-[#FCFCFA] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9A93B]/15 text-[#E9A93B]">
                  <FiHeart size={22} />
                </div>
  
                <h3 className="mt-6 text-[24px] font-bold !text-[#0B1F33]">
                  Memorable Experiences
                </h3>
  
                <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                  Add cultural shows, tea factory visits, train journeys, safari
                  experiences, beach stays, heritage stops, and local activities.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA */}
        <section className="bg-[#FCFCFA] py-8">
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
                  Need a Sri Lanka tour arranged for your guests?
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-white/70">
                  Share your travel dates, number of guests, preferred route,
                  hotel category, special interests, and budget. Our team will
                  prepare a suitable Sri Lanka itinerary and quotation.
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
  
  export default ExploreSriLanka;
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
      "https://images.unsplash.com/photo-1586613835346-8b033913e1e5?auto=format&fit=crop&w=1800&q=85",
    card:
      "https://images.unsplash.com/photo-1578590467931-66e4d3b0c960?auto=format&fit=crop&w=1200&q=85",
    colombo:
      "https://images.unsplash.com/photo-1588253865900-bc752d5d1b94?auto=format&fit=crop&w=900&q=85",
    sigiriya:
      "https://images.unsplash.com/photo-1586613835346-8b033913e1e5?auto=format&fit=crop&w=900&q=85",
    kandy:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=900&q=85",
    nuwaraEliya:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=85",
    ella:
      "https://images.unsplash.com/photo-1578590467931-66e4d3b0c960?auto=format&fit=crop&w=900&q=85",
    yala:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=900&q=85",
    bentota:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    galle:
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=900&q=85",
  };
  
  const itinerary = [
    {
      day: "Day 01",
      title: "Arrival & Colombo City Tour",
      location: "Airport → Colombo",
      image: IMAGES.colombo,
      desc: "Meet and assist at Bandaranaike International Airport before transferring to Colombo. Explore Galle Face Green, Pettah, Gangaramaya Temple, Independence Square, Cinnamon Gardens, BMICH, and other important city landmarks before checking in to your hotel.",
    },
    {
      day: "Day 02",
      title: "Pinnawala, Pidurangala & Dambulla",
      location: "Colombo → Pinnawala → Sigiriya → Dambulla → Kandy",
      image: IMAGES.sigiriya,
      desc: "Travel towards the cultural region through Pinnawala Elephant Orphanage. Continue to Pidurangala for beautiful views of the surrounding landscape and Sigiriya Rock, then visit the historic Golden Rock Cave Temple in Dambulla before proceeding to Kandy.",
    },
    {
      day: "Day 03",
      title: "Ambuluwawa & Kandy Cultural Experience",
      location: "Kandy → Gampola → Ambuluwawa → Kandy",
      image: IMAGES.kandy,
      desc: "Enjoy a scenic journey towards Gampola and visit the Ambuluwawa multi-religious tower for panoramic views. Return to Kandy for a city tour, Kandy Lake, Bahirawakanda Buddha statue, a traditional cultural dance show, and the Temple of the Sacred Tooth Relic.",
    },
    {
      day: "Day 04",
      title: "Peradeniya, Tea Country & Nuwara Eliya",
      location: "Kandy → Peradeniya → Nuwara Eliya",
      image: IMAGES.nuwaraEliya,
      desc: "Visit the Royal Botanical Gardens in Peradeniya and discover Sri Lanka’s precious stones at a gem museum. Continue through the central highlands with a tea plantation and factory experience before exploring Lake Gregory, colonial landmarks, and the cool climate of Nuwara Eliya.",
    },
    {
      day: "Day 05",
      title: "Ella Highlights & Journey to Yala",
      location: "Nuwara Eliya → Ella → Yala",
      image: IMAGES.ella,
      desc: "Travel through the scenic hill country to Ella. Visit Little Adam’s Peak, the famous Nine Arches Bridge, and Ravana Falls before continuing to the Yala region for your overnight stay.",
    },
    {
      day: "Day 06",
      title: "Yala Safari, Galle Fort & Bentota",
      location: "Yala → Galle → Bentota",
      image: IMAGES.yala,
      desc: "Begin the day with an exciting jeep safari through Yala National Park, home to elephants, deer, crocodiles, peacocks, and leopards. Afterwards, continue to the southern coast and explore Galle Fort, its lighthouse, ramparts, colonial streets, and nearby coastal attractions.",
    },
    {
      day: "Day 07",
      title: "Bentota Beach Leisure",
      location: "Bentota",
      image: IMAGES.bentota,
      desc: "Spend a relaxing day beside Sri Lanka’s beautiful southern coastline. Enjoy the beach, hotel facilities, swimming pool, and free time to unwind after the cultural, hill-country, and wildlife experiences.",
    },
    {
      day: "Day 08",
      title: "Madu River & Southern Coast Experiences",
      location: "Bentota → Balapitiya → Kosgoda → Bentota",
      image: IMAGES.galle,
      desc: "Enjoy a Madu River boat safari through mangroves and small islands. Visit a sea turtle conservation centre and discover the region’s traditional moonstone mining heritage before returning to Bentota for leisure.",
    },
    {
      day: "Day 09",
      title: "Departure",
      location: "Bentota → Airport",
      image: IMAGES.colombo,
      desc: "Your guide will collect you from the hotel and provide a comfortable transfer to Bandaranaike International Airport for your departure flight.",
    },
  ];
  
  const highlights = [
    "Colombo city tour and major city landmarks",
    "Pinnawala Elephant Orphanage experience",
    "Pidurangala and Dambulla Cave Temple",
    "Ambuluwawa panoramic viewpoint",
    "Kandy cultural show and Temple of the Tooth Relic",
    "Peradeniya Botanical Garden and tea-country experience",
    "Nuwara Eliya, Ella and Nine Arches Bridge",
    "Yala National Park wildlife safari",
    "Galle Fort and southern coastal attractions",
    "Bentota beach, Madu River and turtle conservation centre",
  ];
  
  const includes = [
    "Airport meet, assistance and return transfers",
    "Private air-conditioned transportation",
    "English-speaking chauffeur guide",
    "Customizable hotel accommodation",
    "Daily meals according to the selected hotel plan",
    "Planned sightseeing and travel assistance",
  ];
  
  const tourFacts = [
    {
      icon: FiCalendar,
      label: "Duration",
      value: "8 Nights / 9 Days",
    },
    {
      icon: FiMapPin,
      label: "Route",
      value: "Colombo, Kandy, Nuwara Eliya, Ella, Yala & Bentota",
    },
    {
      icon: FiUsers,
      label: "Best For",
      value: "Families, couples & private groups",
    },
    {
      icon: FiClock,
      label: "Tour Style",
      value: "Private guided island journey",
    },
  ];
  
  const SriLanka8N9DTour = () => {
    return (
      <main className="bg-[#FCFCFA]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
          <div className="absolute inset-0">
            <img
              src={IMAGES.hero}
              alt="8 Nights 9 Days Sri Lanka Tour"
              className="h-full w-full object-cover opacity-40"
            />
  
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#0B1F33]/88 to-[#0B1F33]/35" />
          </div>
  
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                Sri Lanka Tour Package
              </p>
  
              <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                8 Nights / 9 Days Sri Lanka Tour
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
                Discover Sri Lanka through an immersive journey combining ancient
                heritage, sacred cities, mountain scenery, tea plantations,
                wildlife, beaches, and relaxing coastal experiences.
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
                  Experience the island’s culture, mountains, wildlife, and
                  coastline.
                </h2>
  
                <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                  This 8 Nights / 9 Days Sri Lanka Tour provides additional time
                  to explore the country at a comfortable pace. The journey
                  combines Colombo, the Cultural Triangle, Kandy, the central
                  highlands, Ella, Yala National Park, Galle, and Bentota.
                </p>
  
                <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                  The itinerary can be personalized according to travel dates,
                  preferred hotel category, group size, interests, and budget.
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
                    alt="Sri Lanka private island tour"
                    className="h-[280px] w-full object-cover"
                  />
                </div>
  
                <div className="mt-6">
                  <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                    <FiStar size={15} />
                    Recommended For
                  </p>
  
                  <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                    Travelers seeking a complete island experience
                  </h3>
  
                  <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                    Ideal for travelers who prefer more time for sightseeing,
                    cultural experiences, wildlife, beaches, and relaxation.
                  </p>
  
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:bg-[#2D6A4F]"
                  >
                    Request This Package
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
                Day By Day Plan
              </p>
  
              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                9-day Sri Lanka itinerary
              </h2>
  
              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                A thoughtfully planned journey through Sri Lanka’s cultural,
                natural, wildlife, hill-country, and coastal regions.
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
                  Package Includes
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
                  Essential arrangements for a seamless island journey.
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
                  Want to personalize this 8N / 9D Sri Lanka journey?
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-white/70">
                  Share your travel dates, number of guests, preferred hotel
                  category, interests, and budget. Our team will prepare a
                  suitable itinerary and quotation.
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
  
  export default SriLanka8N9DTour;
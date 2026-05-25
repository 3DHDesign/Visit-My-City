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
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=85",
    card:
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85",
    colombo:
      "https://images.unsplash.com/photo-1588253865900-bc752d5d1b94?auto=format&fit=crop&w=900&q=85",
    kandy:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=900&q=85",
    nuwaraEliya:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=900&q=85",
    ella:
      "https://images.unsplash.com/photo-1578590467931-66e4d3b0c960?auto=format&fit=crop&w=900&q=85",
    yala:
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&w=900&q=85",
    galle:
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=900&q=85",
    bentota:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
  };
  
  const itinerary = [
    {
      day: "Day 01",
      title: "Arrival & Colombo City Tour",
      location: "Airport → Colombo",
      image: IMAGES.colombo,
      desc: "Meet and assist at Bandaranaike International Airport. Transfer to Colombo and enjoy a city tour covering Galle Face Green, Pettah, Gangaramaya Temple, Independence Square, and key city highlights before hotel check-in.",
    },
    {
      day: "Day 02",
      title: "Pinnawala, Kandy & Cultural Show",
      location: "Colombo → Pinnawala → Kandy",
      image: IMAGES.kandy,
      desc: "After breakfast, proceed to Kandy via Pinnawala Elephant Orphanage. Visit the spice garden, Peradeniya Botanical Garden, gem museum, and enjoy a cultural dance show before overnight stay in Kandy.",
    },
    {
      day: "Day 03",
      title: "Temple of Tooth & Nuwara Eliya",
      location: "Kandy → Nuwara Eliya",
      image: IMAGES.nuwaraEliya,
      desc: "Visit the Temple of the Sacred Tooth Relic, then continue to Nuwara Eliya. Enjoy Ramboda waterfalls, Nanu Oya waterfalls, tea factory experience, Lake Gregory, Victoria Park, and the charming colonial atmosphere of Little England.",
    },
    {
      day: "Day 04",
      title: "Sita Amman Temple, Ella & Buduruwagala",
      location: "Nuwara Eliya → Ella → Tissamaharama",
      image: IMAGES.ella,
      desc: "Visit Sita Amman Temple and continue to Ella. Explore Little Adam’s Peak, Nine Arches Bridge, Ravana Falls, and Buduruwagala Raja Maha Viharaya before proceeding to Tissamaharama.",
    },
    {
      day: "Day 05",
      title: "Yala Safari, Mirissa & Galle Fort",
      location: "Yala → Mirissa → Galle → Bentota",
      image: IMAGES.yala,
      desc: "Start early with a Yala National Park jeep safari. Later proceed towards the coast, visiting Mirissa Coconut Tree Hill, Secret Beach, and the historic Galle Fort before checking in at Bentota.",
    },
    {
      day: "Day 06",
      title: "Bentota, Madu River & Kosgoda Turtle Hatchery",
      location: "Bentota",
      image: IMAGES.bentota,
      desc: "Enjoy a relaxing Bentota city tour with a Madu River boat ride through mangroves and a visit to Kosgoda Turtle Hatchery. Return to the hotel for leisure and overnight stay.",
    },
    {
      day: "Day 07",
      title: "Departure",
      location: "Bentota → Airport",
      image: IMAGES.galle,
      desc: "After breakfast, your guide will pick you up from the hotel and transfer you comfortably to Bandaranaike International Airport for departure.",
    },
  ];
  
  const highlights = [
    "Colombo city tour with major landmarks",
    "Pinnawala Elephant Orphanage visit",
    "Kandy cultural show and Temple of the Tooth Relic",
    "Nuwara Eliya tea country, waterfalls, and city tour",
    "Ella highlights including Nine Arches Bridge and Ravana Falls",
    "Yala National Park wildlife safari",
    "Mirissa, Galle Fort, Bentota, Madu River, and Kosgoda Turtle Hatchery",
  ];
  
  const includes = [
    "Return airport transfers",
    "Private air-conditioned transport",
    "English-speaking chauffeur guide",
    "Hotel accommodation options",
    "Daily breakfast based on hotel plan",
    "Parking, toll charges, and travel assistance",
  ];
  
  const tourFacts = [
    {
      icon: FiCalendar,
      label: "Duration",
      value: "6 Nights / 7 Days",
    },
    {
      icon: FiMapPin,
      label: "Route",
      value: "Colombo, Kandy, Nuwara Eliya, Ella, Yala, Bentota",
    },
    {
      icon: FiUsers,
      label: "Best For",
      value: "Families, groups, couples",
    },
    {
      icon: FiClock,
      label: "Style",
      value: "Private guided tour",
    },
  ];
  
  const SriLanka6N7DTour = () => {
    return (
      <main className="bg-[#FCFCFA]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F33] pt-36 pb-24">
          <div className="absolute inset-0">
            <img
              src={IMAGES.hero}
              alt="6 Nights 7 Days Sri Lanka Tour"
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
                6 Nights / 7 Days Sri Lanka Tour
              </h1>
  
              <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
                A complete Sri Lanka journey covering Colombo, Kandy, Nuwara
                Eliya, Ella, Yala, Mirissa, Galle, Bentota, and coastal
                experiences in one smooth itinerary.
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
                  A balanced Sri Lanka journey with culture, nature, wildlife, and
                  coast.
                </h2>
  
                <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                  This 6 Nights / 7 Days Sri Lanka Tour is ideal for travelers who
                  want to explore the island’s most loved destinations within a
                  comfortable travel plan. It covers city life, heritage,
                  waterfalls, tea country, wildlife safari, beaches, and coastal
                  relaxation.
                </p>
  
                <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                  The package can be customized based on hotel category, arrival
                  time, group size, guest interests, budget, and travel style.
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
                    alt="Sri Lanka travel package"
                    className="h-[280px] w-full object-cover"
                  />
                </div>
  
                <div className="mt-6">
                  <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                    <FiStar size={15} />
                    Recommended For
                  </p>
  
                  <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                    Families, groups & first-time visitors
                  </h3>
  
                  <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                    A complete short Sri Lanka tour covering culture, hill
                    country, wildlife, beach, and coastal experiences.
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
                7-day Sri Lanka itinerary
              </h2>
  
              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                A smooth travel flow designed to cover Sri Lanka’s key highlights
                without making the journey feel rushed.
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
                  Package Includes
                </p>
  
                <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
                  Essential arrangements for a comfortable journey.
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                  Final inclusions can be adjusted based on group size, hotel
                  category, meal plan, travel dates, and quotation.
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
                  Want to adjust this 6N / 7D Sri Lanka package?
                </h2>
  
                <p className="mt-5 text-[16px] leading-8 !text-white/70">
                  Share your travel dates, number of guests, hotel preference, and
                  budget. Our team will prepare a suitable itinerary and quotation.
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
  
  export default SriLanka6N7DTour;
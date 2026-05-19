import {
    FiArrowUpRight,
    FiBriefcase,
    FiCamera,
    FiHeart,
    FiMap,
    FiSun,
    FiUmbrella,
    FiUsers,
    FiWind,
  } from "react-icons/fi";
  
  type Experience = {
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
    image: string;
  };
  
  const experiences: Experience[] = [
    {
      title: "Nature & Wildlife",
      description:
        "Safari journeys, national parks, elephants, leopards, birdlife, and authentic nature-based travel experiences.",
      icon: <FiCamera />,
      tag: "Safari",
      image:
        "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Hill Country & Tea Estates",
      description:
        "Scenic train rides, misty mountains, tea plantations, waterfalls, and charming highland escapes.",
      icon: <FiMap />,
      tag: "Highlands",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Beach & Leisure Holidays",
      description:
        "Golden beaches, ocean views, coastal stays, water activities, and relaxing island getaways.",
      icon: <FiUmbrella />,
      tag: "Coastal",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Honeymoon Trips",
      description:
        "Romantic escapes, private experiences, luxury stays, scenic routes, and memorable couple journeys.",
      icon: <FiHeart />,
      tag: "Romance",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "MICE & Business Travel",
      description:
        "Meetings, incentives, conferences, exhibitions, corporate tours, and business travel arrangements.",
      icon: <FiBriefcase />,
      tag: "Corporate",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Adventure & Sports",
      description:
        "Hiking, rafting, cycling, outdoor adventures, active holidays, and sports-focused travel plans.",
      icon: <FiWind />,
      tag: "Adventure",
      image:
        "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Yoga & Wellness",
      description:
        "Mindful retreats, wellness programs, peaceful stays, Ayurveda-inspired journeys, and slow travel.",
      icon: <FiSun />,
      tag: "Wellness",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Group & Training Tours",
      description:
        "Outbound training, group bookings, student travel, company trips, and special travel programs.",
      icon: <FiUsers />,
      tag: "Groups",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    },
  ];
  
  const ExperiencesSection = () => {
    return (
      <section className="relative overflow-hidden bg-[#FCFCFA] py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
  
        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Our Expertise
              </span>
  
              <h2 className="mt-7 text-[36px] font-bold leading-[1.1] !text-[#0B1F33] md:text-[54px] lg:text-[62px]">
                Travel Experiences
                <span className="block !text-[#2D6A4F]">
                  Crafted Around You.
                </span>
              </h2>
            </div>
  
            <div className="lg:pb-2">
              <p className="max-w-[680px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
                From Sri Lanka’s wildlife, hill country, beaches, and cultural
                routes to international holidays and corporate travel, Visit My
                City designs journeys for every traveler.
              </p>
            </div>
          </div>
  
          {/* Experience Grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {experiences.map((item) => (
              <div
                key={item.title}
                className="group relative min-h-[390px] overflow-hidden rounded-[32px] border border-white/20 bg-[#0B1F33] shadow-[0_20px_65px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_85px_rgba(15,23,42,0.18)]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
  
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/95 via-[#0B1F33]/55 to-black/10" />
  
                {/* Content */}
                <div className="relative z-10 flex h-full min-h-[390px] flex-col justify-between p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[24px] text-[#E9A93B] ring-1 ring-white/15 backdrop-blur-md">
                      {item.icon}
                    </div>
  
                    <span className="rounded-full bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] !text-white/80 ring-1 ring-white/15 backdrop-blur-md">
                      {item.tag}
                    </span>
                  </div>
  
                  <div>
                    <h3 className="text-[25px] font-bold leading-tight !text-white">
                      {item.title}
                    </h3>
  
                    <p className="mt-4 text-[14.5px] leading-7 !text-white/72">
                      {item.description}
                    </p>
  
                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 text-[13px] font-bold !text-[#E9A93B] transition-all hover:gap-3"
                    >
                      Explore Experience
                      <FiArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperiencesSection;
import {
    FiArrowUpRight,
    FiCalendar,
    FiClock,
    FiGlobe,
    FiMapPin,
    FiStar,
  } from "react-icons/fi";
  import PrimaryButton from "../common/PrimaryButton";
  
  type Journey = {
    title: string;
    location: string;
    type: "Inbound" | "Outbound";
    duration: string;
    description: string;
    image: string;
    featured?: boolean;
  };
  
  const journeys: Journey[] = [
    {
      title: "Sri Lanka Cultural Journey",
      location: "Kandy • Sigiriya • Dambulla",
      type: "Inbound",
      duration: "5 Days",
      description:
        "Explore sacred temples, ancient kingdoms, cultural landmarks, and timeless Sri Lankan heritage.",
      image:
        "https://images.unsplash.com/photo-1586613835347-b16d6f2f6b47?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      title: "Hill Country Escape",
      location: "Ella • Nuwara Eliya • Tea Country",
      type: "Inbound",
      duration: "4 Days",
      description:
        "Scenic train rides, tea estates, waterfalls, cool weather, and peaceful mountain views.",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Southern Coast Getaway",
      location: "Galle • Mirissa • Bentota",
      type: "Inbound",
      duration: "4 Days",
      description:
        "Colonial streets, golden beaches, ocean views, boutique stays, and relaxing coastal moments.",
      image:
        "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Dubai City Break",
      location: "Dubai, UAE",
      type: "Outbound",
      duration: "4 Days",
      description:
        "Luxury shopping, skyline views, desert safari, city tours, and unforgettable modern attractions.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      featured: true,
    },
    {
      title: "Azerbaijan Holiday Package",
      location: "Baku • Gabala",
      type: "Outbound",
      duration: "5 Days",
      description:
        "City lights, mountain escapes, culture, food, and scenic Caucasus travel experiences.",
      image:
        "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Japan Discovery Tour",
      location: "Tokyo • Kyoto • Osaka",
      type: "Outbound",
      duration: "7 Days",
      description:
        "Temples, city lights, seasonal beauty, local food, shopping, and iconic Japanese culture.",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  
  const FeaturedJourneysSection = () => {
    return (
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
  
        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Featured Journeys
              </span>
  
              <h2 className="mt-7 text-[36px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[54px] lg:text-[62px]">
                Handpicked Travel Plans
                <span className="block !text-[#2D6A4F]">
                  for Your Next Journey.
                </span>
              </h2>
            </div>
  
            <div className="lg:pb-2">
              <p className="max-w-[680px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
                Explore carefully curated Sri Lanka tours and international
                holiday packages designed for families, couples, groups, and
                corporate travelers.
              </p>
            </div>
          </div>
  
          {/* Journey Grid */}
          <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {journeys.map((journey) => (
              <div
                key={journey.title}
                className="group overflow-hidden rounded-[34px] border border-slate-100 bg-[#FCFCFA] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_80px_rgba(15,23,42,0.10)]"
              >
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden rounded-b-[30px] bg-[#0B1F33]">
                  <img
                    src={journey.image}
                    alt={journey.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-black/15 to-transparent" />
  
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] !text-white ring-1 ring-white/20 backdrop-blur-md">
                      {journey.type === "Inbound" ? (
                        <FiMapPin size={13} className="text-[#E9A93B]" />
                      ) : (
                        <FiGlobe size={13} className="text-[#E9A93B]" />
                      )}
                      {journey.type}
                    </span>
  
                    {journey.featured && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#E9A93B] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#0B1F33]">
                        <FiStar size={12} />
                        Featured
                      </span>
                    )}
                  </div>
  
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[13px] font-semibold !text-white ring-1 ring-white/20 backdrop-blur-md">
                      <FiClock size={14} className="text-[#E9A93B]" />
                      {journey.duration}
                    </div>
                  </div>
                </div>
  
                {/* Content */}
                <div className="p-7">
                  <h3 className="text-[27px] font-bold leading-tight !text-[#0B1F33]">
                    {journey.title}
                  </h3>
  
                  <div className="mt-4 flex items-start gap-2">
                    <FiMapPin
                      size={16}
                      className="mt-1 shrink-0 text-[#E9A93B]"
                    />
                    <p className="text-[14px] font-semibold !text-slate-500">
                      {journey.location}
                    </p>
                  </div>
  
                  <p className="mt-5 text-[15px] leading-7 !text-slate-600">
                    {journey.description}
                  </p>
  
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-6">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[14px] font-bold !text-[#2D6A4F] transition-all hover:gap-3 hover:!text-[#E9A93B]"
                    >
                      View Journey
                      <FiArrowUpRight size={15} />
                    </a>
  
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F33] text-white transition-all duration-300 group-hover:bg-[#E9A93B] group-hover:text-[#0B1F33]">
                      <FiArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom CTA */}
          <div className="mt-16 overflow-hidden rounded-[36px] bg-[#0B1F33] p-8 md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                  <FiCalendar size={15} />
                  Custom Journey Planning
                </div>
  
                <h3 className="mt-5 max-w-[820px] text-[30px] font-bold leading-tight !text-white md:text-[40px]">
                  Need a custom travel plan? Tell us your destination, dates, and
                  budget — we’ll help shape the journey.
                </h3>
              </div>
  
              <PrimaryButton text="Plan Your Journey" href="#" variant="gold" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedJourneysSection;
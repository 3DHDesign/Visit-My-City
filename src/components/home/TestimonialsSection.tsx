import {
    FiArrowUpRight,
    FiGlobe,
    FiMapPin,
    FiMessageCircle,
    FiStar,
  } from "react-icons/fi";
  
  type Testimonial = {
    name: string;
    role: string;
    type: "Inbound" | "Outbound";
    review: string;
    image: string;
  };
  
  const testimonials: Testimonial[] = [
    {
      name: "Anjali Perera",
      role: "Family Holiday Traveler",
      type: "Outbound",
      review:
        "Visit My City helped us plan a smooth overseas family holiday. Flights, hotels, transfers, and the full itinerary were handled clearly and professionally.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Michael Anderson",
      role: "Sri Lanka Tour Guest",
      type: "Inbound",
      review:
        "Our Sri Lanka journey was beautifully organized. Kandy, Ella, Galle, and the coastal experiences were planned with great care and local knowledge.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Nadia Silva",
      role: "Honeymoon Traveler",
      type: "Outbound",
      review:
        "The team understood exactly what we wanted for our honeymoon. The hotel choices, travel plan, and support made everything stress-free.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Rahul Mehta",
      role: "Group Tour Guest",
      type: "Inbound",
      review:
        "From airport pickup to hotel stays and sightseeing, the full Sri Lanka tour was well coordinated. The guide and travel arrangements were excellent.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="relative overflow-hidden bg-[#FCFCFA] py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />
  
        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="mx-auto max-w-[880px] text-center">
            <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Traveler Stories
            </span>
  
            <h2 className="mt-7 text-[36px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[54px] lg:text-[62px]">
              Trusted by Travelers
              <span className="block !text-[#2D6A4F]">
                Across Sri Lanka & Beyond.
              </span>
            </h2>
  
            <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
              From inbound Sri Lanka tours to outbound holidays, travelers choose
              Visit My City for reliable planning, local expertise, and complete
              travel support.
            </p>
          </div>
  
          {/* Testimonials Grid */}
          <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item, index) => (
              <div
                key={item.name}
                className={`group relative overflow-hidden rounded-[34px] border border-slate-100 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.10)] ${
                  index === 1
                    ? "bg-[#0B1F33]"
                    : "bg-white"
                }`}
              >
                <div
                  className={`absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full blur-3xl ${
                    index === 1 ? "bg-[#E9A93B]/20" : "bg-[#2D6A4F]/10"
                  }`}
                />
  
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <FiStar
                        key={starIndex}
                        size={16}
                        className="fill-[#E9A93B] text-[#E9A93B]"
                      />
                    ))}
                  </div>
  
                  {/* Review */}
                  <p
                    className={`mt-6 min-h-[168px] text-[15px] leading-8 ${
                      index === 1 ? "!text-white/75" : "!text-slate-600"
                    }`}
                  >
                    “{item.review}”
                  </p>
  
                  {/* User */}
                  <div className="mt-7 flex items-center gap-4 border-t border-slate-100/20 pt-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-[#E9A93B]/40"
                    />
  
                    <div>
                      <h3
                        className={`text-[16px] font-bold ${
                          index === 1 ? "!text-white" : "!text-[#0B1F33]"
                        }`}
                      >
                        {item.name}
                      </h3>
  
                      <p
                        className={`mt-1 text-[12.5px] font-medium ${
                          index === 1 ? "!text-white/55" : "!text-slate-500"
                        }`}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
  
                  {/* Badge */}
                  <div className="mt-6 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                        index === 1
                          ? "bg-white/10 !text-white/80 ring-1 ring-white/15"
                          : "bg-[#FCFCFA] !text-[#0B1F33] ring-1 ring-slate-100"
                      }`}
                    >
                      {item.type === "Inbound" ? (
                        <FiMapPin size={13} className="text-[#E9A93B]" />
                      ) : (
                        <FiGlobe size={13} className="text-[#E9A93B]" />
                      )}
                      {item.type}
                    </span>
  
                    <FiMessageCircle
                      size={18}
                      className={index === 1 ? "text-[#E9A93B]" : "text-[#2D6A4F]"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom CTA */}
          <div className="mt-16 overflow-hidden rounded-[36px] bg-[#0B1F33] p-8 md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                  Your journey starts here
                </p>
  
                <h3 className="mt-4 max-w-[820px] text-[30px] font-bold leading-tight !text-white md:text-[40px]">
                  Ready to create your own travel story with Visit My City?
                </h3>
              </div>
  
              <a
                href="#"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#E9A93B] px-7 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:bg-white"
              >
                Start Planning
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
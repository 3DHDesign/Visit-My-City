import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiBriefcase,
  FiCheck,
  FiCreditCard,
  FiFileText,
  FiMapPin,
  FiShield,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type Service = {
  title: string;
  category: string;
  description: string;
  icon: IconType;
  image: string;
  points: string[];
};

const services: Service[] = [
  {
    title: "Flight Reservations",
    category: "Air Travel",
    description:
      "International and domestic flight booking support for business, leisure, group, and family travel requirements.",
    icon: FiCreditCard,
    image:
      "https://images.unsplash.com/photo-1537123144747-e43eff2e1040?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "International flight booking",
      "Domestic flight support",
      "Group and family travel coordination",
    ],
  },
  {
    title: "Hotel Reservations",
    category: "Stays",
    description:
      "Comfortable hotel stays, luxury resorts, boutique properties, and corporate accommodation arrangements.",
    icon: FiBriefcase,
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Luxury and boutique hotels",
      "Corporate accommodation",
      "Budget-based hotel options",
    ],
  },
  {
    title: "Travel Insurance",
    category: "Protection",
    description:
      "Travel insurance assistance for safer journeys, medical protection, and better peace of mind.",
    icon: FiShield,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    points: [
      "Travel protection support",
      "Medical emergency coverage guidance",
      "Safer journey planning",
    ],
  },
  {
    title: "Ground Transfers",
    category: "Transport",
    description:
      "Airport transfers, private transport, chauffeur services, and comfortable travel between destinations.",
    icon: FiTruck,
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85",
    points: [
      "Airport pickup and drop-off",
      "Private vehicle arrangements",
      "Comfortable intercity transfers",
    ],
  },
  {
    title: "Visa Assistance",
    category: "Documents",
    description:
      "Limited visa consultation and assistance for selected travel destinations and tour requirements.",
    icon: FiFileText,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    points: [
      "Visa document guidance",
      "Selected destination support",
      "Travel requirement assistance",
    ],
  },
  {
    title: "MICE Arrangements",
    category: "Corporate",
    description:
      "Meetings, incentives, conferences, exhibitions, corporate groups, and special business travel events.",
    icon: FiUsers,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Meetings and conferences",
      "Corporate group travel",
      "Event travel coordination",
    ],
  },
  {
    title: "Tour Guide Services",
    category: "Guided Tours",
    description:
      "Professional multilingual guide services for cultural tours, city visits, and destination experiences.",
    icon: FiMapPin,
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=85",
    points: [
      "Multilingual guide support",
      "Cultural tour guidance",
      "City and heritage experiences",
    ],
  },
  {
    title: "Custom Excursions",
    category: "Experiences",
    description:
      "Personalized excursions, day tours, special activities, and curated local experiences.",
    icon: FiArrowUpRight,
    image:
      "https://images.unsplash.com/photo-1517586220462-f5712b9ec531?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    points: [
      "Day tours and activities",
      "Tailor-made excursions",
      "Special experience planning",
    ],
  },
];

const TravelServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const mobileSliderRef = useRef<any>(null);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  const mobileSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    swipeToSlide: true,
    beforeChange: (_current: number, next: number) => setMobileActive(next),
  };

  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[240px] bg-gradient-to-b from-[#FCFCFA] to-white" />
      <div className="pointer-events-none absolute -left-36 top-28 h-[320px] w-[320px] rounded-full bg-[#2D6A4F]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-36 bottom-12 h-[320px] w-[320px] rounded-full bg-[#E9A93B]/12 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-[1180px]">
          {/* Header */}
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#B98525]">
                Why Choose Visit My City
              </p>

              <h2 className="mt-3 text-[32px] font-bold leading-[1.06] !text-[#0B1F33] md:text-[50px] lg:text-[56px]">
                Everything your journey needs,
                <span className="block !text-[#2D6A4F]">
                  handled in one place.
                </span>
              </h2>
            </div>

            <p className="max-w-[650px] text-[15px] leading-7 !text-slate-600 md:text-[16px] md:leading-8 lg:justify-self-end">
              From flights and hotels to transfers, insurance, visa assistance,
              guides, and corporate arrangements, our team coordinates the
              important details behind every smooth journey.
            </p>
          </div>

          {/* Mobile service slider */}
          <div className="relative mt-6 lg:hidden">
            <Slider
              ref={mobileSliderRef}
              {...mobileSettings}
              className="service-mobile-slider"
            >
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div key={service.title} className="px-1 pb-8">
                    <article className="overflow-hidden rounded-[28px] border border-[#E8DED0] bg-white shadow-[0_18px_55px_rgba(11,31,51,0.07)]">
                      <div className="relative h-[220px] overflow-hidden bg-[#0B1F33]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/74 via-[#0B1F33]/15 to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 backdrop-blur-md">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
                              <Icon size={14} />
                            </span>

                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] !text-white">
                              {service.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-[30px] font-bold leading-[1.05] !text-[#0B1F33]">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-6 !text-slate-600">
                          {service.description}
                        </p>

                        <div className="mt-5 grid gap-2.5">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 rounded-[16px] border border-[#EFE7DA] bg-[#FCFCFA] p-3"
                            >
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                                <FiCheck size={13} />
                              </span>

                              <p className="text-[13px] font-semibold leading-5 !text-[#0B1F33]">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 grid gap-3">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-6 py-3.5 text-[13px] font-bold !text-white shadow-[0_14px_34px_rgba(11,31,51,0.18)] transition-all duration-300 hover:bg-[#2D6A4F]"
                          >
                            Request This Service
                            <FiArrowUpRight size={15} />
                          </Link>

                          <Link
                            to="/journeys"
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E3D7C4] bg-[#FCFCFA] px-6 py-3.5 text-[13px] font-bold !text-[#0B1F33]"
                          >
                            View Journeys
                            <FiArrowUpRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </Slider>

            <button
              type="button"
              onClick={() => mobileSliderRef.current?.slickPrev()}
              className="absolute left-2 top-[105px] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#0B1F33]/45 !text-white backdrop-blur-md"
              aria-label="Previous service"
            >
              <FiArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() => mobileSliderRef.current?.slickNext()}
              className="absolute right-2 top-[105px] z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#0B1F33]/45 !text-white backdrop-blur-md"
              aria-label="Next service"
            >
              <FiArrowRight size={19} />
            </button>

            <div className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-[#0B1F33]/45 px-3 py-1.5 text-[11px] font-bold !text-white backdrop-blur-md">
              {String(mobileActive + 1).padStart(2, "0")} /{" "}
              {String(services.length).padStart(2, "0")}
            </div>
          </div>

          {/* Desktop service console */}
          <div className="mt-8 hidden overflow-hidden rounded-[36px] border border-[#E8DED0] bg-[#F8F5EF] p-4 shadow-[0_22px_70px_rgba(11,31,51,0.07)] lg:block">
            <div className="grid gap-4 lg:grid-cols-[300px_1fr_360px]">
              {/* Desktop selector */}
              <div className="rounded-[28px] border border-[#E8DED0] bg-white p-3 shadow-[0_12px_36px_rgba(11,31,51,0.04)]">
                <div className="px-2 pb-3 pt-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-[#B98525]">
                    Select Service
                  </p>

                  <h3 className="mt-1 text-[20px] font-bold !text-[#0B1F33]">
                    Travel support
                  </h3>
                </div>

                <div className="grid gap-2">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={service.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`group flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left transition-all duration-300 ${
                          isActive
                            ? "bg-[#0B1F33] shadow-[0_14px_36px_rgba(11,31,51,0.16)]"
                            : "bg-[#FCFCFA] hover:bg-[#FFF8EA]"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                            isActive
                              ? "bg-[#E9A93B] text-[#0B1F33]"
                              : "bg-white text-[#2D6A4F] ring-1 ring-[#EFE7DA] group-hover:text-[#B98525]"
                          }`}
                        >
                          <Icon size={18} />
                        </span>

                        <span className="min-w-0">
                          <span
                            className={`block truncate text-[13.5px] font-bold leading-5 ${
                              isActive ? "!text-white" : "!text-[#0B1F33]"
                            }`}
                          >
                            {service.title}
                          </span>

                          <span
                            className={`mt-0.5 block truncate text-[10px] font-semibold uppercase tracking-[0.12em] ${
                              isActive ? "!text-white/50" : "!text-slate-400"
                            }`}
                          >
                            {service.category}
                          </span>
                        </span>

                        <FiArrowUpRight
                          size={14}
                          className={`ml-auto shrink-0 transition-all duration-300 ${
                            isActive
                              ? "text-[#E9A93B]"
                              : "text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B98525]"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desktop content */}
              <div className="rounded-[26px] bg-white p-8 shadow-[0_14px_44px_rgba(11,31,51,0.045)]">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#E8DED0] bg-[#FCFCFA] px-3 py-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF7F2] text-[#2D6A4F]">
                    <ActiveIcon size={16} />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] !text-[#B98525]">
                    {activeService.category}
                  </span>
                </div>

                <h3 className="mt-5 text-[46px] font-bold leading-[1.08] !text-[#0B1F33]">
                  {activeService.title}
                </h3>

                <p className="mt-4 text-[16px] leading-7 !text-slate-600">
                  {activeService.description}
                </p>

                <div className="mt-5 grid gap-2.5">
                  {activeService.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-[18px] border border-[#EFE7DA] bg-[#FCFCFA] p-3"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                        <FiCheck size={13} />
                      </span>

                      <p className="text-[13.5px] font-semibold leading-6 !text-[#0B1F33]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-6 py-3.5 text-[13px] font-bold !text-white shadow-[0_14px_34px_rgba(11,31,51,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
                  >
                    Request This Service
                    <FiArrowUpRight size={15} />
                  </Link>

                  <Link
                    to="/journeys"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E3D7C4] bg-[#FCFCFA] px-6 py-3.5 text-[13px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9B05F]/60 hover:bg-[#FFF8EA]"
                  >
                    View Journeys
                    <FiArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Desktop image */}
              <div className="relative overflow-hidden rounded-[26px] bg-[#0B1F33]">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/74 via-[#0B1F33]/18 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[20px] border border-white/20 bg-white/18 p-4 backdrop-blur-xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] !text-[#F7C76D]">
                    VMC Service
                  </p>

                  <h4 className="mt-1 text-[20px] font-bold leading-tight !text-white">
                    Smooth travel coordination.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Compact trust row */}
          <div className="mt-5 grid gap-3 rounded-[26px] border border-[#E8DED0] bg-white p-3 shadow-[0_14px_40px_rgba(11,31,51,0.04)] sm:grid-cols-3">
            {[
              "Certified support",
              "Inbound & outbound",
              "Personal coordination",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-[18px] bg-[#FCFCFA] px-4 py-3"
              >
                <FiCheck size={15} className="text-[#2D6A4F]" />
                <span className="text-[13px] font-bold !text-[#0B1F33]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelServicesSection;
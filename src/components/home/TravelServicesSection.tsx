import { useState } from "react";
import {
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

const serviceSteps = [
  "Tell us your requirement",
  "We plan the right options",
  "You confirm the journey",
  "We coordinate the details",
];

const TravelServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <section className="relative overflow-hidden bg-white py-4 lg:py-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-gradient-to-b from-[#FCFCFA] to-white" />
      <div className="pointer-events-none absolute -left-40 top-32 h-[440px] w-[440px] rounded-full bg-[#2D6A4F]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-16 h-[440px] w-[440px] rounded-full bg-[#E9A93B]/12 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] !text-[#B98525]">
              Travel Services
            </p>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.05] !text-[#0B1F33] md:text-[58px]">
              Everything your journey needs,
              <span className="block !text-[#2D6A4F]">handled in one place.</span>
            </h2>
          </div>

          <p className="max-w-[670px] text-[16px] leading-8 !text-slate-600 md:text-[17px] lg:justify-self-end">
            From flights and hotels to transfers, insurance, visa assistance,
            guides, and corporate arrangements, our team coordinates the
            important details behind every smooth journey.
          </p>
        </div>

        {/* Modern Service Console */}
        <div className="mt-16 overflow-hidden rounded-[42px] border border-[#E8DED0] bg-[#F8F5EF] p-4 shadow-[0_28px_90px_rgba(11,31,51,0.08)] lg:p-5">
          <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
            {/* Left service selector */}
            <div className="rounded-[34px] border border-[#E8DED0] bg-white p-3 shadow-[0_16px_45px_rgba(11,31,51,0.04)]">
              <div className="px-3 py-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] !text-[#B98525]">
                  Select Service
                </p>

                <h3 className="mt-2 text-[24px] font-bold !text-[#0B1F33]">
                  Travel support menu
                </h3>
              </div>

              <div className="mt-2 grid gap-2">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group flex w-full items-center gap-3 rounded-[22px] px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-[#0B1F33] shadow-[0_16px_40px_rgba(11,31,51,0.18)]"
                          : "bg-[#FCFCFA] hover:bg-[#FFF8EA]"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[20px] transition-all duration-300 ${
                          isActive
                            ? "bg-[#E9A93B] text-[#0B1F33]"
                            : "bg-white text-[#2D6A4F] ring-1 ring-[#EFE7DA] group-hover:text-[#B98525]"
                        }`}
                      >
                        <Icon />
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block text-[14.5px] font-bold leading-5 ${
                            isActive ? "!text-white" : "!text-[#0B1F33]"
                          }`}
                        >
                          {service.title}
                        </span>

                        <span
                          className={`mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] ${
                            isActive ? "!text-white/50" : "!text-slate-400"
                          }`}
                        >
                          {service.category}
                        </span>
                      </span>

                      <FiArrowUpRight
                        size={15}
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

            {/* Right active service display */}
            <div className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_18px_55px_rgba(11,31,51,0.05)]">
              <div className="grid min-h-[690px] lg:grid-cols-[1fr_0.82fr]">
                {/* Content */}
                <div className="flex flex-col justify-between p-7 md:p-9 lg:p-10">
                  <div>
                    <div className="inline-flex items-center gap-3 rounded-full border border-[#E8DED0] bg-[#FCFCFA] px-4 py-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF7F2] text-[#2D6A4F]">
                        <ActiveIcon size={18} />
                      </span>

                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#B98525]">
                        {activeService.category}
                      </span>
                    </div>

                    <h3 className="mt-8 max-w-[620px] text-[36px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[52px]">
                      {activeService.title}
                    </h3>

                    <p className="mt-5 max-w-[620px] text-[16px] leading-8 !text-slate-600">
                      {activeService.description}
                    </p>

                    <div className="mt-8 grid gap-4">
                      {activeService.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 rounded-[22px] border border-[#EFE7DA] bg-[#FCFCFA] p-4"
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                            <FiCheck size={13} />
                          </span>

                          <p className="text-[14.5px] font-semibold leading-6 !text-[#0B1F33]">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white shadow-[0_16px_40px_rgba(11,31,51,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
                    >
                      Request This Service
                      <FiArrowUpRight size={16} />
                    </Link>

                    <Link
                      to="/journeys"
                      className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E3D7C4] bg-[#FCFCFA] px-7 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9B05F]/60 hover:bg-[#FFF8EA]"
                    >
                      View Journeys
                      <FiArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Image panel */}
                <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/78 via-[#0B1F33]/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 rounded-[26px] border border-white/20 bg-white/18 p-5 backdrop-blur-xl">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#F7C76D]">
                      Visit My City Service
                    </p>

                    <h4 className="mt-2 text-[24px] font-bold leading-tight !text-white">
                      Built for smooth travel coordination.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Process strip */}
        <div className="mt-8 rounded-[34px] border border-[#E8DED0] bg-white p-5 shadow-[0_18px_55px_rgba(11,31,51,0.055)] md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {serviceSteps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-[24px] bg-[#FCFCFA] p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0B1F33] text-[13px] font-bold !text-[#E9A93B]">
                  0{index + 1}
                </span>

                <p className="text-[14px] font-bold leading-5 !text-[#0B1F33]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelServicesSection;
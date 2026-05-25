import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiGlobe,
  FiMapPin,
  FiNavigation,
  FiSend,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type Journey = {
  title: string;
  code: string;
  type: "Inbound" | "Outbound";
  duration: string;
  route: string;
  description: string;
  status: "Live" | "Custom";
  image: string;
  path: string;
};

type ArrowProps = {
  onClick?: () => void;
};

const journeys: Journey[] = [
  {
    title: "6N / 7D Sri Lanka Tour",
    code: "VMC-LK-067",
    type: "Inbound",
    duration: "6 Nights / 7 Days",
    route: "Colombo → Kandy → Nuwara Eliya → Ella → Yala → Bentota",
    description:
      "A complete Sri Lanka journey with culture, tea country, wildlife, beaches, and coastal experiences.",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=85",
    path: "/explore-sri-lanka/6n-7d-sri-lanka-tour",
  },
  {
    title: "8N / 9D Sri Lanka Tour",
    code: "VMC-LK-089",
    type: "Inbound",
    duration: "8 Nights / 9 Days",
    route: "Colombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Galle",
    description:
      "An extended island journey with culture, scenic routes, safari, beaches, and heritage stops.",
    status: "Custom",
    image:
      "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1600&q=85",
    path: "/contact",
  },
  {
    title: "Dubai Family Escape",
    code: "VMC-DXB-CUS",
    type: "Outbound",
    duration: "Custom Plan",
    route: "Dubai City → Desert Safari → Shopping → Family Attractions",
    description:
      "A family-friendly outbound package with city experiences, desert adventure, shopping, and premium stays.",
    status: "Custom",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85",
    path: "/contact",
  },
  {
    title: "Azerbaijan Holiday Package",
    code: "VMC-AZE-CUS",
    type: "Outbound",
    duration: "Custom Plan",
    route: "Baku → Old City → Mountains → Cultural Experiences",
    description:
      "A scenic outbound journey with city lights, old town culture, mountain landscapes, and relaxing holiday moments.",
    status: "Custom",
    image:
      "https://images.unsplash.com/photo-1596306499317-849023209d79?auto=format&fit=crop&w=1600&q=85",
    path: "/contact",
  },
];

const stats = [
  {
    icon: FiCalendar,
    label: "Flexible Dates",
  },
  {
    icon: FiUsers,
    label: "Family & Groups",
  },
  {
    icon: FiNavigation,
    label: "Inbound + Outbound",
  },
];

const routeStops = [
  "Colombo",
  "Kandy",
  "Nuwara Eliya",
  "Ella",
  "Yala",
  "Bentota",
];

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous journey"
      className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#E3D7C4] bg-white text-[#0B1F33] shadow-[0_12px_35px_rgba(11,31,51,0.12)] transition-all duration-300 hover:bg-[#0B1F33] hover:text-white lg:flex"
    >
      <FiArrowLeft size={18} />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next journey"
      className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#E3D7C4] bg-white text-[#0B1F33] shadow-[0_12px_35px_rgba(11,31,51,0.12)] transition-all duration-300 hover:bg-[#0B1F33] hover:text-white lg:flex"
    >
      <FiArrowRight size={18} />
    </button>
  );
};

const FeaturedJourneysSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 850,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-gradient-to-b from-[#F8F5EF] to-[#FCFCFA]" />
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/12 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] !text-[#B98525]">
              Featured Journeys
            </p>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.05] !text-[#0B1F33] md:text-[58px]">
              Swipe through routes.
              <span className="block !text-[#2D6A4F]">
                Pick your perfect journey.
              </span>
            </h2>
          </div>

          <p className="max-w-[670px] text-[16px] leading-8 !text-slate-600 md:text-[17px] lg:justify-self-end">
            Start with a ready-made journey or request a custom version based on
            travel dates, hotel preference, guest count, budget, and travel
            purpose.
          </p>
        </div>

        {/* React Slick Carousel */}
        <div className="journey-slick relative mt-16">
          <Slider {...settings}>
            {journeys.map((journey) => {
              const TypeIcon =
                journey.type === "Inbound" ? FiMapPin : FiGlobe;

              return (
                <div key={journey.code} className="px-1 md:px-2">
                  <article className="group overflow-hidden rounded-[42px] border border-[#E8DED0] bg-white p-3 shadow-[0_28px_90px_rgba(11,31,51,0.09)] transition-all duration-500 hover:shadow-[0_36px_110px_rgba(11,31,51,0.13)] md:p-4">
                    <div className="grid min-h-[620px] overflow-hidden rounded-[32px] bg-[#F8F5EF] lg:grid-cols-[0.92fr_1.08fr]">
                      {/* Image */}
                      <div className="relative min-h-[340px] overflow-hidden lg:min-h-full">
                        <img
                          src={journey.image}
                          alt={journey.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/82 via-[#0B1F33]/18 to-transparent" />

                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] ${
                              journey.status === "Live"
                                ? "bg-[#E9A93B] !text-[#0B1F33]"
                                : "bg-white/90 !text-[#0B1F33]"
                            }`}
                          >
                            <FiStar size={14} />
                            {journey.status === "Live"
                              ? "Live Journey"
                              : "Custom Plan"}
                          </span>

                          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] !text-white backdrop-blur">
                            <TypeIcon size={14} className="text-[#F7C76D]" />
                            {journey.type}
                          </span>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="rounded-[28px] border border-white/20 bg-white/16 p-5 backdrop-blur-xl">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] !text-[#F7C76D]">
                              Journey Code
                            </p>

                            <h3 className="mt-2 text-[32px] font-bold leading-tight !text-white md:text-[42px]">
                              {journey.code}
                            </h3>

                            <p className="mt-2 text-[13px] leading-6 !text-white/72">
                              {journey.type === "Inbound"
                                ? "Sri Lanka travel route"
                                : "Worldwide travel package"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col justify-between p-6 md:p-9 lg:p-10">
                        <div>
                          <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] !text-[#B98525] ring-1 ring-[#E8DED0]">
                              <FiClock size={14} />
                              {journey.duration}
                            </span>

                            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF7F2] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] !text-[#2D6A4F]">
                              <FiNavigation size={14} />
                              {journey.type}
                            </span>
                          </div>

                          <h3 className="mt-8 text-[38px] font-bold leading-[1.04] !text-[#0B1F33] md:text-[56px]">
                            {journey.title}
                          </h3>

                          <div className="mt-7 rounded-[28px] border border-[#E8DED0] bg-white p-5 shadow-[0_12px_35px_rgba(11,31,51,0.035)]">
                            <p className="flex items-start gap-3 text-[15px] font-semibold leading-7 !text-[#0B1F33]">
                              <FiMapPin
                                size={17}
                                className="mt-1 shrink-0 text-[#B98525]"
                              />
                              {journey.route}
                            </p>
                          </div>

                          <p className="mt-6 max-w-[760px] text-[16px] leading-8 !text-slate-600">
                            {journey.description}
                          </p>
                        </div>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                          <Link
                            to={journey.path}
                            className={`inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[14px] font-bold shadow-[0_16px_40px_rgba(11,31,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 ${
                              journey.status === "Live"
                                ? "bg-[#0B1F33] !text-white hover:bg-[#2D6A4F]"
                                : "bg-[#E9A93B] !text-[#0B1F33] hover:bg-[#0B1F33] hover:!text-white"
                            }`}
                          >
                            {journey.status === "Live"
                              ? "View Journey"
                              : "Request Plan"}
                            <FiArrowUpRight size={16} />
                          </Link>

                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#E3D7C4] bg-white px-7 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF8EA]"
                          >
                            Customize
                            <FiArrowUpRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 overflow-hidden rounded-[30px] border border-[#E8DED0] bg-white shadow-[0_18px_55px_rgba(11,31,51,0.055)]">
          <div className="grid gap-px bg-[#E8DED0] lg:grid-cols-[1fr_auto]">
            <div className="bg-white p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-3">
                {routeStops.map((stop, index) => (
                  <div key={stop} className="flex items-center gap-3">
                    <span className="rounded-full bg-[#FCFCFA] px-4 py-2 text-[12px] font-bold !text-[#0B1F33] ring-1 ring-[#EFE7DA]">
                      {stop}
                    </span>

                    {index !== routeStops.length - 1 && (
                      <FiSend className="rotate-45 text-[#B98525]" size={14} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid bg-white sm:grid-cols-3 lg:min-w-[420px]">
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-center gap-3 border-t border-[#E8DED0] px-5 py-5 sm:border-l sm:border-t-0"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F33] text-[#E9A93B]">
                      <Icon size={17} />
                    </span>

                    <p className="text-[13px] font-bold !text-[#0B1F33]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-9 text-center">
          <Link
            to="/journeys"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-8 py-4 text-[14px] font-bold !text-white shadow-[0_16px_45px_rgba(11,31,51,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
          >
            Explore All Journeys
            <FiArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJourneysSection;
import { useRef, useState } from "react";
import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiMapPin,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type Moment = {
  title: string;
  subtitle: string;
  label: string;
  image: string;
  mobileImage: string;
};

const moments: Moment[] = [
  {
    title: "Airport Meet & Greet",
    subtitle:
      "Smooth arrivals with VMC coach support, luggage assistance, and coordinated transfers from the airport.",
    label: "Arrivals",
    image: "/images/vmc-moments/vmc-coach-arrival.png",
    mobileImage: "/images/vmc-moments/vmc-coach-arrival-mobile.jpg",
  },
  {
    title: "Hill Country Scenic Drives",
    subtitle:
      "Private scenic transfers through tea hills, waterfalls, winding roads, and misty mountain viewpoints.",
    label: "VMC Fleet",
    image: "/images/vmc-moments/ella-trip.jpg",
    mobileImage: "/images/vmc-moments/ella-trip-mobile.jpg",
  },
  {
    title: "Waterfall Transfers",
    subtitle:
      "Comfortable roadside stops near Sri Lanka’s waterfalls, forests, and scenic hill-country routes.",
    label: "Scenic Routes",
    image: "/images/vmc-moments/waterfall-transfer.png",
    mobileImage: "/images/vmc-moments/waterfall-transfer-mobile.jpg",
  },
  {
    title: "Tea Country Walks",
    subtitle:
      "Guided highland experiences through tea estates, misty views, local stories, and cool mountain air.",
    label: "Guided Tours",
    image: "/images/vmc-moments/tea-country-guided-tour.png",
    mobileImage: "/images/vmc-moments/tea-country-guided-tour-mobile.jpg",
  },
  {
    title: "Safari Drives",
    subtitle:
      "Wildlife journeys with safe coordination, park experiences, jeep support, and on-ground assistance.",
    label: "Wildlife",
    image: "/images/vmc-moments/safari-drive.png",
    mobileImage: "/images/vmc-moments/safari-drive-mobile.jpg",
  },
  {
    title: "Beach Escapes",
    subtitle:
      "Relaxed coastal experiences with sunsets, fishing villages, beach stays, local boats, and island charm.",
    label: "Coastal",
    image: "/images/vmc-moments/beach-moment.png",
    mobileImage: "/images/vmc-moments/beach-moment-mobile.jpg",
  },
  {
    title: "Local Dining Experiences",
    subtitle:
      "Authentic Sri Lankan flavours, hosted meals, village hospitality, and memorable cultural dining moments.",
    label: "Culture",
    image: "/images/vmc-moments/local-food-experience.png",
    mobileImage: "/images/vmc-moments/local-food-experience-mobile.jpg",
  },
];

const VmcMomentsSection = () => {
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 850,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4800,
    pauseOnHover: true,
    fade: true,
    beforeChange: (_current: number, next: number) => setActive(next),
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-12 lg:py-16">
      {/* Header */}
      <div className="container-wide relative z-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                VMC Travel Moments
              </p>

              <h2 className="mt-4 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                Real Sri Lanka moments,
                <span className="block !text-[#2D6A4F]">
                  handled by VMC.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-[15px] leading-7 !text-slate-600 md:text-[16px] md:leading-8">
                From airport arrivals and scenic transfers to guided tours,
                safaris, dining, and beach escapes — our team helps every
                journey feel smooth, local, and authentic.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "VMC Fleet",
                  "Airport Transfers",
                  "Guided Tours",
                  "Local Experiences",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E3D7C4] bg-white px-4 py-2 text-[12px] font-bold !text-[#0B1F33] shadow-sm"
                  >
                    {item === "VMC Fleet" ? (
                      <FiTruck className="text-[#2D6A4F]" size={14} />
                    ) : (
                      <FiMapPin className="text-[#2D6A4F]" size={14} />
                    )}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full width slider */}
      <div className="relative mt-8 w-full overflow-hidden bg-[#0B1F33]">
        <Slider ref={sliderRef} {...settings}>
          {moments.map((item) => (
            <div key={item.title}>
              <div className="relative h-[640px] overflow-hidden md:h-[680px] lg:h-[760px]">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet={item.mobileImage}
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </picture>

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/92 via-[#0B1F33]/48 to-[#0B1F33]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/78 via-[#0B1F33]/20 to-transparent" />

                <div className="container-wide relative z-10 h-full">
                  <div className="flex h-full max-w-[1180px] items-end pb-10 md:pb-16 lg:pb-20">
                    <div className="max-w-[720px]">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-5 py-2.5 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#E9A93B]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] !text-white">
                          {item.label}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[42px] font-bold leading-[0.98] !text-white md:text-[74px] lg:text-[96px]">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-[610px] text-[15px] leading-7 !text-white/84 md:text-[18px] md:leading-8">
                        {item.subtitle}
                      </p>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-7 py-4 text-[14px] font-bold !text-[#0B1F33] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                        >
                          Plan with VMC
                          <FiArrowUpRight size={16} />
                        </Link>

                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[14px] font-bold !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                        >
                          Request Travel Support
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-5 top-5 z-20 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[12px] font-bold !text-white backdrop-blur-md md:px-5 md:text-[13px]">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(moments.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows - visible on mobile and desktop */}
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 !text-white backdrop-blur-md transition hover:bg-white hover:!text-[#0B1F33] md:left-6 md:h-13 md:w-13"
          aria-label="Previous moment"
        >
          <FiArrowLeft size={22} />
        </button>

        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 !text-white backdrop-blur-md transition hover:bg-white hover:!text-[#0B1F33] md:right-6 md:h-13 md:w-13"
          aria-label="Next moment"
        >
          <FiArrowRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default VmcMomentsSection;
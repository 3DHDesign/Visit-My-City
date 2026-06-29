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
};

const moments: Moment[] = [
  {
    title: "Airport Meet & Greet",
    subtitle:
      "Smooth arrivals with VMC coach support, luggage assistance, and coordinated transfers.",
    label: "Arrivals",
    image: "/images/vmc-moments/vmc-coach-arrival.png",
  },
  {
    title: "VMC Fleet Support",
    subtitle:
      "Comfortable vehicle support for airport transfers, private tours, group travel, and smooth on-ground coordination.",
    label: "VMC Fleet",
    image: "/images/vmc-moments/vmc-fleet-support.png",
  },
  {
    title: "Tuk Tuk City Tours",
    subtitle:
      "Authentic local rides through coastal streets, heritage towns, and cultural stops.",
    label: "Local Rides",
    image: "/images/vmc-moments/vmc-tuk-tuk-tour.png",
  },
  {
    title: "Tea Country Walks",
    subtitle:
      "Guided highland experiences through tea estates, misty views, and local stories.",
    label: "Guided Tours",
    image: "/images/vmc-moments/tea-country-guided-tour.png",
  },
  {
    title: "Safari Drives",
    subtitle:
      "Wildlife journeys with safe coordination, park experiences, and on-ground support.",
    label: "Wildlife",
    image: "/images/vmc-moments/safari-drive.png",
  },
  {
    title: "Beach Escapes",
    subtitle:
      "Relaxed coastal experiences with sunsets, beach stays, local boats, and island charm.",
    label: "Coastal",
    image: "/images/vmc-moments/beach-moment.png",
  },
  
  {
    title: "Local Dining Experiences",
    subtitle:
      "Authentic Sri Lankan flavours, hosted meals, and memorable cultural dining moments.",
    label: "Culture",
    image: "/images/vmc-moments/local-food-experience.png",
  },
];

const VmcMomentsSection = () => {
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4300,
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => setActive(next),
  };

  const goTo = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setActive(index);
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-14 lg:py-16">
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
              <p className="max-w-2xl text-[16px] leading-8 !text-slate-600">
                From airport arrivals and fleet support to tuk tuk rides,
                guided tours, safaris, dining, and beach escapes — our team
                helps every journey feel smooth, local, and authentic.
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

          {/* Circular selector */}
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
            {moments.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => goTo(index)}
                className="group min-w-[130px] text-center"
              >
                <div
                  className={`mx-auto flex h-[96px] w-[96px] items-center justify-center overflow-hidden rounded-full border border-dashed p-1 transition-all duration-300 ${
                    active === index
                      ? "border-[#E9A93B] bg-[#E9A93B]/10"
                      : "border-[#D8CBB8] bg-white"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <p
                  className={`mt-3 text-[15px] font-bold leading-tight transition-colors ${
                    active === index ? "!text-[#2D6A4F]" : "!text-[#0B1F33]"
                  }`}
                >
                  {item.title}
                </p>

                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] !text-[#B98525]">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Full width slider */}
      <div className="relative mt-4">
        <Slider ref={sliderRef} {...settings}>
          {moments.map((item) => (
            <div key={item.title}>
              <div className="relative h-[580px] overflow-hidden md:h-[680px] lg:h-[760px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/88 via-[#0B1F33]/42 to-[#0B1F33]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/55 via-transparent to-transparent" />

                <div className="container-wide relative z-10 h-full">
                  <div className="flex h-full max-w-[1180px] items-end pb-14 md:pb-20">
                    <div className="max-w-[760px]">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-5 py-2.5 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#E9A93B]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] !text-white">
                          {item.label}
                        </span>
                      </div>

                      <h3 className="mt-6 text-[48px] font-bold leading-[0.98] !text-white md:text-[78px] lg:text-[96px]">
                        {item.title}
                      </h3>

                      <p className="mt-6 max-w-[620px] text-[17px] leading-8 !text-white/82 md:text-[19px]">
                        {item.subtitle}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-4">
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

                <div className="absolute bottom-8 right-8 hidden rounded-full border border-white/20 bg-white/15 px-5 py-2 text-[13px] font-bold !text-white backdrop-blur-md md:block">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(moments.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows */}
        <button
          type="button"
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-6 top-1/2 z-20 hidden h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#0B1F33] lg:flex"
          aria-label="Previous moment"
        >
          <FiArrowLeft size={22} />
        </button>

        <button
          type="button"
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-6 top-1/2 z-20 hidden h-13 w-13 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#0B1F33] lg:flex"
          aria-label="Next moment"
        >
          <FiArrowRight size={22} />
        </button>
      </div>
    </section>
  );
};

export default VmcMomentsSection;
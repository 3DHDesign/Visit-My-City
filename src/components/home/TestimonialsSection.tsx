import { useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiStar,
} from "react-icons/fi";

const Slider = ((SlickSlider as any).default ??
  SlickSlider) as ComponentType<any>;

type Testimonial = {
  name: string;
  role: string;
  review: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mr. Lampros",
    role: "Solo Traveler",
    review:
      "Very nice journey. I’m very happy with the trip and the support. Thank you!",
    image: "/images/testimonials/1.png",
  },
  {
    name: "Mr. Hardik Verma",
    role: "Kundan Verma Family",
    review:
      "We had a wonderful family holiday in Sri Lanka.The trip was well organized, the transport was comfortable,It was a very memorable experience for all of us.",
    image: "/images/testimonials/2.png",
  },
  {
    name: "Mr. Kundan Verma",
    role: "Family Traveler",
    review:
      "Very good service and a beautiful tour. Our family enjoyed the trip a lot.",
    image: "/images/testimonials/3.png",
  },
  {
    name: "Mr. Mazianis",
    role: "Family Traveler",
    review:
      "We travelled with our daughter and everything was arranged very well. The journey was comfortable, and we always felt supported during the trip. We really enjoyed discovering Sri Lanka as a family.",
    image: "/images/testimonials/4.png",
  },
  {
    name: "Mrs. Vanshika Verma",
    role: "Kundan Verma Family",
    review:
      "Sri Lanka was beautiful! We enjoyed the places, the food and the whole experience.",
    image: "/images/testimonials/5.png",
  },
  {
    name: "Mr. Sashank Gupta",
    role: "Kundan Verma Family",
    review:
      "The trip was well planned and easy for us. We visited many beautiful places and had a really good time throughout the journey.",
    image: "/images/testimonials/6.png",
  },
  {
    name: "Mrs. Reena Verma",
    role: "Family Traveler",
    review:
      "Very happy with our holiday. We could relax and enjoy the time with our family without worrying about the travel arrangements.",
    image: "/images/testimonials/7.png",
  },
  {
    name: "Mrs. Eirini",
    role: "Family Traveler",
    review:
      "We loved our time in Sri Lanka. The country is beautiful, the people were very kind, and every part of the journey gave us something different to enjoy. It was a lovely family experience and we will remember it for a long time.",
    image: "/images/testimonials/8.png",
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef<any>(null);

  const [active, setActive] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSlidesToShow(1);
      } else if (width < 900) {
        setSlidesToShow(2);
      } else if (width < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,

    slidesToShow: slidesToShow,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,

    variableWidth: false,
    centerMode: false,
    adaptiveHeight: false,

    beforeChange: (_current: number, next: number) => {
      setActive(next);
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-10 lg:py-8">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-[1180px]">
          {/* Heading */}
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Traveler Stories
              </p>

              <h2 className="mt-3 text-[34px] font-bold leading-[1.06] !text-[#0B1F33] md:text-[52px]">
                Trusted by travelers

                <span className="block !text-[#2D6A4F]">
                  across Sri Lanka & beyond.
                </span>
              </h2>
            </div>

            <p className="max-w-2xl text-[15px] leading-7 !text-slate-600 md:text-[16px] md:leading-8 lg:justify-self-end">
              Travelers choose Visit My City for reliable planning, local
              expertise, warm hospitality, and complete travel support.
            </p>
          </div>

          {/* Slider */}
          <div className="relative mt-8">
            <Slider
              key={slidesToShow}
              ref={sliderRef}
              {...settings}
              className="testimonial-slider"
            >
              {testimonials.map((item, index) => {
                const isActive = index === active;

                return (
                  <div key={item.name} className="px-1 pb-8 sm:px-3">
                    <article
                      className={`group relative h-[410px] w-full overflow-hidden rounded-[26px] border p-6 transition-all duration-500 sm:rounded-[30px] sm:p-7 ${
                        isActive
                          ? "border-[#0B1F33] bg-[#0B1F33] shadow-[0_28px_85px_rgba(11,31,51,0.20)]"
                          : "border-slate-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.10)]"
                      }`}
                    >
                      <div
                        className={`absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full blur-3xl ${
                          isActive
                            ? "bg-[#E9A93B]/20"
                            : "bg-[#2D6A4F]/10"
                        }`}
                      />

                      <div className="relative z-10 flex h-full flex-col">
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
                          className={`mt-6 text-[15px] leading-8 ${
                            isActive
                              ? "!text-white/75"
                              : "!text-slate-600"
                          }`}
                        >
                          “{item.review}”
                        </p>

                        {/* Person */}
                        <div className="mt-auto">
                          <div className="mt-7 flex items-center gap-4 border-t border-slate-100/20 pt-6">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading={index > 3 ? "lazy" : "eager"}
                              className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-[#E9A93B]/40"
                            />

                            <div className="min-w-0">
                              <h3
                                className={`text-[16px] font-bold ${
                                  isActive
                                    ? "!text-white"
                                    : "!text-[#0B1F33]"
                                }`}
                              >
                                {item.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </Slider>

            {/* Previous */}
            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E8DED0] bg-white !text-[#0B1F33] shadow-[0_12px_30px_rgba(11,31,51,0.12)] transition hover:bg-[#0B1F33] hover:!text-white md:-left-5"
              aria-label="Previous testimonial"
            >
              <FiArrowLeft size={20} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E8DED0] bg-white !text-[#0B1F33] shadow-[0_12px_30px_rgba(11,31,51,0.12)] transition hover:bg-[#0B1F33] hover:!text-white md:-right-5"
              aria-label="Next testimonial"
            >
              <FiArrowRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute right-3 top-3 hidden rounded-full border border-[#E8DED0] bg-white/90 px-4 py-2 text-[11px] font-bold !text-[#0B1F33] shadow-sm backdrop-blur-md md:block">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 overflow-hidden rounded-[30px] bg-[#0B1F33] p-7 md:p-9 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                  Your journey starts here
                </p>

                <h3 className="mt-3 max-w-[820px] text-[28px] font-bold leading-tight !text-white md:text-[38px]">
                  Ready to create your own travel story with Visit My City?
                </h3>
              </div>

              <a
                href="/contact"
                className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-[#E9A93B] px-7 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:bg-white"
              >
                Start Planning
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
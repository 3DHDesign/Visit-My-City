import { useRef, useState } from "react";
import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type Testimonial = {
  name: string;
  role: string;
  review: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Anjali Perera",
    role: "Family Holiday Traveler",
    review:
      "Visit My City helped us plan a smooth family holiday. Flights, hotels, transfers, and the full itinerary were handled clearly and professionally.",
    image: "/images/testimonials/1.png",
  },
  {
    name: "Michael Anderson",
    role: "Sri Lanka Tour Guest",
    review:
      "Our Sri Lanka journey was beautifully organized. Kandy, Ella, Galle, and the coastal experiences were planned with great care and local knowledge.",
    image: "/images/testimonials/2.png",
  },
  {
    name: "Nadia Silva",
    role: "Honeymoon Traveler",
    review:
      "The team understood exactly what we wanted for our honeymoon. The hotel choices, travel plan, and support made everything stress-free.",
    image: "/images/testimonials/3.png",
  },
  {
    name: "Rahul Mehta",
    role: "Group Tour Guest",
    review:
      "From airport pickup to hotel stays and sightseeing, the full Sri Lanka tour was well coordinated. The guide and travel arrangements were excellent.",
    image: "/images/testimonials/4.png",
  },
  {
    name: "Emily Carter",
    role: "Sri Lanka Explorer",
    review:
      "The itinerary felt personal and well balanced. We enjoyed the cultural places, local food, scenic views, and friendly support throughout the journey.",
    image: "/images/testimonials/5.png",
  },
  {
    name: "David Wilson",
    role: "Private Tour Guest",
    review:
      "Visit My City made our Sri Lanka trip easy from the first message. Transport, guide support, and daily coordination were handled very well.",
    image: "/images/testimonials/6.png",
  },
  {
    name: "Sarah Mitchell",
    role: "Leisure Traveler",
    review:
      "The team gave us clear travel options and helped arrange the important details. It saved us time and made the holiday planning much easier.",
    image: "/images/testimonials/7.png",
  },
  {
    name: "Thomas Miller",
    role: "Cultural Tour Guest",
    review:
      "We loved the mix of heritage, nature, and local experiences. The planning was smooth, and the team was always helpful during the tour.",
    image: "/images/testimonials/8.png",
  },
];

const TestimonialsSection = () => {
  const sliderRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => setActive(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-10 lg:py-14">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-[1180px]">
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

          <div className="relative mt-8">
            <Slider ref={sliderRef} {...settings} className="testimonial-slider">
              {testimonials.map((item, index) => {
                const isActive = index === active;

                return (
                  <div key={item.name} className="px-3 pb-8">
                    <article
                      className={`group relative min-h-[410px] overflow-hidden rounded-[30px] border p-7 transition-all duration-500 ${
                        isActive
                          ? "border-[#0B1F33] bg-[#0B1F33] shadow-[0_28px_85px_rgba(11,31,51,0.20)]"
                          : "border-slate-100 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(15,23,42,0.10)]"
                      }`}
                    >
                      <div
                        className={`absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full blur-3xl ${
                          isActive ? "bg-[#E9A93B]/20" : "bg-[#2D6A4F]/10"
                        }`}
                      />

                      <div className="relative z-10 flex min-h-[356px] flex-col">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, starIndex) => (
                            <FiStar
                              key={starIndex}
                              size={16}
                              className="fill-[#E9A93B] text-[#E9A93B]"
                            />
                          ))}
                        </div>

                        <p
                          className={`mt-6 text-[15px] leading-8 ${
                            isActive ? "!text-white/75" : "!text-slate-600"
                          }`}
                        >
                          “{item.review}”
                        </p>

                        <div className="mt-auto">
                          <div className="mt-7 flex items-center gap-4 border-t border-slate-100/20 pt-6">
                            <img
                              src={item.image}
                              alt={item.name}
                              loading={index > 3 ? "lazy" : "eager"}
                              className="h-14 w-14 rounded-full object-cover ring-2 ring-[#E9A93B]/40"
                            />

                            <div>
                              <h3
                                className={`text-[16px] font-bold ${
                                  isActive ? "!text-white" : "!text-[#0B1F33]"
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

            <button
              type="button"
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E8DED0] bg-white !text-[#0B1F33] shadow-[0_12px_30px_rgba(11,31,51,0.12)] transition hover:bg-[#0B1F33] hover:!text-white md:-left-5"
              aria-label="Previous testimonial"
            >
              <FiArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E8DED0] bg-white !text-[#0B1F33] shadow-[0_12px_30px_rgba(11,31,51,0.12)] transition hover:bg-[#0B1F33] hover:!text-white md:-right-5"
              aria-label="Next testimonial"
            >
              <FiArrowRight size={20} />
            </button>

            <div className="absolute right-3 top-3 hidden rounded-full border border-[#E8DED0] bg-white/90 px-4 py-2 text-[11px] font-bold !text-[#0B1F33] shadow-sm backdrop-blur-md md:block">
              {String(active + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </div>
          </div>

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
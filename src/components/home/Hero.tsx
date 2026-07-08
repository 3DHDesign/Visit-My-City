import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import { FiMapPin } from "react-icons/fi";
import PrimaryButton from "../common/PrimaryButton";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type HeroSlide = {
  title: string;
  heading: string;
  country: string;
  type: "Inbound" | "Outbound";
  description: string;
  image: string;
  mobileImage: string;
};

const slides: HeroSlide[] = [
  {
    title: "Kandy",
    heading: "Explore Sacred Kandy.",
    country: "Sri Lanka",
    type: "Inbound",
    description:
      "Explore sacred temples, cultural heritage, misty hills, and timeless Sri Lankan traditions.",
    image: "/images/kandy-temple-of-tooth-relic.jpg",
    mobileImage: "/images/kandy-temple-of-tooth-relic-mobile.jpg",
  },
  {
    title: "VMC Fleet",
    heading: "Travel Sri Lanka In Comfort.",
    country: "Sri Lanka",
    type: "Inbound",
    description:
      "Enjoy safe, comfortable, and reliable private transport with Visit My City across Sri Lanka.",
    image: "/images/vmc-fleet-support.jpg",
    mobileImage: "/images/vmc-fleet-support-mobile.jpg",
  },
  {
    title: "Galle",
    heading: "Walk Through Historic Galle.",
    country: "Sri Lanka",
    type: "Inbound",
    description:
      "Walk through colonial streets, oceanfront views, golden sunsets, and southern coastal charm.",
    image: "/images/galle.jpg",
    mobileImage: "/images/galle-mobile.jpg",
  },
  {
    title: "Tuk Tuk Tour",
    heading: "Discover Sri Lanka By Tuk Tuk.",
    country: "Sri Lanka",
    type: "Inbound",
    description:
      "Experience colorful local streets, friendly guides, cultural stops, and authentic Sri Lankan moments.",
    image: "/images/vmc-tuk-tuk-tour.jpg",
    mobileImage: "/images/vmc-tuk-tuk-tour-mobile.jpg",
  },
  {
    title: "Dubai",
    heading: "Experience Modern Dubai.",
    country: "United Arab Emirates",
    type: "Outbound",
    description:
      "Plan luxury city escapes, shopping tours, family holidays, and unforgettable skyline experiences.",
    image: "/images/dubai.jpg",
    mobileImage: "/images/dubai-mobile.jpg",
  },
  {
    title: "Azerbaijan",
    heading: "Discover Beautiful Azerbaijan.",
    country: "Azerbaijan",
    type: "Outbound",
    description:
      "Discover Baku, mountain landscapes, rich culture, modern cities, and unique Caucasus adventures.",
    image: "/images/azerbaijan.jpg",
    mobileImage: "/images/azerbaijan-mobile.jpg",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <section className="relative h-[760px] w-full overflow-hidden md:h-screen">
      <Slider {...settings} className="hero-slider h-full">
        {slides.map((slide) => (
          <div
            key={slide.title}
            className="relative h-[760px] w-full md:h-screen"
          >
            <picture className="block h-full w-full">
              <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={`${slide.title} ${slide.country}`}
                className="h-full w-full object-cover"
              />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-r from-[#071827]/88 via-[#071827]/58 to-[#071827]/12" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/45 via-transparent to-[#071827]/20" />

            <div className="absolute inset-0 flex items-center">
              <div className="container-wide pt-[86px]">
                <div className="max-w-[720px]">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        slide.type === "Inbound"
                          ? "bg-[#2D6A4F]"
                          : "bg-[#E9A93B]"
                      }`}
                    />

                    <span className="text-[13px] font-semibold tracking-wide !text-white md:text-sm">
                      {slide.type} Travel • {slide.country}
                    </span>
                  </div>

                  <h1 className="max-w-[780px] text-[42px] font-bold leading-[1.05] !text-white md:text-[72px] lg:text-[84px]">
                    {slide.heading}
                  </h1>

                  <div className="mt-5 flex items-center gap-3">
                    <FiMapPin className="text-[#E9A93B]" size={20} />

                    <span className="text-[17px] font-semibold !text-white md:text-[20px]">
                      Featured Destination: {slide.title}
                    </span>
                  </div>

                  <p className="mt-5 max-w-[610px] text-[15px] leading-7 !text-white/82 md:text-[18px] md:leading-8">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <PrimaryButton
                      text="Explore Sri Lanka"
                      href="/explore-sri-lanka"
                      variant="gold"
                    />

                    <PrimaryButton
                      text="Explore The World"
                      href="/explore-the-world"
                      variant="glass"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 right-10 hidden min-w-[190px] rounded-[24px] border border-white/25 bg-[#071827]/55 px-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:block">
              <div className="flex items-center justify-center gap-2">
                <FiMapPin size={16} className="text-[#E9A93B]" />

                <p className="text-center text-[16px] font-semibold !text-white/85">
                  {slide.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import { FiMapPin } from "react-icons/fi";
import PrimaryButton from "../common/PrimaryButton";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type HeroSlide = {
    title: string;
    country: string;
    type: "Inbound" | "Outbound";
    description: string;
    image: string;
};

const slides: HeroSlide[] = [
    {
        title: "Kandy",
        country: "Sri Lanka",
        type: "Inbound",
        description:
            "Explore sacred temples, cultural heritage, misty hills, and timeless Sri Lankan traditions.",
        image: "/images/kandy-temple-of-tooth-relic.png",
    },
    {
        title: "Galle",
        country: "Sri Lanka",
        type: "Inbound",
        description:
            "Walk through colonial streets, oceanfront views, golden sunsets, and southern coastal charm.",
        image: "/images/galle.png",
    },
    {
        title: "Dubai",
        country: "United Arab Emirates",
        type: "Outbound",
        description:
            "Plan luxury city escapes, shopping tours, family holidays, and unforgettable skyline experiences.",
        image: "/images/dubai.png",
    },
    {
        title: "Azerbaijan",
        country: "Azerbaijan",
        type: "Outbound",
        description:
            "Discover Baku, mountain landscapes, rich culture, modern cities, and unique Caucasus adventures.",
        image: "/images/azerbaijan.png",
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
        <section className="relative h-screen w-full overflow-hidden">
            <Slider {...settings} className="hero-slider h-full">
                {slides.map((slide) => (
                    <div key={slide.title} className="relative h-screen w-full">
                        <img
                            src={slide.image}
                            alt={`${slide.title} ${slide.country}`}
                            className="h-full w-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/80 via-[#0B1F33]/45 to-black/10" />

                        <div className="absolute inset-0 flex items-center">
                            <div className="container-wide pt-[72px]">
                                <div className="max-w-[720px]">
                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                                        <span
                                            className={`h-2 w-2 rounded-full ${slide.type === "Inbound"
                                                ? "bg-[#2D6A4F]"
                                                : "bg-[#E9A93B]"
                                                }`}
                                        />

                                        <span className="text-sm font-semibold tracking-wide !text-white">
                                            {slide.type} Travel • {slide.country}
                                        </span>
                                    </div>

                                    <h1 className="max-w-[760px] text-[44px] font-bold leading-tight !text-white md:text-[72px] lg:text-[84px]">
                                        Explore Sri Lanka. Discover The World.
                                    </h1>

                                    <div className="mt-6 flex items-center gap-3">
                                        <FiMapPin className="text-[#E9A93B]" size={20} />

                                        <span className="text-[18px] font-semibold !text-white md:text-[20px]">
                                            Featured Destination: {slide.title}
                                        </span>
                                    </div>

                                    <p className="mt-5 max-w-[620px] text-[16px] leading-8 !text-white/80 md:text-[18px]">
                                        {slide.description}
                                    </p>

                                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                        <PrimaryButton
                                            text="Explore Sri Lanka"
                                            href="#"
                                            variant="gold"
                                        />

                                        <PrimaryButton
                                            text="Explore The World"
                                            href="#"
                                            variant="glass"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 right-10 hidden min-w-[190px] rounded-[24px] border border-white/25 bg-[#0B1F33]/45 px-6 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:block">
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
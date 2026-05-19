import type { ComponentType } from "react";
import SlickSlider from "react-slick";
import { FiArrowUpRight, FiGlobe, FiMapPin } from "react-icons/fi";

const Slider = ((SlickSlider as any).default ?? SlickSlider) as ComponentType<any>;

type Destination = {
  name: string;
  country: string;
  description: string;
  image: string;
};

const inboundDestinations: Destination[] = [
  {
    name: "Kandy",
    country: "Sri Lanka",
    description: "Sacred temples, culture, lake views, and hill country charm.",
    image:
      "https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Galle Fort",
    country: "Sri Lanka",
    description: "Colonial streets, ocean views, boutiques, and heritage walls.",
    image:
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ella",
    country: "Sri Lanka",
    description: "Tea estates, waterfalls, scenic train rides, and mountain views.",
    image:
      "https://images.unsplash.com/photo-1586946138047-8fbdc30504f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sigiriya",
    country: "Sri Lanka",
    description: "Ancient rock fortress, history, landscapes, and iconic views.",
    image:
      "https://images.unsplash.com/photo-1586613835347-b16d6f2f6b47?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Nuwara Eliya",
    country: "Sri Lanka",
    description: "Tea country, cool weather, colonial charm, and lush gardens.",
    image:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
  },
];

const outboundDestinations: Destination[] = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    description:
      "Luxury city escapes, skyline views, shopping, and desert experiences.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Azerbaijan",
    country: "Azerbaijan",
    description:
      "Baku city lights, mountain escapes, culture, and Caucasus beauty.",
    image:
      "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Japan",
    country: "Japan",
    description:
      "Culture, temples, city lights, food, and unforgettable seasons.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Thailand",
    country: "Thailand",
    description:
      "Golden temples, tropical beaches, street food, and island holidays.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Singapore",
    country: "Singapore",
    description:
      "Modern city attractions, shopping, family fun, and urban experiences.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const DestinationCard = ({
  destination,
  type,
}: {
  destination: Destination;
  type: "Inbound" | "Outbound";
}) => {
  return (
    <div className="px-3">
      <div className="group relative h-[430px] overflow-hidden rounded-[34px] bg-[#0B1F33]   transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,23,42,0.2)]">
        <img
          src={destination.image}
          alt={`${destination.name} ${destination.country}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/95 via-[#0B1F33]/48 to-black/10" />

        <div className="relative z-10 flex h-full flex-col justify-between p-7">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] !text-white/85 ring-1 ring-white/15 backdrop-blur-md">
              {type === "Inbound" ? (
                <FiMapPin size={13} className="text-[#E9A93B]" />
              ) : (
                <FiGlobe size={13} className="text-[#E9A93B]" />
              )}
              {type}
            </span>

            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/15 backdrop-blur-md transition-all duration-300 group-hover:bg-[#E9A93B] group-hover:text-[#0B1F33]">
              <FiArrowUpRight size={18} />
            </span>
          </div>

          <div>
            <h3 className="text-[34px] font-bold leading-tight !text-white">
              {destination.name}
            </h3>

            <div className="mt-3 flex items-center gap-2">
              <FiMapPin size={15} className="text-[#E9A93B]" />

              <p className="text-[14px] font-semibold !text-white/75">
                {destination.country}
              </p>
            </div>

            <p className="mt-5 text-[15px] leading-7 !text-white/75">
              {destination.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DestinationSliderRow = ({
  label,
  title,
  description,
  type,
  destinations,
}: {
  label: string;
  title: string;
  description: string;
  type: "Inbound" | "Outbound";
  destinations: Destination[];
}) => {
  return (
    <div className="mt-20">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
            {label}
          </p>

          <h3 className="mt-2 text-[30px] font-bold !text-[#0B1F33] md:text-[38px]">
            {title}
          </h3>
        </div>

        <p className="max-w-[560px] text-[15px] leading-7 !text-slate-600 md:text-right">
          {description}
        </p>
      </div>

      <Slider {...sliderSettings} className="destination-slider">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            destination={destination}
            type={type}
          />
        ))}
      </Slider>
    </div>
  );
};

const DestinationsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-[920px] text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
            Featured Destinations
          </span>

          <h2 className="mx-auto mt-7 max-w-[860px] text-[36px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[54px] lg:text-[62px]">
            Featured Destinations
            <span className="block !text-[#2D6A4F]">
              for Every Kind of Traveler.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-8 !text-slate-600 md:text-[17px]">
            Explore Sri Lanka’s iconic cities, coastlines, and hill country, or
            discover unforgettable international escapes with Visit My City.
          </p>
        </div>

        {/* Inbound Slider */}
        <DestinationSliderRow
          label="Inbound Travel"
          title="Explore Sri Lanka"
          description="Discover cultural cities, coastal heritage, hill country beauty, wildlife, and iconic Sri Lankan experiences."
          type="Inbound"
          destinations={inboundDestinations}
        />

        {/* Outbound Slider */}
        <DestinationSliderRow
          label="Outbound Travel"
          title="Discover The World"
          description="Plan overseas holidays, honeymoons, family tours, and international escapes from Sri Lanka."
          type="Outbound"
          destinations={outboundDestinations}
        />
      </div>
    </section>
  );
};

export default DestinationsSection;
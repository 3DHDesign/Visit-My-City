import { useState } from "react";
import {
  FiArrowUpRight,
  FiGlobe,
  FiMapPin,
  FiNavigation,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

type Destination = {
  name: string;
  country: string;
  description: string;
  image: string;
  tag: string;
  route: string;
};

const inboundDestinations: Destination[] = [
  {
    name: "Kandy",
    country: "Sri Lanka",
    tag: "Culture",
    route: "Temple of Tooth • Lake • Hill Capital",
    description:
      "A cultural hill capital with sacred temples, lake views, botanical gardens, and timeless Sri Lankan heritage.",
    image:
      "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Ella",
    country: "Sri Lanka",
    tag: "Scenic",
    route: "Nine Arches • Little Adam’s Peak • Tea Trails",
    description:
      "A scenic mountain escape with misty views, tea estates, waterfalls, railways, and slow travel charm.",
    image:
      "https://images.unsplash.com/photo-1704797389230-100a9bbb5b73?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Galle Fort",
    country: "Sri Lanka",
    tag: "Heritage",
    route: "Dutch Fort • Lighthouse • Coastal Streets",
    description:
      "A coastal heritage city with colonial architecture, ocean views, boutique streets, and relaxed southern charm.",
    image:
      "https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Sigiriya",
    country: "Sri Lanka",
    tag: "Iconic",
    route: "Rock Fortress • Dambulla • Cultural Triangle",
    description:
      "An iconic ancient kingdom surrounded by history, landscapes, cave temples, and unforgettable viewpoints.",
    image:
      "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1600&q=85",
  },
];

const outboundDestinations: Destination[] = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    tag: "Luxury",
    route: "City Skyline • Desert Safari • Shopping",
    description:
      "A modern city escape with luxury hotels, desert adventures, shopping, family attractions, and skyline views.",
    image:
      "https://images.unsplash.com/photo-1746731341047-76b2652ea843?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Azerbaijan",
    country: "Azerbaijan",
    tag: "Culture",
    route: "Baku • Old City • Mountains",
    description:
      "A charming outbound journey with city lights, old town culture, mountain landscapes, and unique experiences.",
    image:
      "https://images.unsplash.com/photo-1753706874051-718700368d6b?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Thailand",
    country: "Thailand",
    tag: "Holiday",
    route: "Bangkok • Islands • Temples",
    description:
      "A tropical holiday experience with golden temples, island beaches, street food, nightlife, and family fun.",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1600&q=85",
  },
  {
    name: "Singapore",
    country: "Singapore",
    tag: "Family",
    route: "Gardens • Sentosa • City Attractions",
    description:
      "A clean, modern city getaway with family attractions, shopping, dining, skyline views, and premium comfort.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=85",
  },
];

const tabs = [
  {
    key: "sri-lanka",
    label: "Explore Sri Lanka",
    icon: FiMapPin,
    destinations: inboundDestinations,
  },
  {
    key: "world",
    label: "Explore The World",
    icon: FiGlobe,
    destinations: outboundDestinations,
  },
];

const DestinationsSection = () => {
  const [activeTab, setActiveTab] = useState<"sri-lanka" | "world">(
    "sri-lanka"
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const currentTab = tabs.find((tab) => tab.key === activeTab) ?? tabs[0];
  const activeDestination = currentTab.destinations[activeIndex];
  const ActiveTabIcon = currentTab.icon;

  const handleTabChange = (key: "sri-lanka" | "world") => {
    setActiveTab(key);
    setActiveIndex(0);
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#F8F5EF] to-white" />
      <div className="pointer-events-none absolute -left-44 top-40 h-[460px] w-[460px] rounded-full bg-[#2D6A4F]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 bottom-24 h-[460px] w-[460px] rounded-full bg-[#D9B05F]/12 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] !text-[#B98525]">
              Destination Explorer
            </p>

            <h2 className="mt-5 text-[38px] font-bold leading-[1.05] !text-[#0B1F33] md:text-[58px]">
              Discover places with
              <span className="block !text-[#2D6A4F]">purpose and style.</span>
            </h2>
          </div>

          <p className="max-w-[670px] text-[16px] leading-8 !text-slate-600 md:text-[17px] lg:justify-self-end">
            Browse handpicked destinations across Sri Lanka and the world. Each
            destination can be shaped into a private tour, family holiday,
            honeymoon, group journey, or corporate travel plan.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 inline-flex rounded-full border border-[#E8DED0] bg-[#F8F5EF] p-1.5 shadow-[0_14px_40px_rgba(11,31,51,0.05)]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() =>
                  handleTabChange(tab.key as "sri-lanka" | "world")
                }
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-[13px] font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-[#0B1F33] !text-white shadow-[0_12px_30px_rgba(11,31,51,0.16)]"
                    : "!text-[#0B1F33] hover:bg-white"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-[#E9A93B]" : "text-[#2D6A4F]"}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main destination console */}
        <div className="mt-8 overflow-hidden rounded-[44px] border border-[#E8DED0] bg-[#F8F5EF] p-4 shadow-[0_30px_100px_rgba(11,31,51,0.09)] lg:p-5">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Big Image Panel */}
            <div className="relative min-h-[560px] overflow-hidden rounded-[36px] bg-[#0B1F33]">
              <img
                src={activeDestination.image}
                alt={`${activeDestination.name} destination`}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/88 via-[#0B1F33]/28 to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-md">
                <ActiveTabIcon size={15} className="text-[#F7C76D]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] !text-white">
                  {currentTab.label}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="max-w-[560px] rounded-[30px] border border-white/18 bg-white/16 p-6 backdrop-blur-xl">
                  <p className="inline-flex rounded-full bg-[#E9A93B] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] !text-[#0B1F33]">
                    {activeDestination.tag}
                  </p>

                  <h3 className="mt-4 text-[42px] font-bold leading-tight !text-white md:text-[56px]">
                    {activeDestination.name}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-[14px] font-semibold !text-white/75">
                    <FiMapPin className="text-[#F7C76D]" size={15} />
                    {activeDestination.country}
                  </p>

                  <p className="mt-4 text-[15.5px] leading-8 !text-white/75">
                    {activeDestination.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Control Panel */}
            <div className="rounded-[36px] bg-white p-5 shadow-[0_18px_55px_rgba(11,31,51,0.05)] md:p-7">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#B98525]">
                    Choose Destination
                  </p>

                  <h3 className="mt-3 text-[30px] font-bold leading-tight !text-[#0B1F33] md:text-[38px]">
                    {activeTab === "sri-lanka"
                      ? "Sri Lanka highlights"
                      : "Worldwide favorites"}
                  </h3>
                </div>

                <Link
                  to={activeTab === "sri-lanka" ? "/explore-sri-lanka" : "/explore-the-world"}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#E3D7C4] bg-[#FCFCFA] px-5 py-3 text-[13px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF8EA]"
                >
                  View All
                  <FiArrowUpRight size={15} />
                </Link>
              </div>

              <div className="mt-7 grid gap-3">
                {currentTab.destinations.map((destination, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={destination.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`group grid gap-4 rounded-[26px] border p-3 text-left transition-all duration-300 md:grid-cols-[118px_1fr] ${
                        isActive
                          ? "border-[#D9B05F]/55 bg-[#FFF8EA] shadow-[0_18px_50px_rgba(11,31,51,0.07)]"
                          : "border-[#EFE7DA] bg-[#FCFCFA] hover:border-[#D9B05F]/45 hover:bg-white"
                      }`}
                    >
                      <div className="relative h-[96px] overflow-hidden rounded-[20px]">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-[#0B1F33]/10" />
                      </div>

                      <div className="flex min-w-0 flex-col justify-center">
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
                              isActive
                                ? "bg-[#0B1F33] !text-white"
                                : "bg-white !text-[#B98525]"
                            }`}
                          >
                            {destination.tag}
                          </span>

                          {isActive && (
                            <span className="flex items-center gap-1 text-[11px] font-bold !text-[#2D6A4F]">
                              <FiStar size={12} />
                              Selected
                            </span>
                          )}
                        </div>

                        <h4 className="mt-2 text-[20px] font-bold leading-tight !text-[#0B1F33]">
                          {destination.name}
                        </h4>

                        <p className="mt-1 line-clamp-1 text-[13px] font-semibold !text-slate-500">
                          {destination.route}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Route Box */}
              <div className="mt-6 rounded-[30px] border border-[#E8DED0] bg-[#FCFCFA] p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF7F2] text-[#2D6A4F]">
                    <FiNavigation size={22} />
                  </div>

                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#B98525]">
                      Suggested Experience
                    </p>

                    <h4 className="mt-2 text-[21px] font-bold !text-[#0B1F33]">
                      {activeDestination.route}
                    </h4>

                    <p className="mt-3 text-[14px] leading-7 !text-slate-600">
                      This destination can be added to a custom itinerary based
                      on guest preferences, duration, hotel category, and travel
                      purpose.
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white shadow-[0_16px_40px_rgba(11,31,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
                >
                  Plan This Destination
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Small bottom strip */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Private tours",
            "Family holidays",
            "Corporate journeys",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[26px] border border-[#E8DED0] bg-white p-5 shadow-[0_14px_40px_rgba(11,31,51,0.04)]"
            >
              <p className="flex items-center gap-3 text-[15px] font-bold !text-[#0B1F33]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9A93B]/14 text-[#B98525]">
                  <FiStar size={16} />
                </span>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
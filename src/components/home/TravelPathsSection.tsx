import { FiGlobe, FiMapPin, FiShield } from "react-icons/fi";
import PrimaryButton from "../common/PrimaryButton";

const sriLankaPins = [
  "Kandy",
  "Galle",
  "Ella",
  "Sigiriya",
  "Yala",
  "Bentota",
];

const worldPins = [
  "Malaysia",
  "Singapore",
  "Thailand",
  "Dubai",
  "Azerbaijan",
  "Japan",
];

const accreditations = [
  {
    shortName: "IATA",
    fullName: "International Air Transport Association",
    image: "/images/certificates/iata.png",
  },
  {
    shortName: "SLTDA",
    fullName: "Sri Lanka Tourism Development Authority",
    image: "/images/certificates/sltda.png",
  },
  {
    shortName: "CAASL",
    fullName: "Civil Aviation Authority of Sri Lanka",
    image: "/images/certificates/caasl.png",
  },
  {
    shortName: "SLAITO",
    fullName: "Sri Lanka Association of Inbound Tour Operators",
    image: "/images/certificates/slaito.png",
  },
];

const TravelPathsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFA] py-10 lg:py-2">
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-24 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="mx-auto max-w-[1180px] text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
            Inbound & Outbound Travel
          </span>

          <h2 className="mt-7 text-center text-[34px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[52px] lg:text-[64px]">
            One Travel Partner. Two Worlds to Explore.
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-center text-[16px] leading-8 !text-slate-600 md:text-[17px]">
            From curated Sri Lanka journeys for global travelers to outbound
            holidays for Sri Lankans, Visit My City brings both worlds together
            with trusted travel expertise.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1180px] gap-7 lg:grid-cols-2">
          {/* Inbound Card */}
          <article className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-[#E8E1D7] bg-white shadow-[0_20px_70px_rgba(11,31,51,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#2D6A4F]/30 hover:shadow-[0_32px_90px_rgba(11,31,51,0.14)]">
            <div className="relative m-3 overflow-hidden rounded-[28px] md:m-4">
              <img
                src="/images/travel-paths/sri-lanka-inbound.jpg"
                alt="International travelers exploring Sri Lanka"
                className="h-[270px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[330px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/70 via-[#071827]/5 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] !text-[#0B1F33] shadow-lg backdrop-blur-md">
                  <FiMapPin className="text-[#E9A93B]" size={15} />
                  Inbound Travel
                </span>
              </div>

              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#2D6A4F]/90 !text-white shadow-lg backdrop-blur">
                <FiMapPin size={19} />
              </div>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-4 md:px-8 md:pb-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#2D6A4F]">
                  Discover the Island
                </p>

                <h3 className="mt-3 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[44px]">
                  Explore Sri Lanka
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                  Tailor-made Sri Lanka journeys for international travelers
                  discovering culture, wildlife, beaches, hill country,
                  heritage, and authentic local experiences.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {sriLankaPins.map((pin) => (
                  <span
                    key={pin}
                    className="rounded-full border border-[#DDE8E1] bg-[#F5FAF7] px-4 py-2 text-[13px] font-bold !text-[#0B1F33] transition-all duration-300 group-hover:border-[#2D6A4F]/30"
                  >
                    {pin}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-100 pt-8">
                <PrimaryButton
                  text="Explore Sri Lanka"
                  href="/explore-sri-lanka"
                  variant="gold"
                />
              </div>
            </div>
          </article>

          {/* Outbound Card */}
          <article className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-[#E8E1D7] bg-white shadow-[0_20px_70px_rgba(11,31,51,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#E9A93B]/40 hover:shadow-[0_32px_90px_rgba(11,31,51,0.14)]">
            <div className="relative m-3 overflow-hidden rounded-[28px] md:m-4">
              <img
                src="/images/travel-paths/world-outbound.jpg"
                alt="Sri Lankan travelers enjoying overseas holidays"
                className="h-[270px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[330px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071827]/70 via-[#071827]/5 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] !text-[#0B1F33] shadow-lg backdrop-blur-md">
                  <FiGlobe className="text-[#E9A93B]" size={15} />
                  Outbound Travel
                </span>
              </div>

              <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#0B1F33]/90 !text-white shadow-lg backdrop-blur">
                <FiGlobe size={19} />
              </div>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-7 pt-4 md:px-8 md:pb-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                  Travel Beyond Borders
                </p>

                <h3 className="mt-3 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[44px]">
                  Discover The World
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-slate-600">
                  Outbound holiday packages for Sri Lankan travelers planning
                  overseas holidays, honeymoons, business travel, family tours,
                  and group getaways.
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {worldPins.map((pin) => (
                  <span
                    key={pin}
                    className="rounded-full border border-[#EFE2C8] bg-[#FFF9EF] px-4 py-2 text-[13px] font-bold !text-[#0B1F33] transition-all duration-300 group-hover:border-[#E9A93B]/40"
                  >
                    {pin}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-slate-100 pt-8">
                <PrimaryButton
                  text="Explore The World"
                  href="/explore-the-world"
                  variant="dark"
                />
              </div>
            </div>
          </article>
        </div> 

{/* Accreditation Section */}
<div className="mx-auto mt-12 max-w-[1180px] overflow-hidden rounded-[36px] bg-[#0B1F33] shadow-[0_28px_80px_rgba(11,31,51,0.18)]">
  <div className="relative p-6 md:p-9">
    {/* Background Decorations */}
    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />

    <div className="relative z-10 grid gap-8 lg:grid-cols-[260px_1fr] lg:items-center">
      {/* Left Content */}
      <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 !text-[#E9A93B] backdrop-blur">
          <FiShield size={25} />
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
          Certified & Accredited
        </p>

        <h3 className="mt-3 text-[30px] font-bold leading-tight !text-white">
          Trusted Travel Expertise
        </h3>

        <p className="mt-4 text-[14px] leading-7 !text-white/60">
          Recognized by leading travel, tourism, and aviation authorities.
        </p>
      </div>

      {/* Accreditation Logo Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {accreditations.map((item) => (
          <div
            key={item.shortName}
            className="group flex min-h-[215px] flex-col rounded-[26px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9A93B]/45 hover:bg-white/[0.13] hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
          >
            {/* Logo Area */}
            <div className="flex h-[105px] w-full items-center justify-center rounded-[20px] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
              <img
                src={item.image}
                alt={`${item.shortName} accreditation logo`}
                loading="lazy"
                className="max-h-[72px] max-w-[135px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Accreditation Name */}
            <div className="flex flex-1 flex-col justify-center pt-5 text-center">
              <h4 className="text-[18px] font-bold !text-white">
                {item.shortName}
              </h4>

              <p className="mx-auto mt-2 max-w-[190px] text-[12px] leading-5 !text-white/55">
                {item.fullName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
       
      </div>
    </section>
  );
};

export default TravelPathsSection;
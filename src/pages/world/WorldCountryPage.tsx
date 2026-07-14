import {
  FiArrowUpRight,
  FiCalendar,
  FiCheck,
  FiClock,
  FiMapPin,
  FiPhone,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import { getWorldPackageBySlug } from "../../data/worldPackages";

const WorldCountryPage = () => {
  const { countrySlug } = useParams();
  const country = getWorldPackageBySlug(countrySlug);

  if (!country) {
    return <Navigate to="/explore-the-world" replace />;
  }

  const tourFacts = [
    {
      icon: FiCalendar,
      label: "Duration",
      value: country.duration,
    },
    {
      icon: FiMapPin,
      label: "Route",
      value: country.route,
    },
    {
      icon: FiUsers,
      label: "Best For",
      value: country.bestFor,
    },
    {
      icon: FiClock,
      label: "Tour Style",
      value: country.tourStyle,
    },
  ];

  return (
    <main className="bg-[#FCFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
        <div className="absolute inset-0">
          <img
            src={country.heroImage}
            alt={country.title}
            className="h-full w-full object-cover opacity-75"
          />

          {/* Dark only where text is */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/95 via-[#0B1F33]/65 to-[#0B1F33]/10" />

          {/* Small bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/45 via-transparent to-transparent" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
              {country.badge}
            </p>

            <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
              {country.title}
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-8 !text-white/80">
              {country.shortDesc}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Plan This Trip
                <FiArrowUpRight size={16} />
              </Link>

              <a
                href="tel:+94 76 619 2447"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
              >
                <FiPhone size={16} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="relative z-20 -mt-10 px-4 md:-mt-14">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {tourFacts.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-[26px] border border-[#E9E1D5] bg-white p-6 shadow-[0_14px_35px_rgba(11,31,51,0.08),0_30px_70px_rgba(11,31,51,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9A93B]/45 hover:shadow-[0_20px_45px_rgba(11,31,51,0.12),0_40px_90px_rgba(11,31,51,0.12)]"
                >
                  {/* Decorative background */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E9A93B]/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                  {/* Top accent */}
                  <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#E9A93B] to-[#2D6A4F]" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] bg-[#0B1F33] text-[#E9A93B] shadow-[0_10px_25px_rgba(11,31,51,0.20)] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} />
                    </div>

                    <div className="min-w-0 pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] !text-[#E9A93B]">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-[16px] font-bold leading-6 !text-[#0B1F33]">
                        {item.value}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Destination Overview
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
                {country.label}
              </h2>

              <p className="mt-6 text-[16px] leading-8 !text-slate-600">
                {country.overview}
              </p>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Packages can be arranged according to travel dates, number of
                guests, preferred hotel category, special interests, and budget.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {country.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D6A4F] text-white">
                      <FiCheck size={14} />
                    </span>

                    <p className="text-[15px] leading-7 !text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[34px] border border-[#EFE7DA] bg-white p-6 shadow-[0_20px_70px_rgba(11,31,51,0.07)]">
              <div className="overflow-hidden rounded-[26px]">
                <img
                  src={country.cardImage}
                  alt={`${country.country} outbound package`}
                  className="h-[280px] w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.16em] !text-[#E9A93B]">
                  <FiStar size={15} />
                  Recommended For
                </p>

                <h3 className="mt-3 text-[26px] font-bold !text-[#0B1F33]">
                  {country.bestFor}
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-slate-500">
                  A flexible outbound travel option for guests looking for a
                  well-planned holiday with suitable hotels, transfers,
                  sightseeing, and travel support.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:bg-[#2D6A4F]"
                >
                  Request This Package
                  <FiArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              What You Can Experience
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              Popular {country.country} experiences
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              These are sample experiences. Final activities and inclusions will
              be confirmed based on the selected package and guest requirement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {country.experiences.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[32px] border border-[#EFE7DA] bg-[#FCFCFA] shadow-[0_16px_50px_rgba(11,31,51,0.05)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[230px] w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-[24px] font-bold !text-[#0B1F33]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-8 !text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-[#FCFCFA] py-8">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Package Support
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
                Travel arrangements based on your exact requirement.
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Exact inclusions, hotels, room categories, transfers, entry
                tickets, meals, activities, and visa-related guidance will be
                confirmed in the final quotation.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {country.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[24px] border border-[#EFE7DA] bg-white p-5 shadow-[0_14px_40px_rgba(11,31,51,0.04)]"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33]">
                    <FiCheck size={14} />
                  </span>

                  <p className="text-[15px] font-semibold leading-7 !text-[#0B1F33]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-8">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0B1F33] p-8 text-center md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E9A93B]/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2D6A4F]/30 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Customize This Package
              </p>

              <h2 className="mt-4 text-[36px] font-bold leading-tight !text-white md:text-[52px]">
                Want to arrange a {country.country} holiday?
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-white/70">
                Share the destination, travel dates, number of guests, hotel
                preference, special interests, and budget. Our team will prepare
                a suitable outbound travel package and quotation.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E9A93B] px-8 py-4 text-[14px] font-bold !text-[#0B1F33] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Send Inquiry
                  <FiArrowUpRight size={16} />
                </Link>

                <a
                  href="tel:+94114600900"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  +94 11 460 0900
                </a>

                <a
                  href="tel:+94766192447"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-[14px] font-bold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:!text-[#0B1F33]"
                >
                  <FiPhone size={16} />
                  +94 76 619 2447
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorldCountryPage;

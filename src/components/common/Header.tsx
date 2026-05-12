import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiArrowUpRight,
  FiPhone,
} from "react-icons/fi";
import PrimaryButton from "./PrimaryButton";

/* ─── Nav data ─────────────────────────────────────────────── */
const NAV = {
  "Explore Sri Lanka": {
    badge: "🌿 Inbound",
    label: "SRI LANKA DESTINATIONS",
    links: [
      { name: "Kandy", icon: "🏯", desc: "Cultural Capital" },
      { name: "Ella", icon: "🚂", desc: "Scenic Highlands" },
      { name: "Nuwara Eliya", icon: "🌿", desc: "Little England" },
      { name: "Galle Fort", icon: "🏰", desc: "Colonial Gem" },
      { name: "Sigiriya", icon: "🦁", desc: "Rock Fortress" },
      { name: "Trincomalee", icon: "🌊", desc: "Turquoise Coast" },
    ],
    cta: "All Sri Lanka Tours",
  },

  "Explore The World": {
    badge: "✈️ Outbound",
    label: "WORLD DESTINATIONS",
    links: [
      { name: "Japan", icon: "🗼", desc: "Culture & Cherry Blossoms" },
      { name: "Thailand", icon: "🏯", desc: "Golden Temples & Islands" },
      { name: "Dubai", icon: "🌆", desc: "Desert Luxury" },
      { name: "Bali", icon: "🌺", desc: "Island Paradise" },
      { name: "Singapore", icon: "🦁", desc: "City State Marvel" },
      { name: "Malaysia", icon: "🌴", desc: "Tropical Bliss" },
    ],
    cta: "All World Packages",
  },

  Experiences: {
    badge: null,
    label: "TRAVEL EXPERIENCES",
    links: [
      { name: "Luxury Tours", icon: "✨", desc: "Premium escapes" },
      { name: "Wildlife", icon: "🐘", desc: "Safari & nature" },
      { name: "Adventure", icon: "🧗", desc: "Thrills & trails" },
      { name: "Honeymoon", icon: "💕", desc: "Romantic getaways" },
      { name: "Family Tours", icon: "👨‍👩‍👧", desc: "Fun for everyone" },
    ],
    cta: "View All Experiences",
  },
};

const SIMPLE_LINKS = ["Journeys", "About", "Contact"];

const PHONE_DISPLAY = "+94 11 234 5678";
const PHONE_HREF = "tel:+94112345678";

type NavData = typeof NAV;
type NavKey = keyof NavData;
type NavSection = NavData[NavKey];

/* ─── Dropdown ─────────────────────────────────────────────── */
function Dropdown({
  title,
  data,
}: {
  title: string;
  data: NavSection;
}) {
  return (
    <div className="group relative flex h-[72px] items-center">
      <button className="flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[14px] font-medium text-[#0B1F33] transition-all duration-200 hover:bg-[#F6F1E9] hover:text-[#E9A93B]">
        {title}

        <FiChevronDown
          size={14}
          className="mt-px text-[#E9A93B] transition-transform duration-300 group-hover:rotate-180"
        />
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 w-[270px] -translate-x-1/2 translate-y-4 rounded-2xl border border-slate-100 bg-white opacity-0 shadow-[0_24px_64px_rgba(11,31,51,0.11)] transition-all duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[10px] font-bold tracking-[0.18em] text-[#E9A93B]">
            {data.label}
          </span>

          {data.badge && (
            <span className="rounded-full bg-[#F6F1E9] px-2.5 py-0.5 text-[10px] font-semibold text-[#0B1F33]">
              {data.badge}
            </span>
          )}
        </div>

        <div className="p-2">
          {data.links.map((item) => (
            <a
              key={item.name}
              href="#"
              className="group/row flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-[#F6F1E9]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FCFCFA] text-base shadow-sm ring-1 ring-slate-100 transition-all duration-200 group-hover/row:bg-white group-hover/row:shadow-md">
                {item.icon}
              </span>

              <div>
                <p className="text-[13.5px] font-semibold text-[#0B1F33] transition-colors group-hover/row:text-[#2D6A4F]">
                  {item.name}
                </p>

                <p className="text-[11px] text-slate-400">{item.desc}</p>
              </div>

              <FiArrowUpRight
                size={13}
                className="ml-auto shrink-0 text-[#2D6A4F] opacity-0 transition-opacity group-hover/row:opacity-100"
              />
            </a>
          ))}
        </div>

        <div className="border-t border-slate-100 px-3 py-2.5">
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-[12.5px] font-bold text-[#E9A93B] transition-all hover:bg-amber-50"
          >
            {data.cta}
            <FiArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Header ────────────────────────────────────────────────── */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleAccordion = (key: string) => {
    setMobileExpand((prev) => (prev === key ? null : key));
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 shadow-[0_2px_32px_rgba(11,31,51,0.09)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-[#2D6A4F] via-[#E9A93B] to-[#0B1F33]" />

        <div className="container-wide grid h-[72px] grid-cols-[1fr_auto] items-center lg:grid-cols-[170px_1fr_270px]">
          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center justify-start">
            <img
              src="/images/logo.png"
              alt="Visit My City Sri Lanka"
              className="h-[48px] w-auto object-contain transition-opacity duration-300 hover:opacity-85"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-5 xl:gap-6 lg:flex">
            <a
              href="#"
              className="rounded-xl px-3.5 py-2 text-[14px] font-medium text-[#0B1F33] transition-all duration-200 hover:bg-[#F6F1E9] hover:text-[#E9A93B]"
            >
              Home
            </a>

            {Object.entries(NAV).map(([title, data]) => (
              <Dropdown key={title} title={title} data={data} />
            ))}

            {SIMPLE_LINKS.map((name) => (
              <a
                key={name}
                href="#"
                className="rounded-xl px-3.5 py-2 text-[14px] font-medium text-[#0B1F33] transition-all duration-200 hover:bg-[#F6F1E9] hover:text-[#E9A93B]"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center justify-end gap-4 lg:flex">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium text-[#0B1F33]/55 transition-colors hover:text-[#0B1F33]"
            >
              <FiPhone size={13} />
              {PHONE_DISPLAY}
            </a>

            <PrimaryButton text="Plan Your Trip" href="#" />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F33] shadow-sm transition-all hover:border-[#E9A93B] hover:text-[#E9A93B] lg:hidden"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-[#0B1F33]/55 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[84%] max-w-[360px] flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="shrink-0 border-b border-slate-100 bg-white px-6 pb-5 pt-5">
          <div className="flex items-center justify-between">
            <img
              src="/images/logo.png"
              alt="Visit My City"
              className="h-[42px] w-auto object-contain"
            />

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F1E9] text-[#0B1F33] transition-all hover:bg-slate-200"
            >
              <FiX size={20} />
            </button>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-100 bg-[#FCFCFA] px-4 py-4 shadow-[0_10px_30px_rgba(11,31,51,0.04)]">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#E9A93B]">
              Travel with Visit My City
            </p>

            <p className="mx-auto mt-2 max-w-[260px] text-center text-[13px] leading-5 text-slate-500">
              Explore Sri Lanka and worldwide travel packages.
            </p>
          </div>
        </div>

        {/* Scrollable Links */}
        <div className="mx-5 mt-5 flex-1 overflow-y-auto bg-white pb-5">
          <div className="flex flex-col gap-3 m-5">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="relative flex min-h-[56px] items-center justify-center rounded-2xl bg-[#FCFCFA] px-5 py-4 text-center text-[15px] font-semibold text-[#0B1F33] shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#F6F1E9]"
            >
              <span>Home</span>

              <FiArrowUpRight
                size={15}
                className="absolute right-5 text-[#E9A93B]"
              />
            </a>

            {Object.entries(NAV).map(([title, data]) => (
              <div key={title}>
                <button
                  onClick={() => toggleAccordion(title)}
                  className="relative flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-[#FCFCFA] px-5 py-4 text-center text-[15px] font-semibold text-[#0B1F33] shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#F6F1E9]"
                >
                  <span>{title}</span>

                  <FiChevronDown
                    size={18}
                    className={`absolute right-5 text-[#E9A93B] transition-transform duration-300 ${
                      mobileExpand === title ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpand === title
                      ? "mt-3 max-h-[720px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="rounded-3xl border border-slate-100 bg-[#FCFCFA] p-3">
                    <div className="mb-3 flex items-center justify-between gap-3 px-2">
                      <span className="text-[10px] font-bold tracking-[0.16em] text-[#E9A93B]">
                        {data.label}
                      </span>

                      {data.badge && (
                        <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-[#0B1F33] shadow-sm">
                          {data.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      {data.links.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          onClick={() => setMobileOpen(false)}
                          className="flex min-h-[64px] items-center gap-3 rounded-2xl bg-white px-3 py-3 transition-all hover:bg-[#F6F1E9]"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCFCFA] text-base shadow-sm ring-1 ring-slate-100">
                            {item.icon}
                          </span>

                          <div>
                            <p className="text-[14px] font-semibold text-[#0B1F33]">
                              {item.name}
                            </p>
                            <p className="text-[11.5px] leading-4 text-slate-400">
                              {item.desc}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>

                    <a
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="mt-3 flex min-h-[46px] items-center gap-1.5 rounded-2xl px-3 py-3 text-[12.5px] font-bold text-[#E9A93B] hover:bg-amber-50"
                    >
                      {data.cta}
                      <FiArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {SIMPLE_LINKS.map((name) => (
              <a
                key={name}
                href="#"
                onClick={() => setMobileOpen(false)}
                className="relative flex min-h-[56px] items-center justify-center rounded-2xl bg-[#FCFCFA] px-5 py-4 text-center text-[15px] font-semibold text-[#0B1F33] shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#F6F1E9]"
              >
                <span>{name}</span>

                <FiArrowUpRight
                  size={15}
                  className="absolute right-5 text-[#E9A93B]"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="shrink-0 border-t border-slate-100 bg-white p-5">
          <div className="flex justify-center">
            <PrimaryButton text="Plan Your Trip" href="#" />
          </div>

          <a
            href={PHONE_HREF}
            className="mt-4 flex items-center justify-center gap-1.5 text-[13px] font-medium text-slate-500 hover:text-[#0B1F33]"
          >
            <FiPhone size={13} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Header;
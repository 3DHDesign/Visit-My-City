import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
  "Explore The World": {
    badge: "✈️ Outbound",
    label: "OUTBOUND PACKAGES",
    links: [
      {
        name: "Dubai Packages",
        icon: "🌆",
        desc: "City luxury & desert escapes",
        path: "/explore-the-world/dubai",
      },
      {
        name: "Azerbaijan Packages",
        icon: "🏔️",
        desc: "Baku, mountains & culture",
        path: "/explore-the-world/azerbaijan",
      },
      {
        name: "Thailand Packages",
        icon: "🏯",
        desc: "Temples, islands & nightlife",
        path: "/explore-the-world/thailand",
      },
      {
        name: "Malaysia Packages",
        icon: "🌴",
        desc: "City breaks & tropical stays",
        path: "/explore-the-world/malaysia",
      },
      {
        name: "Singapore Packages",
        icon: "🦁",
        desc: "Modern city experiences",
        path: "/explore-the-world/singapore",
      },
      {
        name: "India Packages",
        icon: "🕌",
        desc: "Culture, pilgrimage & family tours",
        path: "/explore-the-world/india",
      },
    ],
    cta: "All World Packages",
    ctaPath: "/explore-the-world",
  },

  "Explore Sri Lanka": {
    badge: "🌿 Inbound",
    label: "SRI LANKA TOURS",
    links: [
      {
        name: "8N / 9D Sri Lanka Tour",
        icon: "🏝️",
        desc: "Complete island journey",
        path: "/explore-sri-lanka/8n-9d-sri-lanka-tour",
      },
      {
        name: "6N / 7D Sri Lanka Tour",
        icon: "🧳",
        desc: "Classic Sri Lanka escape",
        path: "/explore-sri-lanka/6n-7d-sri-lanka-tour",
      },
      {
        name: "Cultural Triangle Tour",
        icon: "🏯",
        desc: "Heritage, temples & history",
        path: "/explore-sri-lanka/cultural-triangle-tour",
      },
      {
        name: "Hill Country Tour",
        icon: "🚂",
        desc: "Kandy, Ella & Nuwara Eliya",
        path: "/explore-sri-lanka/hill-country-tour",
      },
      {
        name: "Family Sri Lanka Tour",
        icon: "👨‍👩‍👧",
        desc: "Comfortable family journey",
        path: "/explore-sri-lanka/family-tour",
      },
      {
        name: "Honeymoon Sri Lanka Tour",
        icon: "💕",
        desc: "Romantic island getaway",
        path: "/explore-sri-lanka/honeymoon-tour",
      },
    ],
    cta: "All Sri Lanka Tours",
    ctaPath: "/explore-sri-lanka",
  },
};

const PHONE_DISPLAY = "+94 114 600 900";
const PHONE_HREF = "tel:+94114600900";

type NavData = typeof NAV;
type NavKey = keyof NavData;
type NavSection = NavData[NavKey];

type DesktopNavItem =
  | {
      type: "link";
      name: string;
      path: string;
    }
  | {
      type: "dropdown";
      name: NavKey;
    };

const DESKTOP_NAV_ITEMS: DesktopNavItem[] = [
  { type: "link", name: "Home", path: "/" },
  { type: "link", name: "About", path: "/about" },
  { type: "dropdown", name: "Explore The World" },
  { type: "link", name: "Experiences", path: "/experiences" },
  { type: "dropdown", name: "Explore Sri Lanka" },
  { type: "link", name: "Contact", path: "/contact" },
];

/* ─── Active Link Class ────────────────────────────────────── */
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-xl px-3 py-2 text-[14px] font-medium transition-all duration-200 hover:bg-[#F6F1E9] hover:text-[#E9A93B] ${
    isActive ? "bg-[#F6F1E9] text-[#E9A93B]" : "text-[#0B1F33]"
  }`;

/* ─── Dropdown ─────────────────────────────────────────────── */
function Dropdown({ title, data }: { title: string; data: NavSection }) {
  return (
    <div className="group relative flex h-[72px] items-center">
      <Link
        to={data.ctaPath}
        className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-[14px] font-medium text-[#0B1F33] transition-all duration-200 hover:bg-[#F6F1E9] hover:text-[#E9A93B]"
      >
        {title}

        <FiChevronDown
          size={14}
          className="mt-px text-[#E9A93B] transition-transform duration-300 group-hover:rotate-180"
        />
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 translate-y-4 rounded-2xl border border-slate-100 bg-white opacity-0 shadow-[0_24px_64px_rgba(11,31,51,0.11)] transition-all duration-300 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
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
            <Link
              key={item.name}
              to={item.path}
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
            </Link>
          ))}
        </div>

        <div className="border-t border-slate-100 px-3 py-2.5">
          <Link
            to={data.ctaPath}
            className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-[12.5px] font-bold text-[#E9A93B] transition-all hover:bg-amber-50"
          >
            {data.cta}
            <FiArrowUpRight size={13} />
          </Link>
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

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpand(null);
  };

  const toggleAccordion = (key: string) => {
    setMobileExpand((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 shadow-[0_2px_32px_rgba(11,31,51,0.09)] backdrop-blur-xl"
            : "bg-white"
        }`}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-[#2D6A4F] via-[#E9A93B] to-[#0B1F33]" />

        <div className="container-wide grid h-[72px] grid-cols-[1fr_auto] items-center lg:grid-cols-[145px_1fr_245px]">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center justify-start">
            <img
              src="/images/logo.png"
              alt="Visit My City Sri Lanka"
              className="h-[48px] w-auto object-contain transition-opacity duration-300 hover:opacity-85"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center justify-center gap-2 lg:flex xl:gap-3">
            {DESKTOP_NAV_ITEMS.map((item) => {
              if (item.type === "dropdown") {
                return (
                  <Dropdown
                    key={item.name}
                    title={item.name}
                    data={NAV[item.name]}
                  />
                );
              }

              return (
                <NavLink key={item.name} to={item.path} className={navLinkClass}>
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center justify-end gap-3 lg:flex">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-medium text-[#0B1F33]/55 transition-colors hover:text-[#0B1F33]"
            >
              <FiPhone size={13} />
              {PHONE_DISPLAY}
            </a>

            <PrimaryButton text="Plan Your Trip" href="/contact" />
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
        onClick={closeMobileMenu}
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
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src="/images/logo.png"
                alt="Visit My City"
                className="h-[42px] w-auto object-contain"
              />
            </Link>

            <button
              onClick={closeMobileMenu}
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
          <div className="flex flex-col gap-3">
            {DESKTOP_NAV_ITEMS.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className="relative flex min-h-[56px] items-center justify-center rounded-2xl bg-[#FCFCFA] px-5 py-4 text-center text-[15px] font-semibold text-[#0B1F33] shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#F6F1E9]"
                  >
                    <span>{item.name}</span>

                    <FiArrowUpRight
                      size={15}
                      className="absolute right-5 text-[#E9A93B]"
                    />
                  </Link>
                );
              }

              const data = NAV[item.name];

              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleAccordion(item.name)}
                    className="relative flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-[#FCFCFA] px-5 py-4 text-center text-[15px] font-semibold text-[#0B1F33] shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#F6F1E9]"
                  >
                    <span>{item.name}</span>

                    <FiChevronDown
                      size={18}
                      className={`absolute right-5 text-[#E9A93B] transition-transform duration-300 ${
                        mobileExpand === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpand === item.name
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
                        {data.links.map((linkItem) => (
                          <Link
                            key={linkItem.name}
                            to={linkItem.path}
                            onClick={closeMobileMenu}
                            className="flex min-h-[64px] items-center gap-3 rounded-2xl bg-white px-3 py-3 transition-all hover:bg-[#F6F1E9]"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FCFCFA] text-base shadow-sm ring-1 ring-slate-100">
                              {linkItem.icon}
                            </span>

                            <div>
                              <p className="text-[14px] font-semibold text-[#0B1F33]">
                                {linkItem.name}
                              </p>

                              <p className="text-[11.5px] leading-4 text-slate-400">
                                {linkItem.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <Link
                        to={data.ctaPath}
                        onClick={closeMobileMenu}
                        className="mt-3 flex min-h-[46px] items-center gap-1.5 rounded-2xl px-3 py-3 text-[12.5px] font-bold text-[#E9A93B] hover:bg-amber-50"
                      >
                        {data.cta}
                        <FiArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="shrink-0 border-t border-slate-100 bg-white p-5">
          <div className="flex justify-center">
            <PrimaryButton text="Plan Your Trip" href="/contact" />
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
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Sri Lanka", href: "/explore-sri-lanka" },
  { label: "Explore The World", href: "/explore-the-world" },
  { label: "Experiences", href: "/experiences" },
  { label: "Journeys", href: "/journeys" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const sriLankaLinks = [
  { label: "Kandy", href: "/explore-sri-lanka" },
  { label: "Galle", href: "/explore-sri-lanka" },
  { label: "Ella", href: "/explore-sri-lanka" },
  { label: "Sigiriya", href: "/explore-sri-lanka" },
  { label: "Yala", href: "/explore-sri-lanka" },
  { label: "Bentota", href: "/explore-sri-lanka" },
];

const worldLinks = [
  { label: "Dubai", href: "/explore-the-world/dubai" },
  { label: "Azerbaijan", href: "/explore-the-world/azerbaijan" },
  { label: "Thailand", href: "/explore-the-world/thailand" },
  { label: "Malaysia", href: "/explore-the-world/malaysia" },
  { label: "Singapore", href: "/explore-the-world/singapore" },
  { label: "India", href: "/explore-the-world/india" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/visitmycity.travel",
    icon: FiFacebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/visitmycitylk/",
    icon: FiInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FiLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#071827] pt-20">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/20 blur-3xl" />

      <div className="container-wide relative z-10">
        {/* Top CTA */}
        <div className="mb-14 rounded-[36px] border border-white/10 bg-white/[0.08] p-7 backdrop-blur-xl md:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                Visit My City
              </p>

              <h2 className="mt-4 max-w-[800px] text-[32px] font-bold leading-tight !text-white md:text-[44px]">
                Let’s plan your Sri Lanka tour or next overseas holiday.
              </h2>
            </div>

            <PrimaryButton
              text="Plan Your Trip"
              href="/contact"
              variant="gold"
            />
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="Visit My City"
                className="h-[64px] w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-[340px] text-[15px] leading-8 !text-white/65">
              Visit My City offers curated inbound Sri Lanka journeys and
              outbound world travel packages with complete travel planning,
              destination expertise, and trusted support.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/15 !text-white transition-all duration-300 hover:border-[#E9A93B] hover:bg-[#E9A93B] hover:!text-[#0B1F33]"
                  >
                    <Icon
                      size={18}
                      className="!text-white transition-all duration-300 group-hover:!text-[#0B1F33]"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[18px] font-bold !text-white">Quick Links</h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="inline-flex items-center gap-2 text-[14px] font-medium !text-white/60 transition-all hover:gap-3 hover:!text-[#E9A93B]"
                  >
                    {link.label}
                    <FiArrowUpRight size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-[18px] font-bold !text-white">Destinations</h3>

            <div className="mt-6 grid gap-8 xl:grid-cols-2">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                  Inbound
                </p>

                <ul className="mt-4 space-y-3">
                  {sriLankaLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[14px] font-medium !text-white/60 transition-all hover:!text-[#E9A93B]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                  Outbound
                </p>

                <ul className="mt-4 space-y-3">
                  {worldLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-[14px] font-medium !text-white/60 transition-all hover:!text-[#E9A93B]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[18px] font-bold !text-white">Contact Us</h3>

            <div className="mt-6 space-y-4">
              <a
                href="tel:+94114 600 900"
                className="flex items-start gap-3 rounded-2xl bg-white/[0.08] p-4 transition-all hover:bg-white/[0.12]"
              >
                <FiPhone className="mt-1 shrink-0 text-[#E9A93B]" size={18} />

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] !text-white/40">
                    Phone
                  </p>

                  <p className="mt-1 text-[14px] font-semibold !text-white/75">
                    0114 600 900
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@visitmycity.lk"
                className="flex items-start gap-3 rounded-2xl bg-white/[0.08] p-4 transition-all hover:bg-white/[0.12]"
              >
                <FiMail className="mt-1 shrink-0 text-[#E9A93B]" size={18} />

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] !text-white/40">
                    Email
                  </p>

                  <p className="mt-1 text-[14px] font-semibold !text-white/75">
                    info@visitmycity.lk
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-2xl bg-white/[0.08] p-4">
                <FiMapPin className="mt-1 shrink-0 text-[#E9A93B]" size={18} />

                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] !text-white/40">
                    Address
                  </p>

                  <p className="mt-1 text-[14px] font-semibold leading-6 !text-white/75">
                    No. 12, Sri Dhamma Mawatha, Colombo 10, Sri Lanka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 py-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <p className="text-[13px] !text-white/45">
            © {new Date().getFullYear()} Visit My City. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link
              to="/contact"
              className="text-[13px] !text-white/45 transition-all hover:!text-[#E9A93B]"
            >
              Contact
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/25" />

            <Link
              to="/about"
              className="text-[13px] !text-white/45 transition-all hover:!text-[#E9A93B]"
            >
              About
            </Link>

            <span className="h-1 w-1 rounded-full bg-white/25" />

            <p className="text-[13px] !text-white/45">
              Designed with <span className="!text-[#E9A93B]">❤️</span> by{" "}
              <a
                href="https://3dhdesign.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold !text-white/60 transition-all hover:!text-[#E9A93B]"
              >
                3DH Design
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

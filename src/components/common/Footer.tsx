import {
    FiArrowUpRight,
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiPhone,
  } from "react-icons/fi";
  import PrimaryButton from "./PrimaryButton";
  
  const quickLinks = [
    "Home",
    "Explore Sri Lanka",
    "Explore The World",
    "Experiences",
    "Journeys",
    "About",
    "Contact",
  ];
  
  const sriLankaLinks = ["Kandy", "Galle", "Ella", "Sigiriya", "Yala", "Bentota"];
  
  const worldLinks = ["Dubai", "Azerbaijan", "Japan", "Thailand", "Singapore"];
  
  const Footer = () => {
    return (
      <footer className="relative overflow-hidden bg-[#071827] pt-20">
        {/* Background Lights */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/20 blur-3xl" />
  
        <div className="container-wide relative z-10">
          {/* Top CTA */}
          <div className="mb-14 rounded-[36px] border border-white/10 bg-white/8 p-7 backdrop-blur-xl md:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                  Visit My City
                </p>
  
                <h2 className="mt-4 max-w-[800px] text-[32px] font-bold leading-tight !text-white md:text-[44px]">
                  Let’s plan your Sri Lanka tour or next overseas holiday.
                </h2>
              </div>
  
              <PrimaryButton text="Plan Your Trip" href="#" variant="gold" />
            </div>
          </div>
  
          {/* Main Footer - 4 Columns */}
          <div className="grid gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
            {/* Column 1 - Brand */}
            <div>
              <img
                src="/images/logo.png"
                alt="Visit My City"
                className="h-[64px] w-auto object-contain"
              />
  
              <p className="mt-6 max-w-[340px] text-[15px] leading-8 !text-white/65">
                Visit My City offers curated inbound Sri Lanka journeys and
                outbound world travel packages with complete travel planning,
                destination expertise, and trusted support.
              </p>
  
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#E9A93B] hover:text-[#0B1F33]"
                >
                  <FiFacebook size={18} />
                </a>
  
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#E9A93B] hover:text-[#0B1F33]"
                >
                  <FiInstagram size={18} />
                </a>
  
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#E9A93B] hover:text-[#0B1F33]"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>
            </div>
  
            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-[18px] font-bold !text-white">Quick Links</h3>
  
              <ul className="mt-6 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[14px] font-medium !text-white/60 transition-all hover:gap-3 hover:!text-[#E9A93B]"
                    >
                      {link}
                      <FiArrowUpRight size={13} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Column 3 - Destinations */}
            <div>
              <h3 className="text-[18px] font-bold !text-white">Destinations</h3>
  
              <div className="mt-6 grid gap-8 xl:grid-cols-2">
                {/* Inbound */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                    Inbound
                  </p>
  
                  <ul className="mt-4 space-y-3">
                    {sriLankaLinks.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[14px] font-medium !text-white/60 transition-all hover:!text-[#E9A93B]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
  
                {/* Outbound */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
                    Outbound
                  </p>
  
                  <ul className="mt-4 space-y-3">
                    {worldLinks.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[14px] font-medium !text-white/60 transition-all hover:!text-[#E9A93B]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
  
            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-[18px] font-bold !text-white">Contact Us</h3>
  
              <div className="mt-6 space-y-4">
                <a
                  href="tel:+94114327637"
                  className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 transition-all hover:bg-white/12"
                >
                  <FiPhone className="mt-1 shrink-0 text-[#E9A93B]" size={18} />
  
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] !text-white/40">
                      Phone
                    </p>
  
                    <p className="mt-1 text-[14px] font-semibold !text-white/75">
                      +94 11 432 7637 / 8
                    </p>
                  </div>
                </a>
  
                <a
                  href="mailto:info@visitmycity.lk"
                  className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 transition-all hover:bg-white/12"
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
  
                <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4">
                  <FiMapPin
                    className="mt-1 shrink-0 text-[#E9A93B]"
                    size={18}
                  />
  
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
              <a
                href="#"
                className="text-[13px] !text-white/45 transition-all hover:!text-[#E9A93B]"
              >
                Privacy Policy
              </a>
  
              <span className="h-1 w-1 rounded-full bg-white/25" />
  
              <a
                href="#"
                className="text-[13px] !text-white/45 transition-all hover:!text-[#E9A93B]"
              >
                Terms & Conditions
              </a>
  
              <span className="h-1 w-1 rounded-full bg-white/25" />
  
              <p className="text-[13px] !text-white/45">Designed by 3DH Design</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
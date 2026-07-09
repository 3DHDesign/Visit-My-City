import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  const message =
    "Hello, I would like to get more details about a travel plan.";

  const whatsappLink = `https://wa.me/94766192447?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Back to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-[#0B1F33] !text-white shadow-[0_14px_35px_rgba(11,31,51,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E9A93B] hover:!text-[#0B1F33] ${
          showTopButton
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-4 opacity-0"
        }`}
      >
        <FiArrowUp size={22} />
      </button>

      {/* WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Visit My City on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 shadow-[0_16px_40px_rgba(37,211,102,0.38)] ring-4 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1EBE5D]"
      >
         

        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
          <FaWhatsapp size={30} className="!text-white" />
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
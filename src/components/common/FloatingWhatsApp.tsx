import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/94766192447"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsApp;
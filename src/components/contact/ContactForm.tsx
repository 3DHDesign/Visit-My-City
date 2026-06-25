import { FiSend } from "react-icons/fi";

const inputClass =
  "h-[50px] w-full rounded-xl border border-slate-200 bg-white px-4 text-[14px] font-medium text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#E9A93B] focus:shadow-[0_0_0_4px_rgba(233,169,59,0.12)]";

const ContactForm = () => {
  return (
    <div
      id="contact-form"
      className="self-start overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
    >
      {/* Top Image */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
          alt="Travel inquiry"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-[#0B1F33]/20 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
            Travel Inquiry
          </p>

          <h3 className="mt-2 text-[28px] font-bold leading-tight !text-white md:text-[34px]">
            Plan your trip with us
          </h3>
        </div>
      </div>

      {/* Form */}
      <div className="p-5 md:p-7">
        <p className="mb-5 max-w-[520px] text-[14px] leading-6 !text-slate-500">
          Send us your travel details. Our team will contact you soon.
        </p>

        <form className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="Full name" className={inputClass} />

            <input
              type="tel"
              placeholder="Phone / WhatsApp number"
              className={inputClass}
            />
          </div>

          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-4 text-[14px] font-medium leading-6 text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#E9A93B] focus:shadow-[0_0_0_4px_rgba(233,169,59,0.12)]"
          />

          <button
            type="submit"
            className="mt-1 inline-flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 text-[14px] font-bold !text-white shadow-[0_12px_28px_rgba(11,31,51,0.16)] transition-all duration-300 hover:bg-[#2D6A4F] md:w-fit md:min-w-[200px]"
          >
            Send Inquiry
            <FiSend size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
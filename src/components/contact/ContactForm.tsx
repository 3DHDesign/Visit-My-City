import {
    FiCalendar,
    FiGlobe,
    FiMail,
    FiPhone,
    FiSend,
    FiUser,
    FiUsers,
    FiMessageSquare,
  } from "react-icons/fi";
  
  const labelClass =
    "mb-2 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] !text-[#0B1F33]";
  
  const inputClass =
    "h-[54px] w-full rounded-2xl border border-slate-200 bg-white px-5 text-[14px] font-medium text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#E9A93B] focus:shadow-[0_0_0_4px_rgba(233,169,59,0.12)]";
  
  const iconClass = "text-[#E9A93B]";
  
  const ContactForm = () => {
    return (
      <div
        id="contact-form"
        className="relative overflow-hidden rounded-[40px] border border-slate-100 bg-white p-7 shadow-[0_28px_90px_rgba(15,23,42,0.08)] md:p-10 lg:p-12"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-[300px] w-[300px] rounded-full bg-[#E9A93B]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
  
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                Travel Inquiry
              </p>
  
              <h3 className="mt-3 text-[34px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[44px]">
                Tell us about your trip
              </h3>
            </div>
  
            <p className="max-w-[470px] text-[15px] leading-7 !text-slate-500 lg:justify-self-end lg:text-right">
              Share your travel details and our team will help shape the right
              journey for you.
            </p>
          </div>
  
          <form className="grid gap-6">
            {/* Row 1 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className={labelClass}>
                  <FiUser size={14} className={iconClass} />
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
  
              <div>
                <label className={labelClass}>
                  <FiMail size={14} className={iconClass} />
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>
  
            {/* Row 2 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className={labelClass}>
                  <FiPhone size={14} className={iconClass} />
                  Phone Number
                </label>
                <input type="tel" placeholder="+94..." className={inputClass} />
              </div>
  
              <div>
                <label className={labelClass}>
                  <FiGlobe size={14} className={iconClass} />
                  Travel Type
                </label>
                <select className={`${inputClass} cursor-pointer`}>
                  <option>Sri Lanka Tour</option>
                  <option>Overseas Trip</option>
                  <option>Business Travel</option>
                  <option>Honeymoon Trip</option>
                  <option>Group Tour</option>
                </select>
              </div>
            </div>
  
            {/* Row 3 */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className={labelClass}>
                  <FiGlobe size={14} className={iconClass} />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Dubai / Kandy"
                  className={inputClass}
                />
              </div>
  
              <div>
                <label className={labelClass}>
                  <FiCalendar size={14} className={iconClass} />
                  Travel Month
                </label>
                <input
                  type="text"
                  placeholder="June 2026"
                  className={inputClass}
                />
              </div>
  
              <div>
                <label className={labelClass}>
                  <FiUsers size={14} className={iconClass} />
                  Travelers
                </label>
                <input type="number" placeholder="2" className={inputClass} />
              </div>
            </div>
  
            {/* Message */}
            <div>
              <label className={labelClass}>
                <FiMessageSquare size={14} className={iconClass} />
                Message
              </label>
  
              <textarea
                rows={6}
                placeholder="Tell us more about your travel plan..."
                className="w-full resize-none rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-[14px] font-medium leading-7 text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#E9A93B] focus:shadow-[0_0_0_4px_rgba(233,169,59,0.12)]"
              />
            </div>
  
            {/* Footer */}
            <div className="mt-2 flex flex-col gap-5 rounded-[28px] bg-[#FCFCFA] p-5 md:flex-row md:items-center md:justify-between">
              <p className="max-w-[480px] text-[13.5px] leading-6 !text-slate-500">
                We’ll review your inquiry and contact you with suitable travel
                options.
              </p>
  
              <button
                type="submit"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 text-[14px] font-bold !text-white shadow-[0_14px_35px_rgba(11,31,51,0.18)] transition-all duration-300 hover:bg-[#2D6A4F] md:min-w-[230px]"
              >
                Send Travel Inquiry
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33] transition-transform duration-300 group-hover:rotate-45">
                  <FiSend size={15} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
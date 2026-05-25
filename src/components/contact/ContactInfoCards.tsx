import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ContactInfoCards = () => {
  return (
    <div>
      <span className="inline-flex items-center justify-center rounded-full border border-[#E9A93B]/30 bg-[#E9A93B]/10 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
        Get in Touch
      </span>

      <h2 className="mt-7 text-[36px] font-bold leading-[1.08] !text-[#0B1F33] md:text-[54px]">
        Start with a Message.
        <span className="block !text-[#2D6A4F]">
          We’ll Handle the Journey.
        </span>
      </h2>

      <p className="mt-6 max-w-[560px] text-[16px] leading-8 !text-slate-600">
        Tell us your destination, travel dates, number of travelers, and the
        kind of experience you want. Our team will help shape the right travel
        plan for you.
      </p>

      <div className="mt-10 grid gap-4">
        <a
          href="tel:+94114327637"
          className="group flex items-start gap-4 rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]"
        >
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F33] p-4 text-[#E9A93B]">
            <FiPhone size={21} />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
              Call Us
            </p>
            <h3 className="mt-1 text-[18px] font-bold !text-[#0B1F33]">
              +94 11 432 7637 / 8
            </h3>
          </div>
        </a>

        <a
          href="mailto:info@visitmycity.lk"
          className="group flex items-start gap-4 rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)]"
        >
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F33] p-4 text-[#E9A93B]">
            <FiMail size={21} />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
              Email Us
            </p>
            <h3 className="mt-1 text-[18px] font-bold !text-[#0B1F33]">
              info@visitmycity.lk
            </h3>
          </div>
        </a>

        <div className="flex items-start gap-4 rounded-[28px] border border-slate-100 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.06)]">
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#0B1F33] p-4 text-[#E9A93B]">
            <FiMapPin size={21} />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#E9A93B]">
              Visit Us
            </p>
            <h3 className="mt-1 text-[18px] font-bold !text-[#0B1F33]">
              Colombo 10, Sri Lanka
            </h3>
            <p className="mt-2 text-[14px] leading-6 !text-slate-500">
              No. 12, Sri Dhamma Mawatha, Colombo 10, Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
import { FiAward, FiCheckCircle } from "react-icons/fi";

const certifications = [
  "IATA Accredited",
  "SLTDA Registered",
  "SLAITO Member",
  "CAASL Certified",
];

const CertificationsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Trusted & Certified
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[48px]">
              Recognized travel expertise you can rely on.
            </h2>

            <p className="mt-5 text-[16px] leading-8 !text-slate-600">
              Our certifications and memberships reflect our commitment to
              professional travel service, reliable arrangements, and trusted
              industry standards.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((item) => (
              <div
                key={item}
                className="group rounded-[30px] border border-[#EFE7DA] bg-[#FCFCFA] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A93B]/50 hover:shadow-[0_22px_65px_rgba(11,31,51,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F33] text-[#E9A93B] transition-all duration-300 group-hover:bg-[#E9A93B] group-hover:text-[#0B1F33]">
                    <FiAward size={22} />
                  </span>

                  <div>
                    <h3 className="text-[18px] font-bold !text-[#0B1F33]">
                      {item}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-[13px] font-semibold !text-slate-500">
                      <FiCheckCircle className="text-[#2D6A4F]" />
                      Verified travel standard
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
 

const certifications = [
  {
    title: "IATA Accredited",
    description: "International Air Transport Association",
    image: "/images/certificates/iata.png",
  },
  {
    title: "SLTDA Registered",
    description: "Sri Lanka Tourism Development Authority",
    image: "/images/certificates/sltda.png",
  },
  {
    title: "SLAITO Member",
    description: "Sri Lanka Association of Inbound Tour Operators",
    image: "/images/certificates/slaito.png",
  },
  {
    title: "CAASL Certified",
    description: "Civil Aviation Authority of Sri Lanka",
    image: "/images/certificates/caasl.png",
  },
];

const CertificationsSection = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* Left Content */}
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

          {/* Certification Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {certifications.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-[#E9E1D5] bg-[#FCFCFA] p-6 shadow-[0_8px_20px_rgba(11,31,51,0.05),0_20px_50px_rgba(11,31,51,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E9A93B]/45 hover:shadow-[0_14px_30px_rgba(11,31,51,0.09),0_32px_70px_rgba(11,31,51,0.12)]"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-[#E9A93B]/10 blur-3xl" />

                <div className="relative z-10">
                  {/* Logo */}
                  <div className="flex h-[105px] w-full items-center justify-center rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_10px_30px_rgba(11,31,51,0.05)]">
                    <img
                      src={item.image}
                      alt={`${item.title} certification logo`}
                      className="max-h-[78px] max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Text */}
                  <div className="mt-5">
                    <h3 className="text-[18px] font-bold !text-[#0B1F33]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-5 !text-slate-500">
                      {item.description}
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
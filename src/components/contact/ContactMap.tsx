import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const ContactMap = () => {
  const googleMapUrl =
    "https://www.google.com/maps/place/visit+my+city+travels/@6.9222322,79.8709778,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae259ec972de1c1:0x57ca5bb24e7f9860!8m2!3d6.9222322!4d79.8735527!16s%2Fg%2F11ft8qwdyb?entry=ttu";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=Visit%20My%20City%20Travels,%20Colombo&ll=6.9222322,79.8735527&z=17&output=embed";

  return (
    <section className="bg-white py-20">
      <div className="container-wide">
        <div className="overflow-hidden rounded-[38px] border border-slate-100 bg-[#FCFCFA] shadow-[0_22px_75px_rgba(15,23,42,0.07)]">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            {/* Left Content */}
            <div className="p-8 md:p-10 lg:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
                Find Us
              </p>

              <h2 className="mt-4 text-[34px] font-bold leading-tight !text-[#0B1F33] md:text-[44px]">
                Visit My City, Colombo
              </h2>

              <p className="mt-5 text-[16px] leading-8 !text-slate-600">
                Our office is located in Colombo, ready to support inbound Sri
                Lanka tours and outbound overseas travel planning.
              </p>

              <div className="mt-8 rounded-[24px] border border-[#E9A93B]/20 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9A93B]/12 text-[#E9A93B]">
                    <FiMapPin size={20} />
                  </span>

                  <div>
                    <h3 className="text-[16px] font-bold !text-[#0B1F33]">
                      Visit My City Travels
                    </h3>

                    <p className="mt-2 text-[14px] leading-6 !text-slate-500">
                      Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B1F33] px-6 py-3 text-[14px] font-bold !text-white shadow-[0_14px_35px_rgba(11,31,51,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F]"
              >
                Open in Google Maps
                <FiArrowUpRight size={15} />
              </a>
            </div>

            {/* Map */}
            <div className="relative min-h-[380px] overflow-hidden bg-[#0B1F33] lg:min-h-[500px]">
              <iframe
                title="Visit My City Travels Google Map"
                src={mapEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Small overlay badge */}
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
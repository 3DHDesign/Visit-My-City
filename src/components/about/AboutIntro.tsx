import { FiCompass, FiGlobe, FiMapPin } from "react-icons/fi";

const stats = [
  {
    icon: FiCompass,
    value: "2014",
    label: "Established",
  },
  {
    icon: FiMapPin,
    value: "Sri Lanka",
    label: "Inbound Expertise",
  },
  {
    icon: FiGlobe,
    value: "Global",
    label: "Outbound Travel",
  },
];

const AboutIntro = () => {
  return (
    <section id="about-intro" className="bg-[#FCFCFA] py-24">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
              Who We Are
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-tight !text-[#0B1F33] md:text-[50px]">
              A trusted travel partner operating under Virelio.
            </h2>
          </div>

          <div>
            <p className="text-[17px] leading-8 !text-slate-600">
              Founded in 2014, Visit My City Travels has grown into a trusted
              travel company for both inbound and outbound journeys. Operating
              under Virelio, we combine local destination knowledge with
              reliable global travel support to create seamless, personalized,
              and memorable travel experiences.
            </p>

            <p className="mt-5 text-[17px] leading-8 !text-slate-600">
              From cultural tours around Sri Lanka to international holidays,
              corporate travel, MICE arrangements, honeymoon packages, hotel
              bookings, air ticketing, and visa support, our focus is to make
              every journey smooth from planning to completion.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-[30px] border border-[#EFE7DA] bg-white p-7 shadow-[0_18px_55px_rgba(11,31,51,0.06)]"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-[#E9A93B]/12 text-[#E9A93B]">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-[30px] font-bold !text-[#0B1F33]">
                  {item.value}
                </h3>

                <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.12em] !text-slate-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
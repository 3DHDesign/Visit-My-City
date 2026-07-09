type GuestMoment = {
    title: string;
    location: string;
    image: string;
    objectPosition?: string;
  };
  
  const guestMoments: GuestMoment[] = [
    {
      title: "Airport Welcome",
      location: "Sri Lanka",
      image: "/images/real-moments/real-arrival-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Guided Group Tour",
      location: "Sri Lanka",
      image: "/images/real-moments/real-group-tour-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Elephant Experience",
      location: "Sri Lanka Wildlife",
      image: "/images/real-moments/real-elephant-moment-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Tea Country Visit",
      location: "Hill Country",
      image: "/images/real-moments/real-tea-country-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Temple Visit",
      location: "Cultural Tour",
      image: "/images/real-moments/real-temple-visit-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Beach Walks",
      location: "Coastal Sri Lanka",
      image: "/images/real-moments/real-beach-walk-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Village Experience",
      location: "Local Culture",
      image: "/images/real-moments/real-village-experience-01.jpg",
      objectPosition: "center center",
    },
    {
      title: "Guide Moments",
      location: "Private Tour",
      image: "/images/real-moments/real-guide-moment-01.jpg",
      objectPosition: "center 35%",
    },
  ];

  
  const RealMomentsGallery = () => {
    return (
      <section className="relative overflow-hidden bg-[#FCFCFA] py-10 lg:py-12">
        <div className="container-wide">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] !text-[#E9A93B]">
                  Guest Journey Gallery
                </p>
  
                <h2 className="mt-3 text-[34px] font-bold leading-[1.06] !text-[#0B1F33] md:text-[52px]">
                  Sri Lanka journeys,
                  <span className="block !text-[#2D6A4F]">
                    captured beautifully.
                  </span>
                </h2>
              </div>
  
              <p className="max-w-2xl text-[15px] leading-7 !text-slate-600 md:text-[16px] md:leading-8 lg:justify-self-end">
                A curated glimpse of airport welcomes, guided tours, local meals,
                wildlife visits, culture, coastlines, and guest moments from Visit
                My City journeys.
              </p>
            </div>
  
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {guestMoments.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative h-[190px] overflow-hidden rounded-[22px] bg-[#0B1F33] shadow-[0_14px_40px_rgba(11,31,51,0.10)] md:h-[220px]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading={index > 3 ? "lazy" : "eager"}
                    style={{
                      objectPosition: item.objectPosition ?? "center center",
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/82 via-[#0B1F33]/18 to-transparent" />
  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-[15px] font-bold leading-tight !text-white md:text-[17px]">
                      {item.title}
                    </h3>
  
                    <p className="mt-1 text-[11px] font-semibold !text-white/75 md:text-[12px]">
                      {item.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default RealMomentsGallery;
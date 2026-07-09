const WelcomeSriLankaSection = () => {
    return (
      <section className="relative overflow-hidden bg-[#F8F3EA] py-16 sm:py-20 lg:py-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
  
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
              <img
                src="/images/welcome-to-sri-lanka.jpg"
                alt="Traditional Sri Lankan Ayubowan welcome"
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[520px] lg:h-[580px]"
              />
  
              {/* <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/85 p-4 shadow-lg backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  Ayubowan
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-950">
                  A warm Sri Lankan welcome, from the moment you arrive.
                </h3>
              </div> */}
            </div>
          </div>
  
          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
              Welcome to Sri Lanka
            </p>
  
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Feel the island before your journey even begins.
            </h2>
  
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              From warm smiles and cultural greetings to scenic coastlines,
              ancient cities, wildlife, tea country, and local flavours — Sri Lanka
              welcomes every traveller with something truly personal.
            </p>
  
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg">
                  🙏
                </div>
                <h4 className="font-semibold text-slate-950">
                  Authentic Hospitality
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Local warmth, personal care, and real Sri Lankan experiences.
                </p>
              </div>
  
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">
                  🌿
                </div>
                <h4 className="font-semibold text-slate-950">
                  Island Experiences
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Beaches, temples, wildlife, tea hills, culture, and cuisine.
                </p>
              </div>
            </div>
  
            <div className="mt-8 flex flex-wrap gap-3">
              {["Culture", "Nature", "Wildlife", "Beaches", "Heritage"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WelcomeSriLankaSection;
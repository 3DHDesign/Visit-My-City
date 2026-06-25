export type WorldPackage = {
    slug: string;
    country: string;
    title: string;
    label: string;
    badge: string;
    emoji: string;
    heroImage: string;
    cardImage: string;
    shortDesc: string;
    overview: string;
    route: string;
    bestFor: string;
    duration: string;
    tourStyle: string;
    highlights: string[];
    experiences: {
      title: string;
      image: string;
      desc: string;
    }[];
    includes: string[];
  };
  
  export const worldPackages: WorldPackage[] = [
    {
      slug: "dubai",
      country: "Dubai",
      title: "Dubai Packages",
      label: "City Luxury & Desert Escapes",
      badge: "Outbound Package",
      emoji: "🌆",
      heroImage:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85",
      cardImage:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85",
      shortDesc:
        "Explore Dubai with city tours, desert safaris, shopping, luxury experiences, family attractions, and modern skyline views.",
      overview:
        "Dubai is ideal for travelers who want a mix of luxury, shopping, modern architecture, desert adventure, family entertainment, and premium city experiences. Packages can be customized based on travel dates, hotel category, guest count, and budget.",
      route: "Dubai City, Desert Safari, Marina, Shopping & Attractions",
      bestFor: "Families, couples, groups & luxury travelers",
      duration: "Flexible Duration",
      tourStyle: "Private or group outbound tour",
      highlights: [
        "Dubai city tour and skyline experiences",
        "Desert safari with entertainment options",
        "Shopping malls and luxury retail experiences",
        "Dubai Marina, Burj Khalifa and modern attractions",
        "Family-friendly theme parks and activities",
        "Custom hotel and transfer arrangements",
      ],
      experiences: [
        {
          title: "Dubai City Tour",
          image:
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=85",
          desc: "Discover Dubai’s modern skyline, iconic landmarks, shopping districts, and cultural highlights with a comfortable city tour.",
        },
        {
          title: "Desert Safari Experience",
          image:
            "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=900&q=85",
          desc: "Enjoy a desert safari with dune experiences, sunset views, dinner options, and entertainment depending on the selected package.",
        },
        {
          title: "Luxury & Shopping",
          image:
            "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
          desc: "Plan shopping, luxury stays, premium dining, and modern city experiences for guests who prefer a polished holiday.",
        },
      ],
      includes: [
        "Custom Dubai itinerary planning",
        "Hotel options based on budget",
        "Airport transfer arrangement support",
        "Sightseeing and activity planning",
        "Visa guidance where applicable",
        "Quotation based on guest requirement",
      ],
    },
    {
      slug: "azerbaijan",
      country: "Azerbaijan",
      title: "Azerbaijan Packages",
      label: "Baku, Mountains & Culture",
      badge: "Outbound Package",
      emoji: "🏔️",
      heroImage:
        "https://images.unsplash.com/photo-1600256005684-3a6b2a5b86cb?auto=format&fit=crop&w=1800&q=85",
      cardImage:
        "https://images.unsplash.com/photo-1600256005684-3a6b2a5b86cb?auto=format&fit=crop&w=1200&q=85",
      shortDesc:
        "Discover Baku, mountain routes, old city charm, modern architecture, cultural landmarks, and scenic countryside experiences.",
      overview:
        "Azerbaijan is a strong choice for travelers looking for a unique destination with a blend of modern city life, old town culture, mountain scenery, and memorable photo-friendly routes. Packages can be arranged for families, couples, and groups.",
      route: "Baku, Old City, Gobustan, Gabala & Mountain Routes",
      bestFor: "Couples, families, groups & culture lovers",
      duration: "Flexible Duration",
      tourStyle: "Private or group outbound tour",
      highlights: [
        "Baku city tour and modern architecture",
        "Old City cultural walks",
        "Gobustan and mud volcano options",
        "Gabala mountain scenery",
        "Shopping and leisure experiences",
        "Custom hotel and sightseeing planning",
      ],
      experiences: [
        {
          title: "Baku City Experience",
          image:
            "https://images.unsplash.com/photo-1600256005684-3a6b2a5b86cb?auto=format&fit=crop&w=900&q=85",
          desc: "Explore Baku’s skyline, old city streets, waterfront views, shopping areas, and cultural landmarks.",
        },
        {
          title: "Mountain Routes",
          image:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85",
          desc: "Add scenic routes such as Gabala or mountain-region experiences for nature, photography, and relaxation.",
        },
        {
          title: "Culture & Landmarks",
          image:
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=900&q=85",
          desc: "Include cultural landmarks, museums, heritage sites, and unique local experiences depending on the package.",
        },
      ],
      includes: [
        "Custom Azerbaijan itinerary planning",
        "Hotel options based on budget",
        "Airport transfer arrangement support",
        "Sightseeing and activity planning",
        "Visa guidance where applicable",
        "Quotation based on guest requirement",
      ],
    },
    {
      slug: "thailand",
      country: "Thailand",
      title: "Thailand Packages",
      label: "Temples, Islands & Nightlife",
      badge: "Outbound Package",
      emoji: "🏯",
      heroImage:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1800&q=85",
      cardImage:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=85",
      shortDesc:
        "Plan Thailand holidays with Bangkok, temples, shopping, nightlife, beaches, island stays, and family-friendly experiences.",
      overview:
        "Thailand is ideal for travelers who want a vibrant mix of city life, shopping, temples, nightlife, beaches, island stays, and leisure activities. Packages can be arranged for families, couples, honeymooners, groups, and leisure travelers.",
      route: "Bangkok, Pattaya, Phuket, Krabi & Island Options",
      bestFor: "Families, couples, groups & leisure travelers",
      duration: "Flexible Duration",
      tourStyle: "Private or group outbound tour",
      highlights: [
        "Bangkok city and shopping experiences",
        "Temple visits and cultural attractions",
        "Pattaya, Phuket or Krabi beach options",
        "Island tours and leisure activities",
        "Nightlife and entertainment options",
        "Custom route based on guest preference",
      ],
      experiences: [
        {
          title: "Bangkok City & Shopping",
          image:
            "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=900&q=85",
          desc: "Explore Bangkok’s city attractions, shopping malls, local markets, temples, and entertainment options.",
        },
        {
          title: "Beach & Island Escapes",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
          desc: "Add Phuket, Krabi, Pattaya or island routes for beach stays, boat trips, and tropical relaxation.",
        },
        {
          title: "Family & Leisure Activities",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
          desc: "Plan family-friendly attractions, comfortable transfers, leisure stops, and flexible daily schedules.",
        },
      ],
      includes: [
        "Custom Thailand itinerary planning",
        "Hotel options based on budget",
        "Airport transfer arrangement support",
        "Sightseeing and activity planning",
        "Visa guidance where applicable",
        "Quotation based on guest requirement",
      ],
    },
    {
      slug: "malaysia",
      country: "Malaysia",
      title: "Malaysia Packages",
      label: "City Breaks & Tropical Stays",
      badge: "Outbound Package",
      emoji: "🌴",
      heroImage:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1800&q=85",
      cardImage:
        "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=85",
      shortDesc:
        "Explore Malaysia with Kuala Lumpur, Batu Caves, shopping, family attractions, city tours, culture, and tropical leisure options.",
      overview:
        "Malaysia is perfect for short holidays, family trips, shopping tours, city sightseeing, and comfortable group travel. Packages can include Kuala Lumpur, Batu Caves, Genting Highlands, city experiences, and optional tropical extensions.",
      route: "Kuala Lumpur, Batu Caves, Genting & City Attractions",
      bestFor: "Families, groups, couples & short holidays",
      duration: "Flexible Duration",
      tourStyle: "Private or group outbound tour",
      highlights: [
        "Kuala Lumpur city tour",
        "Batu Caves visit",
        "Shopping and leisure experiences",
        "Genting Highlands options",
        "Family-friendly attractions",
        "Custom hotel and transfer planning",
      ],
      experiences: [
        {
          title: "Kuala Lumpur City Tour",
          image:
            "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=85",
          desc: "Explore Kuala Lumpur’s city landmarks, modern skyline, shopping areas, and cultural attractions.",
        },
        {
          title: "Batu Caves & Culture",
          image:
            "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=900&q=85",
          desc: "Add Batu Caves and cultural stops for a colorful Malaysia experience with temples, steps, and photo-friendly landmarks.",
        },
        {
          title: "Family Holiday Experiences",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
          desc: "Arrange family-friendly attractions, comfortable transfers, shopping time, and flexible sightseeing plans.",
        },
      ],
      includes: [
        "Custom Malaysia itinerary planning",
        "Hotel options based on budget",
        "Airport transfer arrangement support",
        "Sightseeing and activity planning",
        "Visa guidance where applicable",
        "Quotation based on guest requirement",
      ],
    },
    {
      slug: "singapore",
      country: "Singapore",
      title: "Singapore Packages",
      label: "Modern City Experiences",
      badge: "Outbound Package",
      emoji: "🦁",
      heroImage:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=85",
      cardImage:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=85",
      shortDesc:
        "Enjoy Singapore with city attractions, Sentosa, Gardens by the Bay, shopping, family entertainment, and short holiday planning.",
      overview:
        "Singapore is a polished destination for short holidays, family travel, city breaks, shopping, attractions, and premium urban experiences. Packages can be arranged as standalone trips or combined with Malaysia depending on guest preference.",
      route: "Singapore City, Sentosa, Gardens by the Bay & Attractions",
      bestFor: "Families, couples, short holidays & city travelers",
      duration: "Flexible Duration",
      tourStyle: "Private or group outbound tour",
      highlights: [
        "Singapore city tour",
        "Sentosa Island options",
        "Gardens by the Bay",
        "Shopping and dining experiences",
        "Family-friendly attractions",
        "Malaysia combination options",
      ],
      experiences: [
        {
          title: "Modern City Tour",
          image:
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=85",
          desc: "Discover Singapore’s clean cityscape, modern landmarks, shopping areas, and iconic attractions.",
        },
        {
          title: "Sentosa & Family Fun",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
          desc: "Add Sentosa, entertainment parks, beaches, and family-friendly experiences based on guest preference.",
        },
        {
          title: "Gardens & Premium Experiences",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=85",
          desc: "Plan scenic attractions, evening views, dining, shopping, and premium city experiences.",
        },
      ],
      includes: [
        "Custom Singapore itinerary planning",
        "Hotel options based on budget",
        "Airport transfer arrangement support",
        "Sightseeing and activity planning",
        "Visa guidance where applicable",
        "Quotation based on guest requirement",
      ],
    },
    {
      slug: "india",
      country: "India",
      title: "India Packages",
      label: "Culture, Pilgrimage & Family Tours",
      badge: "Outbound Package",
      emoji: "🕌",
      heroImage:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
      cardImage:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
      shortDesc:
        "Arrange India tours for pilgrimage, culture, shopping, family holidays, heritage sites, city experiences, and custom travel routes.",
      overview:
        "India offers a wide range of travel possibilities including pilgrimage tours, cultural routes, family holidays, city breaks, shopping journeys, and heritage experiences. Packages can be customized according to purpose, destination, group size, and budget.",
      route: "Pilgrimage, Heritage, Shopping, City & Family Routes",
      bestFor: "Pilgrimage groups, families, culture lovers & travelers",
      duration: "Flexible Duration",
      tourStyle: "Private or group outbound tour",
      highlights: [
        "Pilgrimage tour options",
        "Heritage and cultural routes",
        "Shopping and city experiences",
        "Family-friendly travel planning",
        "Group tour arrangement support",
        "Custom routes based on guest requirement",
      ],
      experiences: [
        {
          title: "Pilgrimage Tours",
          image:
            "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=85",
          desc: "Arrange pilgrimage routes based on religious, cultural, and group travel requirements.",
        },
        {
          title: "Heritage & Culture",
          image:
            "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=85",
          desc: "Plan heritage sites, historic cities, cultural landmarks, and memorable local experiences.",
        },
        {
          title: "Family & Shopping Trips",
          image:
            "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
          desc: "Create family-friendly and shopping-focused trips with comfortable routes and flexible schedules.",
        },
      ],
      includes: [
        "Custom India itinerary planning",
        "Hotel options based on budget",
        "Airport transfer arrangement support",
        "Sightseeing and activity planning",
        "Visa guidance where applicable",
        "Quotation based on guest requirement",
      ],
    },
  ];
  
  export const getWorldPackageBySlug = (slug?: string) => {
    return worldPackages.find((item) => item.slug === slug);
  };
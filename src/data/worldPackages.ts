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
            "https://images.unsplash.com/photo-1667592441284-b590021411e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Discover Dubai’s modern skyline, iconic landmarks, shopping districts, and cultural highlights with a comfortable city tour.",
        },
        {
          title: "Desert Safari Experience",
          image:
            "https://images.unsplash.com/photo-1597656303066-85eb659aeb29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Enjoy a desert safari with dune experiences, sunset views, dinner options, and entertainment depending on the selected package.",
        },
        {
          title: "Luxury & Shopping",
          image:
            "https://images.unsplash.com/photo-1738823744763-1794dddf8bdb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
  "https://images.unsplash.com/photo-1642856761437-5b5efcb36d81?q=80&w=1091&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",cardImage:
  "https://images.unsplash.com/photo-1689189044045-7cb0767e5cf1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
shortDesc:
  "Discover Azerbaijan through Baku city experiences, mountain scenery, cultural landmarks, old town streets, modern architecture, and scenic countryside routes.", overview:
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
          title: "Baku City Tour",
          image:
            "https://images.unsplash.com/photo-1753706842889-ba63b4f3ccc1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Explore Baku’s modern skyline, old city streets, seaside boulevard, cultural landmarks, and vibrant city atmosphere.",
        },
        {
          title: "Mountain Routes",
          image:
            "https://images.unsplash.com/photo-1539451801758-fc29fa0dc710?q=80&w=957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Enjoy scenic mountain routes, peaceful landscapes, cool weather, and countryside experiences beyond the city.",
        },
        {
          title: "Cultural Landmarks",
          image:
            "https://images.unsplash.com/photo-1746382320737-5f7fbddb84b7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Discover Azerbaijan’s historic architecture, cultural landmarks, old town streets, and unique local heritage.",
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
      "https://images.unsplash.com/photo-1642856761437-5b5efcb36d81?q=80&w=1091&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://images.unsplash.com/photo-1510380097750-835f6f8e11ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Explore Bangkok’s city highlights, shopping malls, street markets, temples, food spots, and vibrant urban experiences.",
        },
        {
          title: "Beach & Island Escapes",
          image:
            "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Relax with Thailand’s tropical beaches, island stays, blue waters, boat rides, and peaceful coastal holiday moments.",
        },
        {
          title: "Family & Leisure Activities",
          image:
            "https://images.unsplash.com/photo-1595002336275-78e2643005f3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Plan family-friendly attractions, leisure activities, sightseeing, theme parks, and comfortable experiences for all ages.",
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
  "https://images.unsplash.com/photo-1681814677036-62f86f74a906?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800",
cardImage:
  "https://images.unsplash.com/photo-1712601979098-15dccb4d0996?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          title: "Batu Caves Visit",
          image:
          "https://images.unsplash.com/photo-1681814677030-72ab971ac45b?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Visit the iconic Batu Caves with its golden statue, colourful steps, limestone caves, and cultural atmosphere near Kuala Lumpur.",
        },
        {
          title: "Kuala Lumpur City Tour",
          image:
            "https://images.unsplash.com/photo-1581981657871-77c0d8adc84d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Explore Kuala Lumpur’s skyline, city attractions, shopping areas, cultural spots, and modern urban highlights.",
        },
        {
          title: "Family Holiday Experiences",
          image:
            "https://images.unsplash.com/photo-1561568005-90b6540edc29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Plan family-friendly sightseeing, leisure activities, comfortable stays, shopping, dining, and easy holiday moments.",
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
      "https://images.unsplash.com/photo-1472148439583-1f4cf81b80e0?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardImage:
      "https://images.unsplash.com/photo-1775306963755-8897be3967bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          title: "Sentosa Island",
          image:
            "https://images.unsplash.com/photo-1644327981167-fbd67b34ba72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Enjoy Sentosa Island with family attractions, beach time, leisure activities, entertainment, and relaxed holiday experiences.",
        },
        {
          title: "Gardens by the Bay",
          image:
            "https://images.unsplash.com/photo-1722704710146-84f7cbce7e94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Visit Singapore’s iconic gardens, futuristic attractions, floral displays, light shows, and beautifully designed nature spaces.",
        },
        {
          title: "Modern City Tour",
          image:
            "https://images.unsplash.com/photo-1533299346856-b1a85808f2ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Explore Singapore’s clean city streets, skyline views, shopping districts, dining spots, cultural areas, and modern attractions.",
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
      "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1314&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cardImage:
      "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            "https://images.unsplash.com/photo-1667374073450-81dfcb5ebfcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Plan spiritual journeys to India’s sacred temples, holy cities, cultural sites, and meaningful pilgrimage destinations.",
        },
        {
          title: "Ancient Heritage",
          image:
            "https://images.unsplash.com/photo-1631774933370-d596a344e851?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Explore India’s ancient monuments, historic architecture, royal landmarks, cultural routes, and timeless heritage sites.",
        },
        {
          title: "Shopping & City Experiences",
          image:
            "https://images.unsplash.com/photo-1640181637089-cce4a3040ed2?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          desc: "Enjoy city tours, local markets, shopping streets, food experiences, and colourful urban moments across India.",
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
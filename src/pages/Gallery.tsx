import { useMemo, useState } from "react";
import {
    FiCamera,
    FiChevronLeft,
    FiChevronRight,
    FiGlobe,
    FiImage,
    FiMapPin,
    FiX,
    FiZoomIn,
} from "react-icons/fi";

type GalleryType = "Inbound" | "Outbound";

type GalleryCategory =
    | "Culture & Heritage"
    | "Elephants & Wildlife"
    | "Safari & Adventure"
    | "Tea Country & Nature"
    | "Beach & Coastal"
    | "Food & Local Life"
    | "Scenic Journeys";

type GalleryImage = {
    src: string;
    alt: string;
    type: GalleryType;
    categories?: GalleryCategory[];
    country?: string;
};

const inboundCategories: Array<"All" | GalleryCategory> = [
    "All",
    "Culture & Heritage",
    "Elephants & Wildlife",
    "Safari & Adventure",
    "Tea Country & Nature",
    "Beach & Coastal",
    "Food & Local Life",
    "Scenic Journeys",
];

const galleryImages: GalleryImage[] = [
    // =========================
    // INBOUND - CULTURE
    // =========================
    {
        src: "/images/gallery/inbound/kandy-temple-of-the-tooth-sri-lanka-01.jpeg",
        alt: "Visit My City travelers visiting the Temple of the Tooth in Kandy Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/embekke-devalaya-kandy-sri-lanka-01.jpeg",
        alt: "Traveler visiting Embekke Devalaya in Kandy Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/embekke-devalaya-kandy-sri-lanka-02.jpeg",
        alt: "Heritage travel experience at Embekke Devalaya Kandy Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/dambulla-golden-temple-sri-lanka-01.jpeg",
        alt: "Travelers visiting the Golden Temple in Dambulla Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/sigiriya-rock-fortress-sri-lanka-01.jpeg",
        alt: "Travelers visiting Sigiriya Rock Fortress Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sigiriya-rock-fortress-sri-lanka-02.jpeg",
        alt: "Sri Lanka travel experience at Sigiriya Rock Fortress",
        type: "Inbound",
        categories: ["Culture & Heritage", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sigiriya-rock-fortress-sri-lanka-03.jpeg",
        alt: "Visitors exploring Sigiriya Sri Lanka with Visit My City",
        type: "Inbound",
        categories: ["Culture & Heritage", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/seetha-amman-kovil-nuwara-eliya-sri-lanka-01.jpeg",
        alt: "Visit to Seetha Amman Kovil in Nuwara Eliya Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage", "Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/galle-fort-sri-lanka-01.jpeg",
        alt: "Travel experience at Galle Fort Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage", "Beach & Coastal"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-cultural-heritage-site-buduruwagala-01.jpeg",
        alt: "Cultural heritage visit to Buduruwagala Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-cultural-heritage-temple-01.jpeg",
        alt: "Cultural temple experience in Sri Lanka",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-cultural-heritage-visit-01.jpeg",
        alt: "Sri Lanka cultural heritage travel experience",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-heritage-building-01.jpeg",
        alt: "Historic heritage building visited during a Sri Lanka tour",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-heritage-building-02.jpeg",
        alt: "Sri Lanka heritage sightseeing experience",
        type: "Inbound",
        categories: ["Culture & Heritage"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-local-cultural-experience-01.jpeg",
        alt: "Local cultural experience during a Sri Lanka tour",
        type: "Inbound",
        categories: ["Culture & Heritage", "Food & Local Life"],
    },

    // =========================
    // INBOUND - ELEPHANTS
    // =========================
    {
        src: "/images/gallery/inbound/sri-lanka-elephant-experience-01.jpeg",
        alt: "Elephant experience during a Sri Lanka tour",
        type: "Inbound",
        categories: ["Elephants & Wildlife"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-elephant-experience-02.jpeg",
        alt: "Traveler enjoying an elephant experience in Sri Lanka",
        type: "Inbound",
        categories: ["Elephants & Wildlife"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-elephant-experience-03.jpeg",
        alt: "Sri Lanka elephant travel experience",
        type: "Inbound",
        categories: ["Elephants & Wildlife"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-elephant-wildlife-experience-01.jpeg",
        alt: "Elephant and wildlife experience in Sri Lanka",
        type: "Inbound",
        categories: ["Elephants & Wildlife"],
    },
    {
        src: "/images/gallery/inbound/pinnawala-elephant-orphanage-sri-lanka-01.jpeg",
        alt: "Visit to Pinnawala Elephant Orphanage Sri Lanka",
        type: "Inbound",
        categories: ["Elephants & Wildlife"],
    },

    // =========================
    // INBOUND - SAFARI
    // =========================
    {
        src: "/images/gallery/inbound/sri-lanka-safari-jeep-experience-01.jpeg",
        alt: "Safari jeep experience in Sri Lanka",
        type: "Inbound",
        categories: ["Safari & Adventure"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-safari-jeep-experience-02.jpeg",
        alt: "Travelers enjoying a Sri Lanka safari jeep experience",
        type: "Inbound",
        categories: ["Safari & Adventure"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-yala-safari-jeep-experience-01.jpeg",
        alt: "Yala safari jeep experience in Sri Lanka",
        type: "Inbound",
        categories: ["Safari & Adventure", "Elephants & Wildlife"],
    },

    // =========================
    // INBOUND - TEA & NATURE
    // =========================
    {
        src: "/images/gallery/inbound/nuwara-eliya-tea-plantation-experience-sri-lanka-01.jpg",
        alt: "Tea plantation experience in Nuwara Eliya Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-tea-plantation-experience-01.jpeg",
        alt: "Travelers enjoying a tea plantation experience in Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/labookellie-tea-plantation-nuwara-eliya-sri-lanka-01.jpeg",
        alt: "Labookellie tea plantation experience in Nuwara Eliya Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/gregory-lake-park-nuwara-eliya-sri-lanka-01.jpeg",
        alt: "Travel experience at Gregory Lake Park Nuwara Eliya",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/ella-hill-country-scenic-viewpoint-sri-lanka-01.jpeg",
        alt: "Scenic hill country viewpoint in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/ella-nature-experience-sri-lanka-01.jpeg",
        alt: "Nature travel experience in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/ella-scenic-nature-experience-sri-lanka-01.jpeg",
        alt: "Scenic nature experience in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/ella-scenic-viewpoint-sri-lanka-01.jpeg",
        alt: "Scenic viewpoint experience in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/ella-waterfall-sri-lanka-01.jpeg",
        alt: "Waterfall experience in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/ravana-falls-ella-sri-lanka-01.jpeg",
        alt: "Travelers visiting Ravana Falls in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/ravana-falls-ella-sri-lanka-02.jpeg",
        alt: "Ravana Falls travel experience in Ella Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-waterfall-nature-experience-01.jpeg",
        alt: "Waterfall and nature experience during a Sri Lanka tour",
        type: "Inbound",
        categories: ["Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-nature-trail-hiking-experience-01.jpeg",
        alt: "Nature trail and hiking experience in Sri Lanka",
        type: "Inbound",
        categories: ["Tea Country & Nature", "Safari & Adventure"],
    },

    // =========================
    // INBOUND - BEACH & COASTAL
    // =========================
    {
        src: "/images/gallery/inbound/mirissa-beach-sri-lanka-01.jpeg",
        alt: "Beach experience in Mirissa Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal"],
    },
    {
        src: "/images/gallery/inbound/mirissa-beach-sri-lanka-02.jpeg",
        alt: "Travelers enjoying Mirissa beach Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal"],
    },
    {
        src: "/images/gallery/inbound/mirissa-beach-experience-sri-lanka-01.jpeg",
        alt: "Mirissa beach holiday experience in Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal"],
    },
    {
        src: "/images/gallery/inbound/mirissa-coastal-experience-sri-lanka-01.jpeg",
        alt: "Coastal travel experience in Mirissa Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal"],
    },
    {
        src: "/images/gallery/inbound/mirissa-coconut-tree-hill-sri-lanka-01.jpeg",
        alt: "Coconut Tree Hill Mirissa Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/mirissa-coconut-tree-hill-sri-lanka-02.jpeg",
        alt: "Travel experience at Coconut Tree Hill Mirissa",
        type: "Inbound",
        categories: ["Beach & Coastal", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/mirissa-coconut-tree-hill-sri-lanka-03.jpeg",
        alt: "Visit My City travelers at Coconut Tree Hill Mirissa Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal", "Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-stilt-fishing-experience-01.jpeg",
        alt: "Traditional stilt fishing experience in Sri Lanka",
        type: "Inbound",
        categories: ["Beach & Coastal", "Culture & Heritage"],
    },

    // =========================
    // INBOUND - MADU GANGA
    // =========================
    {
        src: "/images/gallery/inbound/madu-ganga-boat-safari-sri-lanka-01.jpeg",
        alt: "Madu Ganga boat safari experience in Sri Lanka",
        type: "Inbound",
        categories: ["Safari & Adventure", "Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/madu-ganga-boat-safari-sri-lanka-02.jpeg",
        alt: "Travelers enjoying Madu Ganga boat safari Sri Lanka",
        type: "Inbound",
        categories: ["Safari & Adventure", "Tea Country & Nature"],
    },
    {
        src: "/images/gallery/inbound/madu-ganga-boat-safari-sri-lanka-03.jpeg",
        alt: "Madu Ganga river and mangrove boat safari",
        type: "Inbound",
        categories: ["Safari & Adventure", "Tea Country & Nature"],
    },

    // =========================
    // INBOUND - LOCAL LIFE & FOOD
    // =========================
    {
        src: "/images/gallery/inbound/sri-lanka-local-food-experience-01.jpeg",
        alt: "Local food experience during a Sri Lanka tour",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-local-food-preparation-experience-01.jpeg",
        alt: "Local food preparation experience in Sri Lanka",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-local-food-tasting-experience-01.jpeg",
        alt: "Local food tasting experience in Sri Lanka",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-local-food-tasting-experience-02.jpeg",
        alt: "Travelers tasting traditional Sri Lankan food",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-local-market-experience-01.jpeg",
        alt: "Local market experience during a Sri Lanka holiday",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-local-night-market-experience-01.jpeg",
        alt: "Night market experience in Sri Lanka",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-tropical-fruit-market-experience-01.jpeg",
        alt: "Tropical fruit market experience in Sri Lanka",
        type: "Inbound",
        categories: ["Food & Local Life"],
    },

    // =========================
    // INBOUND - SCENIC JOURNEYS
    // =========================
    {
        src: "/images/gallery/inbound/bandaranaike-international-airport-arrival-sri-lanka-01.jpeg",
        alt: "Travelers arriving at Bandaranaike International Airport Sri Lanka",
        type: "Inbound",
        categories: ["Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/bandaranaike-international-airport-arrival-sri-lanka-02.jpeg",
        alt: "Sri Lanka tour airport arrival experience",
        type: "Inbound",
        categories: ["Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-scenic-ella-railway-station-01.jpeg",
        alt: "Ella railway station experience in Sri Lanka",
        type: "Inbound",
        categories: ["Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-scenic-train-journey-01.jpeg",
        alt: "Scenic train journey through Sri Lanka",
        type: "Inbound",
        categories: ["Scenic Journeys"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-tuk-tuk-travel-experience-01.jpeg",
        alt: "Tuk tuk travel experience in Sri Lanka",
        type: "Inbound",
        categories: ["Scenic Journeys", "Food & Local Life"],
    },
    {
        src: "/images/gallery/inbound/sri-lanka-tourist-sightseeing-experience-01.jpeg",
        alt: "Tourist sightseeing experience in Sri Lanka",
        type: "Inbound",
        categories: ["Scenic Journeys"],
    },

    // =========================
    // OUTBOUND - MALAYSIA
    // =========================
    {
        src: "/images/gallery/outbound/visit-my-city-malaysia-group-tour-01.jpeg",
        alt: "Visit My City Malaysia group tour",
        type: "Outbound",
        country: "Malaysia",
    },
];

const Gallery = () => {
    const [activeType, setActiveType] = useState<GalleryType>("Inbound");
    const [activeCategory, setActiveCategory] =
        useState<(typeof inboundCategories)[number]>("All");

    const [activeCountry, setActiveCountry] = useState("All");

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const filteredImages = useMemo(() => {
        return galleryImages.filter((image) => {
            if (image.type !== activeType) return false;

            if (activeType === "Inbound") {
                if (activeCategory === "All") return true;

                return image.categories?.includes(activeCategory);
            }

            if (activeCountry === "All") return true;

            return image.country === activeCountry;
        });
    }, [activeType, activeCategory, activeCountry]);

    const handleTypeChange = (type: GalleryType) => {
        setActiveType(type);
        setActiveCategory("All");
        setActiveCountry("All");
        setSelectedIndex(null);
    };

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? filteredImages.length - 1
                : selectedIndex - 1
        );
    };

    const showNext = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === filteredImages.length - 1
                ? 0
                : selectedIndex + 1
        );
    };

    return (
        <main className="bg-[#FCFCFA]">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0B1F33] pb-24 pt-36">
                <div className="absolute inset-0">
                    <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#2D6A4F]/30 blur-[100px]" />
                    <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#E9A93B]/20 blur-[120px]" />
                </div>

                <div className="container-wide relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.28em] !text-[#E9A93B]">
                            <FiCamera size={15} />
                            Travel Gallery
                        </p>

                        <h1 className="mt-5 text-[42px] font-bold leading-[1.06] !text-white md:text-[68px]">
                            Journeys worth remembering.
                            <span className="block !text-[#E9A93B]">
                                Moments worth sharing.
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 !text-white/75">
                            Explore memorable travel experiences, cultural discoveries, wildlife
                            encounters, scenic journeys, local moments, and international tours
                            arranged by Visit My City.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-12 md:py-16">
                <div className="container-wide">
                    {/* Main Tabs */}
                    <div className="mx-auto flex max-w-md rounded-full border border-[#E9E1D5] bg-white p-1.5 shadow-[0_12px_35px_rgba(11,31,51,0.08)]">
                        {(["Inbound", "Outbound"] as GalleryType[]).map((type) => (
                            <button
                                key={type}
                                onClick={() => handleTypeChange(type)}
                                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold transition-all duration-300 ${activeType === type
                                        ? "bg-[#0B1F33] !text-white shadow-[0_8px_20px_rgba(11,31,51,0.20)]"
                                        : "!text-slate-500 hover:!text-[#0B1F33]"
                                    }`}
                            >
                                {type === "Inbound" ? (
                                    <FiMapPin size={16} />
                                ) : (
                                    <FiGlobe size={16} />
                                )}

                                {type} Tours
                            </button>
                        ))}
                    </div>

                    {/* Inbound Categories */}
                    {activeType === "Inbound" && (
                        <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-center gap-2.5">
                            {inboundCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ${activeCategory === category
                                            ? "border-[#E9A93B] bg-[#E9A93B] !text-[#0B1F33] shadow-[0_8px_20px_rgba(233,169,59,0.22)]"
                                            : "border-[#E9E1D5] bg-white !text-slate-600 hover:border-[#E9A93B]/50 hover:!text-[#0B1F33]"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Outbound Countries */}
                    {activeType === "Outbound" && (
                        <div className="mx-auto mt-8 flex justify-center gap-2.5">
                            {["All", "Malaysia"].map((country) => (
                                <button
                                    key={country}
                                    onClick={() => setActiveCountry(country)}
                                    className={`rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${activeCountry === country
                                            ? "border-[#E9A93B] bg-[#E9A93B] !text-[#0B1F33]"
                                            : "border-[#E9E1D5] bg-white !text-slate-600"
                                        }`}
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Count */}
                    <div className="mt-10 flex items-center justify-between border-b border-[#E9E1D5] pb-5">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] !text-[#E9A93B]">
                                {activeType} Gallery
                            </p>

                            <h2 className="mt-1 text-[24px] font-bold !text-[#0B1F33]">
                                {filteredImages.length} Travel Memories
                            </h2>
                        </div>

                        <FiImage className="text-[#E9A93B]" size={24} />
                    </div>

                    {/* Masonry Gallery */}
                    <div className="mt-8 columns-2 gap-3 sm:columns-3 md:gap-4 lg:columns-4 xl:columns-5">
                        {filteredImages.map((image, index) => (
                            <button
                                key={`${image.src}-${index}`}
                                onClick={() => openLightbox(index)}
                                className="group relative mb-3 block w-full break-inside-avoid  cursor-pointer overflow-hidden rounded-[18px] bg-slate-100 text-left shadow-[0_8px_20px_rgba(11,31,51,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,31,51,0.16)] md:mb-4 md:rounded-[22px]"
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    loading="lazy"
                                    className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                                />

                                <div className="pointer-events-none absolute inset-0 bg-[#071A2C]/0 transition-all duration-300 group-hover:bg-[#071A2C]/20" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#0B1F33] shadow-xl backdrop-blur">
                                        <FiZoomIn size={20} />
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedIndex !== null && filteredImages[selectedIndex] && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050D15]/95 p-4 backdrop-blur-md"
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        onClick={closeLightbox}
                        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 !text-white backdrop-blur transition-all hover:bg-white hover:!text-[#0B1F33]"
                        aria-label="Close gallery"
                    >
                        <FiX size={22} />
                    </button>

                    {/* Previous */}
                    {filteredImages.length > 1 && (
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 !text-white backdrop-blur transition-all hover:bg-white hover:!text-[#0B1F33] md:left-6"
                            aria-label="Previous image"
                        >
                            <FiChevronLeft size={24} />
                        </button>
                    )}

                    {/* Image */}
                    <div
                        className="flex max-h-[90vh] max-w-6xl items-center justify-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={filteredImages[selectedIndex].src}
                            alt={filteredImages[selectedIndex].alt}
                            className="max-h-[88vh] max-w-full rounded-[18px] object-contain shadow-[0_35px_100px_rgba(0,0,0,0.45)]"
                        />
                    </div>

                    {/* Next */}
                    {filteredImages.length > 1 && (
                        <button
                            onClick={(event) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 !text-white backdrop-blur transition-all hover:bg-white hover:!text-[#0B1F33] md:right-6"
                            aria-label="Next image"
                        >
                            <FiChevronRight size={24} />
                        </button>
                    )}

                    {/* Counter */}
                    <div className="absolute bottom-5 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[13px] font-semibold !text-white/80 backdrop-blur">
                        {selectedIndex + 1} / {filteredImages.length}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;
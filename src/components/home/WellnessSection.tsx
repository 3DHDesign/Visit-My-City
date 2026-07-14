import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
    FiArrowUpRight,
    FiAward,
    FiFeather,
    FiHeart,
    FiSun,
    FiWind,
} from "react-icons/fi";

type WellnessItem = {
    id: string;
    tab: string;
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    icon: ReactNode;
    tags: string[];
};

const AUTO_SLIDE_TIME = 5500;

const wellnessItems: WellnessItem[] = [
    {
        id: "ayurveda",
        tab: "Ayurveda",
        eyebrow: "Ancient Healing",
        title: "Restore balance through Sri Lanka’s timeless healing traditions.",
        description:
            "Experience authentic Ayurveda through traditional therapies, herbal treatments and peaceful wellness settings designed around rest, renewal and natural balance.",
        image:
            "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=90",
        icon: <FiFeather />,
        tags: [
            "Herbal Therapies",
            "Traditional Wellness",
            "Natural Balance",
        ],
    },
    {
        id: "yoga",
        tab: "Yoga & Meditation",
        eyebrow: "Inner Calm",
        title: "Slow down, breathe deeply and reconnect with yourself.",
        description:
            "From sunrise yoga surrounded by tropical nature to peaceful meditation experiences, Sri Lanka offers inspiring spaces to pause, reset and find a deeper sense of calm.",
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=90",
        icon: <FiWind />,
        tags: ["Sunrise Yoga", "Meditation", "Mindful Travel"],
    },
    {
        id: "nature",
        tab: "Nature Retreats",
        eyebrow: "Reconnect With Nature",
        title: "Find space to breathe in the island’s most peaceful landscapes.",
        description:
            "Escape into misty hills, tropical gardens and tranquil coastal settings where nature becomes part of the journey and every day moves at a gentler pace.",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1800&q=90",
        icon: <FiSun />,
        tags: ["Hill Country", "Tropical Nature", "Quiet Escapes"],
    },
    {
        id: "relaxation",
        tab: "Spa & Relaxation",
        eyebrow: "Rest & Renewal",
        title: "Make time for stillness, comfort and complete relaxation.",
        description:
            "Unwind with carefully selected wellness stays, restorative spa experiences and moments designed to help you relax, recharge and enjoy Sri Lanka at your own pace.",
        image:
            "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1800&q=90",
        icon: <FiHeart />,
        tags: ["Spa Experiences", "Deep Rest", "Wellness Stays"],
    },
];

const WellnessSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = wellnessItems[activeIndex];

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setActiveIndex(
                (currentIndex) =>
                    (currentIndex + 1) % wellnessItems.length
            );
        }, AUTO_SLIDE_TIME);

        return () => window.clearTimeout(timer);
    }, [activeIndex]);

    return (
        <section className="relative overflow-hidden bg-[#F8F5EE] py-8 sm:py-10 lg:py-12">
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#DCECE4]/70 blur-[110px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#F2D7A5]/50 blur-[110px]" />

            <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
                {/* =====================================================
                    COMPACT INTRO
                ====================================================== */}
                <div className="grid items-end gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
                    {/* LEFT */}
                    <div>
                        {/* 2026 Wellness Recognition */}
                        {/* 2026 Wellness Recognition */}
                        <div className="wellness-award-enter group relative mb-5 inline-flex max-w-full items-center overflow-hidden rounded-[20px] border border-[#E9A93B]/40 bg-white p-1.5 shadow-[0_16px_45px_rgba(7,30,44,0.12)]">
                            {/* Animated shine */}
                            <span className="wellness-award-shine pointer-events-none absolute inset-y-0 -left-[40%] w-[30%] rotate-[18deg] bg-gradient-to-r from-transparent via-[#E9A93B]/20 to-transparent blur-sm" />

                            {/* Gold icon */}
                            <div className="wellness-award-icon relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] bg-[#E9A93B] text-[#071E2C] shadow-[0_8px_20px_rgba(233,169,59,0.28)]">
                                <FiAward className="text-[21px]" />
                            </div>

                            {/* Main text */}
                            <div className="relative z-10 min-w-0 px-4 py-1 pr-3 sm:px-5">
                                <div className="flex items-center gap-2">
                                    <span className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#9B7020] sm:text-[10px]">
                                        Sri Lanka
                                    </span>

                                    <span className="wellness-dot h-1.5 w-1.5 rounded-full bg-[#E9A93B]" />

                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#60707C] sm:text-[10px]">
                                        Wellness 2026
                                    </span>
                                </div>

                                <p className="mt-1 text-[12px] font-extrabold uppercase leading-tight tracking-[0.09em] text-[#071E2C] sm:text-[14px]">
                                    World&apos;s #1 Trending
                                    <span className="ml-1 text-[#28725D]">
                                        Wellness Destination
                                    </span>
                                </p>
                            </div>

                            {/* Animated year badge */}
                            <div className="relative z-10 mr-1 hidden shrink-0 sm:block">
                                <div className="wellness-year-badge flex h-12 min-w-[74px] items-center justify-center rounded-[14px] bg-[#071E2C] px-4 shadow-[0_8px_20px_rgba(7,30,44,0.20)]">
                                    <span className="text-[12px] font-extrabold tracking-[0.18em] text-white">
                                        2026
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#B17C1C] sm:text-[10px]">
                            Wellness in Sri Lanka
                        </p>

                        <h2 className="max-w-[760px] font-serif text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#071E2C] sm:text-[46px] lg:text-[56px] xl:text-[62px]">
                            Slow down. Reconnect.
                            <span className="block text-[#28725D]">
                                Feel Sri Lanka.
                            </span>
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="pb-1 lg:pb-2">
                        <div className="mb-4 hidden h-[2px] w-12 bg-[#E9A93B] lg:block" />

                        <p className="max-w-[560px] text-[14px] leading-7 text-[#596B76] sm:text-[15px] lg:text-[16px] lg:leading-8">
                            From ancient Ayurveda and peaceful yoga to tropical
                            nature retreats and restorative escapes, discover a
                            gentler way to experience the island.
                        </p>

                        <p className="mt-4 max-w-[520px] text-[11px] leading-5 text-[#8A969D] sm:text-[12px]">
                            Explore four ways to slow down, reconnect and
                            experience Sri Lanka through wellbeing.
                        </p>
                    </div>
                </div>

                {/* =====================================================
                    TABS
                ====================================================== */}
                <div className="mt-7 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-8">
                    <div className="flex min-w-max items-center gap-2 lg:min-w-0">
                        {wellnessItems.map((item, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative flex min-w-[155px] flex-1 items-center justify-center gap-2.5 overflow-hidden rounded-2xl border px-5 py-3.5 text-[12px] font-bold transition-all duration-300 sm:min-w-[175px] sm:text-[13px] ${isActive
                                            ? "border-[#071E2C] bg-[#071E2C] text-white shadow-[0_12px_30px_rgba(7,30,44,0.15)]"
                                            : "border-[#071E2C]/10 bg-white/80 text-[#425660] hover:-translate-y-0.5 hover:border-[#071E2C]/20 hover:bg-white"
                                        }`}
                                >
                                    <span
                                        className={`text-[17px] ${isActive
                                                ? "text-[#E9A93B]"
                                                : "text-[#28725D]"
                                            }`}
                                    >
                                        {item.icon}
                                    </span>

                                    <span className="whitespace-nowrap">
                                        {item.tab}
                                    </span>

                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden bg-white/10">
                                            <span
                                                key={`progress-${activeIndex}`}
                                                className="block h-full bg-[#E9A93B] animate-[wellnessProgress_5.5s_linear_forwards]"
                                            />
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* =====================================================
                    MAIN SHOWCASE
                ====================================================== */}
                <div className="mt-4 overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_25px_80px_rgba(7,30,44,0.13)] sm:p-3 lg:rounded-[36px]">
                    <div className="grid overflow-hidden rounded-[22px] bg-[#071E2C] lg:h-[430px] lg:grid-cols-[1.08fr_0.92fr] lg:rounded-[29px]">
                        {/* IMAGE */}
                        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[380px] lg:h-[430px] lg:min-h-0">
                            <img
                                key={activeItem.image}
                                src={activeItem.image}
                                alt={`${activeItem.tab} experience in Sri Lanka`}
                                className="absolute inset-0 h-full w-full object-cover animate-[wellnessImageIn_.7s_ease-out]"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#071E2C]/70 via-transparent to-black/5 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#071E2C]/20" />

                            {/* Number */}
                            <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#071E2C]/60 font-serif text-[17px] font-semibold text-white backdrop-blur-md sm:left-7 sm:top-7">
                                0{activeIndex + 1}
                            </div>

                            {/* Image caption */}
                            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto">
                                <div className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-[#071E2C]/75 p-3 pr-5 shadow-2xl backdrop-blur-xl">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9A93B] text-[19px] text-[#071E2C]">
                                        {activeItem.icon}
                                    </span>

                                    <div className="text-left">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                                            Wellness in Sri Lanka
                                        </p>

                                        <p className="mt-1 text-[14px] font-bold text-white">
                                            {activeItem.tab}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div
                            key={activeItem.id}
                            className="relative flex min-h-[420px] items-center overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:h-[430px] lg:min-h-0 lg:px-10 xl:px-12"
                        >
                            {/* Decorative number */}
                            <span className="pointer-events-none absolute -right-2 top-2 font-serif text-[130px] font-semibold leading-none !text-white/[0.035] sm:text-[170px]">
                                0{activeIndex + 1}
                            </span>

                            <div className="relative z-10 w-full animate-[wellnessContentIn_.55s_ease-out]">
                                {/* Eyebrow */}
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-[2px] w-10 bg-[#E9A93B]" />

                                    <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#E9A93B] sm:text-[11px]">
                                        {activeItem.eyebrow}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="max-w-[560px] font-serif text-[30px] font-semibold leading-[1.07] tracking-[-0.02em] !text-white sm:text-[36px] lg:text-[38px] xl:text-[42px]">
                                    {activeItem.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 max-w-[540px] text-[14px] leading-7 !text-white/70 sm:text-[15px] lg:text-[15px] lg:leading-7">
                                    {activeItem.description}
                                </p>

                                {/* Tags */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {activeItem.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[10px] font-semibold !text-white/75 backdrop-blur-sm transition-colors hover:bg-white/[0.11] sm:text-[11px]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-6">
                                    <Link
                                        to="/contact"
                                        className="group inline-flex items-center gap-4 rounded-full bg-[#E9A93B] py-2.5 pl-6 pr-2.5 text-[13px] font-extrabold text-[#071E2C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2B542] hover:shadow-[0_15px_35px_rgba(233,169,59,0.24)] sm:pl-7 sm:text-[14px]"
                                    >
                                        Plan Your Wellness Journey

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#071E2C] text-[16px] text-white transition-all duration-300 group-hover:rotate-45">
                                            <FiArrowUpRight />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
                @keyframes wellnessProgress {
                    from {
                        width: 0%;
                    }

                    to {
                        width: 100%;
                    }
                }

                @keyframes wellnessImageIn {
                    from {
                        opacity: 0;
                        transform: scale(1.04);
                    }

                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes wellnessContentIn {
                    from {
                        opacity: 0;
                        transform: translateY(14px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default WellnessSection;
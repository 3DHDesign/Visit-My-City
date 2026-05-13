import { FiArrowUpRight } from "react-icons/fi";

type PrimaryButtonProps = {
  text?: string;
  href?: string;
  variant?: "dark" | "gold" | "glass";
};

const PrimaryButton = ({
  text = "Plan Your Trip",
  href = "#",
  variant = "dark",
}: PrimaryButtonProps) => {
  const variantClasses = {
    dark:
      "bg-[#0B1F33] text-white shadow-[0_8px_22px_rgba(11,31,51,0.20)] hover:bg-[#2D6A4F] hover:shadow-[0_12px_28px_rgba(45,106,79,0.22)]",

    gold:
      "bg-[#E9A93B] text-[#0B1F33] shadow-[0_10px_30px_rgba(233,169,59,0.28)] hover:bg-white hover:shadow-[0_14px_35px_rgba(255,255,255,0.22)]",

    glass:
      "border border-white/35 bg-white/10 text-white backdrop-blur-md shadow-[0_8px_24px_rgba(255,255,255,0.08)] hover:bg-white hover:text-[#0B1F33]",
  };

  const iconClasses = {
    dark: "bg-[#E9A93B] text-[#0B1F33]",
    gold: "bg-[#0B1F33] text-white",
    glass: "bg-[#E9A93B] text-[#0B1F33]",
  };

  return (
    <a
      href={href}
      className={`group inline-flex h-[44px] min-w-[155px] items-center justify-center gap-2 rounded-full px-5 text-[13.5px] font-semibold transition-all duration-300 ${variantClasses[variant]}`}
    >
      <span className="relative z-10 whitespace-nowrap">
        {text}
      </span>

      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${iconClasses[variant]}`}
      >
        <FiArrowUpRight size={14} />
      </span>
    </a>
  );
};

export default PrimaryButton;
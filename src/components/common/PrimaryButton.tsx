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
      "bg-[#0B1F33] !text-white shadow-[0_10px_26px_rgba(11,31,51,0.22)] hover:bg-[#2D6A4F]",
    gold:
      "bg-[#E9A93B] !text-[#0B1F33] shadow-[0_10px_28px_rgba(233,169,59,0.30)] hover:bg-[#0B1F33] hover:!text-white",
    glass:
      "border border-white/35 bg-white/10 !text-white backdrop-blur-md hover:bg-white hover:!text-[#0B1F33]",
  };

  const iconClasses = {
    dark: "bg-[#E9A93B] text-[#0B1F33]",
    gold: "bg-[#0B1F33] text-white group-hover:bg-[#E9A93B] group-hover:text-[#0B1F33]",
    glass: "bg-[#E9A93B] text-[#0B1F33]",
  };

  return (
    <a
      href={href}
      className={`group inline-flex h-[44px] min-w-[155px] items-center justify-center gap-2 rounded-full px-5 text-[13.5px] font-semibold transition-all duration-300 ${variantClasses[variant]}`}
    >
      <span className="relative z-10 whitespace-nowrap !text-inherit">
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
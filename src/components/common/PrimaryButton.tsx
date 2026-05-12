import { FiArrowUpRight } from "react-icons/fi";

type PrimaryButtonProps = {
  text?: string;
  href?: string;
};

const PrimaryButton = ({
  text = "Plan Your Trip",
  href = "#",
}: PrimaryButtonProps) => {
  return (
    <a
      href={href}
      className="group inline-flex h-[42px] min-w-[150px] items-center justify-center gap-2 rounded-full bg-[#0B1F33] px-5 text-[13.5px] font-semibold text-white shadow-[0_8px_22px_rgba(11,31,51,0.20)] transition-all duration-300 hover:bg-[#2D6A4F] hover:shadow-[0_12px_28px_rgba(45,106,79,0.22)]"
    >
      <span className="relative z-10 whitespace-nowrap text-white">
        {text}
      </span>

      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E9A93B] text-[#0B1F33] transition-transform duration-300 group-hover:rotate-45">
        <FiArrowUpRight size={14} />
      </span>
    </a>
  );
};

export default PrimaryButton;
interface AnimatedButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  gradientColors: {
    start: string;
    middle: string;
    end: string;
  };
  isMobile?: boolean;
}

export default function AnimatedButton({
  isActive,
  onClick,
  icon,
  label,
  gradientColors,
  isMobile = false
}: AnimatedButtonProps) {
  const buttonClasses = isMobile
    ? "flex flex-1 items-center justify-center gap-1.5 py-[11px] border-0 rounded-md md:rounded-lg relative overflow-hidden transition-all duration-300"
    : "flex-1 flex items-center justify-center gap-3 2xl:gap-2 h-14 2xl:h-11 rounded-xl 2xl:rounded-[10px] cursor-pointer text-white border-0 relative overflow-hidden";

  const iconClasses = isMobile
    ? "w-5 h-5 shrink-0 text-white relative z-10"
    : "w-6 h-6 2xl:w-5 2xl:h-5 relative z-10";

  const labelClasses = isMobile
    ? "text-white text-sm md:text-base lg:text-lg font-extrabold relative z-10"
    : "font-bold text-[18px] 2xl:text-[14px] text-white relative z-10";

  const gradient = `linear-gradient(180deg, ${gradientColors.start} 0%, ${gradientColors.middle} 50%, ${gradientColors.end} 100%)`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={buttonClasses}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          background: gradient,
          opacity: isActive ? 1 : 0
        }}
      />
      <div className={iconClasses}>
        {icon}
      </div>
      <span className={labelClasses}>
        {label}
      </span>
    </button>
  );
}

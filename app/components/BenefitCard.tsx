import Emoji from "./Emoji";

import React from "react";

interface BenefitCardProps {
  emoji: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  value?: React.ReactNode;
  boldTitle?: boolean;
  boldValue?: boolean;
  className?: string;
}

export default function BenefitCard({
  emoji,
  title,
  subtitle,
  value,
  boldTitle,
  boldValue,
  className = "",
}: BenefitCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 2xl:p-5 rounded-[12px] 2xl:rounded-[10px] text-center h-[146px] 2xl:h-[117px] w-full border border-transparent hover:border-[#72CAFF] transition-colors ${className}`}
      style={{
        background: "linear-gradient(180deg, #EAF7FF 0%, #D9F1FF 100%)",
      }}
    >
      <div className="mb-3 2xl:mb-2">
        <Emoji size={36} className="w-[30px] h-[30px] xl:w-[36px] xl:h-[36px] 2xl:w-[29px] 2xl:h-[29px]">{emoji}</Emoji>
      </div>
      <div className="flex flex-col items-center justify-center gap-0.5 2xl:gap-0.5">
        <span
          className={`text-[#155277] text-[16px] 2xl:text-[15px] leading-[120%] ${
            boldTitle ? "font-bold" : "font-normal"
          }`}
        >
          {title}
        </span>
        {(subtitle || value) && (
          <span
            className={`text-[#155277] text-[16px] 2xl:text-[15px] leading-[120%] ${
              boldValue ? "font-bold" : "font-normal"
            }`}
          >
            {subtitle || value}
          </span>
        )}
      </div>
    </div>
  );
}

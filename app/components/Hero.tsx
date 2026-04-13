"use client";

import Image from "next/image";
import Emoji from "./Emoji";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col xl:flex-row xl:justify-center xl:items-stretch items-start self-stretch pt-7.75 md:pt-12 lg:pt-16 xl:py-[60px] overflow-x-hidden xl:overflow-visible"
      style={{ backgroundColor: "#4BB5F6" }}
    >
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-stretch items-start w-full max-w-[1440px] 2xl:max-w-[1440px] mx-auto xl:gap-[30px] 2xl:gap-[16px] xl:px-16 2xl:px-13">
        {/* Ліва колонка — фото міста (тільки на десктопі xl+) */}
        <div className="hidden xl:flex xl:items-center xl:justify-center 2xl:flex-none">
          <Image
            src="/hero-main.webp"
            alt="Недвижимость в Алании - вид на море"
            width={1000}
            height={1000}
            priority
            className="w-[615px] 2xl:w-[625px] h-auto xl:h-full 2xl:h-full object-cover rounded-[16px] shadow-sm"
          />
        </div>

        {/* Права колонка — весь контент */}
        <div className="flex flex-col items-center xl:items-start xl:justify-center 2xl:justify-center xl:gap-3 2xl:gap-3 w-full xl:flex-1 2xl:flex-1 2xl:min-w-0 2xl:h-full overflow-visible">
          {/* ═══ МОБІЛЬНА + ПЛАНШЕТНА версія (xl:hidden) ═══ */}
          <div className="xl:hidden flex flex-col items-start w-full px-5 md:px-12 lg:px-16 pr-6 md:pr-12 lg:pr-16 mb-2.25">
            {/* Фото + прапор */}
            {/* <div className="relative w-full">
            <Image
              src="/hero-main.png"
              alt=""
              width={335}
              height={241}
              loading="eager"
              className="w-full h-auto object-cover rounded-[10px] shadow-[0px_4px_8px_0px_#0000001A] block"
            />
            <Image
              src="/hero-flag-image-mobile.png"
              alt=""
              width={283}
              height={197}
              className="absolute bottom-[-45px] right-[-50px] w-[215px] h-auto object-fill z-10 pointer-events-none"
            />
          </div> */}

            {/* Локація */}
            <span className="text-white text-base font-normal leading-[100%] flex items-center gap-1 mb-2.5">
              <Emoji size={16}>📍</Emoji> Алания, Турция
            </span>

            {/* Заголовок */}
            <h2 className="text-white text-[36px] font-bold uppercase leading-[105%] flex flex-col m-0 mb-3">
              <span>Недвижимость</span>
              <span>на первой линии</span>
              <span>с видом на море</span>
            </h2>
          </div>

          {/* ═══ Теги — МОБІЛЬНА + ПЛАНШЕТНА версія ═══ */}
          <div className="w-full xl:hidden">
            <div className="flex flex-col items-start mb-2.5 gap-2.5 w-full px-5 md:px-12 lg:px-16">
              {/* Рассрочка — перша */}
              <div
                className="flex items-center justify-center py-3 px-6 rounded-full border-0 h-auto w-fit"
                style={{ backgroundColor: "var(--color-white)" }}
              >
                <span
                  style={{ color: "var(--color-blue-primary)" }}
                  className="text-[16px] leading-[100%] whitespace-nowrap"
                >
                  <span className="font-bold">Рассрочка</span> на 30 месяцев
                </span>
              </div>
              {/* 30% + Доход — другий рядок */}
              <div className="flex items-center gap-2.5 w-full">
                <div className="flex items-center justify-center bg-transparent text-center py-3 px-4 rounded-full border border-solid border-white/50 h-auto hover:bg-white/10 transition-colors flex-1">
                  <span className="text-white text-[15px] leading-[100%] whitespace-nowrap">
                    <span className="font-bold">30%</span>
                    <span className="font-normal"> первый взнос</span>
                  </span>
                </div>
                <div className="flex items-center justify-center bg-transparent text-center py-3 px-4 rounded-full border border-solid border-white/50 h-auto hover:bg-white/10 transition-colors flex-1">
                  <span className="text-white text-[15px] leading-[100%] whitespace-nowrap">
                    <span className="font-bold">Доход</span>
                    <span className="font-normal"> от аренды</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ ДЕСКТОПНА версія — H1 + прапор (тільки xl+) ═══ */}
          <div className="hidden xl:flex flex-col mb-4 md:mb-6 xl:mb-1 relative w-full 2xl:w-auto mt-8 md:mt-2 xl:mt-0 md:items-start xl:items-start text-left 2xl:mx-0 overflow-visible">
            <span
              className="text-white text-[16px] lg:text-[18px] font-normal leading-[100%] whitespace-nowrap flex items-center gap-1.5 mb-4 opacity-90"
              style={{ fontFamily: "Gilroy" }}
            >
              <Emoji size={16} className="2xl:w-[18px] 2xl:h-[18px]">
                📍
              </Emoji>{" "}
              Алания, Турция
            </span>

            <h2
              className="text-white text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[48px] font-bold uppercase leading-[110%] xl:leading-[52px] 2xl:leading-[110%] flex flex-col whitespace-nowrap m-0 relative z-20"
              style={{ fontFamily: "Gilroy" }}
            >
              <span>НЕДВИЖИМОСТЬ</span>
              <span>НА ПЕРВОЙ ЛИНИИ</span>
              <span>С ВИДОМ НА МОРЕ</span>
            </h2>

            <Image
              src="/hero-flag-image.webp"
              alt="Турецький прапор"
              width={340}
              height={240}
              priority
              style={{ height: "auto" }}
              className="absolute -top-4 md:-top-6 xl:-top-8 2xl:-top-4 -right-4 md:-right-8 xl:-right-20 2xl:-right-[275px] w-[240px] md:w-[280px] lg:w-[300px] xl:w-[340px] 2xl:w-[300px] object-contain drop-shadow-2xl z-30 pointer-events-none"
            />
          </div>

          {/* ═══ Теги + LeadForm контейнер (2xl) ═══ */}
          <div className="contents">
            {/* ═══ Теги — ДЕСКТОПНА версія (тільки xl+) ═══ */}
            <div className="hidden xl:flex xl:flex-row items-start xl:items-center mb-4 xl:mb-1 2xl:mb-0 gap-4 lg:gap-5 xl:gap-4 2xl:gap-2 w-full 2xl:w-full 2xl:justify-self-start">
              {/* 30% первый взнос */}
              <div className="flex 2xl:flex-1 shrink-0 2xl:shrink items-center justify-center bg-transparent text-center py-2.5 2xl:py-2 px-6 2xl:px-7 rounded-full border border-solid border-white/50 xl:order-1 hover:bg-white/10 transition-colors">
                <span className="text-white text-sm xl:text-[15px] 2xl:text-[15px] leading-[100%] whitespace-nowrap">
                  <span className="font-bold">30%</span>
                  <span className="font-normal"> первый взнос</span>
                </span>
              </div>

              {/* Рассрочка */}
              <div
                className="flex 2xl:flex-1 items-center justify-center py-2.5 2xl:py-2 px-6 2xl:px-7 rounded-full border-0 shrink-0 2xl:shrink xl:order-2 shadow-sm pointer-events-none"
                style={{ backgroundColor: "var(--color-white)" }}
              >
                <span
                  style={{ color: "var(--color-blue-dark)" }}
                  className="text-sm xl:text-[15px] 2xl:text-[15px] leading-[100%] whitespace-nowrap"
                >
                  <span className="font-bold">Рассрочка</span> на 30 месяцев
                </span>
              </div>

              {/* Доход от аренды */}
              <div className="flex 2xl:flex-1 shrink-0 2xl:shrink items-center justify-center bg-transparent text-center py-2.5 2xl:py-2 px-6 2xl:px-7 rounded-full border border-solid border-white/50 xl:order-3 hover:bg-white/10 transition-colors">
                <span className="text-white text-sm xl:text-[15px] 2xl:text-[15px] leading-[100%] whitespace-nowrap">
                  <span className="font-bold">Доход</span>
                  <span className="font-normal"> от аренды</span>
                </span>
              </div>
            </div>

            {/* LeadForm */}
            <div className="w-full xl:w-auto 2xl:w-full 2xl:justify-self-start 2xl:h-full">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

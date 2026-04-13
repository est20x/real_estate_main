"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>

      {/* Dark overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div className={`flex flex-row items-center lg:justify-between justify-between py-2 px-2 pr-4 md:py-6 md:px-8 lg:py-3 lg:px-12 xl:px-[80px] 2xl:px-[64px] z-50 box-border sticky lg:relative top-0 left-0 right-0 self-stretch`} style={{ backgroundColor: "#36A3E5" }}>

        {/* Logo - показується на всіх розмірах */}
        <div className="lg:mr-6 lg:-ml-2">
          <Logo />
        </div>

        {/* Mobile: Кнопка зв’язку */}
        <a
          href="#contact-form"
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden bg-white text-[#4BB5F6] text-[13px] font-semibold py-[8px] px-4 rounded-[4px] border-0 cursor-pointer hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap no-underline ml-auto mr-3"
        >
          Связаться
        </a>

        {/* Mobile menu button (shown on right via justify-end) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-[4px] w-[22.19px] md:w-[26px] border-0 bg-transparent p-0 cursor-pointer lg:hidden"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <div
            className={`w-full h-[3px] md:h-[3.5px] bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[7px] md:translate-y-[8px]" : ""
            }`}
          ></div>
          <div
            className={`w-full h-[3px] md:h-[3.5px] bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-full h-[3px] md:h-[3.5px] bg-white rounded-full transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[7px] md:-translate-y-[8px]" : ""
            }`}
          ></div>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-6 w-full justify-start">
          <a href="#hero" className="flex items-center justify-center text-white text-[15px] 2xl:text-[15px] font-medium transition-colors py-2 px-4 xl:px-6 2xl:py-1.5 2xl:px-5 rounded-[4px] border border-solid border-white bg-[#FFFFFF33] hover:bg-white hover:text-[#4BB5F6] no-underline">
            Главная
          </a>
          <a href="#why-alanya" className="text-white text-[15px] 2xl:text-[15px] font-medium hover:text-[#FFE643] transition-colors no-underline">
            Почему Алания
          </a>
          <a href="#lifestyle" className="text-white text-[15px] 2xl:text-[15px] font-medium hover:text-[#FFE643] transition-colors no-underline">
            Про нас
          </a>
          <a href="#contact-form" className="text-white text-[15px] 2xl:text-[15px] font-medium hover:text-[#FFE643] transition-colors no-underline">
            Стать владельцем недвижимости
          </a>
        </nav>

        {/* Desktop Button */}
        <a href="#contact-form" className="hidden lg:flex lg:items-center lg:justify-center bg-white text-[#4BB5F6] text-[15px] 2xl:text-[15px] font-medium py-[10px] px-8 2xl:py-[8px] 2xl:px-6 rounded-[4px] border-0 cursor-pointer hover:bg-gray-100 transition-colors ml-auto shadow-sm whitespace-nowrap no-underline">
          Подробнее
        </a>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed left-0 right-0 top-0 bg-[color:var(--color-blue-accent)] transition-all duration-300 overflow-hidden z-50 lg:hidden ${
          isMenuOpen ? "h-[515px] md:h-[400px]" : "h-0"
        }`}
      >
        <nav className="flex flex-col items-start pt-16 md:pt-20 px-5 md:px-8 gap-8 md:gap-10">
          <a href="#hero" onClick={() => setIsMenuOpen(false)} className="text-white text-lg md:text-xl font-medium leading-[100%]">
            Главная
          </a>
          <a href="#why-alanya" onClick={() => setIsMenuOpen(false)} className="text-white text-lg md:text-xl font-medium leading-[100%]">
            Почему Аланья
          </a>
          <a href="#lifestyle" onClick={() => setIsMenuOpen(false)} className="text-white text-lg md:text-xl font-medium leading-[100%]">
            Про нас
          </a>
          <a href="#contact-form" onClick={() => setIsMenuOpen(false)} className="text-white text-lg md:text-xl font-medium leading-[100%]">
            Стать владельцем недвижимости
          </a>
        </nav>
      </div>
    </>
  );
}

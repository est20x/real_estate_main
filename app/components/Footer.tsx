export default function Footer() {
  return (
    <footer className="w-full bg-[#011B2A] text-white py-8 px-5 lg:px-20 2xl:px-[160px] lg:py-[30px] 2xl:py-[24px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
      {/* Навігаційні посилання */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[15px] lg:gap-14 2xl:gap-[102px]">
        <a href="#hero" className="text-sm 2xl:text-[16px] font-light hover:text-[#FFE643] cursor-pointer transition-colors text-left bg-transparent border-0 text-white no-underline">Главная</a>
        <a href="#why-alanya" className="text-sm 2xl:text-[16px] font-light hover:text-[#FFE643] cursor-pointer transition-colors text-left bg-transparent border-0 text-white no-underline">Почему Алания</a>
        <a href="#lifestyle" className="text-sm 2xl:text-[16px] font-light hover:text-[#FFE643] cursor-pointer transition-colors text-left bg-transparent border-0 text-white no-underline">Про нас</a>
        <a href="#contact-form" className="text-sm 2xl:text-[16px] font-light hover:text-[#FFE643] cursor-pointer transition-colors text-left bg-transparent border-0 text-white no-underline">Стать владельцем недвижимости</a>
      </div>
      {/* Права частина */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6">
        <div className="text-[13px] 2xl:text-[14px] font-light text-white/40 lg:text-white/50">
          Copyright 2026
        </div>
        <a href="https://t.me/est20x" target="_blank" rel="noopener noreferrer" className="text-[13px] 2xl:text-[14px] font-light text-white/40 hover:text-white transition-colors no-underline">Developed by <span className="text-white">NEXEL</span></a>
      </div>
    </footer>
  );
}

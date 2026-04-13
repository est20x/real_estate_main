import Image from "next/image";
import Emoji from "./Emoji";
import BenefitCard from "./BenefitCard";

export default function WhyAlanya() {
  return (
    <div id="why-alanya" className="flex flex-col items-center self-stretch overflow-hidden">
      {/* Мобільна версія */}
      <div className="lg:hidden flex flex-col items-center self-stretch px-5 md:px-8 overflow-hidden">
        <span className="text-[26px] md:text-3xl font-bold leading-[100%] text-center mb-0.5 md:mb-2 mt-10 md:mt-16 text-black uppercase">
          Почему инвесторы
        </span>
        <div className="flex flex-col items-center justify-center mb-4.5 md:mb-8 rounded-[3.64px] md:rounded-[5px] bg-(--color-blue-primary) px-4 md:px-12 py-2 md:py-3">
          <span className="text-[26px] md:text-3xl font-bold leading-[100%] text-center text-white uppercase">
            выбирают Аланию
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 md:gap-4 self-stretch">
          <Image
            src="/л2 1.webp"
            alt=""
            width={162}
            height={131}
            style={{ height: "auto" }}
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/л2 2.webp"
            alt=""
            width={162}
            height={131}
            style={{ height: "auto" }}
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/л2 3.webp"
            alt=""
            width={162}
            height={131}
            style={{ height: "auto" }}
            className="w-full object-cover rounded-lg"
          />
          <Image
            src="/л2 4.webp"
            alt=""
            width={162}
            height={131}
            style={{ height: "auto" }}
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Планшетна та Десктопна версія */}
      <div className="hidden lg:flex flex-col items-center self-stretch px-8 lg:px-12 xl:px-16 2xl:px-13 pt-12 lg:pt-16 xl:pt-20 2xl:pt-16 pb-12 lg:pb-16 xl:pb-20 2xl:pb-16 max-w-[1440px] 2xl:max-w-[1440px] mx-auto w-full">
        {/* Заголовок */}
        <div className="flex items-center justify-center gap-2 lg:gap-4 2xl:gap-3 mb-10 lg:mb-12 xl:mb-16 2xl:mb-13">
          <h2 className="text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[34px] font-bold leading-none text-black uppercase m-0 tracking-tight">
            Почему инвесторы
          </h2>
          <div className="bg-[#155277] px-4 lg:px-6 2xl:px-5 py-2 lg:py-3 2xl:py-2 rounded-[8px] xl:rounded-[10px] 2xl:rounded-[8px]">
            <span className="text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[34px] font-bold leading-none text-white uppercase tracking-tight">
              ВЫБИРАЮТ АЛАНИЮ
            </span>
          </div>
        </div>

        {/* Галерея зображень */}
        <div className="flex flex-col gap-4 lg:gap-5 xl:gap-[26px] 2xl:gap-[21px] w-full mb-10 lg:mb-12 xl:mb-16 2xl:mb-13">
          {/* Верхній ряд (2 великих) */}
          <div className="grid grid-cols-2 gap-4 lg:gap-5 xl:gap-[26px] 2xl:gap-[21px] w-full">
            <div className="relative h-[200px] lg:h-[260px] xl:h-[326px] 2xl:h-[261px] w-full overflow-hidden rounded-[16px] xl:rounded-[20px] 2xl:rounded-[16px]">
              <Image
                src="/фото3 1-desktop.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 50vw, 900px"
              />
            </div>
            <div className="relative h-[200px] lg:h-[260px] xl:h-[326px] 2xl:h-[261px] w-full overflow-hidden rounded-[16px] xl:rounded-[20px] 2xl:rounded-[16px]">
              <Image
                src="/л2 1.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 50vw, 900px"
              />
            </div>
          </div>
          {/* Нижній ряд (3 середніх) */}
          <div className="grid grid-cols-3 gap-4 lg:gap-5 xl:gap-[26px] 2xl:gap-[21px] w-full">
            <div className="relative h-[160px] lg:h-[210px] xl:h-[268px] 2xl:h-[214px] w-full overflow-hidden rounded-[16px] xl:rounded-[20px] 2xl:rounded-[16px]">
              <Image
                src="/л2 2.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 33vw, 600px"
              />
            </div>
            <div className="relative h-[160px] lg:h-[210px] xl:h-[268px] 2xl:h-[214px] w-full overflow-hidden rounded-[16px] xl:rounded-[20px] 2xl:rounded-[16px]">
              <Image
                src="/л2 3.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 33vw, 600px"
              />
            </div>
            <div className="relative h-[160px] lg:h-[210px] xl:h-[268px] 2xl:h-[214px] w-full overflow-hidden rounded-[16px] xl:rounded-[20px] 2xl:rounded-[16px]">
              <Image
                src="/л2 4.webp"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1440px) 33vw, 600px"
              />
            </div>
          </div>
        </div>

        {/* Сітка переваг */}
        <div className="flex flex-col gap-4 lg:gap-5 w-full mb-12">
          {/* Перший ряд (4 картки) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full">
            <BenefitCard
              emoji="💰"
              title="Пассивный доход"
              value="до $20,000 в год"
              boldValue
            />
            <BenefitCard emoji="💶" title="Цены от" value="€240,000" boldValue />
            <BenefitCard
              emoji="📄"
              title={<><span className="font-bold">Лицензия</span> на</>}
              subtitle="краткосрочную аренду"
            />
            <BenefitCard
              emoji="🏝️"
              title="Первая береговая линия"
              subtitle="(премиум-сегмент)"
              boldTitle
            />
          </div>
          <div className="hidden lg:grid grid-cols-4 gap-4 lg:gap-5 w-full">
            <div className="col-span-4 flex flex-row items-stretch justify-center gap-4 lg:gap-5">
              <div className="flex-1">
                <BenefitCard
                  emoji="🔥"
                  title="Высокий спрос"
                  subtitle="на аренду круглый год"
                  boldTitle
                  className="h-full"
                />
              </div>
              <div className="w-[calc(25%-12px)] lg:w-[calc(30%-15px)] xl:w-[calc(30%-15px)] 2xl:w-[calc(30%-15px)]">
                <BenefitCard
                  emoji="⏳"
                  title="Рассрочка:"
                  value="30% первый взнос + 30 месяцев"
                  boldValue
                  className="h-full"
                />
              </div>
              <div className="flex-1">
                <BenefitCard
                  emoji="🚀"
                  title={<><span className="font-bold">Рост стоимости</span> на этапе</>}
                  subtitle="строительства"
                  className="h-full"
                />
              </div>
            </div>
          </div>
          {/* Мобільна/Планшетна версія другого ряду (звичайна сітка) */}
          <div className="grid lg:hidden grid-cols-2 gap-4 w-full">
             <BenefitCard
                  emoji="🔥"
                  title="Высокий спрос"
                  subtitle="на аренду круглый год"
                  boldTitle
                />
             <BenefitCard
                  emoji="⏳"
                  title="Рассрочка:"
                  value="30% первый взнос + 30 месяцев"
                  boldValue
                />
             <BenefitCard
                  emoji="🚀"
                  title={<><span className="font-bold">Рост стоимости</span> на этапе</>}
                  subtitle="строительства"
                />
          </div>
        </div>

        {/* Кнопка */}
        <a
          href="#contact-form"
          className="flex flex-col items-center justify-center w-full max-w-[480px] 2xl:max-w-[600px] h-[64px] lg:h-[72px] 2xl:h-[84px] text-center py-4 px-8 rounded-[12px] border-0 cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-95 no-underline"
          style={{
            background:
              "linear-gradient(90deg, #FFE643 0%, #FFEE7D 51.92%, #FFE643 100%)",
          }}
        >
          <span className="text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[28px] font-bold text-[#453e0c] tracking-tight">
            Получить расчёт доходности
          </span>
        </a>
      </div>
    </div>
  );
}

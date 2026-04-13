"use client";
import Image from "next/image";

export default function LeadForm() {
  return (
    <div className="self-stretch xl:flex xl:justify-center 2xl:justify-start 2xl:flex 2xl:w-full 2xl:max-w-none 2xl:h-full">
      {/* Мобільна версія wrapper - px-5 замість mx-5 */}
      <div className="xl:hidden w-full px-5 pb-0">
        <div
          className="flex flex-col items-start w-full h-75 bg-(--color-blue-light) relative pt-2 mb-16.75 rounded-[10px] overflow-hidden shadow-[0px_4px_8px_0px_#0000001A]"
          style={{
            backgroundImage: "url(/leadform-bg.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Градієнт overlay - тільки мобілка */}
          <div
            className="absolute inset-0 z-1"
            style={{
              background: `
                radial-gradient(ellipse 100% 60% at 0% 0%, rgba(114, 202, 255, 1) 0%, rgba(114, 202, 255, 0.6) 40%, rgba(114, 202, 255, 0) 70%),
                radial-gradient(ellipse 20% 30% at 60% 0%, rgba(114, 202, 255, 0.8) 0%, rgba(114, 202, 255, 0.4) 50%, rgba(114, 202, 255, 0) 100%)
              `,
            }}
          ></div>

          {/* Ліва частина - текст, стрілка, кнопка */}
          <div
            className="flex flex-col items-start self-stretch bg-cover bg-center py-3.25 pr-5 rounded-[10px] relative z-10"
            style={{
              backgroundImage: "url(/leadform-primary.webp)",
            }}
          >
            <span className="text-base leading-[100%] mb-1.25 ml-5 font-normal text-white max-w-[calc(100%-20px)] h-4.75">
              Получить подборку квартир
            </span>
            <div className="flex items-center w-fit h-7.5 py-1 px-1.5 mb-3.5 ml-5 gap-2 rounded-[3.91px] bg-[#FFFFFF40]">
              <div className="flex items-center justify-center shrink-0 relative w-5 h-5">
                <span className="text-[17.69px] font-semibold leading-[100%] text-center text-(--color-blue-primary) relative z-10">
                  +
                </span>
                <div className="w-5 h-5 absolute top-0 left-0 rounded-full border-[0.88px] border-solid bg-white border-(--color-blue-primary)"></div>
              </div>
              <span className="text-base font-semibold leading-[100%] text-white">
                расчёт доходности
              </span>
            </div>
            <Image
              src="/vector.svg"
              width={56}
              height={124}
              alt=""
              priority
              className="w-14 h-31 mb-2.5 ml-3.75 rounded-[10px] object-fill"
            />
            <a
              href="#contact-form"
              className="flex flex-col items-center justify-center w-[calc(100%-20px)] h-[51.58px] text-center py-3.25 ml-5 rounded-[10px] border-0 cursor-pointer no-underline"
              style={{
                background:
                  "linear-gradient(90deg, #FFE643 0%, #FFEE7D 51.92%, #FFE643 100%)",
              }}
            >
              <span className="text-xl font-extrabold text-(--color-yellow-dark)">
                Получить подборку
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Десктопна версія */}
      <div
        className="hidden xl:flex flex-row items-start 2xl:items-center w-[679px] 2xl:w-full h-[187px] 2xl:h-full relative shadow-[0px_4px_8px_0px_#0000001A]"
        style={{
          backgroundColor: "#72CAFF",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Wrapper для фонів з overflow hidden */}
        <div
          className="absolute inset-0"
          style={{
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          {/* Фон з хмарами - нижній шар */}
          <div
            className="absolute top-0 right-0 h-full w-[400px] 2xl:w-[400px] z-0 pointer-events-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 40%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            }}
          >
            <Image
              src="/leadform-bg-desktop.webp"
              width={400}
              height={187}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: "right center" }}
            />
          </div>

          {/* Фон з пагорбом - верхній шар */}
          <div
            className="absolute top-0 right-0 h-full w-[400px] 2xl:w-[400px] z-1 pointer-events-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 40%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            }}
          >
            <Image
              src="/leadform-primary-desktop.webp"
              width={400}
              height={187}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: "right center" }}
            />
          </div>
        </div>

        {/* Лівий блок - контент з прозорим фоном */}
        <div className="flex flex-row items-start justify-start h-full py-4 2xl:py-4 pr-4 2xl:pr-4 pl-6 2xl:pl-6 relative z-10 pointer-events-auto">
          {/* Текстовий блок */}
          <div className="flex flex-col items-start 2xl:mt-0">
            <span
              className="text-[20px] 2xl:text-[20px] leading-[100%] font-normal text-white mb-1.5 2xl:mb-1.5"
              style={{ fontFamily: "Gilroy" }}
            >
              Получить подборку квартир
            </span>
            <div className="flex items-center py-0.5 2xl:py-0.5 px-1.5 2xl:px-1.5 mb-8 2xl:mb-8 gap-1.5 2xl:gap-1.5 rounded-[3.91px] 2xl:rounded-[3.91px] bg-[#FFFFFF40]">
              <div className="flex items-center justify-center shrink-0 relative w-4 2xl:w-4 h-4 2xl:h-4">
                <span className="text-sm 2xl:text-sm font-semibold leading-[100%] text-center text-(--color-blue-primary) relative z-10">
                  +
                </span>
                <div className="w-4 2xl:w-4 h-4 2xl:h-4 absolute top-0 left-0 rounded-full border-[0.88px] 2xl:border-[0.88px] border-solid bg-white border-(--color-blue-primary)"></div>
              </div>
              <span
                className="text-[20px] 2xl:text-[20px] font-semibold leading-[100%] text-white"
                style={{ fontFamily: "Gilroy" }}
              >
                расчёт доходности
              </span>
            </div>
            <a
              href="#contact-form"
              className="flex flex-col items-center justify-center w-[280px] 2xl:w-[280px] h-[52px] 2xl:h-[52px] text-center py-3 2xl:py-3 px-6 2xl:px-6 rounded-[10px] 2xl:rounded-[10px] border-0 cursor-pointer no-underline"
              style={{
                background:
                  "linear-gradient(90deg, #FFE643 0%, #FFEE7D 51.92%, #FFE643 100%)",
              }}
            >
              <span className="text-lg 2xl:text-lg font-extrabold text-(--color-yellow-dark)">
                Получить подборку
              </span>
            </a>
          </div>

          {/* Стрілка */}
          <Image
            src="/Vector 1-desktop.webp"
            width={29}
            height={73}
            alt=""
            priority
            className="w-[29px] 2xl:w-[29px] h-[73px] 2xl:h-[73px] object-fill -ml-4 2xl:-ml-4"
          />
        </div>
      </div>
    </div>
  );
}

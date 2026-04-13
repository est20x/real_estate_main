"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { detectCountry } from '../lib/countryDetection';
import AnimatedButton from './AnimatedButton';

export default function ContactForm() {
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "telegram">(
    "whatsapp",
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("tr");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    detectCountry('tr').then((code) => {
      setCountryCode(code);
    });
  }, []);

  const handleCountryChange = (code: string) => {
    setCountryCode(code);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: phone,
          contactMethod: contactMethod === "whatsapp" ? "WhatsApp" : "Telegram",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setPhone("");
        toast.success("Успех! Ваша заявка отправлена.");
      } else {
        setSubmitStatus("error");
        toast.error("Ошибка отправки. Попробуйте еще раз.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      toast.error("Ошибка отправки. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-form" className="self-stretch">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Мобільна версія */}
      <div
        className="xl:hidden self-stretch bg-[url('/fantastic-seascape-with-ripples-depositphotos-bgremover%201.webp')] bg-cover py-[74px] md:py-20 lg:py-24 px-5 md:px-8 lg:px-12"
        style={{ backgroundPosition: "calc(50% + 5px) center" }}
      >
        <div className="flex flex-col self-stretch md:max-w-[600px] lg:max-w-[700px] md:mx-auto py-7 md:py-10 lg:py-12 px-5 md:px-8 lg:px-10 rounded-[15px] md:rounded-[20px] bg-[#011b2ae6]">
          <div className="flex flex-col items-start self-stretch pb-[21px] md:pb-6 lg:pb-8 relative">
            <span className="text-white text-[26px] md:text-3xl lg:text-4xl font-bold uppercase leading-[115%]">
              <span>Станьте владельцем</span>
              <br />
              <span className="text-[color:var(--color-blue-highlight)]">
                недвижимости
              </span>
              <br />
              <span className="text-[color:var(--color-blue-highlight)]">у моря</span>
            </span>
            <Image
              src="/image 7 2.webp"
              alt="Вид на море з балкону"
              width={89}
              height={121}
              className="w-[89px] md:w-[100px] lg:w-[110px] h-[121px] md:h-[136px] lg:h-[150px] rounded-[15px] object-fill absolute bottom-0 right-0"
            />
            <span className="text-white text-base md:text-lg lg:text-xl font-light mt-2 max-w-[calc(100%-100px)]">
              <span className="whitespace-nowrap">от компании застройщиков</span>{" "}
              <span className="font-bold whitespace-nowrap">с 40-летним опытом</span>
            </span>
          </div>
          <div className="flex flex-col items-start self-stretch bg-[#ffffff08] backdrop-blur-[2px] py-3 md:py-4 lg:py-5 pl-[19px] md:pl-6 lg:pl-8 pr-[19px] md:pr-6 lg:pr-8 mb-[30px] md:mb-8 lg:mb-10 rounded-[10px] md:rounded-[12px] border border-[#ffffff20] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] relative overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_100%)] pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-start self-stretch">
              <span className="text-white text-[17px] md:text-xl lg:text-2xl font-extrabold mb-[18px] md:mb-5 lg:mb-6">
                Оставьте заявку и получите:
              </span>
              <div className="flex flex-col w-full">
                <div className="flex items-start gap-2 mb-3">
                  <svg
                    className="w-[13px] h-[13px] mt-1 shrink-0"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M2 6.5L5.5 10L11 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[13px] font-light ">
                    подборку квартир{" "}
                    <span className="font-bold">под ваш бюджет</span>
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)] opacity-20 mb-3"></div>

                <div className="flex flex-row items-stretch gap-0">
                  <div className="flex-1 flex items-start gap-2">
                    <svg
                      className="w-[13px] h-[13px] mt-1 shrink-0"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M2 6.5L5.5 10L11 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white text-[13px] font-light">
                      <span className="font-bold">расчёт</span> доходности
                    </span>
                  </div>

                  <div className="w-[1px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)] opacity-20 mx-3"></div>

                  <div className="flex-1 flex items-start gap-2">
                    <svg
                      className="w-[13px] h-[13px] mt-1 shrink-0"
                      viewBox="0 0 13 13"
                      fill="none"
                    >
                      <path
                        d="M2 6.5L5.5 10L11 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-white text-[13px] font-light">
                      <span className="font-bold">актуальные</span> цены
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-[50px] md:h-[55px] lg:h-[60px] px-5 md:px-6 lg:px-7 mb-3 md:mb-4 lg:mb-5 rounded-[10px] md:rounded-[12px] bg-white text-black text-base md:text-lg lg:text-xl focus:outline-none placeholder:text-gray-400"
              aria-label="Ваше имя"
              required
            />
            <div className="flex w-full gap-3 md:gap-4 lg:gap-5 mb-[30px] md:mb-8 lg:mb-10 h-[50px] md:h-[55px] lg:h-[60px] relative z-[100]">
              <PhoneInput
                key={countryCode}
                country={countryCode}
                value={phone}
                onChange={handlePhoneChange}
                inputClass="!w-full !h-full !pl-[60px] md:!pl-[65px] lg:!pl-[70px] !pr-5 md:!pr-6 lg:!pr-7 !rounded-[10px] md:!rounded-[12px] !bg-white !text-black !text-base md:!text-lg lg:!text-xl !border-0"
                buttonClass="!h-full !rounded-l-[10px] md:!rounded-l-[12px] !bg-white !border-0"
                containerClass="!w-full !h-full"
                dropdownClass="!bg-white !text-black"
                inputProps={{
                  'aria-label': 'Номер телефона',
                  'required': true
                }}
              />
            </div>
            <div className="flex flex-col items-start self-stretch mb-[18px] md:mb-5 lg:mb-6 gap-[7px] md:gap-2.5 lg:gap-3 relative z-10">
              <span className="text-white text-lg md:text-xl lg:text-2xl font-semiboldbold ">
                Как с вами связаться:
              </span>
              <div className="flex items-center self-stretch gap-0 rounded-md md:rounded-lg bg-[#FFFFFF1A] overflow-hidden">
                <AnimatedButton
                  isActive={contactMethod === "whatsapp"}
                  onClick={() => setContactMethod("whatsapp")}
                  icon={
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  }
                  label="WhatsApp"
                  gradientColors={{
                    start: "#25D366",
                    middle: "#34E87E",
                    end: "#25D366"
                  }}
                  isMobile={true}
                />
                <AnimatedButton
                  isActive={contactMethod === "telegram"}
                  onClick={() => setContactMethod("telegram")}
                  icon={
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.308.02.475z" />
                    </svg>
                  }
                  label="Telegram"
                  gradientColors={{
                    start: "#35ACE1",
                    middle: "#61CEFF",
                    end: "#35ACE1"
                  }}
                  isMobile={true}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex flex-col items-center self-stretch py-[17px] rounded-[10px] md:rounded-[12px] border-0 bg-[linear-gradient(90deg,#FFE643_0%,#FFEE7D_51.92%,#FFE643_100%)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-[17px] md:text-xl lg:text-2xl font-bold leading-[100%] text-center text-[#453E0C]">
                {isSubmitting ? "Отправка..." : "Получить подборку"}
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Десктопна та Планшетна версія (md, lg, xl) */}
      <div
        className="hidden xl:flex flex-col items-center self-stretch bg-[url('/fantastic-seascape-with-ripples-depositphotos-bgremover%201.webp')] bg-cover py-12 lg:py-16 xl:py-24 2xl:py-19 px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-13 relative"
        style={{ backgroundPosition: "50% 80%" }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a40] z-0"></div>

        <div className="flex flex-row w-full max-w-[1440px] 2xl:max-w-[1100px] bg-[#011B2AE6] rounded-[24px] xl:rounded-[40px] 2xl:rounded-[32px] overflow-hidden border border-[#ffffff20] relative z-10">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between p-8 md:p-8 lg:p-12 xl:p-20 2xl:p-16 xl:pr-10 2xl:pr-8">
            <div className="mb-8 md:mb-10 xl:mb-0">
              <h2 className="text-white text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[38px] font-bold leading-[110%] uppercase mb-4 md:mb-6 2xl:mb-5 max-w-[550px] 2xl:max-w-[440px]">
                Станьте владельцем <br />
                <span className="text-[#82D3FF]">недвижимости</span> <br />
                <span className="text-[#82D3FF]">у моря</span>
              </h2>
              <p className="text-white text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[20px] font-light max-w-[500px] 2xl:max-w-[400px] 2xl:pb-4 xl:pb-4">
                от компании застройщиков{" "}
                <br className="hidden 2xl:block xl:block" />
                <span className="font-bold">с 40-летним опытом</span>
              </p>
            </div>

            {/* Points Block Wrapper */}
            <div className="relative">
              {/* Tower Image */}
              <div className="absolute bottom-full right-[0%] z-20">
                <Image
                  src="/башня-desktop.webp"
                  alt="Башня в Алании"
                  width={250}
                  height={370}
                  className="w-[clamp(90px,13vw,165px)] 2xl:w-[132px] h-auto object-contain object-bottom translate-y-[2px]"
                />
              </div>

              {/* Points Block */}
              <div className="bg-[#ffffff08] backdrop-blur-[2px] border border-[#ffffff20] rounded-[20px] 2xl:rounded-[16px] p-6 lg:p-8 2xl:p-6 flex flex-col gap-4 lg:gap-6 2xl:gap-5 relative z-10 overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_100%)] pointer-events-none"></div>
                <span className="text-white text-[18px] lg:text-[22px] 2xl:text-[18px] font-bold relative z-10 ml-0 inline-block">
                  Оставьте заявку и получите:
                </span>
                <div className="flex flex-row items-stretch justify-center gap-2 md:gap-4 lg:gap-6 2xl:gap-10 relative z-10 w-full">
                  <IconPoint text="цены" boldText="актуальные" boldFirst={true} />
                  <div className="w-[1px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)] opacity-40"></div>
                  <IconPoint
                    text="подборку квартир"
                    boldText="под ваш бюджет"
                    boldFirst={false}
                  />
                  <div className="w-[1px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_50%,rgba(255,255,255,0)_100%)] opacity-40"></div>
                  <IconPoint text="доходности" boldText="расчёт" boldFirst={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-[360px] md:w-[380px] lg:w-[450px] xl:w-[520px] 2xl:w-[450px] flex flex-col justify-end p-8 md:p-8 lg:p-12 xl:p-20 2xl:p-16 pl-0 md:pl-0 lg:pl-0 xl:pl-0 2xl:pl-0 relative z-10">
            <form onSubmit={handleSubmit}>
              <div className="bg-[#ffffff0a] backdrop-blur-[2px] border border-[#ffffff20] rounded-[24px] xl:rounded-[30px] 2xl:rounded-[24px] p-6 md:p-6 lg:p-8 xl:p-10 2xl:p-8 flex flex-col gap-6 xl:gap-8 2xl:gap-6 relative overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_100%)] pointer-events-none"></div>

                <div className="flex flex-col gap-4 2xl:gap-3 relative z-30">
                  <input
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-14 2xl:h-11 px-6 2xl:px-5 rounded-[12px] 2xl:rounded-[10px] bg-white text-black text-[18px] 2xl:text-[14px] focus:outline-none placeholder:text-gray-400"
                    aria-label="Ваше имя"
                    required
                  />
                  <PhoneInput
                    country={countryCode}
                    value={phone}
                    onChange={handlePhoneChange}
                    inputClass="!w-full !h-14 2xl:!h-11 !pl-[60px] 2xl:!pl-[55px] !pr-6 2xl:!pr-5 !rounded-[12px] 2xl:!rounded-[10px] !bg-white !text-black !text-[18px] 2xl:!text-[14px] !border-0"
                    buttonClass="!h-14 2xl:!h-11 !rounded-l-[12px] 2xl:!rounded-l-[10px] !bg-white !border-0"
                    containerClass="!w-full !h-14 2xl:!h-11"
                    dropdownClass="!bg-white !text-black !z-[9999]"
                    inputProps={{
                      'aria-label': 'Номер телефона',
                      'required': true
                    }}
                  />
                </div>

                <div className="flex flex-col gap-4 2xl:gap-3 relative z-10 w-full mb-2 2xl:mb-1">
                  <span className="text-white text-[18px] 2xl:text-[14px] font-bold">
                    Как с вами связаться:
                  </span>
                  <div className="flex items-stretch self-stretch rounded-xl 2xl:rounded-[10px] border-x-[1px] border-y-[1px] border-[#ffffff40] bg-[#FFFFFF0A] overflow-hidden">
                    <AnimatedButton
                      isActive={contactMethod === "whatsapp"}
                      onClick={() => setContactMethod("whatsapp")}
                      icon={
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      }
                      label="WhatsApp"
                      gradientColors={{
                        start: "#25D366",
                        middle: "#34E87E",
                        end: "#25D366"
                      }}
                      isMobile={false}
                    />
                    <AnimatedButton
                      isActive={contactMethod === "telegram"}
                      onClick={() => setContactMethod("telegram")}
                      icon={
                        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.308.02.475z" />
                        </svg>
                      }
                      label="Telegram"
                      gradientColors={{
                        start: "#35ACE1",
                        middle: "#61CEFF",
                        end: "#35ACE1"
                      }}
                      isMobile={false}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-16 2xl:h-13 bg-[linear-gradient(90deg,#FFE643_0%,#FFEE7D_51.92%,#FFE643_100%)] rounded-[15px] 2xl:rounded-[12px] border-0 shadow-lg cursor-pointer hover:brightness-105 active:scale-[0.98] transition-all relative z-10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <span className="text-[#453E0C] text-[20px] 2xl:text-[16px] font-bold whitespace-nowrap">
                    {isSubmitting ? "Отправка..." : "Получить подборку"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconPoint({ text, boldText, boldFirst = false }: { text: string; boldText?: string; boldFirst?: boolean }) {
  return (
    <div className="flex flex-col items-center xl:items-start justify-center text-center xl:text-left px-1">
      <div className="w-7 h-7 2xl:w-6 2xl:h-6 flex items-center justify-center mb-2 2xl:mb-1">
        <svg className="w-full h-full" viewBox="0 0 13 13" fill="none">
          <path
            d="M2 6.5L5.5 10L11 3"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-white text-[18px] md:text-[20px] 2xl:text-[16px] leading-[110%] font-light flex flex-col items-center xl:items-start">
        {boldFirst ? (
          <>
            {boldText && <span className="font-bold whitespace-nowrap">{boldText}</span>}
            <span className="whitespace-nowrap">{text}</span>
          </>
        ) : (
          <>
            <span className="whitespace-nowrap">{text}</span>
            {boldText && <span className="font-bold whitespace-nowrap">{boldText}</span>}
          </>
        )}
      </span>
    </div>
  );
}

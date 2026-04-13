import PhoneInput from 'react-phone-input-2';

interface FormFieldsProps {
  name: string;
  phone: string;
  countryCode: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  isMobile?: boolean;
}

export default function FormFields({
  name,
  phone,
  countryCode,
  onNameChange,
  onPhoneChange,
  isMobile = false
}: FormFieldsProps) {
  const inputClasses = isMobile
    ? "w-full h-[50px] md:h-[55px] lg:h-[60px] px-5 md:px-6 lg:px-7 mb-3 md:mb-4 lg:mb-5 rounded-[10px] md:rounded-[12px] bg-white text-black text-base md:text-lg lg:text-xl focus:outline-none placeholder:text-gray-400"
    : "w-full h-14 2xl:h-11 px-6 2xl:px-5 rounded-[12px] 2xl:rounded-[10px] bg-white text-black text-[18px] 2xl:text-[14px] focus:outline-none placeholder:text-gray-400";

  const phoneInputClass = isMobile
    ? "!w-full !h-full !pl-[60px] md:!pl-[65px] lg:!pl-[70px] !pr-5 md:!pr-6 lg:!pr-7 !rounded-[10px] md:!rounded-[12px] !bg-white !text-black !text-base md:!text-lg lg:!text-xl !border-0"
    : "!w-full !h-14 2xl:!h-11 !pl-[60px] 2xl:!pl-[55px] !pr-6 2xl:!pr-5 !rounded-[12px] 2xl:!rounded-[10px] !bg-white !text-black !text-[18px] 2xl:!text-[14px] !border-0";

  const phoneButtonClass = isMobile
    ? "!h-full !rounded-l-[10px] md:!rounded-l-[12px] !bg-white !border-0"
    : "!h-14 2xl:!h-11 !rounded-l-[12px] 2xl:!rounded-l-[10px] !bg-white !border-0";

  const phoneContainerClass = isMobile
    ? "!w-full !h-full"
    : "!w-full !h-14 2xl:!h-11";

  return (
    <>
      <input
        placeholder="Введите ваше имя"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        className={inputClasses}
        aria-label="Ваше имя"
        required
      />
      <PhoneInput
        country={countryCode}
        value={phone}
        onChange={onPhoneChange}
        inputClass={phoneInputClass}
        buttonClass={phoneButtonClass}
        containerClass={phoneContainerClass}
        dropdownClass="!bg-white !text-black !z-[9999]"
        inputProps={{
          'aria-label': 'Номер телефона',
          'required': true
        }}
      />
    </>
  );
}

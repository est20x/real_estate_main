import Image from "next/image";

export default function Logo() {
  return (
    <a href="#hero" className="flex items-center no-underline">
      <Image
        src="/лого.png"
        alt="Logo"
        width={120}
        height={40}
        priority
        unoptimized
        className="w-[70px] md:w-[100px] lg:w-[140px] 2xl:w-[120px] h-auto object-contain"
      />
    </a>
  );
}

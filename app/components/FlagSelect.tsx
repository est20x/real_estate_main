"use client";

import { useState, useRef, useEffect } from "react";
import TR from "country-flag-icons/react/3x2/TR";
import UA from "country-flag-icons/react/3x2/UA";
import RU from "country-flag-icons/react/3x2/RU";
import US from "country-flag-icons/react/3x2/US";
import GB from "country-flag-icons/react/3x2/GB";

const countries = [
  { code: "+90", flag: TR, name: "TR" },
  { code: "+380", flag: UA, name: "UA" },
  { code: "+7", flag: RU, name: "RU" },
  { code: "+1", flag: US, name: "US" },
  { code: "+44", flag: GB, name: "GB" },
];

interface FlagSelectProps {
  onCountryChange?: (code: string) => void;
}

export default function FlagSelect({ onCountryChange }: FlagSelectProps) {
  const [selected, setSelected] = useState("+90");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    setSelected(code);
    setIsOpen(false);
    if (onCountryChange) {
      onCountryChange(code);
    }
  };

  const selectedCountry = countries.find((c) => c.code === selected);

  return (
    <div ref={dropdownRef} className="relative w-full h-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full h-full bg-white text-left px-3 rounded-md md:rounded-[12px] border-0 text-black text-[15px]"
      >
        <svg
          className="w-2.5 h-2.5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L4 4L7 1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {selectedCountry && (
          <selectedCountry.flag className="w-7 h-[20px] rounded-[2px]" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white rounded shadow-lg border border-gray-200 z-50">
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => handleSelect(country.code)}
              className="flex items-center justify-center w-full px-3 py-2 hover:bg-gray-100"
            >
              <country.flag className="w-7 h-[20px] rounded-[2px]" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

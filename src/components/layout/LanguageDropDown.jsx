import React, { useState, useRef, useEffect } from "react";
import { LANGUAGES } from "../../constants/languages";
import { headerData } from "../../constants/headerData";
import LangIcon from "../../assets/icons/Languages.svg?react";

const LanguageDropdown = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);

    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-normal cursor-pointer"
      >
        <LangIcon />
        <span>{lang.toUpperCase()}</span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-28 rounded-md bg-white shadow-lg overflow-hidden z-20">
          {/* English */}
          <button
            onClick={() => changeLang(LANGUAGES.EN)}
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
          >
            {headerData.languageSwitcher[lang].en}
          </button>

          {/* Arabic */}
          <button
            onClick={() => changeLang(LANGUAGES.AR)}
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
          >
            {headerData.languageSwitcher[lang].ar}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

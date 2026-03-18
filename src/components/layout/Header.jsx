import React, { useState, useEffect } from "react";
import Logo from "../ui/Logo";
import { headerData } from "../../constants/headerData";
import NavLinks from "./NavLinks";
import LanguageDropdown from "./LanguageDropDown";
import MobileMenu from "./MobileMenu";

const Header = ({ lang, setLang }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = headerData.nav[lang];


  /* ---------------- detect scroll for header style ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- active section detection ---------------- */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
  
    elements.forEach((el) => observer.observe(el));
  
    return () => observer.disconnect();
  }, [navItems]);
  /* ---------------- language switch ---------------- */

  return (
    <header
      className={`fixed w-full z-50 top-0 transition-all duration-500
      ${scrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : ""}`}
    >
      <div className="  flex items-center justify-between px-8 py-6 md:px-16 md:py-10 lg:px-[100px] lg:py-12 ">
        <Logo lang={lang} />

        {/* Desktop nav */}

        <NavLinks navItems={navItems} active={active} setActive={setActive} />

        <div className="flex items-center gap-6">
          {/* Language */}

          <LanguageDropdown lang={lang} setLang={setLang} />

          {/* Mobile menu button */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}

      <MobileMenu
        menuOpen={menuOpen}
        navItems={navItems}
        active={active}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
};

export default Header;

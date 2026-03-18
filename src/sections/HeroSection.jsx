import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/ui/SectionTitle";
import { HERO_DATA } from "../constants/hero";
import Button from "../components/ui/Button";
import ArrowIcon from "../assets/icons/button-arrow.svg?react";
import AnimatedSection from "../components/animations/AnimatedSection";

export default function HeroSection({ lang }) {
  const heroData = HERO_DATA[lang];

  const [showCVOptions, setShowCVOptions] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCVOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-32  px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8 "
    >
      <AnimatedSection direction="none" delay={0.3}>
        <div className="flex flex-col-reverse  lg:flex-row justify-between items-center gap-12 lg:gap-24">
          {/* Left Content */}

          <div className="flex flex-col lg:items-start gap-6 lg:gap-8 flex-1 items-center">
            <div className="flex flex-col lg:items-start gap-3 lg:gap-4 items-center">
              <div className="flex flex-col items-center gap-1 relative">
                <h3>{heroData.greeting}</h3>
                <span className="w-2 h-2 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--color-primary)]"></span>
              </div>
              <h1 className="leading-tight text-center lg:text-start">
                {heroData.title.beforeName}{" "}
                <span className="text-[var(--color-primary)]">
                  {heroData.title.name}
                </span>{" "}
                {heroData.title.afterName}
              </h1>
              <p className="text-center lg:text-start">{heroData.body}</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-4 sm:gap-6 mt-4">
              <div className="relative" ref={dropdownRef}>
                <Button
                  variant="filled"
                  icon={<ArrowIcon className="w-5 sm:w-6 ltr:rotate-180" />}
                  onClick={() => setShowCVOptions((prev) => !prev)}
                >
                  {heroData.button1}
                </Button>

                {/* Dropdown */}
                <AnimatePresence>
                  {showCVOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full mt-2 w-full bg-white/80 backdrop-blur-md shadow-lg rounded-xl overflow-hidden z-50"
                    >
                      <button
                        onClick={() => {
                          window.open("/Amer CV (UX).pdf", "_blank");
                          setShowCVOptions(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                      >
                        UX CV
                      </button>

                      <button
                        onClick={() => {
                          window.open("/Amer CV (Flutter).pdf", "_blank");
                          setShowCVOptions(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                      >
                        Flutter CV
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button
                variant="outline"
                icon={
                  <ArrowIcon className="w-5 sm:w-6 text-[var(--color-primary)] ltr:rotate-180" />
                }
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {heroData.button2}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <img
              src={heroData.image}
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

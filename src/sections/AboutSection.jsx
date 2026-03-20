import React from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { ABOUT_DATA } from "../constants/about";
import Shape1 from "../assets/icons/shape_1.svg?react";
import Shape2 from "../assets/icons/shape_2.svg?react";
import UxIcon from "../assets/icons/ux.svg?react";
import UiIcon from "../assets/icons/ui.svg?react";
import MobileIcon from "../assets/icons/mobile.svg?react";
import Arrow from "../assets/icons/services-arrow.svg?react";
import ArrowVer from "../assets/icons/services-arrow-vertical.svg?react";

import SkillCard from "../components/cards/SkillCard";
import AnimatedSection from "../components/animations/AnimatedSection";

export default function AboutSection({ lang }) {
  const aboutData = ABOUT_DATA[lang];

  return (
    <section
      id="about"
      className="
      relative
      scroll-mt-32
      py-16
      px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32
      bg-[var(--color-tertiary)]
      overflow-hidden
      "
    >
      {/* shapes */}
      <Shape1 className="absolute top-0 -right-6 pointer-events-none" />
      <Shape2 className="absolute bottom-0 -left-16 w-[200px] pointer-events-none" />
      <AnimatedSection direction="down">
        <div className="flex flex-col gap-8 md:gap-12">
          <SectionTitle
            highlightedText={aboutData.title.highlight}
            after={aboutData.title.rest}
          />

          {/* cards */}
          <div
            className="
  relative
  grid
  gap-6
  lg:gap-10
  lg:grid-cols-3
  justify-items-center
  "
          >
            {/* Desktop arrow */}
            <Arrow
              className="
  hidden lg:block
  absolute
  top-[30%]
  w-[50%]
  pointer-events-none

  ltr:left-[22%]
  rtl:right-[22%]

  rtl:scale-x-[-1]
  "
            />

            {/* Mobile / Tablet arrow */}
            <ArrowVer
              className="
  lg:hidden
  absolute
  md:-top-[10%]
  md:-left-[15%]
  md:bottom-[10%]
  sm:-top-[13%]
  sm:-left-[15%]
  sm:bottom-[10%]
  -top-[7.5%]
  -left-[15%]
  -bottom-[10%]
  w-[134vw]
  pointer-events-none
  "
            />

            <SkillCard
              position="left"
              icon={<UxIcon className="w-8 h-8 text-[var(--color-primary)]" />}
              title={aboutData.cards[0].title}
              description={aboutData.cards[0].body}
            />

            <SkillCard
              position="center"
              icon={<UiIcon className="w-8 h-8 text-[var(--color-primary)]" />}
              title={aboutData.cards[1].title}
              description={aboutData.cards[1].body}
            />

            <SkillCard
              position="right"
              icon={<MobileIcon className="w-8 h-8 text-[var(--color-primary)]" />}
              title={aboutData.cards[2].title}
              description={aboutData.cards[2].body}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

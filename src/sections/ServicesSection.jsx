import React from "react";
import { SERVICES_DATA } from "../constants/services";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/cards/ServicesCard";
import AnimatedSection from "../components/animations/AnimatedSection";

export default function ServicesSection({ lang }) {
  const servicesData = SERVICES_DATA[lang];

  return (
    <section
      id="services"
      className="scroll-mt-32  px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
    >
      <AnimatedSection direction="none">
        <div className="flex flex-col gap-10 md:gap-12">
          <SectionTitle
            highlightedText={servicesData.title.highlight}
            after={servicesData.title.rest}
          />
          <div
            className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3

      gap-8 md:gap-10
      "
          >
            {servicesData.cards.map((card, index) => (
              <ServiceCard key={index} {...card} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

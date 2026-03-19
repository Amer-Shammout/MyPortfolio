import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS_DATA } from "../constants/projects";
import SectionTitle from "../components/ui/SectionTitle";
import Shape1 from "../assets/icons/shape_1.svg?react";
import Shape2 from "../assets/icons/shape_2.svg?react";
import CategoryChips from "../components/ui/CategoryChips";
import AnimatedSection from "../components/animations/AnimatedSection";
import ProjectCard from "../components/cards/ProjectsCard";
import Button from "../components/ui/Button";

const ALL_CATEGORY = "all";
const INITIAL_DISPLAY_COUNT = 6;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ProjectsSection({ lang }) {
  const projectsData = PROJECTS_DATA[lang];

  const [activeCategory, setActiveCategory] = useState(
    projectsData.categories[0].value
  );

  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const cardsRef = useRef([]);

  useEffect(() => {
    if (displayCount > INITIAL_DISPLAY_COUNT) {
      const firstNewItemIndex = displayCount - 3;
      const element = cardsRef.current[firstNewItemIndex];

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [displayCount]);

  const filteredProjects = useMemo(() => {
    setDisplayCount(INITIAL_DISPLAY_COUNT);

    if (activeCategory === ALL_CATEGORY) {
      return projectsData.projects;
    }

    return projectsData.projects.filter((project) =>
      project.categories.some(cat => cat.value === activeCategory)
    );
  }, [activeCategory, projectsData.projects]);

  const visibleProjects = filteredProjects.slice(0, displayCount);

  return (
    <section
      id="projects"
      className="relative scroll-mt-32 py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-[var(--color-tertiary)] overflow-hidden"
    >
      <Shape1 className="absolute top-0 -right-6 pointer-events-none -" />
      <Shape2 className="absolute bottom-0 -left-12 w-[200px] pointer-events-none " />

      <AnimatedSection direction="up">
        <div className="flex flex-col gap-8 md:gap-12">
          <SectionTitle
            highlightedText={projectsData.title.highlight}
            after={projectsData.title.rest}
          />

          <CategoryChips
            categories={projectsData.categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] items-stretch"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="h-full scroll-mt-32"
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <ProjectCard project={project} lang={lang}  />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
            <div className="flex justify-center mt-4">
              <Button
                onClick={() => {
                  if (displayCount >= filteredProjects.length) {
                    setDisplayCount(INITIAL_DISPLAY_COUNT);
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setDisplayCount((prev) => prev + 3);
                  }
                }}
                variant="filled"
              >
                {displayCount >= filteredProjects.length
                  ? lang === "ar"
                    ? "عرض أقل"
                    : "Show Less"
                  : lang === "ar"
                  ? "عرض المزيد"
                  : "Show More"}
              </Button>
            </div>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
}

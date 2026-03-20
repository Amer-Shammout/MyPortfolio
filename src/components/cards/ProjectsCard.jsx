import React from "react";

const ProjectCard = ({ project, lang, activeCategoryType }) => {
  const { title, caption, categories, image, link } = project;

  const categoryText = categories.map((cat) => cat.label).join(" | ");
  const hasExternalLink = link && link.trim() !== "";

  const getOverlayColor = () => {
    if (activeCategoryType === "all") return "rgba(56,103,221,0.5)"; // blue

    if (activeCategoryType === "dev") return "rgba(214,179,8,0.5)"; // yellow

    if (activeCategoryType === "design") return "rgba(168,85,247,0.5)"; // purple

    return "rgba(56,103,221,0.5)";
  };
  const getTextColor = () => {
    if (activeCategoryType === "all") return "text-[var(--color-primary)]";
    if (activeCategoryType === "dev") return "text-yellow-500";
    if (activeCategoryType === "design") return "text-purple-500";
    return "text-[var(--color-primary)]";
  };

  return (
    <div
      className="
      group relative w-full h-full overflow-hidden transition-all duration-300
      bg-white rounded-[32px] 
      px-[24px] pt-[32px] pb-[32px]
      shadow-[0_8px_16px_rgba(0,0,0,0.25)]
      flex flex-col
      min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[470px]
    "
    >
      {/* Background Pattern Layer */}
      <div className="project-pattern absolute inset-0 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex-grow">
          {/* Categories Section */}
          <div className="mb-[16px] sm:mb-[20px] md:mb-[24px] text-[clamp(14px,1.5vw,16px)] font-normal text-[var(--color-titles)] opacity-70 capitalize">
            {categoryText}
          </div>

          {/* Title & Caption Section */}
          <h3 className="mb-[24px] sm:mb-[28px] md:mb-[32px] font-bold ">
            <span className={`${getTextColor()} text-[clamp(16px,2.5vw,20px)]`}>
              {title}
            </span>
            <span className="mx-2 text-[var(--color-titles)] text-[clamp(16px,2.5vw,20px)]">
              | {caption}
            </span>
          </h3>
        </div>

        {/* Image Container */}
        <div
          className="
          relative w-full rounded-[8px] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.25)]
          aspect-[1.5/1] sm:aspect-[1.4/1] md:aspect-[1.3/1] mt-auto
        "
        >
          <img
            src={image}
            alt={title}
            className="
              w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 
              transition-all duration-500
            "
            loading="lazy"
          />
        </div>
      </div>

      {/* Full Card Hover Overlay */}
      {hasExternalLink && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            absolute inset-0 z-20 flex items-center justify-center 
            translate-y-full group-hover:translate-y-0 
            transition-transform duration-500 ease-in-out cursor-pointer
          "
          style={{ backgroundColor: getOverlayColor() }}
        >
          <span className="text-white font-bold text-[clamp(16px,2vw,20px)]">
            {lang == "en" ? "More Details..." : "المزيد..."}
          </span>
        </a>
      )}
    </div>
  );
};

export default ProjectCard;

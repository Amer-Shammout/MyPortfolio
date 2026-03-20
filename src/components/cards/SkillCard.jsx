import React from "react";
import clsx from "clsx";


const shapePositions = {
  left: {
    base: "-top-8 -end-8",
    hover:
      "ltr:group-hover:-translate-x-[190%] rtl:group-hover:translate-x-[190%] group-hover:translate-y-[200%]",
  },

  center: {
    base: "-bottom-8 -end-8",
    hover:
      "ltr:group-hover:-translate-x-[200%] rtl:group-hover:translate-x-[190%] group-hover:-translate-y-[200%]",
  },

  right: {
    base: "-top-8 -end-8",
    hover:
      "ltr:group-hover:-translate-x-[190%] rtl:group-hover:translate-x-[190%] group-hover:translate-y-[200%]",
  },
};

const strokePositions = {
  left: `
    /* Small screens: centered */
    top-0 left-1/2 -translate-x-1/2 border-t-[8px] w-16 z-20

    /* Large screens: corner-specific */
    lg:translate-x-0 lg:w-12 lg:h-12
    ltr:lg:left-0 ltr:lg:border-l-[8px] ltr:lg:rounded-tl-[32px]
    rtl:lg:right-0 rtl:lg:border-r-[8px] rtl:lg:rounded-tr-[32px]
  `,

  center: `
    /* Small screens: centered */
    top-0 left-1/2 -translate-x-1/2 border-t-[8px] w-16 z-20

    /* Large screens: stays centered */
    lg:left-1/2 lg:-translate-x-1/2 lg:w-12 lg:h-12
  `,

  right: `
    /* Small screens: centered */
    top-0 rtl:left-1/2 ltr:right-1/2 -translate-x-1/2  border-t-[8px] w-16 z-20

    /* Large screens: corner-specific */
    lg:translate-x-0 lg:w-12 lg:h-12 
    ltr:lg:right-0 ltr:lg:border-r-[8px] ltr:lg:rounded-tr-[32px]
    rtl:lg:left-0 rtl:lg:border-l-[8px] rtl:lg:rounded-tl-[32px]
  `,
};

export default function SkillCard({
  icon,
  title,
  description,
  position = "left",
}) {
  const shapePos = shapePositions[position];
  const strokePos = strokePositions[position];

  return (
    <div
      className="
      group
      relative
      w-[270px]
      rounded-[32px]
      bg-white
      shadow-[0_4px_15px_rgba(0,0,0,0.3)]
      p-[clamp(1rem,2vw,1.5rem)]
      overflow-hidden
      transition-all
      duration-300
      hover:shadow-[0_6px_15px_rgba(0,0,0,0.35)]
      "
    >
      {/* stroke */}
      <div
        className={clsx("absolute border-[var(--color-primary)]", strokePos)}
      />

      {/* shape */}
      <div
        className={clsx(
          "absolute w-28 h-28 rounded-full bg-[var(--color-secondary)] opacity-35 transform transition-transform duration-700 ease-out",
          shapePos.base,
          shapePos.hover
        )}
      />

      {/* content */}
      <div className="relative z-10">
        <div className="flex items-center gap-[clamp(0.4rem,1vw,0.6rem)]">
          <div className="p-[clamp(0.45rem,0.9vw,0.6rem)] rounded-[8px] bg-[var(--color-secondary)] text-white">
            {icon}
          </div>

          <h3 className="font-bold text-[clamp(1rem,1.1vw,1.25rem)] text-[var(--color-titles)]">
            <span className="text-[var(--color-primary)]">
              {title.highlight}
            </span>
            {title.rest}
          </h3>
        </div>

        <p className="mt-[clamp(0.4rem,1vw,0.6rem)] text-[var(--color-paragraph)] text-[clamp(0.875rem,0.9vw,1rem)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

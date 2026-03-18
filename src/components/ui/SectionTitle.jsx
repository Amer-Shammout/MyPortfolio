import React from "react";

const SectionTitle = ({ highlightedText ,after }) => {
  return (
    <div className="flex flex-col items-center gap-1 relative group">
      <h2 className="duration-300 group-hover:text-secondary ">
        <span className="text-[var(--color-primary)]">{highlightedText}</span>{after}
      </h2>

      <span className="mt-2 w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] transition-transform duration-500 group-hover:-translate-x-[300%]"></span>
    </div>
  );
};

export default SectionTitle;

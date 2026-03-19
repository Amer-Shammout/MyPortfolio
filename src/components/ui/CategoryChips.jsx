const CategoryChips = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="relative">
      
      <div className="
        flex 
        flex-nowrap md:flex-wrap 
        overflow-x-auto overflow-y-hidden 
        justify-start md:justify-center 
        scrollbar-hide
        px-4 md:px-0
        gap-[clamp(12px,2.5vw,32px)]
        items-center
        z-10
      ">
        {categories.map((cat) => {
          const isActive = cat.value === activeCategory;

          return (
            <button
              key={cat.value}
              onClick={() => onSelect(cat.value)}
              className={`
                flex-shrink-0
                whitespace-nowrap
                transition-all duration-300
                rounded-[clamp(12px,2vw,16px)]
                px-[clamp(16px,3vw,24px)]
                py-[clamp(8px,1.5vw,12px)]
                text-[clamp(14px,1.8vw,16px)]
                ${
                  isActive
                    ? `
                      bg-[var(--color-primary)]
                      text-white
                      hover:bg-[#2160FF]
                    `
                    : `
                      border border-[var(--color-primary)]
                      text-[var(--color-primary)]
                      hover:bg-[#C4D4FD]
                    `
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="
        pointer-events-none
        absolute top-0 right-0 h-full w-12
        bg-gradient-to-l from-white to-transparent
        md:hidden
      " />

      <div className="
        pointer-events-none
        absolute top-0 left-0 h-full w-12
        bg-gradient-to-r from-white to-transparent
        md:hidden
      " />

    </div>
  );
};

export default CategoryChips;
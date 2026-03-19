import { useEffect, useRef } from "react";
import Code from "../../assets/icons/flutter.svg?react";
import Palette from "../../assets/icons/ui.svg?react";

const CategoryChips = ({ categories, activeCategory, onSelect }) => {
  const scrollRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX;
      scrollStart.current = el.scrollLeft;

      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;

      const dx = e.pageX - startX.current;

      el.scrollLeft = scrollStart.current - dx;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = "grab";
      el.style.removeProperty("user-select");
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const activeEl = el?.querySelector("[data-active='true']");
    if (!el || !activeEl) return;
  
    const elRect = el.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
  
    const offset =
      activeRect.left -
      elRect.left -
      el.clientWidth / 2 +
      activeRect.width / 2;
  
    el.scrollBy({
      left: offset,
      behavior: "smooth",
    });
  }, [activeCategory]);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className={`
          flex flex-nowrap
          overflow-x-auto overflow-y-hidden
          scrollbar-hide

          px-4 md:px-0
          gap-[clamp(12px,2.5vw,32px)]
          items-center

          mask-left
          mask-right

          scroll-smooth

          cursor-grab
          active:cursor-grabbing
        `}
      >
        {categories.map((cat) => {
          const isActive = cat.value === activeCategory;
          const isDesign = cat.type === "design";

          return (
            <button
              key={cat.value}
              data-active={isActive}
              onClick={() => {
                if (isDragging.current) return;

                onSelect(cat.value);
              }}
              className={`
                group
                flex items-center gap-2
                flex-shrink-0 whitespace-nowrap
                
                transition-all duration-300 ease-out
                
                rounded-[clamp(12px,2vw,16px)]
                px-[clamp(16px,3vw,24px)]
                py-[clamp(8px,1.5vw,12px)]
                text-[clamp(14px,1.8vw,16px)]

                border

                ${
                  isActive
                    ? isDesign
                      ? "bg-purple-500 text-white border-purple-500"
                      : "bg-blue-500 text-white border-blue-500"
                    : isDesign
                    ? "border-purple-300 text-purple-600 hover:bg-purple-100"
                    : "border-blue-300 text-blue-600 hover:bg-blue-100"
                }

                active:scale-[0.97]
              `}
            >
              <span className="opacity-80 group-hover:opacity-100 transition">
                {isDesign ? (
                  <Palette className="w-4 h-4" />
                ) : (
                  <Code className="w-4 h-4" />
                )}
              </span>

              {cat.label}

              {isActive && (
                <span className="ms-1 w-1.5 h-1.5 rounded-full bg-white/80" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryChips;

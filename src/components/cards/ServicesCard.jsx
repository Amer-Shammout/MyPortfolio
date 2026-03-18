import React from "react";

const ServiceCard = ({ icon: Icon, title, body }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4">
      
      {/* ICON WRAPPER */}
      <div className="relative flex items-center justify-center">
        
        {/* small circle */}
        <span
          className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[10px] h-[10px] rounded-full
          bg-[var(--color-primary)]
          transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]
          z-20
        
          group-hover:bg-[var(--color-white)]
          group-hover:translate-y-[calc(clamp(70px,8vw,100px)-100%)]
          "
        ></span>

        {/* big circle */}
        <div
          className="
          flex items-center justify-center
          rounded-full bg-[var(--color-secondary)]
          transition-all duration-300
          group-hover:bg-[var(--color-primary)]
          group-hover:scale-105

          w-[clamp(70px,8vw,100px)]
          h-[clamp(70px,8vw,100px)]
          "
        >
          <Icon
            className="
            w-[clamp(32px,4vw,48px)]
            h-[clamp(32px,4vw,48px)]
            text-[var(--color-primary)]
            transition-all duration-300
            group-hover:text-[var(--color-white)]
            "
          />
        </div>
      </div>

      {/* TITLE */}
      <h3
        className="
        font-bold
        text-[clamp(18px,2.5vw,24px)]
        leading-snug
        "
      >
        <span className="text-[var(--color-primary)]">{title.highlight}</span>
        <span className="text-[var(--color-titles)]">{title.rest}</span>
      </h3>

      {/* BODY */}
      <p
        className="
        text-[var(--color-paragraph)]
        text-[clamp(14px,1.8vw,16px)]
        leading-relaxed
        max-w-[300px]
        "
      >
        {body}
      </p>
    </div>
  );
};

export default ServiceCard;
import React from "react";

const MobileMenu = ({ menuOpen, navItems, active, setMenuOpen }) => {
  return (
    <div
    className={`
      md:hidden absolute w-full bg-[var(--color-bg)]
       transition-all duration-300 ease-in-out
         ${
           menuOpen
             ? "opacity-100 translate-y-0 pointer-events-auto"
             : "opacity-0 -translate-y-4 pointer-events-none"
         }
     `}
    >
      <nav className="flex flex-col text-center px-6 py-6 gap-8 w-full ">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`navLink ${
                active === item.id ? "navLink-selected" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
    </div>
  );
};

export default MobileMenu;

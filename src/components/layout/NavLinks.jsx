const NavLinks = ({ navItems, active, setActive }) => {
    return (
      <nav className="hidden md:flex items-center gap-16">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setActive(item.id)}
            className={`navLink ${
              active === item.id ? "navLink-selected" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    );
  };
  
  export default NavLinks;
  
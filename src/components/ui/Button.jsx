const Button = ({
  children,
  onClick,
  variant = "filled",
  icon,
  iconPosition = "right",
  className = "",
}) => {

  const base = "btn-base";
  const styles = {
    filled: "btn-filled  btn-filled-shadow",
    outline: "btn-outline  btn-outline-shadow"
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {icon && iconPosition === "left" && icon}

      {children}

      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
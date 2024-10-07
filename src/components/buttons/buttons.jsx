export const Button = ({
  onClick,
  variant,
  className,
  text,
  icon,
  ...props
}) => {
  const baseStyles =
    "px-7 gap-3 py-2 rounded-md font-poppins hover:scale-105 ease-in-out duration-[.3s]";
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "border-black border-[1px]",
    logout: "bg-red text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {text}
      <span className="text-sm">{icon}</span>
    </button>
  );
};

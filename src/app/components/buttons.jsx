// Button.js or Button.jsx

import React from "react";

export const Button = ({
  variant = "primary",
  text,
  icon,
  onClick,
  className,
  ...props
}) => {
  const baseStyles =
    "px-10 gap-3 py-3 rounded-md font-poppins hover:scale-105 ease-in-out duration-[.3s]";
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

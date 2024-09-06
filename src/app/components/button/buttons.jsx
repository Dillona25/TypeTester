// Button.js or Button.jsx

import React from "react";

export const Button = ({ variant = "primary", text, icon, ...props }) => {
  const baseStyles =
    "px-10 py-3 rounded-md font-poppins hover:scale-105 ease-in-out duration-[.3s]";
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "border-black border-[1px]",
    logout: "bg-red text-white",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {text}
      <span className="text-sm">{icon}</span>
    </button>
  );
};

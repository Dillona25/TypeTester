// Button.js or Button.jsx

import React from "react";

const Button = ({ variant = "primary", text, icon, ...props }) => {
  const baseStyles =
    "px-6 font-poppins flex items-center gap-2 py-3 rounded-2xl w-fit text-white cursor-pointer";
  const variantStyles = {
    primary: "bg-black",
    secondary: "bg-white border-black text-black border-[1px]",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {text}
      <span className="text-sm">{icon}</span>
    </button>
  );
};

export default Button;

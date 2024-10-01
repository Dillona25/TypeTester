import React, { MouseEventHandler, ReactNode } from "react";

type Props = {
  text?: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  variant?: "primary" | "secondary" | "logout";
};

export const Button = ({
  variant = "primary",
  text,
  icon,
  onClick,
  className,
  ...props
}: Props) => {
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

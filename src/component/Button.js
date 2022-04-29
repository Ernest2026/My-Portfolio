import React from "react";

const Button = ({ children, type, command, id, buttonStyle, label }) => {
  const handleClick = () => command;
  return (
    <button
      className={`btn ${buttonStyle}`}
      id={id}
      onClick={command && handleClick}
      type={type || "button"}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;

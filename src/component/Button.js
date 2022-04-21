import React from "react";

const Button = ({ children, type, command, id, buttonStyle }) => {
  const handleClick = () => command;
  return (
    <button
      className={`btn ${buttonStyle}`}
      id={id}
      onClick={command && handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

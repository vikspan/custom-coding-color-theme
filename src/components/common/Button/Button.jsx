import React from "react";
import "./Button.scss";

const Button = ({ children, variant = "secondary", size = "md", className = "", ...rest }) => {

  return (
    <button {...rest} className={`btn btn--${variant} btn--${size} ${className}`} >
      {children}
    </button>
  );
};

export default Button;
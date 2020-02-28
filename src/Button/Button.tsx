import React from "react";
import PropTypes from "prop-types";

export interface IProps {
  children: React.ReactNode;
  onClick: () => {};
  bgStyle: string;
  disabled: boolean;
}

const Button = ({ children, onClick, bgStyle, disabled = false }: IProps) => {
  const disabledStyle = {
    opacity: 0.3,
    pointerEvents: "none",
    backgroundColor: bgStyle
  };

  const enabledStyle = {
    backgroundColor: bgStyle
  };

  return (
    <button onClick={onClick} style={disabled ? disabledStyle : enabledStyle}>
      {children}
    </button>
  );
};

Button.prototypes = {
  bgStyle: PropTypes.string
};

export default Button;

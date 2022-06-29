import React, { FC } from "react";
import { Button as BSButton } from "react-bootstrap";
import "./Button.css";

export interface IButton {
  children?: React.ReactNode;
  className?: string;
  variant?: "danger" | "dark";
  type?: "button" | "submit";
  size?: "sm" | "lg";
}

const Button: FC<IButton> = ({
  children,
  className,
  size,
  variant = "light",
  type = "button",
}) => {
  return (
    <BSButton
      size={size}
      type={type}
      variant={`${variant}`}
      className={`border-0 cust-btn cust-btn-${variant} ${className}`}
    >
      {children}
    </BSButton>
  );
};

export default Button;

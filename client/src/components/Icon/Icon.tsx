import { FC } from "react";
import "./Icon.css";

export interface IIcon {
  name: string;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
}

const Icon: FC<IIcon> = ({ href, name, className, variant = "light" }) => {
  if (href) {
    return (
      <a href={href} className={`icon icon-${variant} ${className} fs-2 mx-2`}>
        <i className={`bi bi-${name}`}></i>
      </a>
    );
  } else {
    return (
      <span className={`icon icon-${variant} ${className} fs-3 mx-2`}>
        <i className={`bi bi-${name}`}></i>
      </span>
    );
  }
};

export default Icon;

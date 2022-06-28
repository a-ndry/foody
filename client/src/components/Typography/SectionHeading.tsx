import React, { FC } from "react";

interface SectionHeadingProp {
  children?: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

const SectionHeading: FC<SectionHeadingProp> = ({
  children,
  variant,
  className,
}) => {
  let v = variant === "light" ? "text-white bg-dark " : "text-dark";
  return (
    <h2 className={`${v} text-center fw-bold ${className}`}>{children}</h2>
  );
};

export default SectionHeading;

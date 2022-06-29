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
  let v = variant === "light" ? "text-white" : "text-dark";
  return (
    <h1
      style={{ letterSpacing: "2px" }}
      className={`${v} pb-4 text-center fw-bold ${className}`}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;

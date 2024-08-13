"use client";

import classNames from "classnames";

import { LinkProps } from "@/types/link";

const CustomLink: React.FC<LinkProps> = ({
  size,
  state = "normal",
  href,
  onClick,
  children
}) => {
  const linkClass = classNames(
    "inline-flex items-center justify-center rounded", // Common styles
    {
      // Size classes
      "text-small": size === "small",
      "text-medium": size === "medium",
      "text-large": size === "large",

      // State classes
      "text-links": state === "normal",
      "hover:text-links-hover hover:underline": state === "hover",
      "focus:text-links-focus focus:underline": state === "focus",
      "active:text-links-click active:underline": state === "click",
      "text-links-disabled cursor-disabled": state === "disabled"
    }
  );

  return (
    <a
      href={state !== "disabled" ? href : undefined} // Disable the link if the state is disabled
      className={linkClass}
      onClick={(e) => {
        if (state === "disabled") {
          e.preventDefault();
          return;
        }
        if (onClick) onClick();
      }}
    >
      {children}
    </a>
  );
};

export default CustomLink;

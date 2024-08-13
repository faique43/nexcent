import classNames from "classnames";
import { ButtonProps } from "@/types/button";

import loadingIcon from "@/public/assets/icons/Loading.svg";

const Button: React.FC<ButtonProps> = ({
  size,
  type,
  state = "normal",
  iconPosition = null,
  icon,
  onClick,
  children
}) => {
  const buttonClass = classNames(
    "flex items-center justify-center rounded-btn", // Common styles
    {
      // Size classes
      "p-small text-small": size === "small",
      "p-medium text-medium": size === "medium",
      "p-large text-large": size === "large",

      // Type and state classes
      "bg-buttons-primary text-buttonFont-primary":
        type === "primary" && state === "normal",
      "bg-buttons-secondary text-buttonFont-secondary":
        type === "secondary" && state === "normal",
      "bg-buttons-tertiary text-buttonFont-tertiary":
        type === "tertiary" && state === "normal",

      // Hover and Focus classes
      "hover:bg-buttons-primary-focus":
        type === "primary" && state === "normal",
      "hover:bg-buttons-secondary-focus":
        type === "secondary" && state === "normal",
      "hover:bg-buttons-tertiary-hover":
        type === "tertiary" && state === "normal",

      // Disabled state
      "bg-buttons-primary-disabled text-buttonFont-primary-disabled opacity-disabled cursor-disabled":
        type === "primary" && state === "disabled",
      "bg-buttons-secondary-disabled text-buttonFont-secondary-disabled opacity-disabled cursor-disabled":
        type === "secondary" && state === "disabled",
      "bg-buttons-tertiary-disabled text-buttonFont-tertiary-disabled opacity-disabled cursor-disabled":
        type === "tertiary" && state === "disabled",

      // Loading state
      "bg-buttons-primary text-buttonFont-primary cursor-loading":
        type === "primary" && state === "loading",
      "bg-buttons-secondary text-buttonFont-secondary cursor-loading":
        type === "secondary" && state === "loading",
      "bg-buttons-tertiary text-buttonFont-tertiary cursor-loading":
        type === "tertiary" && state === "loading"
    }
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={state === "disabled" || state === "loading"}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      {state === "loading" && (
        <span className="flex items-center justify-center">
          Loading...
          <img
            src={loadingIcon}
            alt="Loading"
            className="w-4 h-4 ml-2"
            style={{ filter: "invert(1)" }}
          />
        </span>
      )}
    </button>
  );
};

export default Button;

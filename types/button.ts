import { StaticImageData } from "next/image";

type ButtonSize = "small" | "medium" | "large";
type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonState = "normal" | "loading" | "disabled";

export interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
  state?: ButtonState;
  iconPosition?: "left" | "right" | null;
  icon?: StaticImageData;
  onClick?: () => void;
  children: React.ReactNode;
}

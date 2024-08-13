type ButtonSize = "small" | "medium" | "large";
type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonState = "normal" | "loading" | "disabled";

export interface ButtonProps {
  size: ButtonSize;
  type: ButtonType;
  state?: ButtonState;
  iconPosition?: "left" | "right" | null;
  icon?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}

type LinkSize = "small" | "medium" | "large";
type LinkState = "normal" | "hover" | "focus" | "click" | "disabled";

export interface LinkProps {
  size: LinkSize;
  state?: LinkState;
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

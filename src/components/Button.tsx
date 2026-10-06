import type { MouseEvent, ReactNode } from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-[#2fbe72] active:bg-[#29a866]",
  secondary: "border border-line bg-transparent text-ink hover:border-[#3d443f]",
  ghost: "bg-transparent text-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-[15px]",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit";
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  onClick,
  disabled = false,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md font-medium transition-[color,background-color,transform] duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-card disabled:text-muted disabled:hover:bg-card disabled:active:scale-100",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

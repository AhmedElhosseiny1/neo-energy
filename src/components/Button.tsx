import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  form?: string;
  className?: string;
  icon?: ReactNode;
};

const variantClasses = {
  primary:
    "bg-accent text-white hover:bg-accent-dark border-transparent",
  secondary:
    "bg-accent-light text-accent border-border hover:border-accent",
  outline:
    "bg-transparent text-accent border-border hover:border-accent",
  ghost:
    "bg-transparent text-foreground hover:bg-accent-light border-transparent",
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  disabled,
  form,
  className = "",
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-base font-semibold transition-all duration-200 hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 ${variantClasses[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}

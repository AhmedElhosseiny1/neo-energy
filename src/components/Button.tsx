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
  primary: "bg-accent text-white hover:bg-accent-dark border-transparent",
  secondary: "bg-foreground text-background hover:bg-muted border-transparent",
  outline:
    "bg-transparent text-foreground border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-foreground hover:bg-accent-light border-transparent",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
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

import { ReactNode } from "react";

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  required?: boolean;
}

export function Field({ label, htmlFor, error, children, required }: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="mono-label">
        {label}
        {required && <span className="ml-1 text-danger">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-danger">{error}</p>}
    </div>
  );
}

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

export function QuantityStepper({
  quantity,
  onChange,
  min = 1,
  max = 999,
}: QuantityStepperProps) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-lg border border-border bg-white">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        className="flex h-10 w-10 items-center justify-center text-accent transition-colors hover:bg-accent-light disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="flex h-10 w-12 items-center justify-center text-sm font-medium tabular-nums">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        className="flex h-10 w-10 items-center justify-center text-accent transition-colors hover:bg-accent-light disabled:opacity-30"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}

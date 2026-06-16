"use client";

import { useEffect, useState } from "react";
import { Check, Plus, ShoppingCart } from "lucide-react";

interface AddToCartFeedbackProps {
  onAdd: () => void;
  productName?: string;
  variant?: "icon" | "button";
  className?: string;
}

export function AddToCartFeedback({
  onAdd,
  productName = "product",
  variant = "icon",
  className = "",
}: AddToCartFeedbackProps) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 1500);
    return () => clearTimeout(timer);
  }, [added]);

  const handleClick = () => {
    onAdd();
    setAdded(true);
  };

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-px ${
          added
            ? "bg-green-600 hover:bg-green-700"
            : "bg-accent hover:bg-accent-dark"
        } ${className}`}
        aria-label={added ? `Added ${productName} to cart` : `Add ${productName} to cart`}
      >
        {added ? (
          <>
            <Check className="h-4 w-4" /> Added
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" /> Add to Cart
          </>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-px ${
        added
          ? "scale-110 bg-green-600 hover:bg-green-700"
          : "bg-accent hover:bg-accent-dark"
      } ${className}`}
      aria-label={added ? `Added ${productName} to cart` : `Add ${productName} to cart`}
    >
      {added ? (
        <Check className="h-5 w-5" />
      ) : (
        <ShoppingCart className="h-4 w-4" />
      )}
    </button>
  );
}

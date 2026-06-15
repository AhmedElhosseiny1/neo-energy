"use client";

import { Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/Button";

interface AddToCartButtonProps {
  productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <Button
      onClick={() => addItem(productId)}
      icon={<Plus className="h-4 w-4" />}
      className="flex-1"
    >
      Add to Cart
    </Button>
  );
}

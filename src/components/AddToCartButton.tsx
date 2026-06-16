"use client";

import { Plus } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { allProducts } from "@/data/products";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Button } from "@/components/Button";

interface AddToCartButtonProps {
  productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { track } = useAnalytics();
  const product = allProducts.find((p) => p.id === productId);

  return (
    <Button
      onClick={() => {
        addItem(productId);
        track("add_to_cart", {
          product_id: productId,
          product_name: product?.name,
          product_sku: product?.sku,
          product_category: product?.category,
          product_brand: product?.brand,
        });
      }}
      icon={<Plus className="h-4 w-4" />}
      className="flex-1"
    >
      Add to Cart
    </Button>
  );
}

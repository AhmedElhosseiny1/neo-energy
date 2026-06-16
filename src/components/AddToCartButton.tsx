"use client";

import { useCartStore } from "@/store/useCartStore";
import { allProducts } from "@/data/products";
import { useAnalytics } from "@/hooks/useAnalytics";
import { AddToCartFeedback } from "@/components/AddToCartFeedback";

interface AddToCartButtonProps {
  productId: string;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { track } = useAnalytics();
  const product = allProducts.find((p) => p.id === productId);

  return (
    <AddToCartFeedback
      variant="button"
      productName={product?.name}
      className="flex-1"
      onAdd={() => {
        addItem(productId);
        track("add_to_cart", {
          product_id: productId,
          product_name: product?.name,
          product_sku: product?.sku,
          product_category: product?.category,
          product_brand: product?.brand,
        });
      }}
    />
  );
}

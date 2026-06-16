"use client";

import { useEffect } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";
import type { Product } from "@/types";

interface ProductViewTrackerProps {
  product: Product;
}

export function ProductViewTracker({ product }: ProductViewTrackerProps) {
  const { track } = useAnalytics();

  useEffect(() => {
    track("product_viewed", {
      product_id: product.id,
      product_name: product.name,
      product_sku: product.sku,
      product_category: product.category,
      product_brand: product.brand,
    });
  }, [product, track]);

  return null;
}

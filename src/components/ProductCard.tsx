"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, SlidersHorizontal } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

export function ProductCard({ product, showAddToCart = true }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/3] overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <span className="mono-label">{product.sku}</span>
        <h3 className="mt-2 text-xl font-semibold">
          <Link href={`/products/${product.slug}`} className="hover:text-accent">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {product.shortDescription}
        </p>

        {showAddToCart && (
          <div className="mt-6 flex items-center gap-3">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Configure Solution
              <SlidersHorizontal className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => addItem(product.id)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white transition-colors hover:bg-accent-dark"
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

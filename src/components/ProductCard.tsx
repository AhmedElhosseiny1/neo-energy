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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md">
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-transparent px-5 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:-translate-y-px hover:border-accent"
            >
              Configure Solution
              <SlidersHorizontal className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => addItem(product.id)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark"
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

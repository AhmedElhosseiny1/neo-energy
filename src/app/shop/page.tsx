import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { catalogProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop | Neo Energy Solutions",
  description:
    "Browse solar panels, inverters, batteries, energy storage systems, cables, and street lighting from trusted brands for projects across Egypt and MENA.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <span className="mono-label text-accent">INDUSTRIAL PRODUCT SHOP</span>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Shop</h1>
        <p className="mt-4 text-muted">
          Select components for your solar project and add them to your cart.
          Our engineering team will prepare a tailored quotation based on your
          selection, site conditions, and delivery location across Egypt and the
          MENA region.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {catalogProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

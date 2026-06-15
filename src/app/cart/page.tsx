"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { Trash2, FileText, Share2, Info, Plus } from "lucide-react";
import { ClientOnly } from "@/components/ClientOnly";
import { useCartStore } from "@/store/useCartStore";
import { allProducts, Product } from "@/data/products";
import { QuantityStepper } from "@/components/QuantityStepper";
import { Stepper } from "@/components/Stepper";
import { Button } from "@/components/Button";
import { calculateProjectScope, formatPower, formatCapacity } from "@/lib/calculations";

const CartPdfDownload = dynamic(
  () => import("@/components/CartPdfDownload").then((mod) => mod.CartPdfDownload),
  { ssr: false }
);

const steps = [
  { number: 1, label: "Selection" },
  { number: 2, label: "Configuration" },
  { number: 3, label: "Request" },
];

interface EnrichedItem {
  productId: string;
  quantity: number;
  product: Product;
}

export default function CartPage() {
  const { items, updateQuantity, removeItem, referenceId } = useCartStore();

  const enrichedItems: EnrichedItem[] = useMemo(
    () =>
      items
        .map((item) => {
          const product = allProducts.find((p) => p.id === item.productId);
          return product ? { ...item, product } : null;
        })
        .filter((item): item is EnrichedItem => item !== null),
    [items]
  );

  const scope = useMemo(
    () => calculateProjectScope(items, allProducts),
    [items]
  );

  const hasItems = enrichedItems.length > 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Stepper steps={steps} currentStep={1} />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Cart items */}
        <section>
          <h1 className="text-2xl font-semibold">Solution Basket</h1>

          <div className="mt-6 space-y-6">
            {enrichedItems.map(({ product, quantity }) => (
              <article
                key={product.id}
                className="flex flex-col gap-6 rounded-2xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:p-6"
              >
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl bg-charcoal sm:w-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    loading="eager"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="mono-label text-accent">
                        SKU: {product.sku}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(product.id)}
                      className="rounded-lg p-1 text-muted transition-colors hover:bg-accent-light hover:text-danger"
                      aria-label={`Remove ${product.name}`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.specs.slice(0, 2).map((spec) => (
                      <span
                        key={spec.label}
                        className="rounded-lg bg-accent-light/50 px-3 py-1 text-xs font-medium"
                      >
                        {spec.label}: {spec.value}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                    <QuantityStepper
                      quantity={quantity}
                      onChange={(qty) => updateQuantity(product.id, qty)}
                    />
                    <p className="text-sm italic text-muted">
                      {product.category === "COMPATIBLE"
                        ? "Compatible Add-on"
                        : "Standard Installation Required"}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {!hasItems && (
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-white py-16">
                <Plus className="h-10 w-10 text-muted" />
                <p className="mt-4 text-muted">Add Components to Solution</p>
                <Link
                  href="/shop"
                  className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark"
                >
                  Browse Products
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Scope summary */}
        <aside className="h-fit rounded-2xl border border-border bg-white shadow-sm">
          <div className="rounded-t-2xl bg-foreground p-6 text-background">
            <h2 className="text-lg font-semibold">Estimated Project Scope</h2>
            <p className="text-xs uppercase tracking-widest text-background/70">
              Technical Aggregation
            </p>
          </div>
          <div className="p-6">
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm text-muted">Total Power Output</dt>
                <dd className="font-mono font-semibold">
                  {formatPower(scope.totalPowerOutputKw)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-muted">Nominal Capacity</dt>
                <dd className="font-mono font-semibold">
                  {formatCapacity(scope.nominalCapacityKwh)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-muted">Footprint Required</dt>
                <dd className="font-mono font-semibold">~{scope.footprintM2} m²</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-muted">Input Requirements</dt>
                <dd className="font-mono font-semibold">{scope.inputRequirements}</dd>
              </div>
            </dl>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-accent-light/30 p-4 text-sm">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-muted">
                Pricing is finalized after technical configuration. This summary
                represents the current hardware volume for system sizing.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <Button
                href={hasItems ? "/solution/configure" : "#"}
                disabled={!hasItems}
                className="w-full"
              >
                Proceed to Configuration
              </Button>
              <Button variant="outline" className="w-full">
                Save for Technical Review
              </Button>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <ClientOnly>
                {hasItems && (
                  <CartPdfDownload
                    items={items}
                    products={allProducts}
                    referenceId={referenceId}
                  />
                )}
              </ClientOnly>
              <button
                type="button"
                className="flex items-center gap-2 text-muted hover:text-accent"
              >
                <FileText className="h-4 w-4" />
                Download Preliminary Datasheets (PDF)
              </button>
              <button
                type="button"
                className="flex items-center gap-2 text-muted hover:text-accent"
              >
                <Share2 className="h-4 w-4" />
                Share Configuration ID:{" "}
                <ClientOnly>{referenceId}</ClientOnly>
              </button>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted">Need technical assistance?</p>
        <Link
          href="/quote"
          className="mt-1 inline-block font-medium text-accent hover:text-accent-dark"
        >
          Speak with a Systems Engineer
        </Link>
      </div>
    </div>
  );
}

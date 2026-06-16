import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, Grid3X3, Shield, Wifi, CheckCircle, ArrowRight } from "lucide-react";
import { getProductBySlug, compatibleComponents, allProducts } from "@/data/products";
import { TechnicalTable } from "@/components/TechnicalTable";
import { Button } from "@/components/Button";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductViewTracker } from "@/components/ProductViewTracker";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = compatibleComponents.slice(0, 4);

  return (
    <>
      <ProductViewTracker product={product} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb / header */}
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-accent-light sm:aspect-[4/3]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
            SKU: {product.sku}
          </div>
          <div className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-foreground">
            {product.category}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="mono-label text-accent">
            INDUSTRIAL SERIES / {product.category}
          </span>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {product.fullDescription}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {product.specs.slice(0, 4).map((spec) => (
              <div key={spec.label} className="rounded-2xl border border-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                <p className="mono-label">{spec.label}</p>
                <p className="mt-1 text-lg font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToCartButton productId={product.id} />
            <Button variant="outline" icon={<Download className="h-4 w-4" />}>
              Download Technical Sheet
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 border-b border-border">
        <div className="flex gap-8">
          <button
            type="button"
            className="border-b-2 border-accent pb-3 text-sm font-semibold text-accent"
          >
            Overview
          </button>
          <button
            type="button"
            className="border-b-2 border-transparent pb-3 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Technical Specifications
          </button>
        </div>
      </div>

      {/* Specs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Technical Specifications</h2>
        <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <TechnicalTable specs={product.specs} />
        </div>
      </section>

      {/* Integration capability */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">System Integration Capability</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <Grid3X3 className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">Modular Scalability</h3>
            <p className="mt-2 text-sm text-muted">
              Designed to work in parallel configurations. Synchronize multiple
              units to create a scalable power block with centralized control
              systems for homes, businesses, and industrial sites.
            </p>
          </div>
          <div className="rounded-2xl bg-accent p-6 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <Wifi className="h-6 w-6" />
            <h3 className="mt-4 font-semibold">Active Thermal Management</h3>
            <p className="mt-2 text-sm text-white/90">
              Engineered for reliable output in high-ambient environments
              common across the MENA region, with built-in protection and
              monitoring.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <Shield className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">Grid Compliance</h3>
            <p className="mt-2 text-sm text-muted">
              Pre-certified for grid-tied and off-grid solar applications.
              Includes advanced protection features for microgrid and backup
              power systems.
            </p>
          </div>
        </div>
      </section>

      {/* Internal review */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <h2 className="text-2xl font-semibold">Installation Guidance</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">Site Preparation</h3>
                <p className="mt-1 text-sm text-muted">
                  Install on a stable, ventilated surface with adequate
                  clearance around ventilation and service access points for
                  optimal performance in regional climate conditions.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">Compatibility</h3>
                <p className="mt-1 text-sm text-muted">
                  Compatible with leading inverter and battery systems. Our
                  engineering team can confirm integration with your existing
                  or planned solar array.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
          <h2 className="text-2xl font-semibold">Technical Resources</h2>
          <div className="mt-6 space-y-3">
            {[
              "Full Datasheet (PDF)",
              "2D/3D CAD Models (STEP/DWG)",
              "Solar System Sizing Guide",
            ].map((resource) => (
              <button
                key={resource}
                type="button"
                className="flex w-full items-center justify-between rounded-2xl border border-border bg-white px-4 py-3 text-left text-sm transition-all duration-200 hover:-translate-y-px hover:border-accent"
              >
                {resource}
                <Download className="h-4 w-4 text-muted" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial implementation */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Project Applications</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="relative aspect-video">
              <Image
                src="/images/containerized-bess.jpg"
                alt="Solar energy storage application"
                fill
                className="object-cover"
                loading="eager"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                ENERGY STORAGE
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Commercial & Industrial Sites</h3>
              <p className="mt-2 text-sm text-muted">
                Integrated inverter-storage clusters for peak shaving, backup
                power, and reduced grid dependency across factories, warehouses,
                and commercial facilities.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                View Services <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="relative aspect-video">
              <Image
                src="/images/lfp-battery.jpg"
                alt="Battery storage application"
                fill
                className="object-cover"
                loading="eager"
              />
              <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                BACKUP POWER
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Critical Infrastructure</h3>
              <p className="mt-2 text-sm text-muted">
                Reliable battery backup systems protecting critical operations
                during grid fluctuations and supporting continuous power for
                essential facilities.
              </p>
              <Link
                href="/services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                View Services <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Compatible components */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Compatible Components</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((component) => (
            <article
              key={component.id}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-accent-light">
                <Image
                  src={component.image}
                  alt={component.name}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-4">
                <span className="block mono-label">{component.sku}</span>
                <h3 className="mt-1 text-sm font-semibold">{component.name}</h3>
                <Link
                  href={`/products/${component.slug}`}
                  className="mt-3 inline-block w-full rounded-full border border-border px-4 py-2 text-center text-sm transition-all duration-200 hover:-translate-y-px hover:border-accent hover:text-accent"
                >
                  View Specs
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, Grid3X3, Shield, Wifi, CheckCircle, ArrowRight } from "lucide-react";
import { getProductBySlug, compatibleComponents, allProducts } from "@/data/products";
import { TechnicalTable } from "@/components/TechnicalTable";
import { Button } from "@/components/Button";
import { AddToCartButton } from "@/components/AddToCartButton";

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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb / header */}
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-charcoal sm:aspect-[4/3]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute left-4 top-4 rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white">
            SKU: {product.sku}
          </div>
          <div className="absolute bottom-4 left-4 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-foreground">
            {product.category}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="mono-label">
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
              <div key={spec.label} className="rounded-xl border border-border bg-white p-4">
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
        <div className="mt-6 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <TechnicalTable specs={product.specs} />
        </div>
      </section>

      {/* Integration capability */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold">System Integration Capability</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <Grid3X3 className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">Modular Scalability</h3>
            <p className="mt-2 text-sm text-muted">
              Designed to work in parallel configurations. Synchronize up to 20 units
              to create a multi-megawatt power block with centralized control systems.
            </p>
          </div>
          <div className="rounded-2xl bg-accent p-6 text-white shadow-sm">
            <Wifi className="h-6 w-6" />
            <h3 className="mt-4 font-semibold">Active Thermal Management</h3>
            <p className="mt-2 text-sm text-white/90">
              Our proprietary liquid-cooling loop ensures consistent output even in
              high-ambient environments without thermal derating.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <Shield className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-semibold">Grid Compliance</h3>
            <p className="mt-2 text-sm text-muted">
              Pre-certified for IEEE 1547 and UL 1741 SA. Includes advanced
              grid-forming and black-start capabilities for microgrid applications.
            </p>
          </div>
        </div>
      </section>

      {/* Internal review */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Internal Review</h2>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">Installation Requirement</h3>
                <p className="mt-1 text-sm text-muted">
                  Must be installed on a non-combustible surface. Clearance of 500mm
                  required on cooling intake sides for optimal performance.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">Harmonic Filter Compatibility</h3>
                <p className="mt-1 text-sm text-muted">
                  Compatible with NE-HF Series active filters for ultra-low noise
                  requirements in laboratory or healthcare microgrids.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Technical Resources</h2>
          <div className="mt-6 space-y-3">
            {[
              "Full Datasheet (PDF, 4.2 MB)",
              "2D/3D CAD Models (STEP/DWG)",
              "Whitepaper: Grid-Forming Control",
            ].map((resource) => (
              <button
                key={resource}
                type="button"
                className="flex w-full items-center justify-between rounded-xl border border-border bg-white px-4 py-3 text-left text-sm transition-colors hover:border-accent"
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
        <h2 className="text-2xl font-semibold">Industrial Implementation</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative aspect-video">
              <Image
                src="/images/containerized-bess.jpg"
                alt="Solar microgrid case study"
                fill
                className="object-cover"
                loading="eager"
              />
              <span className="absolute bottom-4 left-4 rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white">
                SOLAR MICROGRID
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold">Prairie Mining Complex</h3>
              <p className="mt-2 text-sm text-muted">
                Reduced grid dependency by 64% through an integrated inverter-storage
                cluster managing 8.5MW peak loads.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                Read Case Study <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="relative aspect-video">
              <Image
                src="/images/lfp-battery.jpg"
                alt="Peak shaving case study"
                fill
                className="object-cover"
                loading="eager"
              />
              <span className="absolute bottom-4 left-4 rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white">
                PEAK SHAVING
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold">North Atlantic Logistics Hub</h3>
              <p className="mt-2 text-sm text-muted">
                Automated frequency response system protecting critical cold-chain
                infrastructure during grid fluctuations.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
              >
                Read Case Study <ArrowRight className="h-3 w-3" />
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
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-sm"
            >
              <div className="relative aspect-square overflow-hidden bg-charcoal">
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
                  className="mt-3 inline-block w-full rounded-lg border border-border px-4 py-2 text-center text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  View Specs
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

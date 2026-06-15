import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Shield,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/Button";
import { catalogProducts } from "@/data/products";

export default function HomePage() {
  const featuredProducts = catalogProducts.slice(0, 3);

  const sectors = [
    {
      title: "Data Centers",
      description:
        "Precision cooling, integrated power systems for hyper-scale cloud facilities.",
      image: "/images/industrial-inverter.jpg",
    },
    {
      title: "Manufacturing",
      description:
        "Microgrid solutions for heavy industry, ensuring stable energy for precision robotics.",
      image: "/images/lfp-battery.jpg",
    },
    {
      title: "Utility Sector",
      description:
        "Grid tie systems for renewable energy integration and peak-shaving storage.",
      image: "/images/pv-infrastructure.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden rounded-b-3xl">
        <Image
          src="/images/hero.jpg"
          alt="Industrial solar installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="mono-label text-accent-light">
            INDUSTRIAL ENERGY SYSTEMS
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Powering Industrial Excellence with Precision Energy Solutions
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            Bespoke engineering for high-capacity energy storage and generation. We
            deliver the hardware and intelligence required for 24/7 industrial
            operational continuity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/shop" variant="primary">
              Explore Solutions
            </Button>
            <Button href="/catalog" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:text-white">
              View Technical Data
            </Button>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs font-semibold tracking-widest text-muted sm:px-6 lg:px-8">
          <span>SOLAR-CORP</span>
          <span>GRID-INTEGRATE</span>
          <span>VOLT-TECH</span>
          <span>INDUSTRY-O</span>
          <span>MEGA-WATT</span>
        </div>
      </section>

      {/* Precision Hardware */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold">Precision Hardware</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Advanced energy components engineered for the world&apos;s most demanding
              environments.
            </p>
          </div>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
          >
            Browse Full Catalog <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="mono-label text-accent-light">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
                  <p className="mt-2 max-w-xs text-sm text-white/80">
                    {product.shortDescription.slice(0, 80)}...
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-4 inline-block rounded-lg border border-white/50 bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-white hover:border-accent"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Engineering Standard */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">
                The Engineering Standard for Industrial Energy
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Engineering Prowess</h3>
                    <p className="mt-1 text-sm text-muted">
                      Built by senior electrical engineers who specialize in custom
                      system integration for complex industrial grids.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Absolute Reliability</h3>
                    <p className="mt-1 text-sm text-muted">
                      Redundant system architecture ensures that your mission-critical
                      operations never face power instability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Smart Management</h3>
                    <p className="mt-1 text-sm text-muted">
                      Every hardware component is integrated with our NeoCloud
                      monitoring platform for real-time performance analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/microgrid-controller.jpg"
                alt="Engineer working on industrial control panel"
                fill
                className="object-cover"
                loading="eager"
              />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 p-4 shadow-lg">
                <p className="text-3xl font-semibold text-accent">99.9%</p>
                <p className="text-xs text-muted">uptime availability across deployed systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">
            Built for the Backbone of Global Infrastructure
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
            We provide specialized energy architecture for sectors where downtime is
            not an option.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sectors.map((sector) => (
            <article
              key={sector.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{sector.title}</h3>
                <p className="mt-2 text-sm text-muted">{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Request Your Engineering Quotation
              </h2>
              <p className="mt-4 text-background/80">
                Partner with Neo Energy Solutions to design a bespoke energy
                architecture for your facility. Our senior engineers will review your
                technical specifications and provide a comprehensive system proposal.
              </p>
            </div>
            <div className="flex items-center">
              <form className="w-full space-y-4 rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Company Email"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
                />
                <Button href="/quote" className="w-full">
                  Submit for Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

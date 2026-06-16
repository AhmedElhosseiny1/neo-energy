import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sun,
  Droplets,
  FileText,
  Wrench,
  MapPin,
  TrendingUp,
  Users,
  Leaf,
  Award,
} from "lucide-react";
import { Button } from "@/components/Button";
import { catalogProducts } from "@/data/products";

export default function HomePage() {
  const featuredProducts = catalogProducts.slice(0, 3);

  const trustPillars = [
    {
      icon: Award,
      title: "Expertise",
      description:
        "Experience in solar energy systems and installations across residential, commercial, and industrial projects.",
    },
    {
      icon: Users,
      title: "Partnerships",
      description:
        "Distributor and partner relationships with leading brands including Felicity Solar, JA Solar, Jet Solar, and Longi Solar.",
    },
    {
      icon: TrendingUp,
      title: "Customer Satisfaction",
      description:
        "Tailored solutions supported by long-term maintenance and responsive technical support.",
    },
    {
      icon: Leaf,
      title: "Sustainability Commitment",
      description:
        "Focus on clean energy and reduced carbon footprint through reliable solar solutions.",
    },
  ];

  const regions = [
    {
      title: "Egypt",
      description:
        "Headquarters and growing local distribution network serving solar projects nationwide.",
      image: "/images/service-on-grid.jpg",
    },
    {
      title: "Levant & Iraq",
      description:
        "Regional deliveries and project support across Lebanon, Syria, Jordan, and Iraq.",
      image: "/images/service-epc.jpg",
    },
    {
      title: "North Africa & Sudan",
      description:
        "Expanding solar access and energy solutions across Sudan and North Africa.",
      image: "/images/hero-solar-farm.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden rounded-b-3xl">
        <Image
          src="/images/hero-solar-farm.jpg"
          alt="Solar farm installation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="mono-label text-accent-light">
            RENEWABLE ENERGY SOLUTIONS
          </span>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Renewable energy solutions for a sustainable future
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">
            Premium solar solutions designed for long-term sustainability. Neo
            Energy delivers solar systems, energy storage, and engineering
            services across Egypt and the MENA region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/shop" variant="primary">
              Discover Neo Energy
            </Button>
            <Button
              href="/catalog"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Partner logos */}
      <section className="border-b border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Trusted Brand Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { name: "Elsewedy Electric", logo: "/images/partners/elsewedy-electric.png" },
              { name: "Frecon", logo: "/images/partners/frecon.png" },
              { name: "Jet Solar", logo: "/images/partners/jet-solar.png" },
              { name: "GoodWe", logo: "/images/partners/goodwe.png" },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex h-12 items-center justify-center grayscale transition-all hover:grayscale-0"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={48}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold">Featured Products</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Solar panels, batteries, inverters, cables, energy storage systems,
              and street lighting from trusted brands.
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
                    className="mt-4 inline-block rounded-full border border-white/50 bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regional Impact */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mono-label text-accent">REGIONAL IMPACT</span>
            <h2 className="mt-4 text-3xl font-semibold">
              Delivering Solar Across the Region
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              Neo Energy has supplied containers of solar panels and distributed
              modules across Egypt, the Levant, Iraq, and beyond.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="text-4xl font-semibold text-accent">140</p>
              <p className="mt-2 text-sm text-muted">Containers to Lebanon</p>
              <p className="mt-1 text-xs text-muted">100,800 panels delivered</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="text-4xl font-semibold text-accent">153</p>
              <p className="mt-2 text-sm text-muted">Containers to Syria</p>
              <p className="mt-1 text-xs text-muted">110,160 panels delivered</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="text-4xl font-semibold text-accent">80</p>
              <p className="mt-2 text-sm text-muted">Containers to Iraq</p>
              <p className="mt-1 text-xs text-muted">57,600 panels delivered</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
              <p className="text-4xl font-semibold text-accent">+50</p>
              <p className="mt-2 text-sm text-muted">Containers in Egypt</p>
              <p className="mt-1 text-xs text-muted">+35K panels distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mono-label text-accent">TRUST & WHY US</span>
            <h2 className="mt-4 text-3xl font-semibold">
              Why Choose Neo Energy?
            </h2>
            <p className="mt-4 text-muted">
              We combine technical experience, strong brand partnerships, and a
              commitment to customer satisfaction to deliver solar solutions that
              last.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {trustPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-muted">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about-engineer.jpg"
              alt="Neo Energy engineer"
              fill
              className="object-cover"
              loading="eager"
            />
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 p-4 shadow-lg">
              <div className="flex items-center gap-2 text-accent">
                <MapPin className="h-5 w-5" />
                <p className="text-lg font-semibold">MENA Region</p>
              </div>
              <p className="text-xs text-muted">
                Serving Egypt, Syria, Lebanon, Jordan, Iraq, and Sudan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mono-label text-accent">SERVICES</span>
            <h2 className="mt-4 text-3xl font-semibold">
              Solar Solutions for Every Need
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              Reliable and cost-efficient solar solutions for residential,
              commercial, and industrial use.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Sun,
                title: "On-Grid Solar",
                description:
                  "Grid-connected solar systems for homes, businesses, and industrial sites.",
              },
              {
                icon: Droplets,
                title: "Solar Pumping",
                description:
                  "Solar irrigation and pumping solutions for farms and remote locations.",
              },
              {
                icon: FileText,
                title: "PPA",
                description:
                  "Use solar energy without upfront capital investment through our Power Purchase Agreement.",
              },
              {
                icon: Wrench,
                title: "EPC Services",
                description:
                  "End-to-end engineering, procurement, and construction for turnkey solar systems.",
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Button href="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Regions / Sectors */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mono-label text-accent">REGIONS SERVED</span>
          <h2 className="mt-4 text-3xl font-semibold">
            Powering Communities Across MENA
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
            Neo Energy supplies and supports solar projects across Egypt, the
            Levant, Iraq, Sudan, and beyond.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {regions.map((region) => (
            <article
              key={region.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={region.image}
                  alt={region.title}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{region.title}</h3>
                <p className="mt-2 text-sm text-muted">{region.description}</p>
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
                Request Your Solar Quotation
              </h2>
              <p className="mt-4 text-background/80">
                Tell us about your project and our team will prepare a tailored
                proposal covering products, system design, and next steps.
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
                    placeholder="Email Address"
                    className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
                  />
                </div>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
                />
                <Button href="/quote" className="w-full">
                  Request a Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

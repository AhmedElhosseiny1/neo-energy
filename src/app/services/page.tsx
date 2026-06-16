import type { Metadata } from "next";
import Image from "next/image";
import {
  Sun,
  Droplets,
  FileText,
  Wrench,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { services, ServiceIconName } from "@/data/services";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services | Neo Energy Solutions",
  description:
    "On-grid solar, solar pumping systems, Power Purchase Agreements, EPC, and solar energy consultation across Egypt and MENA.",
};

const iconMap: Record<
  ServiceIconName,
  React.ComponentType<{ className?: string }>
> = {
  Sun,
  Droplets,
  FileText,
  Wrench,
  MessageCircle,
};

const serviceImageMap: Record<string, string> = {
  "on-grid-solar-system-installation": "/images/service-on-grid.jpg",
  "solar-pumping-systems-for-agriculture": "/images/service-solar-pumping.jpg",
  "power-purchase-agreement": "/images/hero-solar-farm.jpg",
  "engineering-procurement-construction": "/images/service-epc.jpg",
  "solar-energy-consultation": "/images/about-engineer.jpg",
};

const stats = [
  { value: "140", label: "Containers to Lebanon", sub: "100,800 panels" },
  { value: "153", label: "Containers to Syria", sub: "110,160 panels" },
  { value: "80", label: "Containers to Iraq", sub: "57,600 panels" },
  { value: "+50", label: "Containers in Egypt 2025", sub: "+35K panels" },
];

const differentiators = [
  {
    icon: Sun,
    title: "End-to-End EPC",
    description:
      "From engineering and procurement to construction and commissioning, we manage the full project lifecycle.",
  },
  {
    icon: ShieldCheck,
    title: "MENA Experience",
    description:
      "Proven regional deliveries across Egypt, the Levant, Iraq, and North Africa.",
  },
  {
    icon: Wrench,
    title: "Trusted Brand Partners",
    description:
      "We source from Felicity Solar, JA Solar, Jet Solar, Frecon, and El Sewedy Electric.",
  },
  {
    icon: Clock,
    title: "Fast Support",
    description:
      "Responsive technical support and project guidance from concept to commissioning.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="mono-label text-accent">OUR SERVICES</span>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Solar Services for Homes, Businesses, and Industry
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Neo Energy provides reliable and cost-efficient solar solutions for
              residential, commercial, and industrial use. From on-grid
              installations and agricultural pumping to Power Purchase Agreements
              and turnkey EPC projects, we support every stage of your solar
              journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/quote" icon={<ArrowRight className="h-4 w-4" />}>
                Request a Quote
              </Button>
              <Button href="/shop" variant="outline">
                Browse Products
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated lg:aspect-square">
            <Image
              src="/images/service-epc.jpg"
              alt="Solar installation crew at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
              >
                <p className="text-4xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mono-label text-accent">WHAT WE OFFER</span>
          <h2 className="mt-4 text-3xl font-semibold">Comprehensive Solar Services</h2>
          <p className="mt-3 text-muted">
            Each service is designed to reduce energy costs, improve reliability, and
            accelerate your transition to renewable power.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={serviceImageMap[service.slug]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-lg font-semibold text-white sm:text-xl">
                      {service.title}
                    </h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm leading-relaxed text-muted">
                    {service.fullDescription}
                  </p>

                  <div className="mt-6 border-t border-border pt-6">
                    <h3 className="mono-label">Key Highlights</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why Neo Energy */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mono-label text-accent">WHY NEO ENERGY</span>
            <h2 className="mt-4 text-3xl font-semibold">Service You Can Count On</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              We combine technical expertise, regional logistics experience, and
              strong manufacturer relationships to deliver projects on time.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-light text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to start your solar project?
              </h2>
              <p className="mt-4 max-w-lg text-background/80">
                Our team reviews every request and responds with a tailored proposal
                covering products, system design, and next steps.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button
                href="/quote"
                icon={<ArrowRight className="h-4 w-4" />}
                className="bg-background text-foreground hover:bg-background/90"
              >
                Request a Quote
              </Button>
              <Button
                href="/shop"
                variant="outline"
                className="border-background/30 text-background hover:border-background hover:bg-background/10"
              >
                Browse Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

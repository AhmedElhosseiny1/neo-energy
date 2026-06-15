import type { Metadata } from "next";
import {
  ClipboardCheck,
  Wrench,
  Settings,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { services, ServiceIconName } from "@/data/services";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services | Neo Energy Solutions",
  description:
    "Engineering consulting, system integration, commissioning, and operations & maintenance for industrial energy systems.",
};

const iconMap: Record<
  ServiceIconName,
  React.ComponentType<{ className?: string }>
> = {
  ClipboardCheck,
  Wrench,
  Settings,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="mono-label text-accent">END-TO-END CAPABILITIES</span>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Industrial Energy Services Built for Scale
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            From first feasibility study through decades of operations, Neo Energy
            Solutions provides the engineering discipline required to deliver
            reliable, high-capacity power systems.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <article
                key={service.id}
                className="group border border-border bg-white p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-accent text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.fullDescription}
                </p>

                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="mono-label">Key Deliverables</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-footer">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">Ready to scope your project?</h2>
            <p className="mt-2 text-muted">
              Our engineers review every request and respond within 24–48 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/shop" variant="outline">
              Browse Products
            </Button>
            <Button href="/quote" icon={<ArrowRight className="h-4 w-4" />}>
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

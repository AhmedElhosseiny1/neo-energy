import type { Metadata } from "next";
import { Leaf, Lightbulb, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Neo Energy Solutions",
  description:
    "Neo Energy Solutions is a renewable energy company focused on solar accessories, solar systems, and innovative energy services across Egypt and MENA.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Prioritizing environmentally responsible energy solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Improving technology and service offerings over time.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Delivering reliable and efficient energy systems.",
    },
    {
      icon: HeartHandshake,
      title: "Customer-Centric Approach",
      description: "Adapting services to different energy requirements.",
    },
  ];

  const partners = [
    { name: "Felicity Solar", role: "Lithium batteries, inverters, and off-grid energy solutions." },
    { name: "JA Solar", role: "High-efficiency solar panels for residential, commercial, and utility-scale use." },
    { name: "Logi", role: "Solar components for various applications." },
    { name: "Frecon", role: "Industrial solar inverters and control systems." },
    { name: "Jet Solar", role: "Locally manufactured certified panels balancing quality and affordability." },
    { name: "El Sewedy Electric", role: "Solar cables and electrical components." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="mono-label text-accent">ABOUT US</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Renewable Energy for a Sustainable Future
          </h1>
          <p className="mt-6 max-w-2xl text-muted">
            Neo Energy Solutions positions itself as a renewable energy company
            focused on solar accessories, solar systems, and innovative energy
            services.
          </p>
        </div>
      </section>

      {/* Who We Are / History */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="mt-4 text-muted">
              Neo Energy Solutions is a renewable energy company focused on solar
              accessories, solar systems, and innovative energy services. We work
              with individuals, businesses, and communities to make efficient solar
              power more accessible across Egypt and the wider MENA region.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Our History</h2>
            <p className="mt-4 text-muted">
              The company was founded to make efficient solar power more accessible
              and has expanded across Egypt and the wider MENA region. Today, Neo
              Energy supplies solar panels, batteries, inverters, cables, and
              complete energy storage systems to projects large and small.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-border bg-accent text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="mono-label text-white/70">MISSION</span>
              <h2 className="mt-4 text-3xl font-semibold">Energy Independence</h2>
              <p className="mt-4 text-white/80">
                Neo Energy aims to support individuals, businesses, and communities
                through renewable energy services that encourage energy independence
                and environmental sustainability.
              </p>
            </div>
            <div>
              <span className="mono-label text-white/70">VISION</span>
              <h2 className="mt-4 text-3xl font-semibold">A Trusted Provider</h2>
              <p className="mt-4 text-white/80">
                The company’s stated ambition is to become a highly trusted
                renewable energy provider across the MENA region and North Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mono-label text-accent">OUR VALUES</span>
          <h2 className="mt-4 text-3xl font-semibold">What We Stand For</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="mono-label text-accent">TRUSTED BRANDS</span>
            <h2 className="mt-4 text-3xl font-semibold">Our Partners</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              We collaborate with leading manufacturers to bring reliable solar
              products to our customers.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="font-semibold">{partner.name}</h3>
                <p className="mt-2 text-sm text-muted">{partner.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4 text-muted">
            Have questions about our products or services? Reach out to our team
            for support, quotations, or project guidance.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-muted sm:grid-cols-3">
            <p>
              <span className="block font-semibold text-foreground">Email</span>
              info@neo-es.com
            </p>
            <p>
              <span className="block font-semibold text-foreground">Phone</span>
              +20 120 843 4441 / +20 120 843 4449
            </p>
            <p>
              <span className="block font-semibold text-foreground">Address</span>
              Villa No. 8, Ninth District Service Center, Sheikh Zayed, Egypt
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

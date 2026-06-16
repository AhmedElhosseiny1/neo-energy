import type { Metadata } from "next";
import Image from "next/image";
import {
  Leaf,
  Lightbulb,
  ShieldCheck,
  HeartHandshake,
  Target,
  Eye,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/Button";

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
    "Felicity Solar",
    "JA Solar",
    "Logi",
    "Frecon",
    "Jet Solar",
    "El Sewedy Electric",
  ];

  const stats = [
    { value: "140", label: "Containers to Lebanon", sub: "100,800 panels" },
    { value: "153", label: "Containers to Syria", sub: "110,160 panels" },
    { value: "80", label: "Containers to Iraq", sub: "57,600 panels" },
    { value: "+50", label: "Containers in Egypt 2025", sub: "+35K panels" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="mono-label text-accent">ABOUT US</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Renewable Energy for a Sustainable Future
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Neo Energy Solutions positions itself as a renewable energy company
              focused on solar accessories, solar systems, and innovative energy
              services across Egypt and the MENA region.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/quote" icon={<ArrowRight className="h-4 w-4" />}>
                Request a Quote
              </Button>
              <Button href="/services" variant="outline">
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated lg:aspect-square">
            <Image
              src="/images/about-engineer.jpg"
              alt="Neo Energy engineer reviewing a solar project"
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

      {/* Who We Are / History */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <span className="mono-label text-accent">WHO WE ARE</span>
            <h2 className="mt-4 text-3xl font-semibold">Powering Access to Solar</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Neo Energy Solutions is a renewable energy company focused on solar
              accessories, solar systems, and innovative energy services. We work
              with individuals, businesses, and communities to make efficient solar
              power more accessible across Egypt and the wider MENA region.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Our team brings together technical expertise, regional logistics
              experience, and partnerships with leading manufacturers to deliver
              reliable solar solutions at scale.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated lg:order-2 lg:aspect-square">
            <Image
              src="/images/hero-solar-farm.jpg"
              alt="Solar farm representing Neo Energy scale"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevated lg:aspect-square">
            <Image
              src="/images/service-epc.jpg"
              alt="Neo Energy installation history"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="mono-label text-accent">OUR HISTORY</span>
            <h2 className="mt-4 text-3xl font-semibold">Growth Across the Region</h2>
            <p className="mt-4 leading-relaxed text-muted">
              The company was founded to make efficient solar power more accessible
              and has expanded across Egypt and the wider MENA region. Today, Neo
              Energy supplies solar panels, batteries, inverters, cables, and
              complete energy storage systems to projects large and small.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From initial consultation through procurement, installation, and
              ongoing support, we help customers move from concept to clean energy
              generation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-border bg-accent text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Target className="h-6 w-6 text-accent-light" />
                </div>
                <span className="mono-label text-white/70">MISSION</span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold">Energy Independence</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Neo Energy aims to support individuals, businesses, and communities
                through renewable energy services that encourage energy independence
                and environmental sustainability.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                  <Eye className="h-6 w-6 text-accent-light" />
                </div>
                <span className="mono-label text-white/70">VISION</span>
              </div>
              <h2 className="mt-6 text-3xl font-semibold">A Trusted Provider</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
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
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
            Our work is guided by a commitment to sustainability, quality, and
            customer success.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article
                key={value.title}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-light text-accent">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
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
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-foreground text-background shadow-elevated">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-semibold">Get in Touch</h2>
              <p className="mt-4 max-w-md text-background/80">
                Have questions about our products or services? Reach out to our team
                for support, quotations, or project guidance.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5 text-accent-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-background/80">info@neo-es.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-5 w-5 text-accent-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Phone</p>
                    <p className="text-sm text-background/80">
                      +20 120 843 4441 / +20 120 843 4449
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-accent-light" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Address</p>
                    <p className="text-sm text-background/80">
                      Villa No. 8, Ninth District Service Center, Sheikh Zayed, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center border-t border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-12 lg:border-t-0 lg:border-l">
              <h3 className="text-xl font-semibold">Ready for a tailored proposal?</h3>
              <p className="mt-3 text-sm text-background/80">
                Tell us about your project and our team will prepare a quote covering
                products, system design, and next steps.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button
                  href="/quote"
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Request a Quote
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="border-background/30 text-background hover:border-background hover:bg-background/10"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

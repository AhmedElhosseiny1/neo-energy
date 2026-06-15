import type { Metadata } from "next";
import { MapPin, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Neo Energy Solutions",
  description:
    "Neo Energy Solutions designs and delivers precision industrial power systems for a sustainable future.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="mono-label text-accent">COMPANY</span>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
        Industrial Precision. Engineering the Future.
      </h1>
      <p className="mt-6 max-w-3xl text-muted">
        Neo Energy Solutions pioneers modular industrial energy systems that
        combine high-capacity storage, advanced power conversion, and intelligent
        microgrid control. From feasibility study through decades of operations,
        our engineering teams deliver the reliability heavy industry demands.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { label: "Global Offices", value: "Zurich • Berlin • Singapore" },
          { label: "Technical Support", value: "24/7 Engineering Desk" },
          { label: "Engineering Resources", value: "ISO 9001:2015 Certified" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-border bg-white p-6"
          >
            <p className="mono-label">{item.label}</p>
            <p className="mt-2 font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-white p-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:engineering@neoenergy.solutions"
            className="flex items-center gap-3 text-muted hover:text-accent"
          >
            <Mail className="h-5 w-5" />
            engineering@neoenergy.solutions
          </a>
          <a
            href="tel:+1800NEOENERGY"
            className="flex items-center gap-3 text-muted hover:text-accent"
          >
            <Phone className="h-5 w-5" />
            +1 (800) NEO-ENERGY
          </a>
          <span className="flex items-center gap-3 text-muted">
            <MapPin className="h-5 w-5" />
            Stuttgart, Germany
          </span>
        </div>
      </div>
    </div>
  );
}

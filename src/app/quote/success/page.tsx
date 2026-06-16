"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Clock, User, FileText, Phone, Mail } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { allProducts } from "@/data/products";
import { Button } from "@/components/Button";

const QuotePdfDownload = dynamic(
  () =>
    import("@/components/QuotePdfDownload").then((mod) => mod.QuotePdfDownload),
  { ssr: false }
);

export default function QuoteSuccessPage() {
  const router = useRouter();
  const { quote, items, submittedAt, referenceId, configuration, markSubmitted } =
    useCartStore();

  useEffect(() => {
    if (items.length === 0 || !quote) {
      router.replace("/catalog");
      return;
    }
    markSubmitted();
  }, [items.length, quote, router, markSubmitted]);

  if (!quote || items.length === 0) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white">
          <CheckCircle className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
          Download Your Quotation Request
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Your request has been submitted. Download your quotation request as a
          PDF to share with your team or keep for your records. Our engineering
          team will follow up with a tailored proposal.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <QuotePdfDownload
            items={items}
            products={allProducts}
            configuration={configuration}
            quote={quote}
            referenceId={referenceId}
            submittedAt={submittedAt}
            label="Download Quotation Request PDF"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-red-700"
          />
          <Button href="/catalog" variant="outline">
            Browse More Products
          </Button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            phase: "Phase 01",
            title: "Engineering Review",
            desc: "Our engineers evaluate product compatibility, site conditions, and load requirements based on your selected components.",
            meta: "24-48h Response",
            icon: Clock,
          },
          {
            phase: "Phase 02",
            title: "Technical Consultation",
            desc: "A dedicated specialist will reach out to discuss system design, delivery logistics, and installation planning.",
            meta: "Dedicated Advisor",
            icon: User,
          },
          {
            phase: "Phase 03",
            title: "Final Proposal",
            desc: "Receive a comprehensive technical dossier including product recommendations and project next steps.",
            meta: "PDF Dossier",
            icon: FileText,
          },
        ].map((card) => (
          <div
            key={card.phase}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <span className="mono-label text-accent">{card.phase}</span>
            <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-muted">{card.desc}</p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent-light px-3 py-1 text-xs font-medium">
              <card.icon className="h-3 w-3" /> {card.meta}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Further Resources</h2>
          <p className="mt-3 text-sm text-muted">
            While our team prepares your technical brief, explore our
            engineering standards and comprehensive product range.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <QuotePdfDownload
              items={items}
              products={allProducts}
              configuration={configuration}
              quote={quote}
              referenceId={referenceId}
              submittedAt={submittedAt}
              label="Download Quotation Request PDF"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-red-700"
            />
            <Button href="/catalog" variant="outline">
              Browse More Products
            </Button>
          </div>
        </div>
        <div className="md:border-l md:border-border md:pl-8">
          <h2 className="text-xl font-semibold">Urgent Inquiries</h2>
          <p className="mt-3 text-sm text-muted">
            Does your project require immediate technical intervention? Contact
            our industrial desk.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href="tel:+201208434441"
              className="flex items-center gap-2 text-accent hover:text-accent-dark"
            >
              <Phone className="h-4 w-4" /> +20 120 843 4441
            </a>
            <a
              href="mailto:info@neo-es.com"
              className="flex items-center gap-2 text-accent hover:text-accent-dark"
            >
              <Mail className="h-4 w-4" /> info@neo-es.com
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-2xl">
        <Image
          src="/images/facility.jpg"
          alt="Neo Energy project facility"
          width={1200}
          height={500}
          className="w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <span className="mono-label text-accent-light">
            MENA SOLAR PROJECTS
          </span>
          <p className="mt-2 text-2xl font-semibold">
            Precision. Reliability. Sustainability.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/quote/preview"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-dark"
        >
          Preview quotation document
        </Link>
      </div>
    </div>
  );
}

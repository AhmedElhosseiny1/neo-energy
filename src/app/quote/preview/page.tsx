"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { allProducts } from "@/data/products";
import { NeoLogo } from "@/components/NeoLogo";

const QuotePdfDownload = dynamic(
  () => import("@/components/QuotePdfDownload").then((mod) => mod.QuotePdfDownload),
  { ssr: false }
);

export default function QuotePreviewPage() {
  const router = useRouter();
  const { items, configuration, quote, submittedAt, referenceId } = useCartStore();

  useEffect(() => {
    if (items.length === 0 || !quote) {
      router.replace("/catalog");
    }
  }, [items.length, quote, router]);

  if (!quote || items.length === 0) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/quote/success"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Technical Preview
        </Link>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Neo Energy Technical Preview",
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-px hover:border-accent"
          >
            <Share2 className="h-4 w-4" /> Share with Team
          </button>
          <QuotePdfDownload
            items={items}
            products={allProducts}
            configuration={configuration}
            quote={quote}
            referenceId={referenceId}
            submittedAt={submittedAt}
          />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between border-b-2 border-accent pb-6 sm:flex-row">
          <div>
            <NeoLogo className="h-12 w-auto text-accent" />
          </div>
          <div className="mt-4 text-right sm:mt-0">
            <p className="text-xs uppercase tracking-wider text-muted">
              Document Reference
            </p>
            <p className="text-xl font-bold">{referenceId}</p>
            <p className="text-sm text-muted">
              Issued: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <p className="text-sm text-muted">Validity: 30 Days from Issuance</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mono-label">Customer Profile</p>
            <p className="text-lg font-semibold">{quote.fullName}</p>
            <p className="text-muted">{quote.companyName}</p>
            <p className="text-muted">{quote.email}</p>

            <p className="mono-label mt-4">Installation Location</p>
            <p className="text-muted">{configuration.installationLocation}</p>
          </div>
          <div>
            <p className="mono-label">Engineering Contact</p>
            <p className="font-semibold">Neo Energy Engineering Team</p>
            <p className="text-muted">info@neo-es.com</p>
            <div className="mt-4 rounded-2xl bg-accent-light/40 p-4">
              <p className="mono-label text-accent">Solution Category</p>
              <p>Industrial Scale Solar & Energy Storage System</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold">Technical Configuration</h2>
          <p className="text-sm text-muted">
            Detailed breakdown of selected hardware and system integration components.
          </p>

          <table className="mt-4 w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="py-3 font-medium">SKU / Model</th>
                <th className="py-3 font-medium">Description</th>
                <th className="py-3 font-medium">QTY</th>
                <th className="py-3 font-medium">Lead Time</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const product = allProducts.find((p) => p.id === item.productId);
                if (!product) return null;
                return (
                  <tr key={product.id} className="border-b border-border">
                    <td className="py-4 font-mono text-xs">{product.sku}</td>
                    <td className="py-4">
                      <p className="font-semibold">{product.name}</p>
                      {product.specs.slice(0, 3).map((spec) => (
                        <p key={spec.label} className="text-xs text-muted">
                          • {spec.label}: {spec.value}
                        </p>
                      ))}
                    </td>
                    <td className="py-4 font-mono">
                      {item.quantity.toString().padStart(2, "0")}
                    </td>
                    <td className="py-4 text-muted">{product.leadTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mono-label mb-3">Compliance & Standards</p>
            <div className="flex flex-wrap gap-2">
              {["IEEE 1547-2018", "UL 9540A", "IEC 62109-1/-2"].map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="mono-label mb-3">Quality Assurance</p>
            <span className="rounded-full border border-accent px-3 py-1 text-xs font-semibold text-accent">
              ISO 9001:2015 CERTIFIED
            </span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-accent-light/20 p-4">
          <p className="font-semibold text-accent">Technical Note on Integration</p>
          <p className="mt-1 text-sm text-muted">
            The lead times indicated are estimates based on current supply chain
            availability. Final schedules are subject to technical site survey
            verification and local utility interconnection approvals.
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <div>
            <p className="font-semibold text-foreground">Neo Energy Solutions</p>
            <p>Renewable Energy Solutions</p>
            <p>Egypt • Levant • North Africa</p>
          </div>
          <div className="mt-2 sm:mt-0">
            <p>© 2024 Neo Energy Solutions. All Rights Reserved.</p>
            {submittedAt && (
              <p>Submitted: {new Date(submittedAt).toLocaleString()}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

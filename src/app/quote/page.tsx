"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  ChevronRight,
  FileUp,
  MessageCircle,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { allProducts } from "@/data/products";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { quoteRequestSchema, QuoteRequestValues } from "@/lib/validation";

const countries = [
  "Germany",
  "United States",
  "United Kingdom",
  "France",
  "Spain",
  "Italy",
  "Netherlands",
  "Singapore",
  "Australia",
  "Other",
];

function FileUploadBox({
  label,
  formats,
  icon,
}: {
  label: string;
  formats: string;
  icon: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-white p-6 text-center transition-colors hover:border-accent hover:bg-accent-light/20">
      <input type="file" className="sr-only" />
      <span className="text-accent">{icon}</span>
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
        {label}
      </span>
      <span className="text-[10px] uppercase tracking-wider text-muted">
        {formats}
      </span>
    </label>
  );
}

export default function QuotePage() {
  const router = useRouter();
  const { items, configuration, quote, setQuote } = useCartStore();

  useEffect(() => {
    if (items.length === 0) {
      router.replace("/catalog");
    }
  }, [items.length, router]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteRequestValues>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: quote || {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      projectCountry: "",
      projectSummary: "",
      includeDatasheets: true,
      includeDrawings: false,
      includeWhitepaper: false,
      preferredContact: "email",
    },
  });

  const onSubmit = (data: QuoteRequestValues) => {
    setQuote(data);
    router.push("/quote/success");
  };

  if (items.length === 0) return null;

  const enrichedItems = items
    .map((item) => {
      const product = allProducts.find((p) => p.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean) as Array<{ product: (typeof allProducts)[number]; quantity: number }>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted">
        <span>Solutions</span>
        <ChevronRight className="h-3 w-3" />
        <span>My Configuration</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Quotation Request</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px]">
        {/* Form */}
        <div>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Request Your Engineering Quotation
          </h1>
          <p className="mt-4 text-muted">
            Submit your technical requirements and configuration for expert analysis.
            Our engineering team will provide a comprehensive system proposal within
            48 business hours.
          </p>

          <form
            id="quote-form"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-10"
          >
            {/* 01 Contact Information */}
            <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  01
                </span>
                <h2 className="text-xl font-semibold">Contact Information</h2>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  htmlFor="fullName"
                  error={errors.fullName?.message}
                  required
                >
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Engineering Lead Name"
                    {...register("fullName")}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </Field>
                <Field
                  label="Company"
                  htmlFor="companyName"
                  error={errors.companyName?.message}
                  required
                >
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Organization Name"
                    {...register("companyName")}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </Field>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <Field
                  label="Professional Email"
                  htmlFor="email"
                  error={errors.email?.message}
                  required
                >
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register("email")}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </Field>
                <Field label="Direct Phone" htmlFor="phone" error={errors.phone?.message}>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (000) 000-0000"
                    {...register("phone")}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </Field>
              </div>

              <div className="mt-6">
                <label htmlFor="projectCountry" className="mono-label">
                  Project Country / Region
                </label>
                <div className="relative mt-2">
                  <select
                    id="projectCountry"
                    {...register("projectCountry")}
                    className="w-full appearance-none rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  >
                    <option value="">Select Location</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                    ▾
                  </span>
                </div>
              </div>
            </section>

            {/* 02 Technical Documentation */}
            <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  02
                </span>
                <h2 className="text-xl font-semibold">Technical Documentation</h2>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <FileUploadBox
                  label="Project Drawings"
                  formats="PDF, DWG (Max 50MB)"
                  icon={<FileUp className="h-6 w-6" />}
                />
                <FileUploadBox
                  label="Spec Sheets"
                  formats="XLSX, PDF (Max 20MB)"
                  icon={<FileUp className="h-6 w-6" />}
                />
                <FileUploadBox
                  label="Tender Docs"
                  formats="ZIP, PDF (Max 100MB)"
                  icon={<FileUp className="h-6 w-6" />}
                />
              </div>

              <div className="mt-6 space-y-3">
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    {...register("includeDatasheets")}
                    className="h-4 w-4 rounded accent-accent"
                  />
                  Include technical datasheets for selected components
                </label>
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    {...register("includeDrawings")}
                    className="h-4 w-4 rounded accent-accent"
                  />
                  Include single-line drawings and layout sketches
                </label>
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <input
                    type="checkbox"
                    {...register("includeWhitepaper")}
                    className="h-4 w-4 rounded accent-accent"
                  />
                  Include grid-forming control whitepaper
                </label>
              </div>
            </section>

            {/* 03 Additional Specifications */}
            <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  03
                </span>
                <h2 className="text-xl font-semibold">Additional Specifications</h2>
              </div>

              <Field
                label="Project Summary"
                htmlFor="projectSummary"
                error={errors.projectSummary?.message}
                required
              >
                <textarea
                  id="projectSummary"
                  rows={5}
                  defaultValue={
                    configuration.industryType
                      ? `Industry: ${configuration.industryType}\nProject Size: ${configuration.projectSize}\nPower Requirements: ${configuration.powerRequirements}\nLocation: ${configuration.installationLocation}\nTimeline: ${configuration.timeline}`
                      : ""
                  }
                  placeholder="Describe specific integration requirements, environmental constraints, or site conditions..."
                  {...register("projectSummary")}
                  className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
              </Field>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium uppercase tracking-wider text-muted">
                <span className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                  <Award className="h-4 w-4 text-accent" /> ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                  <Zap className="h-4 w-4 text-accent" /> IEC 61850 Compliant
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2">
                  <Shield className="h-4 w-4 text-accent" /> UL Listed Components
                </span>
              </div>
            </section>
          </form>
        </div>

        {/* My Solution sidebar */}
        <aside className="h-fit rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Solution</h2>
            <span className="rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-white">
              {items.reduce((sum, i) => sum + i.quantity, 0)} SYSTEMS
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {enrichedItems.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 border-b border-border pb-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-charcoal">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    loading="eager"
                  />
                </div>
                <div>
                  <p className="mono-label text-xs">SKU: {product.sku}</p>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="mt-1 text-xs text-muted">
                    {product.specs[0]?.label}: {product.specs[0]?.value}
                  </p>
                  <p className="text-xs text-muted">Qty: {quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Estimated Lead Time</span>
              <span className="font-semibold">12-14 Weeks</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Standard Warranty</span>
              <span className="font-semibold">15 Years</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-accent-light/30 p-4 text-sm">
            <p className="text-muted">
              Final pricing is subject to technical review, site accessibility
              assessment, and current raw material indices at the time of official
              quotation issuance.
            </p>
          </div>

          <Button
            type="submit"
            form="quote-form"
            className="mt-6 w-full py-4 text-base uppercase tracking-wider"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Submit Quotation Request
          </Button>

          <p className="mt-3 text-center text-xs uppercase tracking-wider text-muted">
            Secure encrypted submission
          </p>

          <div className="mt-6 rounded-xl border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-light">
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Need assistance?</p>
                <p className="text-xs text-muted">Marcus V., Senior Systems Engineer is online.</p>
                <Link
                  href="mailto:engineering@neoenergy.solutions"
                  className="text-xs font-medium text-accent hover:text-accent-dark"
                >
                  Start Technical Chat
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

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
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { allProducts } from "@/data/products";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { quoteRequestSchema, QuoteRequestValues } from "@/lib/validation";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Stepper } from "@/components/Stepper";

const countries = [
  "Egypt",
  "Syria",
  "Lebanon",
  "Jordan",
  "Iraq",
  "Sudan",
  "Saudi Arabia",
  "United Arab Emirates",
  "Other",
];

const steps = [
  { number: 1, label: "Selection" },
  { number: 2, label: "Request" },
];

export default function QuotePage() {
  const router = useRouter();
  const { items, quote, setQuote } = useCartStore();
  const { track } = useAnalytics();

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
    },
  });

  const onSubmit = (data: QuoteRequestValues) => {
    setQuote(data);
    track("quote_submitted", {
      email: data.email,
      company: data.companyName,
      country: data.projectCountry,
      product_count: items.reduce((sum, i) => sum + i.quantity, 0),
    });
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
      <Stepper steps={steps} currentStep={2} />

      {/* Breadcrumb */}
      <nav className="mt-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-muted">
        <span>Solutions</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-accent">Quotation Request</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px]">
        {/* Form */}
        <div>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Request Your Solar Quotation
          </h1>
          <p className="mt-4 text-muted">
            Submit your project details and selected products for a tailored
            proposal. Our team will review your requirements and respond with
            product recommendations and next steps.
          </p>

          <form
            id="quote-form"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-10"
          >
            {/* Contact Information */}
            <section className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-semibold">Contact Information</h2>

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
                    placeholder="Your name"
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
                    placeholder="Organization name"
                    {...register("companyName")}
                    className="w-full rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </Field>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <Field
                  label="Email"
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
                <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+20 100 000 0000"
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

              <div className="mt-6">
                <label htmlFor="projectSummary" className="mono-label">
                  Project Summary{" "}
                  <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id="projectSummary"
                  rows={4}
                  placeholder="Tell us about your project goals, timeline, or any specific requirements."
                  {...register("projectSummary")}
                  className="mt-2 w-full resize-none rounded-lg border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
              </div>
            </section>

          </form>
        </div>

        {/* My Solution sidebar */}
        <aside className="h-fit rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Solution</h2>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {items.reduce((sum, i) => sum + i.quantity, 0)} ITEMS
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
              <span className="font-semibold">Contact us</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Warranty</span>
              <span className="font-semibold">Per manufacturer terms</span>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-accent-light/30 p-4 text-sm">
            <p className="text-muted">
              Final pricing is subject to product availability, project scope,
              and technical review. Our team will confirm details before
              issuing an official quotation.
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

          {/* Contact info */}
          <div className="mt-6 rounded-2xl border border-border p-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Villa No. 8, Ninth District Service Center, Sheikh Zayed, Egypt
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +20 120 843 4441 / +20 120 843 4449
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                info@neo-es.com
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent-light">
                <MessageCircle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Need assistance?</p>
                <p className="text-xs text-muted">
                  Our team is ready to help with product selection and project
                  guidance.
                </p>
                <Link
                  href="mailto:info@neo-es.com"
                  className="text-xs font-medium text-accent hover:text-accent-dark"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

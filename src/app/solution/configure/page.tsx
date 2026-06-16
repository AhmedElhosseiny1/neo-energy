"use client";

import { useRouter } from "next/navigation";
import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Stepper } from "@/components/Stepper";
import { Field } from "@/components/Field";
import { Button } from "@/components/Button";
import { INDUSTRY_OPTIONS } from "@/types";
import { timelineOptions } from "@/data/products";
import {
  configurationDraftSchema,
  ConfigurationDraftValues,
} from "@/lib/validation";

const steps = [
  { number: 1, label: "Configuration" },
  { number: 2, label: "Technical Review" },
  { number: 3, label: "Quotation" },
];

export default function ConfigurePage() {
  const router = useRouter();
  const { configuration, setConfiguration, referenceId } = useCartStore();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<ConfigurationDraftValues>({
    resolver: zodResolver(configurationDraftSchema),
    defaultValues: configuration,
  });

  const {
    field: { value: selectedTimeline },
  } = useController({
    name: "timeline",
    control,
    rules: { required: true },
  });

  const onSubmit = (data: ConfigurationDraftValues) => {
    setConfiguration(data);
    router.push("/quote");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Stepper steps={steps} currentStep={1} />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        {/* Left side */}
        <div>
          <span className="mono-label text-accent">PROJECT CONFIGURATION</span>
          <h1 className="mt-4 text-3xl font-semibold">
            Define Your Solar <span className="text-accent">Ecosystem</span>.
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            Provide high-level technical parameters to help our engineers size
            the right solar panels, inverters, batteries, and balance-of-system
            components for your site across Egypt and the MENA region.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-accent-light/30 p-6">
            <h2 className="mono-label text-accent">Technical Assistance</h2>
            <blockquote className="mt-4 italic leading-relaxed text-foreground">
              &ldquo;Our team reviews your industry type, project size, and
              location to recommend the optimal panel configuration, inverter
              topology, and storage chemistry for MENA climate conditions.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">
                <Users className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">Neo Energy Engineering Team</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-10"
        >
          <Field
            label="Industry Type"
            htmlFor="industryType"
            error={errors.industryType?.message}
            required
          >
            <div className="relative">
              <select
                id="industryType"
                {...register("industryType")}
                className="w-full appearance-none rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none"
              >
                <option value="">Select industry sector</option>
                {INDUSTRY_OPTIONS.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted">
                ▾
              </span>
            </div>
          </Field>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field
              label="Project Size (MW/kW)"
              htmlFor="projectSize"
              error={errors.projectSize?.message}
              required
            >
              <input
                id="projectSize"
                type="text"
                placeholder="e.g. 2.5 MW"
                {...register("projectSize")}
                className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
              />
            </Field>
            <Field
              label="Power Requirements"
              htmlFor="powerRequirements"
              error={errors.powerRequirements?.message}
              required
            >
              <input
                id="powerRequirements"
                type="text"
                placeholder="Max Peak Load"
                {...register("powerRequirements")}
                className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
              />
            </Field>
          </div>

          <Field
            label="Installation Location"
            htmlFor="installationLocation"
            error={errors.installationLocation?.message}
            required
          >
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                id="installationLocation"
                type="text"
                placeholder="City, Country or Coordinates"
                {...register("installationLocation")}
                className="w-full rounded-xl border border-border py-3 pl-12 pr-4 text-sm focus:border-accent focus:outline-none"
              />
            </div>
          </Field>

          <div className="mt-6">
            <p className="mono-label mb-3">Expected Installation Timeline</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {timelineOptions.map((option) => {
                const selected = selectedTimeline === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setValue("timeline", option.id, { shouldValidate: true })}
                    className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition-all duration-300 hover:-translate-y-0.5 ${
                      selected
                        ? "border-accent bg-accent-light text-accent"
                        : "border-border bg-white hover:border-accent hover:shadow-sm"
                    }`}
                  >
                    <span className="text-sm font-semibold">{option.label}</span>
                    <span className="mt-1 text-[10px] uppercase tracking-wider text-muted">
                      {option.sublabel}
                    </span>
                  </button>
                );
              })}
            </div>
            {errors.timeline && (
              <p className="mt-2 text-xs text-danger">{errors.timeline.message}</p>
            )}
            <input type="hidden" {...register("timeline")} />
          </div>

          <Button
            type="submit"
            className="mt-8 w-full py-4 text-base uppercase tracking-wider"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Continue to Quotation Request
          </Button>

          <p className="mt-4 text-center text-sm text-muted">
            Draft auto-saved. Reference ID: {referenceId}
          </p>
        </form>
      </div>
    </div>
  );
}

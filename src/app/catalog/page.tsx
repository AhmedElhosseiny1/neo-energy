"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { catalogProducts } from "@/data/products";
import { INDUSTRY_OPTIONS } from "@/types";

const certifications = ["IEC 62109", "UL 1741 SA"];
const maxPower = 10000;

export default function CatalogPage() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([
    "Industrial Manufacturing",
  ]);
  const [powerRange, setPowerRange] = useState<number>(maxPower);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  const toggleCert = (cert: string) => {
    setSelectedCerts((prev) =>
      prev.includes(cert)
        ? prev.filter((c) => c !== cert)
        : [...prev, cert]
    );
  };

  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      const matchesIndustry =
        selectedIndustries.length === 0 ||
        product.industries.some((ind) => selectedIndustries.includes(ind));
      const matchesPower = product.minPowerKw <= powerRange;
      const matchesCert =
        selectedCerts.length === 0 ||
        selectedCerts.some((cert) => product.certifications.includes(cert));
      return matchesIndustry && matchesPower && matchesCert;
    });
  }, [selectedIndustries, powerRange, selectedCerts]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        {/* Filters */}
        <aside className="space-y-8">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="mono-label mb-4 text-accent">Industry Focus</h2>
            <div className="space-y-3">
              {INDUSTRY_OPTIONS.map((industry) => (
                <label
                  key={industry}
                  className="flex cursor-pointer items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => toggleIndustry(industry)}
                    className="h-4 w-4 rounded border-border accent-accent"
                  />
                  {industry}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="mono-label mb-4 text-accent">Power Requirement</h2>
            <div className="space-y-2">
              <input
                type="range"
                min={50}
                max={maxPower}
                step={50}
                value={powerRange}
                onChange={(e) => setPowerRange(Number(e.target.value))}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>Min: 50kW</span>
                <span>Max: {powerRange >= maxPower ? "5MW+" : `${powerRange}kW`}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <h2 className="mono-label mb-4 text-accent">Certification</h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <label
                  key={cert}
                  className="flex cursor-pointer items-center gap-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={selectedCerts.includes(cert)}
                    onChange={() => toggleCert(cert)}
                    className="h-4 w-4 rounded border-border accent-accent"
                  />
                  {cert}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Catalog */}
        <section>
          <span className="mono-label text-accent">SOLAR PRODUCT CATALOG</span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Engineering Catalog
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Browse solar panels, inverters, lithium batteries, energy storage
            systems, cables, and street lighting from trusted brands. Built for
            residential, commercial, and utility-scale projects across Egypt and
            the MENA region.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-white p-12 text-center shadow-sm">
              <p className="text-muted">
                No products match the selected filters. Adjust your criteria to
                see available components.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

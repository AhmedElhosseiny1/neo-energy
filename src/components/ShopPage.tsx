"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { catalogProducts } from "@/data/products";
import { Search, SlidersHorizontal, X } from "lucide-react";

const POWER_RANGES = [
  { id: "0-1", label: "0 – 1 kW / kWh", min: 0, max: 1 },
  { id: "1-5", label: "1 – 5 kW / kWh", min: 1, max: 5 },
  { id: "5-20", label: "5 – 20 kW / kWh", min: 5, max: 20 },
  { id: "20+", label: "20+ kW / kWh", min: 20, max: Infinity },
];

const SORT_OPTIONS = [
  { id: "featured", label: "Featured" },
  { id: "name-asc", label: "Name: A – Z" },
  { id: "name-desc", label: "Name: Z – A" },
  { id: "power-asc", label: "Power / Capacity: Low – High" },
  { id: "power-desc", label: "Power / Capacity: High – Low" },
];

function displayCategory(category: string) {
  const map: Record<string, string> = {
    "SOLAR PANELS": "Solar Panels",
    BATTERIES: "Batteries",
    INVERTERS: "Inverters",
    CABLES: "Cables",
    "ALL-IN-ONE ESS": "All-in-One ESS",
    "SOLAR STREET LIGHTS": "Solar Street Lights",
  };
  return map[category] ?? category;
}

function effectivePowerOrCapacity(product: (typeof catalogProducts)[number]) {
  return Math.max(
    product.maxPowerKw,
    product.powerKw,
    product.capacityKwh
  );
}

export function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPowerRanges, setSelectedPowerRanges] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const categories = useMemo(
    () =>
      Array.from(new Set(catalogProducts.map((p) => p.category))).sort(),
    []
  );

  const brands = useMemo(
    () =>
      Array.from(
        new Set(catalogProducts.map((p) => p.brand).filter(Boolean))
      ).sort() as string[],
    []
  );

  const toggle = (
    value: string,
    selected: string[],
    setSelected: (v: string[]) => void
  ) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedPowerRanges([]);
    setSortBy("featured");
  };

  const activeFilterCount =
    selectedCategories.length +
    selectedBrands.length +
    selectedPowerRanges.length +
    (searchQuery ? 1 : 0);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    let result = catalogProducts.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesBrand =
        selectedBrands.length === 0 ||
        (product.brand && selectedBrands.includes(product.brand));

      const value = effectivePowerOrCapacity(product);
      const matchesPower =
        selectedPowerRanges.length === 0 ||
        selectedPowerRanges.some((id) => {
          const range = POWER_RANGES.find((r) => r.id === id);
          if (!range) return false;
          if (range.max === Infinity) return value >= range.min;
          return value >= range.min && value < range.max;
        });

      const matchesSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.brand?.toLowerCase() ?? "").includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      return matchesCategory && matchesBrand && matchesPower && matchesSearch;
    });

    switch (sortBy) {
      case "name-asc":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "power-asc":
        result = [...result].sort(
          (a, b) => effectivePowerOrCapacity(a) - effectivePowerOrCapacity(b)
        );
        break;
      case "power-desc":
        result = [...result].sort(
          (a, b) => effectivePowerOrCapacity(b) - effectivePowerOrCapacity(a)
        );
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, selectedBrands, selectedPowerRanges, sortBy]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        {/* Filters */}
        <aside className="space-y-8">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="mono-label text-accent">Filters</h2>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                >
                  <X className="h-3 w-3" />
                  Clear ({activeFilterCount})
                </button>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex cursor-pointer items-center gap-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() =>
                          toggle(
                            category,
                            selectedCategories,
                            setSelectedCategories
                          )
                        }
                        className="h-4 w-4 rounded border-border accent-accent"
                      />
                      {displayCategory(category)}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Brand
                </h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label
                      key={brand}
                      className="flex cursor-pointer items-center gap-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() =>
                          toggle(brand, selectedBrands, setSelectedBrands)
                        }
                        className="h-4 w-4 rounded border-border accent-accent"
                      />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  Power / Capacity
                </h3>
                <div className="space-y-2">
                  {POWER_RANGES.map((range) => (
                    <label
                      key={range.id}
                      className="flex cursor-pointer items-center gap-3 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPowerRanges.includes(range.id)}
                        onChange={() =>
                          toggle(
                            range.id,
                            selectedPowerRanges,
                            setSelectedPowerRanges
                          )
                        }
                        className="h-4 w-4 rounded border-border accent-accent"
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product grid */}
        <section>
          <span className="mono-label text-accent">INDUSTRIAL PRODUCT SHOP</span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Shop</h1>
          <p className="mt-4 max-w-2xl text-muted">
            Select components for your solar project and add them to your cart.
            Our engineering team will prepare a tailored quotation based on your
            selection, site conditions, and delivery location across Egypt and the
            MENA region.
          </p>

          {/* Search & sort */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands, SKUs..."
                className="w-full rounded-full border border-border bg-white py-2 pl-10 pr-4 text-sm outline-none ring-accent transition focus:border-accent focus:ring-1"
              />
            </div>

            <div className="flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-muted" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm outline-none ring-accent transition focus:border-accent focus:ring-1"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted">
            Showing {filteredProducts.length} of {catalogProducts.length}{" "}
            products
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-16 rounded-2xl border border-border bg-white p-12 text-center shadow-sm">
              <p className="text-muted">
                No products match your filters. Try adjusting your search or
                clearing some filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent/90"
              >
                <X className="h-4 w-4" />
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

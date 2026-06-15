import { describe, it, expect } from "vitest";
import { calculateProjectScope, formatPower, formatCapacity } from "@/lib/calculations";
import { allProducts } from "@/data/products";

describe("calculateProjectScope", () => {
  it("sums power, capacity, and footprint by quantity", () => {
    const items = [
      { productId: "inv-x400", quantity: 2 },
      { productId: "lfp-m50", quantity: 4 },
    ];

    const scope = calculateProjectScope(items, allProducts);

    expect(scope.totalPowerOutputKw).toBe(400 * 2); // 800
    expect(scope.nominalCapacityKwh).toBe(50 * 4); // 200
    expect(scope.footprintM2).toBe(2.4 * 2 + 1.2 * 4);
    expect(scope.inputRequirements).toBe("3-Phase 480V");
  });

  it("returns zero totals for empty basket", () => {
    const scope = calculateProjectScope([], allProducts);
    expect(scope.totalPowerOutputKw).toBe(0);
    expect(scope.nominalCapacityKwh).toBe(0);
    expect(scope.footprintM2).toBe(0);
  });
});

describe("formatPower", () => {
  it("formats kW values", () => {
    expect(formatPower(400)).toBe("400 kW");
  });

  it("converts to MW when >= 1000", () => {
    expect(formatPower(1500)).toBe("1.5 MW");
  });
});

describe("formatCapacity", () => {
  it("formats kWh values", () => {
    expect(formatCapacity(600)).toBe("600 kWh");
  });

  it("converts to MWh when >= 1000", () => {
    expect(formatCapacity(2000)).toBe("2.0 MWh");
  });
});

import { Product, ProjectScope, CartItem } from "@/types";
import { getProductById } from "@/data/products";

export function calculateProjectScope(
  items: CartItem[],
  products: Product[]
): ProjectScope {
  let totalPowerOutputKw = 0;
  let nominalCapacityKwh = 0;
  let footprintM2 = 0;

  const productMap = new Map(products.map((p) => [p.id, p]));

  for (const item of items) {
    const product = productMap.get(item.productId);
    if (!product) continue;

    totalPowerOutputKw += product.powerKw * item.quantity;
    nominalCapacityKwh += product.capacityKwh * item.quantity;
    footprintM2 += product.footprintM2 * item.quantity;
  }

  // Infer input requirements from dominant power product
  const powerItems = items
    .map((item) => ({ item, product: productMap.get(item.productId) }))
    .filter(({ product }) => product && product.powerKw > 0);

  const inputRequirements =
    powerItems.length > 0
      ? powerItems[0].product!.inputRequirements
      : "3-Phase 480V";

  return {
    totalPowerOutputKw,
    nominalCapacityKwh,
    footprintM2: Math.round(footprintM2 * 10) / 10,
    inputRequirements,
  };
}

export function formatPower(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(1)} MW`;
  return `${Math.round(value)} kW`;
}

export function formatCapacity(value: number): string {
  if (value >= 1000) return `${(value / 1000).toFixed(1)} MWh`;
  return `${Math.round(value)} kWh`;
}

export function generateReferenceId(prefix = "NE-CFG"): string {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${random}`;
}

export function generateQuoteReference(): string {
  const now = new Date();
  const year = now.getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `QT-${year}-NE-${random}`;
}

export function enrichCartItems(
  items: CartItem[],
  products: Product[] = []
): (CartItem & { product: Product })[] {
  return items
    .map((item) => {
      const product =
        products.find((p) => p.id === item.productId) || getProductById(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean) as (CartItem & { product: Product })[];
}

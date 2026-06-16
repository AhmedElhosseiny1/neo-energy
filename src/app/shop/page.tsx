import type { Metadata } from "next";
import { ShopPage } from "@/components/ShopPage";

export const metadata: Metadata = {
  title: "Shop | Neo Energy Solutions",
  description:
    "Browse solar panels, inverters, batteries, energy storage systems, cables, and street lighting from trusted brands for projects across Egypt and MENA.",
};

export default function Shop() {
  return <ShopPage />;
}

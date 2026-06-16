"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { FileText } from "lucide-react";
import { CartPdf } from "@/components/CartPdf";
import { CartItem, Product } from "@/types";

interface CartPdfDownloadProps {
  items: CartItem[];
  products: Product[];
  referenceId: string;
}

export function CartPdfDownload({
  items,
  products,
  referenceId,
}: CartPdfDownloadProps) {
  return (
    <PDFDownloadLink
      document={
        <CartPdf items={items} products={products} referenceId={referenceId} />
      }
      fileName={`neo-cart-${referenceId}.pdf`}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:-translate-y-px hover:border-accent hover:text-accent"
    >
      <FileText className="h-4 w-4" />
      Download Cart PDF
    </PDFDownloadLink>
  );
}

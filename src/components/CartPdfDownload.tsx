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
      className="flex items-center gap-2 text-muted hover:text-accent"
    >
      <FileText className="h-4 w-4" />
      Download Cart PDF
    </PDFDownloadLink>
  );
}

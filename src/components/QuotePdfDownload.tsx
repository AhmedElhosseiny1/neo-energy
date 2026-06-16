"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { CartPdf } from "@/components/CartPdf";
import { useAnalytics } from "@/hooks/useAnalytics";
import { CartItem, ConfigurationDraft, Product, QuoteRequest } from "@/types";

interface QuotePdfDownloadProps {
  items: CartItem[];
  products: Product[];
  referenceId: string;
  configuration: ConfigurationDraft;
  quote: QuoteRequest;
  submittedAt?: string | null;
}

export function QuotePdfDownload({
  items,
  products,
  referenceId,
  configuration,
  quote,
  submittedAt,
}: QuotePdfDownloadProps) {
  const { track } = useAnalytics();

  return (
    <span
      onClick={() =>
        track("pdf_downloaded", {
          reference_id: referenceId,
          product_count: items.reduce((sum, i) => sum + i.quantity, 0),
          email: quote.email,
        })
      }
    >
      <PDFDownloadLink
      document={
        <CartPdf
          items={items}
          products={products}
          referenceId={referenceId}
          configuration={configuration}
          quote={quote}
          submittedAt={submittedAt}
        />
      }
      fileName={`neo-energy-quote-${referenceId}.pdf`}
      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-dark"
    >
      <Download className="h-4 w-4" /> Download PDF
    </PDFDownloadLink>
    </span>
  );
}

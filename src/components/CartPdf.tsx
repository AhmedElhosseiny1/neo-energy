"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Svg,
  G,
  Circle,
} from "@react-pdf/renderer";
import {
  CartItem,
  ConfigurationDraft,
  Product,
  QuoteRequest,
} from "@/types";
import { calculateProjectScope } from "@/lib/calculations";

Font.register({
  family: "Helvetica",
  fonts: [
    { src: "Helvetica" },
    { src: "Helvetica-Bold", fontWeight: "bold" },
  ],
});

const forest = "#183C2E";
const sage = "#EEF6EA";
const neutral600 = "#66736D";
const neutral300 = "#DDE5DC";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: "#111513",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: forest,
    paddingBottom: 20,
    marginBottom: 30,
  },
  logoSvg: { width: 140, height: 52 },
  reference: { textAlign: "right" },
  refLabel: {
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: neutral600,
  },
  refValue: { fontSize: 18, fontWeight: "bold", marginTop: 4 },
  section: { marginBottom: 20 },
  twoColumn: { flexDirection: "row", justifyContent: "space-between", gap: 20 },
  column: { flex: 1 },
  label: {
    fontSize: 8,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: neutral600,
    marginBottom: 4,
  },
  value: { fontSize: 11, marginBottom: 8 },
  categoryBox: { backgroundColor: sage, padding: 10, marginTop: 10 },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: neutral300,
    paddingBottom: 6,
    marginBottom: 6,
    fontWeight: "bold",
    fontSize: 9,
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: neutral600,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: neutral300,
    paddingVertical: 8,
  },
  cellSku: { width: "20%" },
  cellDesc: { width: "50%", paddingRight: 10 },
  cellQty: { width: "15%", textAlign: "center" },
  cellLead: { width: "15%", textAlign: "right" },
  badge: {
    borderWidth: 1,
    borderColor: neutral300,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
    fontSize: 9,
  },
  footer: {
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: neutral300,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  note: {
    backgroundColor: sage,
    padding: 10,
    marginTop: 20,
  },
});

interface CartPdfProps {
  items: CartItem[];
  products: Product[];
  referenceId: string;
  configuration?: ConfigurationDraft;
  quote?: QuoteRequest | null;
  submittedAt?: string | null;
}

export function CartPdf({
  items,
  products,
  referenceId,
  configuration,
  quote,
  submittedAt,
}: CartPdfProps) {
  const scope = calculateProjectScope(items, products);
  const enriched = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean) as Array<CartItem & { product: Product }>;

  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logoSvg}>
            <Svg viewBox="0 0 220 90">
              <G>
                <Text
                  x="0"
                  y="62"
                  style={{ fontSize: 72, fontWeight: "bold", fill: forest }}
                >
                  neo
                </Text>
                <Text
                  x="132"
                  y="75"
                  style={{ fontSize: 17, fontWeight: "bold", fill: forest }}
                >
                  ENERGY
                </Text>
                <Circle cx="204" cy="14" r="7" stroke={forest} strokeWidth="1.5" />
                <Text
                  x="204"
                  y="17"
                  textAnchor="middle"
                  style={{ fontSize: 8, fontWeight: "bold", fill: forest }}
                >
                  R
                </Text>
              </G>
            </Svg>
          </View>
          <View style={styles.reference}>
            <Text style={styles.refLabel}>Document Reference</Text>
            <Text style={styles.refValue}>{referenceId}</Text>
            <Text style={{ marginTop: 4, color: neutral600 }}>Issued: {today}</Text>
            <Text style={{ color: neutral600 }}>Validity: 30 Days from Issuance</Text>
          </View>
        </View>

        {quote && (
          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <Text style={styles.label}>Customer Profile</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>{quote.fullName}</Text>
              <Text style={styles.value}>{quote.companyName}</Text>
              <Text style={styles.value}>{quote.email}</Text>

              {configuration && configuration.installationLocation && (
                <>
                  <Text style={[styles.label, { marginTop: 12 }]}>
                    Installation Location
                  </Text>
                  <Text style={styles.value}>{configuration.installationLocation}</Text>
                </>
              )}
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Engineering Contact</Text>
              <Text style={{ fontWeight: "bold" }}>
                Neo Energy Engineering Team
              </Text>
              <Text style={styles.value}>info@neo-es.com</Text>

              <View style={styles.categoryBox}>
                <Text style={styles.label}>Solution Category</Text>
                <Text>Industrial Scale Solar & Energy Storage System</Text>
              </View>
            </View>
          </View>
        )}

        <View style={[styles.section, { marginTop: quote ? 30 : 0 }]}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            {quote ? "Technical Configuration" : "Selected Components"}
          </Text>
          <Text style={{ color: neutral600, marginBottom: 10 }}>
            {quote
              ? "Detailed breakdown of selected hardware and system integration components."
              : "Components currently saved in your cart for quotation."}
          </Text>

          <View style={styles.tableHeader}>
            <Text style={styles.cellSku}>SKU / Model</Text>
            <Text style={styles.cellDesc}>Description</Text>
            <Text style={styles.cellQty}>QTY</Text>
            <Text style={styles.cellLead}>Lead Time</Text>
          </View>

          {enriched.map(({ product, quantity }) => (
            <View key={product.id} style={styles.tableRow}>
              <Text style={styles.cellSku}>{product.sku}</Text>
              <View style={styles.cellDesc}>
                <Text style={{ fontWeight: "bold" }}>{product.name}</Text>
                {product.specs.slice(0, 3).map((spec) => (
                  <Text key={spec.label} style={{ color: neutral600 }}>
                    • {spec.label}: {spec.value}
                  </Text>
                ))}
              </View>
              <Text style={styles.cellQty}>
                {quantity.toString().padStart(2, "0")}
              </Text>
              <Text style={styles.cellLead}>{product.leadTime}</Text>
            </View>
          ))}
        </View>

        <View style={styles.twoColumn}>
          <View style={styles.column}>
            <Text style={styles.label}>Compliance & Standards</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {["IEEE 1547-2018", "UL 9540A", "IEC 62109-1/-2"].map((cert) => (
                <Text key={cert} style={styles.badge}>
                  {cert}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Quality Assurance</Text>
            <Text style={[styles.badge, { borderColor: forest, color: forest }]}>
              ISO 9001:2015 CERTIFIED
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.label, { marginTop: 20 }]}>
            Aggregated Project Scope
          </Text>
          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <Text>Total Power Output: {scope.totalPowerOutputKw} kW</Text>
              <Text>Nominal Capacity: {scope.nominalCapacityKwh} kWh</Text>
            </View>
            <View style={styles.column}>
              <Text>Footprint Required: ~{scope.footprintM2} m²</Text>
              <Text>Input Requirements: {scope.inputRequirements}</Text>
            </View>
          </View>
        </View>

        <View style={styles.note}>
          <Text style={{ fontWeight: "bold", color: forest }}>
            Technical Note on Integration
          </Text>
          <Text style={{ marginTop: 4, color: neutral600 }}>
            The lead times indicated are estimates based on current supply chain
            availability. Final schedules are subject to technical site survey
            verification and local utility interconnection approvals.
          </Text>
        </View>

        <View style={styles.footer}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Neo Energy Solutions</Text>
            <Text style={{ color: neutral600 }}>Renewable Energy Solutions</Text>
            <Text style={{ color: neutral600 }}>Egypt • Levant • North Africa</Text>
          </View>
          <View style={{ textAlign: "right" }}>
            <Text style={{ color: neutral600 }}>
              © 2024 Neo Energy Solutions. All Rights Reserved.
            </Text>
            {submittedAt && (
              <Text style={{ color: neutral600 }}>
                Submitted: {new Date(submittedAt).toLocaleString()}
              </Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

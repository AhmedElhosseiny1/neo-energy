import { describe, it, expect } from "vitest";
import { configurationDraftSchema, quoteRequestSchema } from "@/lib/validation";

describe("configurationDraftSchema", () => {
  it("validates a complete configuration", () => {
    const result = configurationDraftSchema.safeParse({
      industryType: "Industrial Manufacturing",
      projectSize: "2.5 MW",
      powerRequirements: "Max Peak Load",
      installationLocation: "Berlin, Germany",
      timeline: "fy2025",
    });
    expect(result.success).toBe(true);
  });

  it("fails when required fields are missing", () => {
    const result = configurationDraftSchema.safeParse({
      industryType: "",
      projectSize: "",
      powerRequirements: "",
      installationLocation: "",
      timeline: "",
    });
    expect(result.success).toBe(false);
  });
});

describe("quoteRequestSchema", () => {
  it("validates a complete quote request", () => {
    const result = quoteRequestSchema.safeParse({
      fullName: "Alexander Vance",
      companyName: "Global Infra Logistics S.A.",
      email: "alex.vance@example.com",
      projectSummary: "We need a 2.5 MW BESS for our manufacturing facility.",
      includeDatasheets: true,
      includeDrawings: false,
      includeWhitepaper: false,
      preferredContact: "email",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = quoteRequestSchema.safeParse({
      fullName: "Alexander Vance",
      companyName: "Global Infra Logistics S.A.",
      email: "not-an-email",
      projectSummary: "We need a 2.5 MW BESS for our manufacturing facility.",
      includeDatasheets: true,
      includeDrawings: false,
      includeWhitepaper: false,
      preferredContact: "email",
    });
    expect(result.success).toBe(false);
  });
});

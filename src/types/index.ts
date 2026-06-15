export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  sku: string;
  category: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  specs: ProductSpec[];
  powerKw: number;
  capacityKwh: number;
  footprintM2: number;
  inputRequirements: string;
  leadTime: string;
  industries: string[];
  certifications: string[];
  minPowerKw: number;
  maxPowerKw: number;
  compatibleWith?: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface ConfigurationDraft {
  industryType: string;
  projectSize: string;
  powerRequirements: string;
  installationLocation: string;
  timeline: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  projectCountry?: string;
  projectSummary: string;
  includeDatasheets: boolean;
  includeDrawings: boolean;
  includeWhitepaper: boolean;
  preferredContact: "email" | "phone";
}

export interface ProjectScope {
  totalPowerOutputKw: number;
  nominalCapacityKwh: number;
  footprintM2: number;
  inputRequirements: string;
}

export type TimelineOption = {
  id: string;
  label: string;
  sublabel: string;
};

export const INDUSTRY_OPTIONS = [
  "Utility Scale",
  "Industrial Manufacturing",
  "Commercial Real Estate",
  "Agriculture & Remote",
  "Data Center",
  "Microgrid",
] as const;

export type IndustryType = (typeof INDUSTRY_OPTIONS)[number];

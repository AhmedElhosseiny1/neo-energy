import { z } from "zod";

export const configurationDraftSchema = z.object({
  industryType: z.string().min(1, "Please select an industry sector"),
  projectSize: z.string().min(1, "Please enter the project size"),
  powerRequirements: z.string().min(1, "Please enter the power requirements"),
  installationLocation: z
    .string()
    .min(1, "Please enter the installation location"),
  timeline: z.string().min(1, "Please select an expected timeline"),
});

export const quoteRequestSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectCountry: z.string().optional(),
  projectSummary: z.string().optional(),
});

export type ConfigurationDraftValues = z.infer<typeof configurationDraftSchema>;
export type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;

import { z } from "zod";

export const onboardingSchema = z.object({
  // Step 1: Identity
  name: z.string().min(2, "Organization name must be at least 2 characters"),
  logo: z.string().optional(),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Must be lowercase with only letters, numbers, and hyphens"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  business_address: z.string().min(1, "Business address is required"),
  business_phone: z.string().min(1, "Phone number is required"),
  business_type: z.enum([
    "individual_entrepreneur", "woman_entrepreneur", "limited_company",
    "partnership", "non_profit", "cooperative", "public_entity", "other",
  ]),
  registration_number: z.string().min(1, "Registration number is required"),
  vat_number: z.string().optional(),
  establishment_date: z.string().min(1, "Establishment date is required"),

  // Step 2: Details
  description: z.string().min(50, "Description should be at least 50 characters"),
  website_url: z.string().url("Enter a valid URL").or(z.literal("")),
  team_size: z.string().min(1, "Team size is required"),
  maturity_level: z.enum(["idea", "startup", "sme", "enterprise", "research_lab", "university", "government"]),
  facebook: z.string().url("Enter a valid URL").or(z.literal("")).optional(),
  linkedin: z.string().url("Enter a valid URL").or(z.literal("")).optional(),
  x: z.string().url("Enter a valid URL").or(z.literal("")).optional(),
  instagram: z.string().url("Enter a valid URL").or(z.literal("")).optional(),
  project_links: z.array(z.string().url("Enter a valid URL").or(z.literal(""))).optional(),

  // Step 3: Ecosystem
  ai_specializations: z.array(z.string()).min(1, "Select at least one AI specialization"),
  sectors: z.array(z.string()).min(1, "Select at least one sector"),

  // Step 4: Visibility
  contact_email: z.string().email("Enter a valid contact email"),
  collaboration_ready: z.boolean(),
});

export type OnboardingData = z.infer<typeof onboardingSchema>;

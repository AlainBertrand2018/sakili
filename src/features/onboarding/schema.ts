import { z } from "zod";

export const onboardingSchema = z.object({
  // Step 1: Basic
  name: z.string().min(2, "Organization name must be at least 2 characters"),
  slug: z.string().min(2, "Slug must be at least 2 characters").regex(/^[a-z0-9-]+$/, "Slug must be lowercase and contain only letters, numbers, and hyphens"),
  country: z.string().min(2, "Please select a country"),
  city: z.string().min(1, "City is required"),
  
  // Step 2: Details
  description: z.string().min(50, "Description should be at least 50 characters for institutional clarity"),
  website_url: z.string().url("Please enter a valid URL").or(z.literal("")),
  team_size: z.string().min(1, "Team size is required"),
  maturity_level: z.enum(['idea', 'startup', 'sme', 'enterprise', 'research_lab', 'university', 'government']),
  
  // Step 3: Ecosystem (Taxonomies)
  capabilities: z.array(z.string()).min(1, "Select at least one AI capability"),
  sectors: z.array(z.string()).min(1, "Select at least one sector"),
  
  // Step 4: Contact
  contact_email: z.string().email("Please enter a valid contact email"),
  collaboration_ready: z.boolean(),
});

export type OnboardingData = z.infer<typeof onboardingSchema>;

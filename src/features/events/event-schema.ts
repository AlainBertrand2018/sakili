import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  logo: z.string().optional(),
  cover: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(50, "Description should be at least 50 characters"),
  start_date: z.string().min(1, "Start date is required"),
  end_date: z.string().min(1, "End date is required"),
  location: z.string().min(1, "Location is required"),
  organizer: z.string().min(1, "Organizer name is required"),
  website_url: z.string().url("Enter a valid URL").or(z.literal("")),
  contact_email: z.string().email("Enter a valid email").or(z.literal("")),
  tags: z.array(z.string()).optional(),
});

export type EventData = z.infer<typeof eventSchema>;

export const eventCategories = [
  "Conference", "Hackathon", "Symposium", "Workshop",
  "Meetup", "Webinar", "Summit", "Bootcamp",
  "Challenge", "Expo", "Panel", "Networking",
] as const;

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Upload, X, Calendar, MapPin, Globe, Mail, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { eventSchema, eventCategories, type EventData } from "./event-schema";

const suggestedTags = [
  "AI", "Machine Learning", "Generative AI", "Data Science",
  "Robotics", "Computer Vision", "NLP", "Cloud",
  "Startups", "Research", "Policy & Ethics", "Agriculture",
  "Health Tech", "Fintech", "Education", "Open Source",
];

export function EventCreateForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);
  const [coverPreview, setCoverPreview] = React.useState<string | null>(null);

  const form = useForm<EventData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      logo: "",
      cover: "",
      category: "",
      description: "",
      start_date: "",
      end_date: "",
      location: "",
      organizer: "",
      website_url: "",
      contact_email: "",
      tags: [],
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (v: string | null) => void, field: "logo" | "cover") => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result as string;
        setter(dataUrl);
        form.setValue(field, dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTag = (tag: string) => {
    const current = form.getValues("tags") || [];
    if (current.includes(tag)) {
      form.setValue("tags", current.filter((t) => t !== tag));
    } else {
      form.setValue("tags", [...current, tag]);
    }
  };

  async function onSubmit(data: EventData) {
    setIsSubmitting(true);
    console.log("Event data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    router.push("/events");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-card border border-border p-8 rounded-3xl shadow-lg space-y-6">
          {/* Cover Image */}
          <div className="space-y-2">
            <Label>Cover Image / Banner</Label>
            <div className="relative h-44 rounded-2xl border-2 border-dashed border-border bg-muted flex items-center justify-center overflow-hidden">
              {coverPreview ? (
                <>
                  <img src={coverPreview} alt="Cover" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => { setCoverPreview(null); form.setValue("cover", ""); }}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center gap-2 text-text-muted hover:text-foreground transition-colors">
                  <Upload className="h-8 w-8" />
                  <span className="text-sm font-medium">Upload banner image</span>
                  <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setCoverPreview, "cover")} className="hidden" />
                </label>
              )}
            </div>
          </div>

          {/* Logo + Title row */}
          <div className="flex items-start gap-6">
            <div className="space-y-2 shrink-0">
              <Label>Logo</Label>
              <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-border bg-muted flex items-center justify-center overflow-hidden">
                {logoPreview ? (
                  <img src={logoPreview} alt="Logo" className="h-full w-full object-contain" />
                ) : (
                  <label className="cursor-pointer p-4">
                    <Upload className="h-6 w-6 text-text-muted hover:text-foreground transition-colors" />
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, setLogoPreview, "logo")} className="hidden" />
                  </label>
                )}
              </div>
              {logoPreview && (
                <button type="button" onClick={() => { setLogoPreview(null); form.setValue("logo", ""); }} className="text-xs text-destructive hover:underline block mt-1">
                  Remove
                </button>
              )}
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input {...form.register("title")} placeholder="e.g. AI for Agriculture Symposium" className="bg-muted h-12 rounded-xl border-border" />
              {form.formState.errors.title && <p className="text-xs text-destructive">{form.formState.errors.title.message}</p>}
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => form.setValue("category", cat)}
                  className={`px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                    form.watch("category") === cat
                      ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-muted border-border text-text-muted hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {form.formState.errors.category && <p className="text-xs text-destructive">{form.formState.errors.category.message}</p>}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              {...form.register("description")}
              placeholder="Describe your event — theme, goals, target audience, and what attendees can expect..."
              className="bg-muted min-h-[140px] rounded-xl resize-none border-border"
            />
            <p className="text-[10px] text-text-muted uppercase tracking-widest text-right">Min 50 characters</p>
            {form.formState.errors.description && <p className="text-xs text-destructive">{form.formState.errors.description.message}</p>}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start_date">Start Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                <Input type="date" {...form.register("start_date")} className="pl-10 bg-muted h-12 rounded-xl border-border" />
              </div>
              {form.formState.errors.start_date && <p className="text-xs text-destructive">{form.formState.errors.start_date.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="end_date">End Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                <Input type="date" {...form.register("end_date")} className="pl-10 bg-muted h-12 rounded-xl border-border" />
              </div>
              {form.formState.errors.end_date && <p className="text-xs text-destructive">{form.formState.errors.end_date.message}</p>}
            </div>
          </div>

          {/* Location + Organizer */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                <Input {...form.register("location")} placeholder="e.g. Port Louis, Mauritius" className="pl-10 bg-muted h-12 rounded-xl border-border" />
              </div>
              {form.formState.errors.location && <p className="text-xs text-destructive">{form.formState.errors.location.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="organizer">Organizer</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                <Input {...form.register("organizer")} placeholder="Organization name" className="pl-10 bg-muted h-12 rounded-xl border-border" />
              </div>
              {form.formState.errors.organizer && <p className="text-xs text-destructive">{form.formState.errors.organizer.message}</p>}
            </div>
          </div>

          {/* Website + Email */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="website_url">Event Website</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                <Input {...form.register("website_url")} placeholder="https://event.com" className="pl-10 bg-muted h-12 rounded-xl border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact_email">Contact Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                <Input {...form.register("contact_email")} placeholder="organizer@event.com" className="pl-10 bg-muted h-12 rounded-xl border-border" />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">Tags <span className="text-text-muted text-[10px]">(optional)</span></Label>
            <div className="flex flex-wrap gap-2">
              {suggestedTags.map((tag) => {
                const selected = (form.watch("tags") || []).includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                      selected
                        ? "bg-accent border-accent text-accent-foreground"
                        : "bg-muted border-border text-text-muted hover:border-accent/50"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex items-center justify-between pt-2">
          <Button type="button" variant="ghost" onClick={() => router.back()} className="text-text-secondary hover:text-foreground h-12 px-6 rounded-xl">
            Cancel
          </Button>
          <Button disabled={isSubmitting} type="submit" className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-10 h-12 rounded-xl shadow-lg shadow-primary/20">
            {isSubmitting ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="h-5 w-5 border-2 border-primary/20 border-t-primary rounded-full mr-2" />
            ) : null}
            Publish Event
          </Button>
        </div>
      </form>
    </div>
  );
}

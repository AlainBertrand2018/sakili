"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowLeft, Check, Info, Globe, Building2, Zap, Users,
  Upload, X, Plus, Link, Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { onboardingSchema, type OnboardingData } from "./schema";

const steps = [
  { id: 1, title: "Identity", icon: Building2 },
  { id: 2, title: "Details", icon: Info },
  { id: 3, title: "Ecosystem", icon: Zap },
  { id: 4, title: "Visibility", icon: Users },
];

const businessTypes = [
  { value: "individual_entrepreneur", label: "Individual Entrepreneur" },
  { value: "woman_entrepreneur", label: "Woman Entrepreneur" },
  { value: "limited_company", label: "Limited Company" },
  { value: "partnership", label: "Partnership" },
  { value: "non_profit", label: "Non-Profit Organization" },
  { value: "cooperative", label: "Cooperative" },
  { value: "public_entity", label: "Public Entity" },
  { value: "other", label: "Other" },
];

const aiSpecializations = [
  "Web Apps", "Mobile Apps", "Desktop Apps", "API Development",
  "Cloud Solutions", "DevOps & Infrastructure", "UI/UX Design",
  "Consultancy & Advisory", "Training & Courses", "Technical Writing",
  "Data Annotation & Labeling", "Data Collection & Curation",
  "Data Analytics & Visualization", "Business Intelligence",
  "Market Research & Analysis", "Natural Language Processing",
  "Computer Vision", "Machine Learning", "Deep Learning",
  "Generative AI", "Large Language Models", "Speech & Audio",
  "Recommender Systems", "Predictive Modeling", "Anomaly Detection",
  "Robotics & Automation", "IoT & Edge AI", "Embedded Systems",
  "Blockchain & Web3", "Cybersecurity & AI Safety",
  "Ethical AI & Governance", "AI Strategy & Roadmapping",
  "Prompt Engineering", "AI Integration & Deployment",
  "AI Testing & QA", "AI Content Generation",
  "AI Search & Retrieval", "Knowledge Graphs",
  "Federated Learning", "Model Optimization",
  "Research & Development", "Prototyping & MVP",
  "System Integration", "Database Design",
  "E-commerce Solutions", "Digital Marketing & SEO",
];

const sectors = [
  "Agriculture", "Health & Healthcare", "Finance & Fintech",
  "Education & EdTech", "Government & Public Sector",
  "Energy & Utilities", "Transportation & Logistics",
  "Telecommunications", "Media & Entertainment",
  "Retail & E-commerce", "Real Estate & Construction",
  "Mining & Natural Resources", "Manufacturing",
  "Hospitality & Tourism", "Sports & Recreation",
  "Legal & Compliance", "Insurance & Risk Management",
  "Environmental & Climate Tech", "Non-Profit & Social Impact",
  "Defense & Security", "Maritime & Blue Economy",
  "Creative Arts & Culture", "Aerospace & Aviation",
  "Infrastructure",
];

const teamSizes = ["1-10", "11-50", "51-200", "201-500", "500+"];
const maturityLevels = [
  { value: "idea", label: "Idea / Concept" },
  { value: "startup", label: "Startup" },
  { value: "sme", label: "SME" },
  { value: "enterprise", label: "Enterprise" },
  { value: "research_lab", label: "Research Lab" },
  { value: "university", label: "University" },
  { value: "government", label: "Government" },
];

export function OnboardingForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);

  const form = useForm<OnboardingData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(onboardingSchema) as any,
    defaultValues: {
      name: "",
      logo: "",
      slug: "",
      country: "",
      city: "",
      business_address: "",
      business_phone: "",
      business_type: "individual_entrepreneur",
      registration_number: "",
      vat_number: "",
      establishment_date: "",
      description: "",
      website_url: "",
      team_size: "1-10",
      maturity_level: "startup",
      facebook: "",
      linkedin: "",
      x: "",
      instagram: "",
      project_links: [""],
      ai_specializations: [],
      sectors: [],
      contact_email: "",
      collaboration_ready: true,
    },
  });

  const [projectLinks, setProjectLinks] = React.useState<string[]>([""]);

  const addProjectLink = () => setProjectLinks((prev) => [...prev, ""]);
  const removeProjectLink = (idx: number) => setProjectLinks((prev) => prev.filter((_, i) => i !== idx));
  const updateProjectLink = (idx: number, value: string) => {
    setProjectLinks((prev) => {
      const next = [...prev];
      next[idx] = value;
      return next;
    });
    form.setValue("project_links", projectLinks.map((v, i) => (i === idx ? value : v)));
  };

  const nextStep = async () => {
    const fieldsList = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsList as any);
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1: return [
        "name", "slug", "country", "city", "business_address",
        "business_phone", "business_type", "registration_number",
        "vat_number", "establishment_date",
      ];
      case 2: return [
        "description", "website_url", "team_size", "maturity_level",
      ];
      case 3: return ["ai_specializations", "sectors"];
      case 4: return ["contact_email", "collaboration_ready"];
      default: return [];
    }
  };

  async function onSubmit(data: OnboardingData) {
    setIsSubmitting(true);
    console.log("Submitting:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    router.push("/dashboard");
  }

  const toggleSpecialization = (spec: string) => {
    const current = form.getValues("ai_specializations");
    if (current.includes(spec)) {
      form.setValue("ai_specializations", current.filter((s) => s !== spec));
    } else {
      form.setValue("ai_specializations", [...current, spec]);
    }
    form.trigger("ai_specializations");
  };

  const toggleSector = (sector: string) => {
    const current = form.getValues("sectors");
    if (current.includes(sector)) {
      form.setValue("sectors", current.filter((s) => s !== sector));
    } else {
      form.setValue("sectors", [...current, sector]);
    }
    form.trigger("sectors");
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const dataUrl = ev.target?.result as string;
        setLogoPreview(dataUrl);
        form.setValue("logo", dataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex justify-between mb-12 relative">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
            <div
              className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                currentStep === step.id
                  ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : currentStep > step.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-background border-border text-text-muted"
              )}
            >
              {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
            </div>
            <span className={cn("text-[10px] font-bold uppercase tracking-widest", currentStep === step.id ? "text-primary" : "text-text-muted")}>
              {step.title}
            </span>
          </div>
        ))}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-border -z-10" />
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border p-8 rounded-3xl shadow-lg"
          >
            {/* ─── Step 1: Identity ─── */}
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label>Company Logo</Label>
                  <div className="flex items-center gap-6">
                    <div className="h-20 w-20 rounded-2xl border-2 border-dashed border-border bg-muted flex items-center justify-center overflow-hidden shrink-0">
                      {logoPreview ? (
                        <img src={logoPreview} alt="Logo" className="h-full w-full object-contain" />
                      ) : (
                        <Upload className="h-6 w-6 text-text-muted" />
                      )}
                    </div>
                    <label className="cursor-pointer">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
                        <Upload className="h-4 w-4" />
                        Upload Logo
                      </span>
                      <input type="file" accept="image/*" onChange={handleLogoUpload} className="hidden" />
                    </label>
                    {logoPreview && (
                      <button type="button" onClick={() => { setLogoPreview(null); form.setValue("logo", ""); }} className="text-destructive text-sm hover:underline">
                        Remove
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Organization Name</Label>
                  <Input {...form.register("name")} placeholder="e.g. SAKILI AI Labs" className="bg-muted h-12 rounded-xl border-border" />
                  {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL Identifier)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm font-mono">/</span>
                    <Input {...form.register("slug")} placeholder="sakili-ai-labs" className="pl-6 bg-muted h-12 rounded-xl border-border font-mono" />
                  </div>
                  {form.formState.errors.slug && <p className="text-xs text-destructive">{form.formState.errors.slug.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input {...form.register("country")} placeholder="Mauritius" className="bg-muted h-12 rounded-xl border-border" />
                    {form.formState.errors.country && <p className="text-xs text-destructive">{form.formState.errors.country.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input {...form.register("city")} placeholder="Port Louis" className="bg-muted h-12 rounded-xl border-border" />
                    {form.formState.errors.city && <p className="text-xs text-destructive">{form.formState.errors.city.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business_address">Business Address</Label>
                  <Input {...form.register("business_address")} placeholder="Street, building, postal code" className="bg-muted h-12 rounded-xl border-border" />
                  {form.formState.errors.business_address && <p className="text-xs text-destructive">{form.formState.errors.business_address.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="business_phone">Business Phone / WhatsApp</Label>
                    <Input {...form.register("business_phone")} placeholder="+230 5XXX XXXX" className="bg-muted h-12 rounded-xl border-border" />
                    {form.formState.errors.business_phone && <p className="text-xs text-destructive">{form.formState.errors.business_phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="business_type">Business Type</Label>
                    <select {...form.register("business_type")} className="w-full bg-muted h-12 rounded-xl border border-border px-3 text-sm focus:outline-none focus:border-primary">
                      {businessTypes.map((bt) => (
                        <option key={bt.value} value={bt.value} className="bg-background">{bt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="registration_number">Business Registration Number</Label>
                    <Input {...form.register("registration_number")} placeholder="e.g. C12345678" className="bg-muted h-12 rounded-xl border-border" />
                    {form.formState.errors.registration_number && <p className="text-xs text-destructive">{form.formState.errors.registration_number.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vat_number">VAT Number <span className="text-text-muted text-[10px]">(optional)</span></Label>
                    <Input {...form.register("vat_number")} placeholder="e.g. VAT-123456" className="bg-muted h-12 rounded-xl border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="establishment_date">Establishment Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted pointer-events-none" />
                    <Input
                      type="date"
                      {...form.register("establishment_date")}
                      className="pl-10 bg-muted h-12 rounded-xl border-border"
                    />
                  </div>
                  {form.formState.errors.establishment_date && <p className="text-xs text-destructive">{form.formState.errors.establishment_date.message}</p>}
                </div>
              </div>
            )}

            {/* ─── Step 2: Details ─── */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Organization Description</Label>
                  <Textarea
                    {...form.register("description")}
                    placeholder="Describe your organization's mission, AI focus, and achievements..."
                    className="bg-muted min-h-[140px] rounded-xl resize-none border-border"
                  />
                  <p className="text-[10px] text-text-muted uppercase tracking-widest text-right">Min 50 characters</p>
                  {form.formState.errors.description && <p className="text-xs text-destructive">{form.formState.errors.description.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="team_size">Team Size</Label>
                    <select {...form.register("team_size")} className="w-full bg-muted h-12 rounded-xl border border-border px-3 text-sm focus:outline-none focus:border-primary">
                      {teamSizes.map((size) => (
                        <option key={size} value={size} className="bg-background">{size} Members</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maturity_level">Maturity Level</Label>
                    <select {...form.register("maturity_level")} className="w-full bg-muted h-12 rounded-xl border border-border px-3 text-sm focus:outline-none focus:border-primary">
                      {maturityLevels.map((lvl) => (
                        <option key={lvl.value} value={lvl.value} className="bg-background">{lvl.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website_url">Website</Label>
                  <Input {...form.register("website_url")} placeholder="https://organization.com" className="bg-muted h-12 rounded-xl border-border" />
                </div>

                {/* Social Media */}
                <div>
                  <Label className="text-sm font-medium text-foreground mb-3 block">Social Media Links <span className="text-text-muted text-[10px]">(optional)</span></Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Input {...form.register("facebook")} placeholder="Facebook URL" className="bg-muted h-11 rounded-xl border-border" />
                    <Input {...form.register("linkedin")} placeholder="LinkedIn URL" className="bg-muted h-11 rounded-xl border-border" />
                    <Input {...form.register("x")} placeholder="X (Twitter) URL" className="bg-muted h-11 rounded-xl border-border" />
                    <Input {...form.register("instagram")} placeholder="Instagram URL" className="bg-muted h-11 rounded-xl border-border" />
                  </div>
                </div>

                {/* Project Links */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground block">Links to Realized Projects <span className="text-text-muted text-[10px]">(optional)</span></Label>
                  {projectLinks.map((link, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Link className="h-5 w-5 shrink-0 text-text-muted" />
                      <Input
                        value={link}
                        onChange={(e) => updateProjectLink(idx, e.target.value)}
                        placeholder="https://project-demo.com"
                        className="bg-muted h-11 rounded-xl border-border flex-1"
                      />
                      {projectLinks.length > 1 && (
                        <button type="button" onClick={() => removeProjectLink(idx)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addProjectLink}
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <Plus className="h-4 w-4" />
                    Add another project link
                  </button>
                </div>
              </div>
            )}

            {/* ─── Step 3: Ecosystem ─── */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-xs uppercase tracking-widest text-text-muted">AI Specialization</Label>
                  <div className="flex flex-wrap gap-2 max-h-72 overflow-y-auto p-1">
                    {aiSpecializations.map((spec) => (
                      <button
                        key={spec}
                        type="button"
                        onClick={() => toggleSpecialization(spec)}
                        className={cn(
                          "px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all",
                          form.watch("ai_specializations").includes(spec)
                            ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "bg-muted border-border text-text-muted hover:border-primary/50"
                        )}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                  {form.formState.errors.ai_specializations && <p className="text-xs text-destructive">{form.formState.errors.ai_specializations.message}</p>}
                </div>

                <div className="space-y-4">
                  <Label className="text-xs uppercase tracking-widest text-text-muted">Target Sectors</Label>
                  <div className="flex flex-wrap gap-2 max-h-72 overflow-y-auto p-1">
                    {sectors.map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => toggleSector(sector)}
                        className={cn(
                          "px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all",
                          form.watch("sectors").includes(sector)
                            ? "bg-accent border-accent text-accent-foreground shadow-lg shadow-accent/20"
                            : "bg-muted border-border text-text-muted hover:border-accent/50"
                        )}
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                  {form.formState.errors.sectors && <p className="text-xs text-destructive">{form.formState.errors.sectors.message}</p>}
                </div>
              </div>
            )}

            {/* ─── Step 4: Visibility ─── */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact_email">Ecosystem Contact Email</Label>
                  <Input {...form.register("contact_email")} placeholder="ecosystem@organization.com" className="bg-muted h-12 rounded-xl border-border" />
                  {form.formState.errors.contact_email && <p className="text-xs text-destructive">{form.formState.errors.contact_email.message}</p>}
                </div>
                <div className="flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20 transition-all hover:bg-primary/10">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      {...form.register("collaboration_ready")}
                      id="collab"
                      className="h-6 w-6 rounded-lg border-primary accent-primary cursor-pointer"
                    />
                  </div>
                  <Label htmlFor="collab" className="cursor-pointer space-y-1">
                    <span className="block font-bold text-primary text-base">Ready for Continental Collaboration</span>
                    <span className="block text-xs text-text-secondary">Enable &ldquo;Handshakes&rdquo; from other verified organizations in the SAKILI ecosystem.</span>
                  </Label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            className={cn("text-text-secondary hover:text-foreground h-12 px-6 rounded-xl", currentStep === 1 && "invisible")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={nextStep} className="bg-primary text-primary-foreground hover:opacity-90 font-bold px-10 h-12 rounded-xl shadow-lg shadow-primary/20">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button disabled={isSubmitting} type="submit" className="bg-primary hover:opacity-90 text-primary-foreground font-bold px-12 h-14 rounded-xl shadow-xl shadow-primary/20">
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="h-5 w-5 border-2 border-primary/20 border-t-primary rounded-full mr-2" />
              ) : null}
              Finalize Continental Registry
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

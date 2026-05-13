"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Info, Globe, Building2, Zap, Users } from "lucide-react";
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

export function OnboardingForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<OnboardingData>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "",
      slug: "",
      country: "",
      city: "",
      description: "",
      website_url: "",
      team_size: "1-10",
      maturity_level: "startup",
      capabilities: [],
      sectors: [],
      contact_email: "",
      collaboration_ready: true,
    },
  });

  const nextStep = async () => {
    const fields = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fields as any);
    if (isValid) setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const getFieldsForStep = (step: number) => {
    switch (step) {
      case 1: return ["name", "slug", "country", "city"];
      case 2: return ["description", "website_url", "team_size", "maturity_level"];
      case 3: return ["capabilities", "sectors"];
      case 4: return ["contact_email", "collaboration_ready"];
      default: return [];
    }
  };

  async function onSubmit(data: OnboardingData) {
    setIsSubmitting(true);
    console.log("Submitting institutional data:", data);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    router.push("/dashboard");
  }

  const toggleCapability = (cap: string) => {
    const current = form.getValues("capabilities");
    if (current.includes(cap)) {
      form.setValue("capabilities", current.filter(c => c !== cap));
    } else {
      form.setValue("capabilities", [...current, cap]);
    }
    form.trigger("capabilities");
  };

  const toggleSector = (sector: string) => {
    const current = form.getValues("sectors");
    if (current.includes(sector)) {
      form.setValue("sectors", current.filter(s => s !== sector));
    } else {
      form.setValue("sectors", [...current, sector]);
    }
    form.trigger("sectors");
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
                currentStep === step.id ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20" :
                currentStep > step.id ? "bg-state-success border-state-success text-white" :
                "bg-background border-border text-text-muted"
              )}
            >
              {currentStep > step.id ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
            </div>
            <span className={cn("text-[10px] font-bold uppercase tracking-widest", currentStep === step.id ? "text-primary" : "text-text-muted")}>
              {step.title}
            </span>
          </div>
        ))}
        {/* Progress Line */}
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
            className="glass-surface p-8 rounded-3xl border-white/10 shadow-2xl"
          >
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Organization Name</Label>
                  <Input {...form.register("name")} placeholder="e.g. SAKILI AI Labs" className="bg-white/5 h-12 rounded-xl border-white/10" />
                  {form.formState.errors.name && <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slug">Slug (URL identifier)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm font-mono">sakili.com/</span>
                    <Input {...form.register("slug")} placeholder="sakili-ai-labs" className="pl-24 bg-white/5 h-12 rounded-xl border-white/10 font-mono" />
                  </div>
                  {form.formState.errors.slug && <p className="text-xs text-destructive">{form.formState.errors.slug.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input {...form.register("country")} placeholder="Mauritius" className="bg-white/5 h-12 rounded-xl border-white/10" />
                    {form.formState.errors.country && <p className="text-xs text-destructive">{form.formState.errors.country.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input {...form.register("city")} placeholder="Port Louis" className="bg-white/5 h-12 rounded-xl border-white/10" />
                    {form.formState.errors.city && <p className="text-xs text-destructive">{form.formState.errors.city.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Ecosystem Description</Label>
                  <Textarea 
                    {...form.register("description")} 
                    placeholder="Describe your organization's mission, AI focus, and institutional standing..." 
                    className="bg-white/5 min-h-[160px] rounded-xl resize-none border-white/10"
                  />
                  <p className="text-[10px] text-text-muted uppercase tracking-widest text-right">Min 50 characters</p>
                  {form.formState.errors.description && <p className="text-xs text-destructive">{form.formState.errors.description.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="team_size">Team Size</Label>
                    <select {...form.register("team_size")} className="w-full bg-white/5 h-12 rounded-xl border border-white/10 px-3 text-sm focus:outline-none focus:border-primary">
                      {["1-10", "11-50", "51-200", "201-500", "500+"].map(size => (
                        <option key={size} value={size} className="bg-background">{size} Members</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maturity_level">Maturity Level</Label>
                    <select {...form.register("maturity_level")} className="w-full bg-white/5 h-12 rounded-xl border border-white/10 px-3 text-sm focus:outline-none focus:border-primary">
                      {["idea", "startup", "sme", "enterprise", "research_lab", "university", "government"].map(level => (
                        <option key={level} value={level} className="bg-background uppercase text-[10px]">{level}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website_url">Institutional Website</Label>
                  <Input {...form.register("website_url")} placeholder="https://organization.com" className="bg-white/5 h-12 rounded-xl border-white/10" />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <Label className="text-xs uppercase tracking-widest text-text-muted">AI Capabilities</Label>
                  <div className="flex flex-wrap gap-2">
                    {["NLP", "Computer Vision", "Machine Learning", "Data Science", "Ethical AI", "Robotics", "Edge AI"].map((cap) => (
                      <button
                        key={cap}
                        type="button"
                        onClick={() => toggleCapability(cap)}
                        className={cn(
                          "px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all",
                          form.watch("capabilities").includes(cap)
                            ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "bg-white/5 border-white/10 text-text-muted hover:border-primary/50"
                        )}
                      >
                        {cap}
                      </button>
                    ))}
                  </div>
                  {form.formState.errors.capabilities && <p className="text-xs text-destructive">{form.formState.errors.capabilities.message}</p>}
                </div>

                <div className="space-y-4">
                  <Label className="text-xs uppercase tracking-widest text-text-muted">Target Sectors</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Agriculture", "Infrastructure", "Health", "Finance", "Education", "Government", "Energy"].map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => toggleSector(sector)}
                        className={cn(
                          "px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all",
                          form.watch("sectors").includes(sector)
                            ? "bg-accent-primary border-accent-primary text-white shadow-lg shadow-accent-primary/20"
                            : "bg-white/5 border-white/10 text-text-muted hover:border-accent-primary/50"
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

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact_email">Ecosystem Contact Email</Label>
                  <Input {...form.register("contact_email")} placeholder="ecosystem@organization.com" className="bg-white/5 h-12 rounded-xl border-white/10" />
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
                    <span className="block text-xs text-text-secondary">Enable "Handshakes" from other verified organizations in the SAKILI ecosystem.</span>
                  </Label>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between pt-4">
          <Button
            type="button"
            variant="ghost"
            onClick={prevStep}
            className={cn("text-text-secondary hover:text-foreground h-12 px-6 rounded-xl", currentStep === 1 && "invisible")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Institutional Review
          </Button>

          {currentStep < steps.length ? (
            <Button type="button" onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-accent-hover font-bold px-10 h-12 rounded-xl shadow-lg shadow-primary/20">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button disabled={isSubmitting} type="submit" className="bg-state-success hover:bg-state-success/90 text-white font-bold px-12 h-14 rounded-xl shadow-xl shadow-state-success/20">
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="h-5 w-5 border-2 border-white/20 border-t-white rounded-full mr-2" />
              ) : null}
              Finalize Continental Registry
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
